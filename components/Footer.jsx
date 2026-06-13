import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-bold text-white">Let's work together</h2>
        <p className="mt-2 text-slate-400">
          Open to internships and software engineering opportunities.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 transition-colors"
          >
            GitHub
          </a>
        </div>
        <p className="mt-10 text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
