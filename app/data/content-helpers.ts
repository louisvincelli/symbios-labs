// helpers to fetch by slug
import { BLOG, PEOPLE, PROJECTS, PUBLICATIONS, DIVISIONS } from "./siteData";

export function getDivisionBySlug(slug: string) {
  return DIVISIONS.find((d) => d.slug === slug);
}

export function getPublicationBySlug(slug: string) {
  return PUBLICATIONS.find((p) => p.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getBlogBySlug(slug: string) {
  return BLOG.find((b) => b.slug === slug);
}

export function getPersonBySlug(slug: string) {
  return PEOPLE.find((p) => p.slug === slug);
}
