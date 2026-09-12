import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryLabel, getEntityByCategoryAndId } from "@/lib/data";
import { Category } from "@/lib/types";

interface DetailPageProps {
  params: Promise<{ category: string; id: string }>;
}

const categories: Category[] = [
  "companies",
  "universities",
  "resources",
  "communities",
  "professionals",
];

export default async function DetailPage({ params }: DetailPageProps) {
  const resolved = await params;

  if (!categories.includes(resolved.category as Category)) {
    notFound();
  }

  const category = resolved.category as Category;
  const entity = getEntityByCategoryAndId(category, resolved.id);

  if (!entity) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-10">
      <Link href="/" className="mb-6 inline-block text-sm text-blue-700">
        ← Back to ecosystem
      </Link>
      <p className="mb-2 text-sm text-slate-500">{getCategoryLabel(entity.category)}</p>
      <h1 className="mb-3 text-3xl font-bold">{entity.name}</h1>
      <p className="mb-4 text-slate-700">{entity.description}</p>
      <p className="mb-2 text-sm text-slate-500">Type: {entity.type}</p>
      <p className="mb-4 text-sm text-slate-500">Location: {entity.location}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {entity.focusAreas.map((focus) => (
          <span key={focus} className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700">
            {focus}
          </span>
        ))}
      </div>
      <a href={entity.website} target="_blank" rel="noreferrer" className="text-blue-700">
        Visit website
      </a>
    </main>
  );
}
