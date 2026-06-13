import { profile } from "@/lib/data";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0b1020]/70 border-b border-white/5">
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a href="#intro" className="font-semibold tracking-tight text-white">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#intro" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-4 py-1.5 text-white font-medium hover:bg-indigo-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
