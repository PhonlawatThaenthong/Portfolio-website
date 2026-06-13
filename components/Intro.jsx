import { profile, skills } from "@/lib/data";

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative bg-grid min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 w-full">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          {/* Left: intro */}
          <div className="animate-fade-up">
            <p className="text-accent font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl text-slate-400 font-medium">
              {profile.title}
            </p>
            <p className="mt-6 text-slate-300 leading-relaxed max-w-xl">
              {profile.tagline}
            </p>

            {/* Contact buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
              >
                <MailIcon /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 transition-colors"
              >
                <PhoneIcon /> {profile.phone}
              </a>
            </div>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>

          {/* Right: education + skills card */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-xs uppercase tracking-widest text-accent font-semibold">
                Education
              </h2>
              <p className="mt-2 font-semibold text-white">
                {profile.education.school}
              </p>
              <p className="text-sm text-slate-300">{profile.education.degree}</p>
              <p className="text-sm text-slate-400">
                {profile.education.period} · GPAX {profile.education.gpax}
              </p>

              <h2 className="mt-6 text-xs uppercase tracking-widest text-accent font-semibold">
                Core Skills
              </h2>
              <div className="mt-3 space-y-3">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <p className="text-xs text-slate-500 mb-1.5">{group}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-xs text-slate-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-center">
          <a
            href="#projects"
            className="text-slate-500 hover:text-white transition-colors text-sm flex flex-col items-center gap-1"
          >
            View my projects
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
