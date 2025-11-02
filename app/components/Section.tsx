export function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {title && <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>}
        {subtitle && (
          <p className="mt-2 text-muted max-w-2xl">{subtitle}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default Section;