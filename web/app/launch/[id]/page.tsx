import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AmenityIcon from "@/components/AmenityIcon";
import { getRouteSiblings, getShipById, getShips } from "@/lib/ships";
import {
  Leg,
  Ship,
  estimatedArrival,
  fareEntries,
  fareLabel,
  formatFare,
  hasRangedFare,
  inboundLeg,
  isFareRange,
  lowestFare,
  outboundLeg,
  statusMeta,
  telHref,
} from "@/lib/ship-utils";

export function generateStaticParams() {
  return getShips().map((ship) => ({ id: ship.id }));
}

/** Trims to a whole word so meta descriptions don't end mid-word. */
function summarise(text: string, max = 165): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const ship = getShipById(id);
  if (!ship) return { title: "Launch not found — BD Launch Finder" };

  return {
    title: `${ship.name} — ${ship.route.label} schedule & fares`,
    description: summarise(ship.description),
    openGraph: {
      title: `${ship.name} — ${ship.route.label}`,
      description: summarise(ship.description),
      images: ship.image ? [{ url: encodeURI(ship.image) }] : undefined,
    },
  };
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5c0-1 .8-1.5 1.5-1.5H8l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3.5c0 .8-.7 1.5-1.5 1.5C9.5 20.5 3.5 14.5 3 5.5Z"
      />
    </svg>
  );
}

