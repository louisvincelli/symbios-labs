"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/research", label: "Research Areas" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/people", label: "People" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-white/5">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.svg" alt="Symbios Labs" className="h-6 w-6" />
          <span>Symbios Labs</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm ${
                pathname.startsWith(item.href) ? "text-foreground" : "text-muted"
              } hover:text-foreground transition`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;