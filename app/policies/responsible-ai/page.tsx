import { POLICIES } from "../../data/siteData";

export default function ResponsibleAIPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl prose prose-invert">
        <div dangerouslySetInnerHTML={{ __html: POLICIES.responsibleAI }} />
      </div>
    </section>
  );
}