function LegCard({ title, leg }: { title: string; leg: Leg | null }) {
  const arrival = leg ? estimatedArrival(leg) : null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="flex items-center gap-2 text-sm font-medium text-slate-500">
        <ArrowIcon className="h-4 w-4 text-cyan-600" />
        {title}
      </p>

      {leg ? (
        <>
          <p className="mt-3 text-3xl font-semibold tracking-tight tabular-nums text-slate-900">
            {leg.departure}
          </p>
          <p className="text-xs uppercase tracking-wide text-slate-400">Scheduled departure</p>

          <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Journey</dt>
              <dd className="font-medium text-slate-700">{leg.duration}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Arrives (est.)</dt>
              <dd className="font-medium tabular-nums text-slate-700">
                {arrival ? (
                  <>
                    {arrival.time}
                    {arrival.nextDay && (
                      <span className="ml-1 rounded bg-slate-100 px-1 py-0.5 text-[10px] font-medium text-slate-500">
                        +1 day
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-slate-400">—</span>
                )}
              </dd>
            </div>
          </dl>
        </>
      ) : (
        <p className="mt-3 text-sm text-slate-400">No departure on record for this direction.</p>
      )}
    </div>
  );
}

function SiblingRow({ ship }: { ship: Ship }) {
  const outbound = outboundLeg(ship);
  const fare = lowestFare(ship);

  return (
    <Link
      href={`/launch/${ship.id}`}
      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 transition-colors hover:border-cyan-300 hover:bg-cyan-50/40"
    >
      {ship.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={encodeURI(ship.image)}
          alt=""
          loading="lazy"
          className="h-12 w-16 shrink-0 rounded-lg object-cover"
        />
      ) : (
        <div className="h-12 w-16 shrink-0 rounded-lg bg-gradient-to-br from-cyan-700 to-slate-800" />
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-900 group-hover:text-cyan-800">
          {ship.name}
        </p>
        <p className="truncate text-xs text-slate-500">
          {outbound ? `Leaves Dhaka ${outbound.departure}` : "Departure not listed"}
          {fare ? ` · from ${formatFare(fare.fare)}` : ""}
        </p>
      </div>
      <ArrowIcon className="h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-cyan-600" />
    </Link>
  );
}

export default async function LaunchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ship = getShipById(id);
  if (!ship) notFound();

  const status = statusMeta(ship.status);
  const outbound = outboundLeg(ship);
  const inbound = inboundLeg(ship);
  const fare = lowestFare(ship);
  const phone = telHref(ship.contact);
  const siblings = getRouteSiblings(ship);
  const fares = fareEntries(ship);
  const offered = fares.filter((entry) => entry.fare !== null);
  // Tagging every row "range" is noise when they all are — the footnote covers that case.
  const mixedPricing =
    offered.some((entry) => isFareRange(entry.fare)) &&
    offered.some((entry) => !isFareRange(entry.fare));

  const stats = [
    {
      label: "Fares from",
      value: fare ? formatFare(fare.fare) : "—",
      hint: fare ? fareLabel(fare.key) : "Not on record",
    },
    {
      label: "Leaves Dhaka",
      value: outbound?.departure ?? "—",
      hint: outbound ? "Sadarghat terminal" : "Not listed",
    },
    {
      label: "Journey",
      value: outbound?.duration ?? inbound?.duration ?? "—",
      hint: "One way",
    },
    {
      label: "Decks",
      value: String(ship.specifications.floors),
      hint: `${ship.specifications.engines} engines · ${ship.specifications.speedKnots} knots`,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            All launches
          </Link>
          {phone && (
            <a
              href={phone}
              className="inline-flex items-center gap-1.5 rounded-full bg-cyan-700 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-cyan-800"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              Call operator
            </a>
          )}
        </div>
      </nav>

      <header className="relative isolate overflow-hidden bg-slate-900">
        {ship.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={encodeURI(ship.image)}
            alt={ship.name}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60" />

        <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-white ${status.overlay}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {status.label}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-cyan-100 ring-1 ring-white/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
                className="h-3.5 w-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21Z"
                />
                <circle cx="12" cy="9.5" r="2.2" />
              </svg>
              {ship.route.label}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {ship.name}
          </h1>
          <p className="mt-2 text-sm text-cyan-100 sm:text-base">Operated by {ship.operator}</p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-900/70 p-4 backdrop-blur-sm">
                <dt className="text-[11px] uppercase tracking-wide text-cyan-200">{stat.label}</dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums text-white">{stat.value}</dd>
                <p className="text-[11px] text-slate-300">{stat.hint}</p>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section aria-labelledby="schedule-heading">
              <h2 id="schedule-heading" className="mb-3 text-lg font-semibold text-slate-900">
                Schedule
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <LegCard title={`Dhaka → ${ship.route.to}`} leg={outbound} />
                <LegCard title={`${ship.route.to} → Dhaka`} leg={inbound} />
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Arrival times are estimated from the scheduled departure plus the quoted running time — they
                are not published arrivals.
              </p>
            </section>

            <section
              aria-labelledby="fares-heading"
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 id="fares-heading" className="text-lg font-semibold text-slate-900">
                  Fares
                </h2>
                <p className="text-xs text-slate-400">
                  {offered.length} of {fares.length} classes offered · {ship.fares.currency}
                </p>
              </div>

              <table className="mt-4 w-full text-sm">
                <caption className="sr-only">Ticket price by class for {ship.name}</caption>
                <tbody className="divide-y divide-slate-100">
                  {fares.map((entry) => {
                    const unavailable = entry.fare === null;
                    const cheapest = fare?.key === entry.key;
                    return (
                      <tr key={entry.key} className={cheapest ? "bg-cyan-50/60" : undefined}>
                        <th scope="row" className="py-2.5 pl-2 text-left font-medium text-slate-600">
                          {entry.label}
                          {cheapest && (
                            <span className="ml-2 rounded-full bg-cyan-600 px-1.5 py-0.5 text-[10px] font-medium text-white">
                              Lowest
                            </span>
                          )}
                        </th>
                        <td
                          className={`py-2.5 pr-2 text-right tabular-nums ${
                            unavailable ? "text-slate-300" : "font-semibold text-slate-900"
                          }`}
                        >
                          {unavailable ? "Not offered" : formatFare(entry.fare)}
                          {mixedPricing && isFareRange(entry.fare) && (
                            <span className="ml-1.5 text-[10px] font-normal uppercase tracking-wide text-amber-600">
                              range
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                {hasRangedFare(ship)
                  ? "Classes marked “range” have no fixed price — the operator quotes within that band depending on season and demand."
                  : "Prices move with season, fuel costs and BIWTA revisions. Confirm at the counter."}
              </p>
            </section>

            <section
              aria-labelledby="about-heading"
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h2 id="about-heading" className="text-lg font-semibold text-slate-900">
                About this launch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{ship.description}</p>
            </section>

            <section
              aria-labelledby="amenities-heading"
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h2 id="amenities-heading" className="text-lg font-semibold text-slate-900">
                On board
              </h2>
              {ship.amenities.length > 0 ? (
                <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {ship.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-700"
                    >
                      <AmenityIcon name={amenity} className="h-5 w-5 shrink-0 text-cyan-700" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-400">No amenities recorded for this launch.</p>
              )}
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            <section
              aria-labelledby="facts-heading"
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h2 id="facts-heading" className="text-lg font-semibold text-slate-900">
                At a glance
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Operator</dt>
                  <dd className="text-right font-medium text-slate-900">{ship.operator}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Route</dt>
                  <dd className="text-right font-medium text-slate-900">{ship.route.label}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Status</dt>
                  <dd>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${status.chip}`}>
                      {status.label}
                    </span>
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Decks</dt>
                  <dd className="text-right font-medium text-slate-900">
                    {ship.specifications.floors}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Engines</dt>
                  <dd className="text-right font-medium text-slate-900">
                    {ship.specifications.engines}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Service speed</dt>
                  <dd className="text-right font-medium text-slate-900">
                    {ship.specifications.speedKnots} knots
                  </dd>
                </div>
              </dl>
              <p className="mt-4 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-500">
                {status.note}
              </p>
            </section>

            <section
              aria-labelledby="booking-heading"
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h2 id="booking-heading" className="text-lg font-semibold text-slate-900">
                Booking
              </h2>
              {ship.contact ? (
                <>
                  <p className="mt-2 text-sm text-slate-600">
                    Cabins are booked directly with the operator.
                  </p>
                  <p className="mt-3 font-mono text-base text-slate-900">{ship.contact}</p>
                  <a
                    href={phone}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-800"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call {ship.contact.split(",")[0].trim()}
                  </a>
                </>
              ) : (
                <p className="mt-2 text-sm text-slate-500">
                  No booking number is on record for this launch — buy tickets at the Sadarghat counter.
                </p>
              )}
            </section>

            <section
              aria-labelledby="caution-heading"
              className="rounded-2xl border border-amber-200 bg-amber-50 p-5"
            >
              <h2
                id="caution-heading"
                className="flex items-center gap-2 text-sm font-semibold text-amber-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-amber-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
                  />
                </svg>
                Before you travel
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-amber-900/90">
                Fares and departures are indicative and change without notice — operators rotate vessels
                between routes and run special holiday timings. This is a community dataset, not an official
                timetable or a booking service. Confirm the day&apos;s departure and cabin availability at
                the ghat counter.
              </p>
            </section>
          </aside>
        </div>

        {siblings.length > 0 && (
          <section aria-labelledby="siblings-heading" className="mt-10">
            <h2 id="siblings-heading" className="mb-3 text-lg font-semibold text-slate-900">
              More launches on {ship.route.label}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {siblings.map((sibling) => (
                <SiblingRow key={sibling.id} ship={sibling} />
              ))}
            </div>
          </section>
        )}
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
        Data from the{" "}
        <a
          href="https://github.com/imamhossain94/bd-launch-json-data"
          className="font-medium text-cyan-700 hover:underline"
        >
          bd-launch-json-data
        </a>{" "}
        dataset · Fares and schedules are indicative and may change without notice.
      </footer>
    </main>
  );
}
