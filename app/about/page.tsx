import { PARENT, DIVISIONS } from "../data/siteData";
import { Section } from "../components/Section";

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold">About</h1>
          <p className="mt-4 text-muted">{PARENT.missionOneLiner}</p>
          <p className="mt-4">{PARENT.aboutBlurb}</p>
        </div>
      </section>

      <Section title="Structure" subtitle="One parent, five perspectives.">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIVISIONS.map((d) => (
            <div key={d.slug} className="rounded-xl border border-white/10 p-5">
              <div className="text-lg font-medium">{d.name}</div>
              <p className="mt-2 text-sm text-muted">{d.oneLiner}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How we publish & collaborate">
        <div className="container max-w-3xl text-muted space-y-3">
          <p>We publish preprints, essays, and demos openly, prioritizing clarity and reproducibility.</p>
          <p>We disclose limitations and known risks, and prefer symbiosis over replacement in design decisions.</p>
          <p>We welcome collaborations aligned with our ethical commitments.</p>
        </div>
      </Section>
    </>
  );
}
