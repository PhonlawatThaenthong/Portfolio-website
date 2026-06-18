"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";

export default function Lightbox({ image, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!image) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey, image]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-up"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-[#0b1020] shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white hover:bg-black/80 transition-colors"
        >
          ✕
        </button>
        <div className="flex max-h-[90vh] flex-col">
          <div className="overflow-auto">
            <Image
              src={image.src}
              alt={image.title}
              width={1700}
              height={1700}
              className="h-auto w-full object-contain"
            />
          </div>
          {image.title && (
            <p className="px-4 py-3 text-center text-sm text-slate-300">
              {image.title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
