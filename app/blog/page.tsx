// Blog index
import Link from "next/link";
import { BLOG } from "../data/siteData";
import { Section } from "../components/Section";

export default function BlogPage() {
  return (
    <Section title="Blog" subtitle="Essays, weeknotes, and research diaries.">
      <div className="grid gap-6">
        {BLOG.map((post) => (
          <div key={post.slug} className="rounded-xl border border-white/10 p-5">
            <Link href={`/blog/${post.slug}`} className="text-lg font-medium">
              {post.title}
            </Link>
            <p className="text-sm text-muted mt-1">{post.dek}</p>
            <p className="text-xs text-muted mt-2">{new Date(post.date).toDateString()}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
