import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { Ship } from "@/lib/ship-utils";

export function getShips(): Ship[] {
  const filePath = path.join(process.cwd(), "..", "ships.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Ship[];
}
