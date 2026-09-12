import { EntityCard } from "@/components/entity-card";
import { SearchFilters } from "@/components/search-filters";
import { filterEntities, getAllEntities, getStats } from "@/lib/data";

interface HomePageProps {
  searchParams: Promise<{
    q?: string;
    type?: string;
    location?: string;
    focus?: string;
  }>;
}

const uniqueValues = (values: string[]) => [...new Set(values)].sort((a, b) => a.localeCompare(b));

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const q = params.q ?? "";
  const type = params.type ?? "";
  const location = params.location ?? "";
  const focus = params.focus ?? "";

  const allEntities = getAllEntities();
  const filtered = filterEntities({ q, type, location, focus });
  const stats = getStats();

  const types = uniqueValues(allEntities.map((entity) => entity.type));
  const locations = uniqueValues(allEntities.map((entity) => entity.location));
  const focusAreas = uniqueValues(allEntities.flatMap((entity) => entity.focusAreas));

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 md:px-6">
      <section className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Awesome Cybersecurity Bangladesh</h1>
        <p className="text-slate-600">
          Explore companies, universities, resources, communities, and professionals in one searchable ecosystem.
        </p>
      </section>

      <section className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <StatCard label="Total" value={stats.total} />
        <StatCard label="Companies" value={stats.byCategory.companies} />
        <StatCard label="Universities" value={stats.byCategory.universities} />
        <StatCard label="Resources" value={stats.byCategory.resources} />
        <StatCard label="Communities" value={stats.byCategory.communities} />
        <StatCard label="Professionals" value={stats.byCategory.professionals} />
      </section>

      <section className="mb-6">
        <SearchFilters
          q={q}
          type={type}
          location={location}
          focus={focus}
          types={types}
          locations={locations}
          focusAreas={focusAreas}
        />
      </section>

      <section>
        <p className="mb-3 text-sm text-slate-600">Showing {filtered.length} result(s)</p>
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((entity) => (
            <EntityCard key={`${entity.category}-${entity.id}`} entity={entity} />
          ))}
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
