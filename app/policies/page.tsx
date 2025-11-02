// Policies index
import Link from "next/link";

export default function PoliciesIndex() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold">Policies</h1>
        <ul className="mt-4 list-disc pl-6 text-muted space-y-2">
          <li><Link href="/policies/privacy">Privacy Policy</Link></li>
          <li><Link href="/policies/terms">Terms of Use</Link></li>
          <li><Link href="/policies/responsible-ai">Responsible AI & Research Ethics</Link></li>
        </ul>
      </div>
    </section>
  );
}
