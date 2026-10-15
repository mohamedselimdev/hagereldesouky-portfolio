"use client";
import { Moon, Sun } from "lucide-react";

// Icon swap is pure CSS off <html data-theme>, so it is correct before and after hydration.
export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  }
  return (
    <button type="button" onClick={toggle} aria-label={label} title={label}
      className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10">
      <Moon size={18} aria-hidden className="[[data-theme=dark]_&]:hidden" />
      <Sun size={18} aria-hidden className="hidden [[data-theme=dark]_&]:block" />
    </button>
  );
}
