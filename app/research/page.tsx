// Research Areas index
import { DIVISIONS } from "../data/siteData";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

export default function ResearchPage() {
  return (
    <Section title="Research Areas" subtitle="Our divisions and their core topics.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIVISIONS.map((d) => (
          <Card
            key={d.slug}
            title={d.name}
            description={d.mission}
            href={`/research/${d.slug}`}
            eyebrow="Division"
          />
        ))}
      </div>
    </Section>
  );
}
