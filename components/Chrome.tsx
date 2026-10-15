import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { waLink, getWhatsappNumber } from "@/lib/whatsapp";
import { getDict, getLocale } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { LangToggle } from "./LangToggle";

export async function Logo() {
  const d = await getDict();
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label={d.homeLabel}>
      <Image src="/brand/mark-t.png" alt="" width={54} height={46} className="h-[44px] w-auto" unoptimized aria-hidden />
      <span className="leading-tight text-white">
        <span className="block whitespace-nowrap text-sm font-extrabold sm:text-lg">{d.name}</span>
        <span className="serif hidden text-[11px] tracking-[0.18em] text-gold-300 sm:block">{d.nameLatin}</span>
      </span>
    </Link>
  );
}

export async function WaButton({ message, label, className = "btn btn-gold" }: { message?: string; label?: React.ReactNode; className?: string }) {
  const d = await getDict();
  const href = waLink(await getWhatsappNumber(), message ?? d.waGeneral);
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={className} data-event="whatsapp_click">
      <MessageCircle size={18} aria-hidden /> {label ?? d.wa}
    </a>
  );
}

export async function Navbar() {
  const d = await getDict();
  const locale = await getLocale();
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-3 pt-3">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 rounded-2xl border border-gold-500/60 bg-ink-950/80 px-4 py-2.5 shadow-lg backdrop-blur">
        <Logo />
        <nav aria-label={d.mainNav} className="hidden items-center gap-7 text-sm text-white/90 lg:flex">
          {d.nav.map(([h, l]) => <Link key={h} href={h} className="transition-colors hover:text-gold-300">{l}</Link>)}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <WaButton className="btn btn-gold hidden whitespace-nowrap !py-2 text-sm xl:inline-flex" />
          <LangToggle to={locale === "ar" ? "en" : "ar"} label={d.langToggle} aria={d.langAria} />
          <ThemeToggle label={d.themeToggle} />
          <MobileMenu items={d.nav} labels={{ open: d.openMenu, close: d.closeMenu, nav: d.mobileNav }} />
        </div>
      </div>
    </header>
  );
}

export function PageNav() {
  return <div className="relative h-[92px] bg-ink-900"><Navbar /></div>;
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
  const d = await getDict();
  return (
    <footer className="bg-ink-950 text-white/80">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" aria-label={d.homeLabel} className="inline-block"><Image src="/brand/mark-t.png" alt={d.homeLabel} width={179} height={160} className="h-14 w-auto sm:h-16" unoptimized /></Link>
        <nav aria-label={d.footer.links} className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm">
          {[...d.nav, ["/privacy", d.footer.privacy]].map(([h, l]) => <Link key={h} href={h} className="hover:text-gold-300">{l}</Link>)}
        </nav>
      </div>
      <div className="border-t border-white/10">
        {/* Fixed physical layout on every screen: developer credit left, name centre, WhatsApp right. */}
        <div dir="ltr" className="mx-auto grid max-w-[1280px] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-2.5 text-[11px] sm:text-xs">
          <div className="justify-self-start"><DeveloperCredit /></div>
          <p dir={d.dir} className="text-center">{d.footer.copy}</p>
          <div dir={d.dir} className="justify-self-end"><WaButton label={<><span className="hidden sm:inline">{d.wa}</span><span className="sm:hidden">{d.waShort}</span></>} className="btn btn-gold !px-3 text-sm sm:!px-5 sm:text-base" /></div>
        </div>
      </div>
    </footer>
  );
}

export { Phone };
