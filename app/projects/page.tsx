// Projects index
import { PROJECTS } from "../data/siteData";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Demos, prototypes, datasets, and tools.">
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </div>
    </Section>
  );
}
