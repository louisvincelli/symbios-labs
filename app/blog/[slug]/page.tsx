// Blog post
import { getBlogBySlug } from "../../data/content-helpers";
import { notFound } from "next/navigation";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return notFound();

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <p className="mt-2 text-muted">{post.dek}</p>
        <p className="mt-2 text-xs text-muted">{new Date(post.date).toDateString()}</p>
        <div className="mt-6 prose prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    </section>
  );
}
