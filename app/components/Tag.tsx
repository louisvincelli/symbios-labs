export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 px-2 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}

export default Tag;