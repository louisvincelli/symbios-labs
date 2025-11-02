// Person profile page
import { getPersonBySlug } from "../../data/content-helpers";
import { notFound } from "next/navigation";
import { PUBLICATIONS, PROJECTS } from "../../data/siteData";
import Link from "next/link";

export default function PersonDetail({ params }: { params: { slug: string } }) {
  const person = getPersonBySlug(params.slug);
  if (!person) return notFound();

  const pubs = PUBLICATIONS.filter((p) => person.selectedPublications.includes(p.slug));
  const projs = PROJECTS.filter((p) => person.selectedProjects.includes(p.slug));

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold">{person.name}</h1>
        <p className="text-muted">{person.role}</p>
        <p className="mt-4">{person.bio}</p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Research Statement</h2>
          <p className="mt-2 text-muted">{person.statement}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Selected Publications</h2>
          <ul className="mt-2 list-disc pl-6 text-muted">
            {pubs.map((p) => (
              <li key={p.slug}>
                <Link href={`/publications/${p.slug}`}>{p.title}</Link> ({p.year})
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Selected Projects</h2>
          <ul className="mt-2 list-disc pl-6 text-muted">
            {projs.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`}>{p.title}</Link> — {p.tagline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
