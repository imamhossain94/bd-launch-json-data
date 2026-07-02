"use client";

import { useMemo, useState } from "react";
import { Route, Ship, lowestFare } from "@/lib/ship-utils";
import ShipCard from "@/components/ShipCard";

type SortOption = "name" | "priceAsc" | "priceDesc" | "departure";

const SORT_LABELS: Record<SortOption, string> = {
  name: "Name (A–Z)",
  priceAsc: "Price: low to high",
  priceDesc: "Price: high to low",
  departure: "Earliest departure",
};

function parseTime(time: string): number {
  const match = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return Number.MAX_SAFE_INTEGER;
  let hours = parseInt(match[1], 10) % 12;
  const minutes = parseInt(match[2], 10);
  if (match[3].toUpperCase() === "PM") hours += 12;
  return hours * 60 + minutes;
}

export default function LaunchExplorer({ ships, routes }: { ships: Ship[]; routes: Route[] }) {
  const [query, setQuery] = useState("");
  const [routeId, setRouteId] = useState("all");
  const [sort, setSort] = useState<SortOption>("name");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let result = ships.filter((ship) => {
      const matchesQuery =
        !q ||
        ship.name.toLowerCase().includes(q) ||
        ship.operator.toLowerCase().includes(q) ||
        ship.route.label.toLowerCase().includes(q);
      const matchesRoute = routeId === "all" || ship.route.id === routeId;
      return matchesQuery && matchesRoute;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "priceAsc":
        case "priceDesc": {
          const fa = lowestFare(a)?.amount ?? Number.MAX_SAFE_INTEGER;
          const fb = lowestFare(b)?.amount ?? Number.MAX_SAFE_INTEGER;
          return sort === "priceAsc" ? fa - fb : fb - fa;
        }
        case "departure":
          return parseTime(a.schedule.departure.fromDhaka) - parseTime(b.schedule.departure.fromDhaka);
        default:
          return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" });
      }
    });

    return result;
  }, [ships, query, routeId, sort]);

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-4 mb-6 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by launch, operator, or route…"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none transition focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-100"
            />
          </div>
          <select
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-100"
          >
            <option value="all">All routes</option>
            {routes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.label}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-100"
          >
            {Object.entries(SORT_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-sm text-slate-500">
        {filtered.length} launch{filtered.length === 1 ? "" : "es"} found
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center text-slate-400">
          No launches match your search. Try a different keyword or route.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((ship) => (
            <ShipCard key={ship.id} ship={ship} />
          ))}
        </div>
      )}
    </div>
  );
}
