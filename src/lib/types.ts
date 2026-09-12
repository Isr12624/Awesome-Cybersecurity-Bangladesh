export type Category =
  | "companies"
  | "universities"
  | "resources"
  | "communities"
  | "professionals";

export interface BaseEntity {
  id: string;
  name: string;
  description: string;
  type: string;
  website: string;
  location: string;
  focusAreas: string[];
}

export interface Company extends BaseEntity {
  founded: number;
  employees: string;
}

export interface University extends BaseEntity {
  programs: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  website: string;
  location: string;
  focusAreas: string[];
}

export interface Community extends BaseEntity {
  eventFrequency: string;
}

export interface Professional extends BaseEntity {
  organization: string;
}

export interface EcosystemEntity extends BaseEntity {
  category: Category;
}
