"use client";
import { useRouter } from "next/navigation";
import { Languages } from "lucide-react";

export function LangToggle({ to, label, aria }: { to: "ar" | "en"; label: string; aria: string }) {
  const router = useRouter();
  function switchLang() {
    document.cookie = `lang=${to}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }
  return (
    <button type="button" onClick={switchLang} aria-label={aria} lang={to}
      className="inline-flex h-10 min-w-10 items-center justify-center gap-1.5 rounded-full border border-white/25 px-0 text-sm sm:h-11 sm:px-3 font-bold text-white transition-colors hover:bg-white/10">
      <Languages size={16} aria-hidden /><span className="hidden sm:inline">{label}</span>
    </button>
  );
}
