// Publication index
import { PUBLICATIONS } from "../data/siteData";
import { PublicationListItem } from "../components/PublicationListItem";
import { Section } from "../components/Section";

export default function PublicationsPage() {
  return (
    <Section title="Publications" subtitle="Papers, preprints, and extended essays.">
      <div className="grid gap-6">
        {PUBLICATIONS.map((p) => (
          <PublicationListItem key={p.slug} pub={p} />
        ))}
      </div>
    </Section>
  );
}
