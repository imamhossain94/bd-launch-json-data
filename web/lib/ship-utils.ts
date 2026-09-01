export interface Route {
  id: string;
  label: string;
  from: string;
  to: string;
}

/** One direction of travel. */
export interface Leg {
  departure: string;
  duration: string;
}

/**
 * Keyed by direction, e.g. `dhaka_to_chandpur` and `chandpur_to_dhaka`.
 * The outbound leg is always the `dhaka_to_*` key.
 */
export type Schedule = Record<string, Leg>;

/** A fare with no fixed price, quoted as a range. */
export interface FareRange {
  min: number;
  max: number;
}

/** A fixed price, a range when the operator has no fixed price, or null when not offered. */
export type Fare = number | FareRange | null;

export interface Fares {
  currency: string;
  deck: Fare;
  economyChair: Fare;
  businessClassAC: Fare;
  singleCabinNonAC: Fare;
  singleCabinAC: Fare;
  doubleCabinNonAC: Fare;
  doubleCabinAC: Fare;
  familyCabinAC: Fare;
  vipCabin: Fare;
}

export interface Specifications {
  floors: number;
  speedKnots: string;
  engines: number;
}

export interface Ship {
  id: string;
  name: string;
  operator: string;
  route: Route;
  description: string;
  schedule: Schedule;
  fares: Fares;
  amenities: string[];
  specifications: Specifications;
  contact: string | null;
  status: string;
  image: string | null;
}

const FARE_LABELS: Record<keyof Omit<Fares, "currency">, string> = {
  deck: "Deck",
  economyChair: "Economy Chair",
  businessClassAC: "Business Class (AC)",
  singleCabinNonAC: "Single Cabin (Non-AC)",
  singleCabinAC: "Single Cabin (AC)",
  doubleCabinNonAC: "Double Cabin (Non-AC)",
  doubleCabinAC: "Double Cabin (AC)",
  familyCabinAC: "Family Cabin (AC)",
  vipCabin: "VIP Cabin",
};

/** Presentation for a `status` value: badge copy, colours, and a plain-English note. */
export interface StatusMeta {
  label: string;
  /** Chip sitting on top of a photo. */
  overlay: string;
  /** Chip sitting on a light surface. */
  chip: string;
  note: string;
}

const STATUS_META: Record<string, StatusMeta> = {
  active: {
    label: "Active",
    overlay: "bg-emerald-500/90",
    chip: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
    note: "Running on this route as of the last check.",
  },
  suspended: {
    label: "Suspended",
    overlay: "bg-red-500/90",
    chip: "bg-red-50 text-red-700 ring-1 ring-red-600/20",
    note: "Service is paused — confirm with the operator before planning around it.",
  },
  discontinued: {
    label: "Discontinued",
    overlay: "bg-slate-500/90",
    chip: "bg-slate-100 text-slate-700 ring-1 ring-slate-500/20",
    note: "This service has ended; the times and fares below are historical.",
  },
  unverified: {
    label: "Unverified",
    overlay: "bg-amber-500/90",
    chip: "bg-amber-50 text-amber-800 ring-1 ring-amber-600/20",
    note: "No independent source confirms these details — treat every figure as provisional.",
  },
};

export function statusMeta(status: string): StatusMeta {
  return STATUS_META[status] ?? STATUS_META.active;
}

/** "09:15 PM" -> minutes since midnight, or null when unparseable. */
export function parseClock(time: string): number | null {
  const match = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return null;
  const hours = (parseInt(match[1], 10) % 12) + (match[3].toUpperCase() === "PM" ? 12 : 0);
  return hours * 60 + parseInt(match[2], 10);
}

/** "8h 30m" -> 510, "13h" -> 780, or null when unparseable. */
export function parseDuration(duration: string): number | null {
  const match = duration.trim().match(/^(?:(\d+)\s*h)?\s*(?:(\d+)\s*m)?$/i);
  if (!match || (!match[1] && !match[2])) return null;
  return (match[1] ? parseInt(match[1], 10) * 60 : 0) + (match[2] ? parseInt(match[2], 10) : 0);
}

