import Link from "next/link";
import { Tag } from "./Tag";
import { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="rounded-xl border border-white/10 p-5 hover:bg-white/5 transition">
        <div className="text-lg font-medium">{project.title}</div>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.areaTags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          <Tag>{project.status}</Tag>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;