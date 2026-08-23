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