/** Minutes since midnight -> "03:00 AM". Wraps past midnight. */
export function formatClock(minutes: number): string {
  const wrapped = ((minutes % 1440) + 1440) % 1440;
  const hours24 = Math.floor(wrapped / 60);
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const suffix = hours24 < 12 ? "AM" : "PM";
  return `${String(hours12).padStart(2, "0")}:${String(wrapped % 60).padStart(2, "0")} ${suffix}`;
}

/**
 * Scheduled departure plus the quoted running time, e.g. 11:30 PM + 3h 30m
 * -> `{ time: "03:00 AM", nextDay: true }`. An estimate, not a published arrival.
 */
export function estimatedArrival(leg: Leg): { time: string; nextDay: boolean } | null {
  const departure = parseClock(leg.departure);
  const minutes = parseDuration(leg.duration);
  if (departure === null || minutes === null) return null;
  const arrival = departure + minutes;
  return { time: formatClock(arrival), nextDay: arrival >= 1440 };
}

/** Every fare class in display order, including the ones this launch does not offer. */
export function fareEntries(ship: Ship): { key: string; label: string; fare: Fare }[] {
  return (Object.keys(FARE_LABELS) as (keyof typeof FARE_LABELS)[]).map((key) => ({
    key,
    label: FARE_LABELS[key],
    fare: ship.fares[key],
  }));
}

export function getRoutes(ships: Ship[]): Route[] {
  const seen = new Map<string, Route>();
  for (const ship of ships) {
    if (!seen.has(ship.route.id)) seen.set(ship.route.id, ship.route);
  }
  return [...seen.values()].sort((a, b) => a.label.localeCompare(b.label));
}

export function isFareRange(fare: Fare): fare is FareRange {
  return typeof fare === "object" && fare !== null;
}

/** Cheapest end of a fare, for sorting and "from" pricing. */
export function fareFloor(fare: Fare): number | null {
  if (fare === null) return null;
  return isFareRange(fare) ? fare.min : fare;
}

/** True when at least one class has no fixed price. */
export function hasRangedFare(ship: Ship): boolean {
  return Object.entries(ship.fares).some(([key, value]) => key !== "currency" && isFareRange(value as Fare));
}

/** The Dhaka → destination leg. */
export function outboundLeg(ship: Ship): Leg | null {
  const key = Object.keys(ship.schedule).find((k) => k.startsWith("dhaka_to_"));
  return key ? ship.schedule[key] : null;
}

/** The destination → Dhaka leg. */
export function inboundLeg(ship: Ship): Leg | null {
  const key = Object.keys(ship.schedule).find((k) => k.endsWith("_to_dhaka"));
  return key ? ship.schedule[key] : null;
}

export function lowestFare(ship: Ship): { key: string; fare: Fare; amount: number } | null {
  let best: { key: string; fare: Fare; amount: number } | null = null;
  for (const [key, value] of Object.entries(ship.fares)) {
    if (key === "currency") continue;
    const amount = fareFloor(value as Fare);
    if (amount === null) continue;
    if (!best || amount < best.amount) best = { key, fare: value as Fare, amount };
  }
  return best;
}

export function fareLabel(key: string): string {
  return FARE_LABELS[key as keyof typeof FARE_LABELS] ?? key;
}

export function formatBDT(amount: number): string {
  return `৳${amount.toLocaleString("en-US")}`;
}

/** Renders a fixed price as `৳200` and a range as `৳150–350`. */
export function formatFare(fare: Fare): string {
  if (fare === null) return "—";
  if (isFareRange(fare)) return `${formatBDT(fare.min)}–${fare.max.toLocaleString("en-US")}`;
  return formatBDT(fare);
}

export function telHref(contact: string | null): string | undefined {
  if (!contact) return undefined;
  // A contact field may hold several numbers; dial the first.
  const first = contact.split(",")[0];
  const digits = first.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : undefined;
}
