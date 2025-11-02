// Division pages: /research/Alike, etc.
import { getDivisionBySlug } from "../../data/content-helpers";
import { notFound } from "next/navigation";
import { Section } from "../../components/Section";
import { PUBLICATIONS, PROJECTS } from "../../data/siteData";
import { PublicationListItem } from "../../components/PublicationListItem";
import { ProjectCard } from "../../components/ProjectCard";

export default function DivisionPage({ params }: { params: { slug: string } }) {
  const division = getDivisionBySlug(params.slug);
  if (!division) return notFound();

  const pubs = PUBLICATIONS.filter((p) =>
    p.areaTags.some((t) => t.toLowerCase().includes(division.name.split(".")[0].toLowerCase()))
  );

  const projs = PROJECTS.filter((p) =>
    p.areaTags.some((t) => t.toLowerCase().includes(division.name.split(".")[0].toLowerCase()))
  );

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-semibold">{division.name}</h1>
          <p className="mt-3 text-muted max-w-3xl">{division.mission}</p>
          {division.motto && <p className="mt-2 text-sm text-muted italic">{division.motto}</p>}
        </div>
      </section>

      <Section title="Focus Topics">
        <ul className="container grid md:grid-cols-2 gap-4 list-disc pl-6 text-muted">
          {division.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section title="Selected Publications">
        <div className="grid gap-6">
          {(pubs.length ? pubs : PUBLICATIONS).map((p) => (
            <PublicationListItem key={p.slug} pub={p} />
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {(projs.length ? projs : PROJECTS.slice(0, 2)).map((proj) => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </Section>
    </>
  );
}
