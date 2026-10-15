import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { hasRealProperties } from "@/lib/properties";
import { waLink, generalMsg, getWhatsappNumber } from "@/lib/whatsapp";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="هاجر الدسوقي - الرئيسية">
      <Image src="/brand/mark-gold.svg" alt="" width={40} height={40} aria-hidden />
      <span className="leading-tight text-white">
        <span className="block text-lg font-extrabold">هاجر الدسوقي</span>
        <span className="serif block text-[11px] tracking-[0.18em] text-gold-300">HAGER EL DESOUKY</span>
      </span>
    </Link>
  );
}

export async function WaButton({ message = generalMsg, label = "تواصل عبر واتساب", className = "btn btn-gold" }: { message?: string; label?: React.ReactNode; className?: string }) {
  const href = waLink(await getWhatsappNumber(), message);
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={className} data-event="whatsapp_click">
      <MessageCircle size={18} aria-hidden /> {label}
    </a>
  );
}

const nav = [["/", "الرئيسية"], ["/#projects", "المشاريع"], ["/properties", "الوحدات المتاحة"], ["/about", "عني"], ["/#testimonials", "آراء العملاء"], ["/contact", "تواصل معي"]];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4">
        <Logo />
        <nav aria-label="القائمة الرئيسية" className="hidden items-center gap-7 text-sm text-white/90 lg:flex">
          {nav.map(([h, l]) => <Link key={h} href={h} className="transition-colors hover:text-gold-300">{l}</Link>)}
        </nav>
        <WaButton label={<><span className="hidden sm:inline">تواصل عبر </span>واتساب</>} className="btn btn-gold whitespace-nowrap !py-2 text-sm" />
      </div>
      <nav aria-label="قائمة الجوال" className="flex gap-5 overflow-x-auto whitespace-nowrap px-4 pb-2 text-sm text-white/90 lg:hidden">
        {nav.map(([h, l]) => <Link key={h} href={h} className="py-2">{l}</Link>)}
      </nav>
    </header>
  );
}

export function PageNav() {
  return <div className="relative h-28 bg-ink-900 lg:h-20"><Navbar /></div>;
}

/** Shared developer credit. Pinned to the far left edge of the footer bar on every page. */
function DeveloperCredit() {
  return (
    <a
      href="https://portfolio.mohamedselim.workers.dev/ar"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Developed by Mohamed Selim"
      dir="ltr"
      className="inline-flex items-center gap-2 text-xs text-white/80 transition-colors hover:text-white"
    >
      <span aria-hidden>Developed by</span>
      <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-white p-0.5">
        <Image src="/brand/ms-logo.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
      </span>
    </a>
  );
}

export async function Footer() {
  const demo = !(await hasRealProperties());
  return (
    <footer className="bg-ink-950 text-white/80">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-10 md:grid-cols-3">
        <div><Logo /><p className="mt-3 text-sm">استشارات عقارية بخبرة وشفافية ومتابعة شخصية لاختيار وحدتك المناسبة.</p></div>
        <div className="space-y-2 text-sm"><p className="font-bold text-white">روابط</p>
          <Link className="block hover:text-gold-300" href="/properties">الوحدات المتاحة</Link>
          <Link className="block hover:text-gold-300" href="/book-viewing">احجز معاينة</Link>
          <Link className="block hover:text-gold-300" href="/contact">تواصل معي</Link></div>
        <div className="space-y-2 text-sm"><p className="font-bold text-white">قانوني</p>
          <Link className="block hover:text-gold-300" href="/privacy">سياسة الخصوصية</Link></div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 pb-20 pt-4 text-xs">
          <p>© هاجر الدسوقي.{demo && " الصور والوحدات والمشاريع المعروضة حالياً تجريبية للعرض فقط."}</p>
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}

export function WaFab() {
  return (
    <div className="fixed bottom-4 start-4 z-40">
      <WaButton label="واتساب" className="btn btn-gold rounded-full shadow-lg" />
    </div>
  );
}
export { Phone };
