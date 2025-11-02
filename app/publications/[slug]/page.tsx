// Publication detail
import { getPublicationBySlug } from "../../data/content-helpers";
import { notFound } from "next/navigation";

export default function PublicationDetail({ params }: { params: { slug: string } }) {
  const pub = getPublicationBySlug(params.slug);
  if (!pub) return notFound();

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold">{pub.title}</h1>
        <p className="mt-2 text-muted">{pub.abstract}</p>
        <p className="mt-2 text-sm text-muted">
          {pub.authors.join(", ")} • {pub.year}
        </p>
        <div className="mt-6 prose prose-invert">
          <div dangerouslySetInnerHTML={{ __html: pub.body ?? "<p>Details coming soon.</p>" }} />
        </div>
      </div>
    </section>
  );
}
