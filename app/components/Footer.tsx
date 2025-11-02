import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold mb-2">Symbios Labs</div>
          <p className="text-muted">
            Where living and artificial intelligence evolve in harmony.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Research</div>
          <ul className="space-y-1">
            <li><Link href="/research">Areas</Link></li>
            <li><Link href="/publications">Publications</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Policies</div>
          <ul className="space-y-1">
            <li><Link href="/policies/privacy">Privacy</Link></li>
            <li><Link href="/policies/terms">Terms</Link></li>
            <li><Link href="/policies/responsible-ai">Responsible AI</Link></li>
            <li><Link href="/accessibility">Accessibility</Link></li>
          </ul>
        </div>
      </div>
      <div className="container border-t border-white/10 py-6 text-xs text-muted">
        © 2025 Symbios Labs, LLC. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;