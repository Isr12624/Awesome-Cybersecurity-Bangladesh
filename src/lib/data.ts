import fs from "node:fs";
import path from "node:path";
import {
  Category,
  Community,
  Company,
  EcosystemEntity,
  Professional,
  Resource,
  University,
} from "@/lib/types";

const dataDir = path.join(process.cwd(), "data");

const categoryLabels: Record<Category, string> = {
  companies: "Company",
  universities: "University & Training",
  resources: "Resource",
  communities: "Community & Event",
  professionals: "Professional",
};

const readJson = <T>(fileName: string): T => {
  const filePath = path.join(dataDir, fileName);
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
};

const toEntity = <T extends { id: string; description: string; type: string; website: string; location: string; focusAreas: string[] }>(
  category: Category,
  items: T[],
  getName: (item: T) => string,
): EcosystemEntity[] => {
  return items.map((item) => ({
    id: item.id,
    name: getName(item),
    description: item.description,
    type: item.type,
    website: item.website,
    location: item.location,
    focusAreas: item.focusAreas,
    category,
  }));
};

export const getCompanies = (): Company[] => readJson<Company[]>("companies.json");
export const getUniversities = (): University[] =>
  readJson<University[]>("universities.json");
export const getResources = (): Resource[] => readJson<Resource[]>("resources.json");
export const getCommunities = (): Community[] => readJson<Community[]>("communities.json");
export const getProfessionals = (): Professional[] =>
  readJson<Professional[]>("professionals.json");

export const getAllEntities = (): EcosystemEntity[] => [
  ...toEntity("companies", getCompanies(), (item) => item.name),
  ...toEntity("universities", getUniversities(), (item) => item.name),
  ...toEntity("resources", getResources(), (item) => item.title),
  ...toEntity("communities", getCommunities(), (item) => item.name),
  ...toEntity("professionals", getProfessionals(), (item) => item.name),
];

export const getCategoryLabel = (category: Category): string => categoryLabels[category];

interface FilterOptions {
  category?: Category;
  q?: string;
  type?: string;
  location?: string;
  focus?: string;
}

export const filterEntities = ({ category, q, type, location, focus }: FilterOptions) => {
  const query = q?.trim().toLowerCase();
  const requestedType = type?.trim().toLowerCase();
  const requestedLocation = location?.trim().toLowerCase();
  const requestedFocus = focus?.trim().toLowerCase();

  return getAllEntities().filter((entity) => {
    if (category && entity.category !== category) {
      return false;
    }

    if (
      query &&
      ![
        entity.name,
        entity.description,
        entity.type,
        entity.location,
        ...entity.focusAreas,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    ) {
      return false;
    }

    if (requestedType && entity.type.toLowerCase() !== requestedType) {
      return false;
    }

    if (requestedLocation && !entity.location.toLowerCase().includes(requestedLocation)) {
      return false;
    }

    if (
      requestedFocus &&
      !entity.focusAreas.some((focusArea) =>
        focusArea.toLowerCase().includes(requestedFocus),
      )
    ) {
      return false;
    }

    return true;
  });
};

export const getStats = () => {
  const entities = getAllEntities();
  const byCategory = {
    companies: entities.filter((item) => item.category === "companies").length,
    universities: entities.filter((item) => item.category === "universities").length,
    resources: entities.filter((item) => item.category === "resources").length,
    communities: entities.filter((item) => item.category === "communities").length,
    professionals: entities.filter((item) => item.category === "professionals").length,
  };

  return {
    total: entities.length,
    byCategory,
  };
};

export const getEntityByCategoryAndId = (category: Category, id: string) =>
  getAllEntities().find((entity) => entity.category === category && entity.id === id);
