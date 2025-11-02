import Link from "next/link";
import  { Publication }  from "../types";
import { Tag } from "./Tag";

export function PublicationListItem({ pub }: { pub: Publication }) {
  return (
    <div className="rounded-xl border border-white/10 p-5">
      <Link href={`/publications/${pub.slug}`} className="text-lg font-medium">
        {pub.title}
      </Link>
      <p className="mt-1 text-sm text-muted">{pub.abstract}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {pub.areaTags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        <Tag>{pub.year}</Tag>
        {pub.links.pdf && (
          <a href={pub.links.pdf} target="_blank" className="text-sm">
            PDF
          </a>
        )}
        {pub.links.doi && (
          <a href={pub.links.doi} target="_blank" className="text-sm">
            DOI
          </a>
        )}
      </div>
    </div>
  );
}

export default PublicationListItem;