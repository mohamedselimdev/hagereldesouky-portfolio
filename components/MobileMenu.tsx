"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu({ items, labels }: { items: readonly (readonly [string, string])[]; labels: { open: string; close: string; nav: string } }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <div className="lg:hidden">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? labels.close : labels.open}
        className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10">
        {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label={labels.nav} className="absolute inset-x-3 top-full mt-2 rounded-2xl border border-gold-500/50 bg-ink-950 px-4 py-2 shadow-xl">
          <ul className="mx-auto max-w-[1280px]">
            {items.map(([h, l]) => (
              <li key={h}><Link href={h} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-base text-white/90 last:border-0">{l}</Link></li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
