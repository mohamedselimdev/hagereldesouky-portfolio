import type { Metadata } from "next";
import Link from "next/link";
import { Home, Building2, CalendarDays, Settings } from "lucide-react";

export const metadata: Metadata = { title: "لوحة التحكم", robots: { index: false, follow: false } };
const items = [[Home, "الرئيسية", "/admin"], [Building2, "الوحدات", "/admin/properties"], [CalendarDays, "الحجوزات", "/admin/bookings"], [Settings, "الإعدادات", "/admin/settings"]] as const;

// Access is gated by middleware.ts (Basic Auth via ADMIN_USER / ADMIN_PASSWORD). Unfinished sections are not linked here.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream lg:flex lg:flex-row-reverse">
      <aside className="bg-ink-900 text-white lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0">
        <div className="p-5 text-center"><p className="text-lg font-extrabold text-gold-300">هاجر الدسوقي</p><p className="serif text-[11px] tracking-[0.18em]">HAGER EL DESOUKY</p></div>
        <nav aria-label="لوحة التحكم" className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-visible">
          {items.map(([I, l, h]) => <Link key={h} href={h} className="flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm hover:bg-white/10"><I size={18} aria-hidden />{l}</Link>)}
        </nav>
      </aside>
      <div className="min-w-0 flex-1 p-4 lg:p-8">{children}</div>
    </div>
  );
}
