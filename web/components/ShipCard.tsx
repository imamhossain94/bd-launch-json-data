"use client";

import { useState } from "react";
import {
  Ship,
  fareLabel,
  formatFare,
  hasRangedFare,
  inboundLeg,
  lowestFare,
  outboundLeg,
  telHref,
} from "@/lib/ship-utils";

const MAX_VISIBLE_AMENITIES = 4;

export default function ShipCard({ ship }: { ship: Ship }) {
  const [expanded, setExpanded] = useState(false);
  const fare = lowestFare(ship);
  const phone = telHref(ship.contact);
  const outbound = outboundLeg(ship);
  const inbound = inboundLeg(ship);
  const visibleAmenities = ship.amenities.slice(0, MAX_VISIBLE_AMENITIES);
  const extraAmenities = ship.amenities.length - visibleAmenities.length;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-cyan-700 to-slate-800">
        {ship.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={encodeURI(ship.image)}
            alt={ship.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              className="h-14 w-14 text-white/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 17h18M4 17l1.6-6.4A2 2 0 0 1 7.5 9H9V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h1.5a2 2 0 0 1 1.9 1.6L20 17M12 4v5M9 9h6M6 21c1.5 0 1.5-1.5 3-1.5S10.5 21 12 21s1.5-1.5 3-1.5S16.5 21 18 21"
              />
            </svg>
          </div>
        )}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-medium text-white shadow">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Active
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{ship.name}</h3>
          <p className="text-sm text-slate-500">{ship.operator}</p>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-medium text-cyan-800">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{ship.route.label}</span>
        </div>

        {ship.description && (
          <div>
            <p className={`text-sm leading-relaxed text-slate-600 ${expanded ? "" : "line-clamp-3"}`}>
              {ship.description}
            </p>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-1 text-xs font-medium text-cyan-700 hover:text-cyan-900 hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </div>
        )}

        <dl className="grid grid-cols-2 gap-2 rounded-lg bg-slate-50 p-2.5 text-xs">
          <div>
            <dt className="text-slate-400">Dhaka → {ship.route.to}</dt>
            <dd className="font-medium text-slate-700">
              {outbound ? (
                <>
                  {outbound.departure}
                  <span className="text-slate-400"> · {outbound.duration}</span>
                </>
              ) : (
                <span className="text-slate-400">Not listed</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="text-slate-400">{ship.route.to} → Dhaka</dt>
            <dd className="font-medium text-slate-700">
              {inbound ? (
                <>
                  {inbound.departure}
                  <span className="text-slate-400"> · {inbound.duration}</span>
                </>
              ) : (
                <span className="text-slate-400">Not listed</span>
              )}
            </dd>
          </div>
        </dl>

        {ship.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {visibleAmenities.map((a) => (
              <span
                key={a}
                className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-600"
              >
                {a}
              </span>
            ))}
            {extraAmenities > 0 && (
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-400">
                +{extraAmenities} more
              </span>
            )}
          </div>
        )}

        <div className="mt-auto border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between">
            <div>
              {fare ? (
                <>
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">
                    From · {fareLabel(fare.key)}
                  </p>
                  <p className="text-lg font-semibold text-slate-900">{formatFare(fare.fare)}</p>
                </>
              ) : (
                <p className="text-sm text-slate-400">Fares unavailable</p>
              )}
            </div>
            {phone ? (
              <a
                href={phone}
                className="inline-flex items-center gap-1.5 rounded-full bg-cyan-700 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-cyan-800"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-3.5 w-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5c0-1 .8-1.5 1.5-1.5H8l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3.5c0 .8-.7 1.5-1.5 1.5C9.5 20.5 3.5 14.5 3 5.5Z" />
                </svg>
                Call
              </a>
            ) : (
              <span className="rounded-full bg-slate-100 px-3.5 py-2 text-xs text-slate-400">No contact</span>
            )}
          </div>

          <p className="mt-2 text-[11px] leading-snug text-slate-400">
            {hasRangedFare(ship)
              ? "Some classes have no fixed price. Fares and times are indicative — confirm with the operator."
              : "Fares and times are indicative — confirm with the operator before travelling."}
          </p>
        </div>
      </div>
    </article>
  );
}
