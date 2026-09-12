import Link from "next/link";
import { EcosystemEntity } from "@/lib/types";
import { getCategoryLabel } from "@/lib/data";

interface EntityCardProps {
  entity: EcosystemEntity;
}

export function EntityCard({ entity }: EntityCardProps) {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{entity.name}</h2>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">{entity.type}</span>
      </div>
      <p className="mb-3 text-sm text-slate-700">{entity.description}</p>
      <p className="mb-2 text-xs text-slate-500">
        {getCategoryLabel(entity.category)} · {entity.location}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {entity.focusAreas.map((focus) => (
          <span key={focus} className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700">
            {focus}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 text-sm">
        <Link href={`/${entity.category}/${entity.id}`} className="font-medium text-blue-700">
          View details
        </Link>
        <a href={entity.website} target="_blank" rel="noreferrer" className="text-slate-600">
          Visit website
        </a>
      </div>
    </article>
  );
}
