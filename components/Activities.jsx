"use client";

import Image from "next/image";
import { useState } from "react";
import { activities } from "@/lib/data";
import Lightbox from "./Lightbox";

export default function Activities() {
  const [active, setActive] = useState(null);

  return (
    <section id="activities" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-accent font-medium mb-2">03 — Activities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Activities & Achievements
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl">
            Competitions, events, and milestones beyond coursework.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {activities.map((a, i) => (
            <article
              key={a.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-accent/40 transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">{a.title}</h3>
                <span className="text-sm text-slate-500">{a.period}</span>
              </div>
              <p className="mt-1 text-accent text-sm font-medium">{a.role}</p>

              {a.description && (
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {a.description}
                </p>
              )}

              {a.image && (
                <button
                  type="button"
                  onClick={() => setActive({ src: a.image, title: a.title })}
                  className="mt-4 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-white/10 bg-white"
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={1400}
                    height={990}
                    className="w-full h-auto"
                  />
                </button>
              )}

              {a.file && (
                <a
                  href={a.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-indigo-300 hover:border-accent/40 hover:text-accent transition-colors"
                >
                  <span>📄</span>
                  <span className="underline underline-offset-2">
                    View certificate (PDF)
                  </span>
                </a>
              )}

              {a.tags && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-xs text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </section>
  );
}
