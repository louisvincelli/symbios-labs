import Link from "next/link";
import { Person } from "../types";
import { Tag } from "./Tag";

export function PersonCard({ person }: { person: Person }) {
  return (
    <Link href={`/people/${person.slug}`}>
      <div className="rounded-xl border border-white/10 p-5 hover:bg-white/5 transition">
        <div className="text-lg font-medium">{person.name}</div>
        <p className="text-sm text-muted">{person.role}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {person.areaTags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default PersonCard;