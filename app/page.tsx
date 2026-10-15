import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WaButton } from "@/components/Chrome";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { getProperties, hasRealProperties } from "@/lib/properties";
import { demoProjects } from "@/lib/data";
import { getDict, getLocale, localize } from "@/lib/i18n";
import { ShieldCheck, Handshake, Building2, Gem, FileText, Search, CalendarCheck, KeyRound, Headphones, Users, TrendingUp, ArrowLeft, ArrowRight, MapPin } from "lucide-react";

const trustIcons = [Gem, Handshake, Building2, ShieldCheck];
const stepIcons = [FileText, Search, CalendarCheck, KeyRound];
const pillarIcons = [Headphones, Users, TrendingUp];

export default async function Home() {
  const d = await getDict();
  const locale = await getLocale();
  const h = d.home;
  const all = localize(await getProperties(), locale);
  const demo = !(await hasRealProperties());
  const Arrow = d.dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <>
      <main>
        <section className="relative isolate overflow-hidden bg-ink-900 text-white">
          <Navbar />
          <div className="mx-auto grid max-w-[1280px] items-end px-4 pt-32 lg:grid-cols-[1.1fr_1fr] lg:pt-32">
            <div className="relative z-10 pb-24 pt-72 lg:pb-32 lg:pt-0">
              <p className="eyebrow reveal !text-gold-300">{h.eyebrow}</p>
              <h1 className="reveal mt-3 text-4xl leading-[1.2] sm:text-5xl lg:text-6xl">{h.h1a} <br /><span className="text-gold-300">{h.h1b}</span></h1>
              <p className="reveal mt-5 max-w-xl text-lg text-white/80">{h.lead}</p>
              <div className="reveal mt-7 flex flex-wrap gap-3">
                <WaButton className="btn btn-gold" />
                <Link href="/properties" className="btn btn-outline">{h.browse} <Arrow size={16} aria-hidden /></Link>
              </div>
              <ul className="mt-8 grid grid-cols-4 gap-2 sm:gap-5">
                {h.trust.map(([t, s], i) => { const I = trustIcons[i]; return (
                  <li key={t} className="text-center lg:text-start"><I className="mx-auto mb-1 text-gold-300 lg:mx-0 lg:mb-2" size={24} aria-hidden /><p className="text-[11px] font-bold leading-snug sm:text-sm">{t}</p><p className="hidden text-xs text-white/70 sm:block">{s}</p></li>
                ); })}
              </ul>
            </div>
            <div className="absolute inset-x-0 top-0 h-[560px] lg:relative lg:inset-auto lg:h-[640px]">
              <Image src="/img/hager-hero.webp" alt={h.heroAlt} fill priority sizes="(max-width:1024px) 100vw, 45vw" className="object-cover object-[50%_18%] lg:object-top" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent lg:via-transparent" />
              <div aria-hidden className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink-900 to-transparent" />
              <div aria-hidden className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-ink-900 to-transparent lg:block" />
              <div aria-hidden className="absolute inset-y-0 right-0 hidden w-28 bg-gradient-to-l from-ink-900 to-transparent lg:block" />
              <p aria-hidden dir="ltr" className="serif absolute bottom-24 start-4 hidden text-sm uppercase leading-6 tracking-[0.3em] text-white/70 xl:block">{h.tagline[0]}<br />{h.tagline[1]}<br />{h.tagline[2]}</p>
            </div>
          </div>
        </section>

        <div className="relative z-10 -mt-12 px-4"><SearchBar districts={[...new Set(all.map((p) => p.district))]} types={[...new Set(all.map((p) => p.type))]} /></div>

        <section aria-label={h.stepsLabel} className="mx-auto max-w-[1280px] px-4 pb-6 pt-16">
          <ol className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {h.steps.map(([t, s], i) => { const I = stepIcons[i]; return (
              <li key={t} className="flex items-start gap-2 rounded-xl border border-line bg-paper p-3 sm:gap-3 sm:p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-200 text-gold-700"><I size={20} aria-hidden /></span>
                <span><span className="block text-sm font-bold">{i + 1}. {t}</span><span className="block text-xs text-muted">{s}</span></span>
              </li>
            ); })}
          </ol>
        </section>

        <section id="projects" className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="eyebrow">{h.projEyebrow}</p><h2 className="text-3xl text-ink">{h.projTitle}</h2></div>
            <Link href="/properties" className="btn btn-outline !border-line text-sm">{d.viewAll}</Link>
          </div>
          <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0">
            {demoProjects.map((pr, i) => (
              <article key={pr.image} className="card w-[78%] shrink-0 snap-start overflow-hidden md:w-auto">
                <div className="relative aspect-[16/10] bg-ink-800">
                  <Image src={pr.image} alt={`${d.projects[i].name} (${d.demoImg})`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  <span className="absolute start-3 top-3 rounded-md bg-white/95 px-3 py-0.5 text-xs font-bold text-ink-900">{d.projects[i].tag}</span>
                  <span className="absolute bottom-2 end-2 rounded bg-black/65 px-2 py-0.5 text-[11px] text-white">{d.demo}</span>
                </div>
                <div className="p-5"><h3 className="text-lg font-bold text-ink">{d.projects[i].name}</h3><p className="mt-1 flex items-center gap-1 text-sm text-muted"><MapPin size={14} aria-hidden />{d.projectPlace}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">{h.projNote}</p>
        </section>

        <section className="bg-gold-200/60 py-14">
          <div className="mx-auto max-w-[1280px] px-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div><p className="eyebrow">{h.unitsEyebrow}</p><h2 className="text-3xl text-ink">{h.unitsTitle}</h2></div>
              <Link href="/properties" className="btn btn-outline !border-gold-600 text-sm">{d.viewAll}</Link>
            </div>
            {demo && <p className="mt-3 text-sm text-muted">{h.unitsNote}</p>}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{all.slice(0, 4).map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
          </div>
        </section>

        <section id="about" className="bg-ink-900 text-white">
          <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 py-14 md:grid-cols-[1fr_1.1fr]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-ink-800">
              <Image src="/img/hager-about.webp" alt={h.aboutAlt} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover object-top" />
            </div>
            <div>
              <p className="signature text-4xl text-gold-300 sm:text-5xl" lang="en" dir="ltr">Hager El Desouky</p>
              <p className="serif text-xs uppercase tracking-[0.3em] text-white/60" lang="en" dir="ltr">Real Estate Consultant</p>
              <h2 className="mt-5 text-3xl">{h.aboutTitle}</h2>
              <p className="mt-1 font-bold text-gold-300">{d.role}</p>
              <p className="mt-4 max-w-xl leading-8 text-white/80">{h.aboutBody}</p>
              <ul className="mt-6 grid grid-cols-3 gap-3">
                {h.pillars.map(([t, s], i) => { const I = pillarIcons[i]; return <li key={t} className="text-start"><I className="mb-1 text-gold-300" size={24} aria-hidden /><p className="text-[13px] font-bold leading-snug sm:text-sm">{t}</p><p className="text-[11px] leading-snug text-white/70 sm:text-xs">{s}</p></li>; })}
              </ul>
              <Link href="/about" className="btn btn-gold mt-8">{h.aboutCta}</Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="text-center"><p className="eyebrow">{h.tEyebrow}</p><h2 className="text-3xl text-ink">{h.tTitle}</h2></div>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-5">
            {[1, 2, 3].map((n) => (
              <figure key={n} className="rounded-[var(--radius-card)] border border-dashed border-gold-600 bg-paper p-3 text-center sm:p-6">
                <span className="rounded bg-gold-200 px-2 py-0.5 text-[11px] font-bold text-gold-700 sm:text-xs">{d.demo}</span>
                <blockquote className="mt-3 text-[11px] leading-5 text-muted sm:mt-4 sm:text-base sm:leading-normal">{h.tBody}</blockquote>
                <figcaption className="mt-2 text-[11px] text-muted sm:mt-3 sm:text-sm">{h.tName}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-ink-950 py-14 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <p className="eyebrow !text-gold-300">{h.ctaEyebrow}</p>
            <h2 className="mt-2 text-3xl">{h.ctaTitle}</h2>
            <p className="mt-2 text-white/75">{h.ctaBody}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3"><WaButton /><Link href="/book-viewing" className="btn btn-outline">{d.bookViewing}</Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
