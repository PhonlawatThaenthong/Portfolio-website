import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-accent font-medium mb-2">02 — Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects & Experience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl">
            A timeline of what I've built — from full-stack web apps and AI
            systems to embedded hardware and accessible mobile applications.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-10">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Timeline dot */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-[#0b1020]" />

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-accent/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <span className="text-sm text-slate-500">{p.period}</span>
                </div>
                <p className="mt-1 text-accent text-sm font-medium">{p.role}</p>

                <ul className="mt-4 space-y-2">
                  {p.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="text-accent mt-1">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-xs text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
