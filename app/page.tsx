import { Section } from "./components/Section";
import { Card } from "./components/Card";
import { PublicationListItem } from "./components/PublicationListItem";
import { ProjectCard } from "./components/ProjectCard";
import { DIVISIONS, PARENT, PUBLICATIONS, PROJECTS } from "./data/siteData";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-semibold">
            {PARENT.brand}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted max-w-3xl">
            {PARENT.missionOneLiner}
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/research" className="rounded-lg bg-white/10 px-4 py-2">
              Explore Research
            </Link>
            <Link href="/publications" className="rounded-lg border border-white/20 px-4 py-2">
              View Publications
            </Link>
          </div>
        </div>
      </section>

      <Section title="Research Areas" subtitle="Five complementary perspectives on symbiotic intelligence.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIVISIONS.map((d) => (
            <Card
              key={d.slug}
              title={d.name}
              description={d.oneLiner}
              href={`/research/${d.slug}`}
              eyebrow="Division"
            >
              <ul className="text-sm text-muted list-disc pl-5 space-y-1">
                {d.topics.slice(0, 4).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Featured Publications">
        <div className="grid gap-6">
          {PUBLICATIONS.map((p) => (
            <PublicationListItem key={p.slug} pub={p} />
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 4).map((proj) => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </Section>

      <Section title="Philosophy" subtitle={PARENT.aboutBlurb}>
        <p className="text-sm text-muted">
          {PARENT.taglineOptions.join(" • ")}
        </p>
      </Section>
    </>
  );
}
