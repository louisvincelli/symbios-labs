import Link from "next/link";

export function Card({
  title,
  description,
  href,
  eyebrow,
  children,
}: {
  title: string;
  description?: string;
  href?: string;
  eyebrow?: string;
  children?: React.ReactNode;
}) {
  const inner = (
    <div className="h-full rounded-xl border border-white/10 bg-white/2 hover:bg-white/5 transition p-5">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-muted">{eyebrow}</div>}
      <div className="mt-1 text-lg font-medium">{title}</div>
      {description && <p className="mt-2 text-sm text-muted">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );

  return href ? <Link href={href}>{inner}</Link> : inner;
}

export default Card;