export interface Route {
  id: string;
  label: string;
  from: string;
  to: string;
}

export interface Schedule {
  departure: {
    fromDhaka: string;
    fromDestination: string;
  };
  duration: {
    toDestination: string;
    toDhaka: string;
  };
}

export interface Fares {
  currency: string;
  deck: number | null;
  economyChair: number | null;
  businessClassAC: number | null;
  singleCabinNonAC: number | null;
  singleCabinAC: number | null;
  doubleCabinNonAC: number | null;
  doubleCabinAC: number | null;
  familyCabinAC: number | null;
  vipCabin: number | null;
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

export function lowestFare(ship: Ship): { key: string; amount: number } | null {
  const entries = Object.entries(ship.fares).filter(
    ([key, value]) => key !== "currency" && typeof value === "number"
  ) as [string, number][];
  if (entries.length === 0) return null;
  const [key, amount] = entries.reduce((min, cur) => (cur[1] < min[1] ? cur : min));
  return { key, amount };
}

export function fareLabel(key: string): string {
  return FARE_LABELS[key as keyof typeof FARE_LABELS] ?? key;
}

export function formatBDT(amount: number): string {
  return `৳${amount.toLocaleString("en-US")}`;
}

export function telHref(contact: string | null): string | undefined {
  if (!contact) return undefined;
  const digits = contact.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : undefined;
}
