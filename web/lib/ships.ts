import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { Ship } from "@/lib/ship-utils";

export function getShips(): Ship[] {
  const filePath = path.join(process.cwd(), "..", "ships.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Ship[];
}

export function getShipById(id: string): Ship | undefined {
  return getShips().find((ship) => ship.id === id);
}

/** Other launches sharing a route, for the "more on this route" list. */
export function getRouteSiblings(ship: Ship, limit = 6): Ship[] {
  return getShips()
    .filter((other) => other.route.id === ship.route.id && other.id !== ship.id)
    .slice(0, limit);
}
