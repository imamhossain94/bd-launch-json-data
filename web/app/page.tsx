import { getShips } from "@/lib/ships";
import { getRoutes } from "@/lib/ship-utils";
import LaunchExplorer from "@/components/LaunchExplorer";

export default function Home() {
  const ships = getShips();
  const routes = getRoutes(ships);
  const operators = new Set(ships.map((s) => s.operator)).size;

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-gradient-to-br from-cyan-800 via-cyan-700 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-200">Dhaka River Launches</p>
          <h1 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Find your next launch, sorted, searchable, and up to date.
          </h1>
          <p className="mt-3 max-w-2xl text-cyan-100">
            Schedules, fares, and amenities for passenger launches sailing out of Dhaka to destinations
            across Bangladesh.
          </p>
          <dl className="mt-8 flex flex-wrap gap-6">
            <div>
              <dt className="text-xs uppercase tracking-wide text-cyan-200">Launches</dt>
              <dd className="text-2xl font-semibold">{ships.length}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-cyan-200">Routes</dt>
              <dd className="text-2xl font-semibold">{routes.length}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-cyan-200">Operators</dt>
              <dd className="text-2xl font-semibold">{operators}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section
          aria-labelledby="disclaimer-heading"
          className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5"
        >
          <div className="flex gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
            </svg>
            <div>
              <h2 id="disclaimer-heading" className="text-sm font-semibold text-amber-900">
                Please read before you travel
              </h2>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-amber-900/90">
                <li>
                  <strong className="font-semibold">Fares may not be correct.</strong> Prices move with the
                  season, fuel costs and BIWTA revisions. Where an operator has no fixed price, the fare is
                  shown as a range (e.g. ৳150–350) rather than a single figure.
                </li>
                <li>
                  <strong className="font-semibold">Schedules can be changed by the operator.</strong>{" "}
                  Departures shift with weather, river conditions and port authority decisions, and vessels
                  are sometimes rotated to other routes or run special holiday timings.
                </li>
                <li>
                  This is a community-maintained dataset, not an official timetable or a booking service.
                  Always confirm the day&apos;s departure and cabin availability at the Sadarghat counter or
                  with the operator before travelling.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <LaunchExplorer ships={ships} routes={routes} />
      </div>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400">
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
