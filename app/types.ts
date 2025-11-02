export type DivisionSlug = "alike" | "align" | "auris" | "unite" | "mirror";

export type Division = {
  slug: DivisionSlug;
  name: string;
  motto?: string;
  mission: string;
  oneLiner: string;
  topics: string[];
};

export type Publication = {
  slug: string;
  title: string;
  abstract: string;
  authors: string[];
  year: number;
  areaTags: string[]; // e.g., ["ALIKE", "multimodal"]
  links: { pdf?: string; doi?: string; code?: string };
  body?: string; // HTML or markdown string (simplified)
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  areaTags: string[];
  status: "prototype" | "in progress" | "archived";
  links: { demo?: string; repo?: string; paper?: string };
  body?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  areaTags: string[];
  body: string;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  email?: string;
  socials?: { github?: string; scholar?: string; twitter?: string; website?: string };
  areaTags: string[];
  bio: string;
  statement: string;
  selectedPublications: string[]; // slugs
  selectedProjects: string[]; // slugs
};
