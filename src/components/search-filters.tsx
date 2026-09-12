interface SearchFiltersProps {
  q: string;
  type: string;
  location: string;
  focus: string;
  types: string[];
  locations: string[];
  focusAreas: string[];
}

export function SearchFilters({
  q,
  type,
  location,
  focus,
  types,
  locations,
  focusAreas,
}: SearchFiltersProps) {
  return (
    <form className="grid gap-3 rounded-xl border bg-white p-4 shadow-sm md:grid-cols-4" action="/">
      <input
        type="text"
        name="q"
        defaultValue={q}
        placeholder="Search companies, resources, communities..."
        className="rounded-md border px-3 py-2 text-sm"
      />
      <select name="type" defaultValue={type} className="rounded-md border px-3 py-2 text-sm">
        <option value="">All types</option>
        {types.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        name="location"
        defaultValue={location}
        className="rounded-md border px-3 py-2 text-sm"
      >
        <option value="">All locations</option>
        {locations.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="flex gap-2">
        <select
          name="focus"
          defaultValue={focus}
          className="w-full rounded-md border px-3 py-2 text-sm"
        >
          <option value="">All focus areas</option>
          {focusAreas.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button type="submit" className="rounded-md bg-slate-900 px-4 py-2 text-sm text-white">
          Apply
        </button>
      </div>
    </form>
  );
}
