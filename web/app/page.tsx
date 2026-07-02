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
        dataset · Fares are indicative and may change.
      </footer>
    </main>
  );
}
