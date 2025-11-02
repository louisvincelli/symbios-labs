// Projects detail
import { getProjectBySlug } from "../../data/content-helpers";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const proj = getProjectBySlug(params.slug);
  if (!proj) return notFound();

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold">{proj.title}</h1>
        <p className="mt-2 text-muted">{proj.tagline}</p>
        <div className="mt-6 prose prose-invert">
          <div dangerouslySetInnerHTML={{ __html: proj.body ?? "<p>Details coming soon.</p>" }} />
        </div>
      </div>
    </section>
  );
}
