import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">$</span> echo &quot;thanks for stopping by&quot;
        </p>
      </div>
    </footer>
  );
}
