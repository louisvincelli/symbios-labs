// People list 
import { PEOPLE } from "../data/siteData";
import { Section } from "../components/Section";
import { PersonCard } from "../components/PersonCard";

export default function PeoplePage() {
  return (
    <Section title="People" subtitle="Researchers and collaborators.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PEOPLE.map((p) => (
          <PersonCard key={p.slug} person={p} />
        ))}
      </div>
    </Section>
  );
}
