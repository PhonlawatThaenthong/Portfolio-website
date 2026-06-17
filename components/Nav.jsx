"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#intro", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#activities", label: "Activities" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0b1020]/70 border-b border-white/5">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#intro" className="font-semibold tracking-tight text-white">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-4 py-1.5 text-white font-medium hover:bg-indigo-500 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center -mr-1 p-2 text-slate-300 hover:text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0b1020]/95">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 flex flex-col gap-4 text-sm text-slate-300">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-4 py-1.5 text-white font-medium hover:bg-indigo-500 transition-colors w-fit"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
