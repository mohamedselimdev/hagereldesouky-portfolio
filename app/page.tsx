import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer, WaFab, WaButton } from "@/components/Chrome";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { getProperties } from "@/lib/properties";
import { demoProjects } from "@/lib/data";
import { hasRealProperties } from "@/lib/properties";
import { ShieldCheck, Handshake, Building2, Gem, FileText, Search, CalendarCheck, KeyRound, Headphones, Users, TrendingUp, ArrowLeft, MapPin } from "lucide-react";

const trust = [
  [Gem, "متابعة ما بعد البيع", "لبناء علاقة طويلة المدى"],
  [Handshake, "مصداقية وشفافية", "في كل خطوة"],
  [Building2, "أفضل المشاريع", "في أهم المواقع"],
  [ShieldCheck, "استشارات مخصصة", "تناسب أهدافك"],
] as const;
const steps = [
  [FileText, "حدّد احتياجك", "أخبرني بما تبحث عنه وميزانيتك"],
  [Search, "عرض الخيارات", "أقدّم لك وحدات مناسبة ومعلومات موثّقة"],
  [CalendarCheck, "حجز معاينة", "نحدد موعدًا يناسبك"],
  [KeyRound, "إتمام التعاقد", "ومتابعة حتى الاستلام"],
] as const;
const pillars = [
  [Headphones, "دعم مستمر", "في كل خطوة"],
  [Users, "استشارات مخصصة", "حسب احتياجاتك"],
  [TrendingUp, "فهم عميق للسوق", "وتحليل الفرص"],
] as const;

export default async function Home() {
  const all = await getProperties();
  const demo = !(await hasRealProperties());
  return (
    <>
      <main>
        <section className="relative isolate overflow-hidden bg-ink-900 text-white">
          <Navbar />
          <div className="mx-auto grid max-w-[1280px] items-end px-4 pt-44 lg:grid-cols-[1.1fr_1fr] lg:pt-28">
            <div className="pb-28 lg:pb-32">
              <p className="eyebrow reveal !text-gold-300">مستشارة عقارية متميزة</p>
              <h1 className="reveal mt-3 text-4xl leading-[1.2] sm:text-5xl lg:text-6xl">لأنك تستحق أكثر <br /><span className="text-gold-300">من مجرد عقار</span></h1>
              <p className="reveal mt-5 max-w-xl text-lg text-white/80">أساعدك في العثور على الفرصة العقارية المناسبة لأسلوب حياتك واستثماراتك، بخبرة وشفافية ومتابعة شخصية في كل خطوة.</p>
              <div className="reveal mt-7 flex flex-wrap gap-3">
                <WaButton className="btn btn-gold" />
                <Link href="/properties" className="btn btn-outline">استعرض الوحدات المتاحة <ArrowLeft size={16} aria-hidden /></Link>
              </div>
              <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {trust.map(([I, t, d]) => (
                  <li key={t} className="text-center sm:text-start"><I className="mx-auto mb-2 text-gold-300 sm:mx-0" size={26} aria-hidden /><p className="text-sm font-bold">{t}</p><p className="text-xs text-white/70">{d}</p></li>
                ))}
              </ul>
            </div>
            <div className="relative -mx-4 h-[420px] lg:mx-0 lg:h-[640px]">
              <Image src="/img/hager-hero.webp" alt="هاجر الدسوقي، مستشارة عقارية" fill priority sizes="(max-width:1024px) 100vw, 45vw" className="object-cover object-[50%_18%] lg:object-top" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink-900/70" />
              <div aria-hidden className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink-900 to-transparent" />
              <div aria-hidden className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-ink-900 to-transparent lg:block" />
              <p aria-hidden className="serif absolute bottom-24 start-4 hidden text-sm uppercase leading-6 tracking-[0.3em] text-white/70 xl:block">More than<br />a property,<br />a better tomorrow</p>
            </div>
          </div>
        </section>

        <div className="relative z-10 -mt-12 px-4"><SearchBar districts={[...new Set(all.map((p) => p.district))]} types={[...new Set(all.map((p) => p.type))]} /></div>

        <section aria-label="كيف نبدأ" className="mx-auto max-w-[1280px] px-4 pb-6 pt-16">
          <ol className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {steps.map(([I, t, d], i) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-200 text-gold-700"><I size={20} aria-hidden /></span>
                <span><span className="block text-sm font-bold">{i + 1}. {t}</span><span className="block text-xs text-muted">{d}</span></span>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <div><p className="eyebrow">مشاريع مختارة بعناية</p><h2 className="text-3xl text-ink-900">أبرز المشاريع</h2></div>
            <Link href="/properties" className="btn btn-outline !border-line text-sm">عرض جميع الوحدات</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {demoProjects.map((pr) => (
              <article key={pr.name} className="card overflow-hidden">
                <div className="relative aspect-[16/10] bg-ink-800">
                  <Image src={pr.image} alt={`${pr.name} (صورة تجريبية)`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  <span className="absolute start-3 top-3 rounded-md bg-white/95 px-3 py-0.5 text-xs font-bold text-ink-900">{pr.tag}</span>
                  <span className="absolute bottom-2 end-2 rounded bg-black/65 px-2 py-0.5 text-[11px] text-white">تجريبي</span>
                </div>
                <div className="p-5"><h3 className="text-lg font-bold text-ink-900">{pr.name}</h3><p className="mt-1 flex items-center gap-1 text-sm text-muted"><MapPin size={14} aria-hidden />{pr.place}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">المشاريع المعروضة أمثلة تجريبية، وتُستبدل بالمشاريع الحقيقية بعد إضافتها وتأكيدها.</p>
        </section>

        <section className="bg-gold-200/60 py-14">
          <div className="mx-auto max-w-[1280px] px-4">
            <div className="flex items-end justify-between gap-4">
              <div><p className="eyebrow">فرص مميزة تناسب احتياجاتك</p><h2 className="text-3xl text-ink-900">وحدات مختارة لك</h2></div>
              <Link href="/properties" className="btn btn-outline !border-gold-600 text-sm">عرض جميع الوحدات</Link>
            </div>
            {demo && <p className="mt-3 text-sm text-muted">الوحدات المعروضة تجريبية وتُستبدل بأول وحدة حقيقية تضيفها من لوحة التحكم.</p>}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{all.slice(0, 4).map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
          </div>
        </section>

        <section id="about" className="bg-ink-900 text-white">
          <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 py-14 md:grid-cols-[1fr_1.1fr]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-ink-800">
              <Image src="/img/hager-about.webp" alt="هاجر الدسوقي" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover object-top" />
            </div>
            <div>
              <p className="signature text-4xl text-gold-300 sm:text-5xl" lang="en" dir="ltr">Hager El Desouky</p>
              <p className="serif text-xs uppercase tracking-[0.3em] text-white/60" lang="en" dir="ltr">Real Estate Consultant</p>
              <h2 className="mt-5 text-3xl">عني</h2>
              <p className="mt-1 font-bold text-gold-300">مستشارة عقارية</p>
              <p className="mt-4 max-w-xl leading-8 text-white/80">أؤمن أن العقار ليس مجرد مكان، بل بداية لفصل جديد في حياتك. من خلال خبرتي في السوق العقاري، أقدّم لك استشارات مخصصة ورؤية متكاملة تساعدك على اتخاذ القرار الأفضل بثقة ووضوح.</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {pillars.map(([I, t, d]) => <li key={t}><I className="mb-1 text-gold-300" size={24} aria-hidden /><p className="text-sm font-bold">{t}</p><p className="text-xs text-white/70">{d}</p></li>)}
              </ul>
              <Link href="/about" className="btn btn-gold mt-8">تعرّف أكثر على رحلتي</Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="text-center"><p className="eyebrow">قصص حقيقية من أشخاص حقيقيين</p><h2 className="text-3xl text-ink-900">آراء عملائنا</h2></div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <figure key={n} className="rounded-[var(--radius-card)] border border-dashed border-gold-600 bg-white p-6 text-center">
                <span className="rounded bg-gold-200 px-2 py-0.5 text-xs font-bold text-gold-700">تجريبي</span>
                <blockquote className="mt-4 text-muted">مكان مخصص لرأي عميل حقيقي، يُضاف بعد الحصول على موافقته.</blockquote>
                <figcaption className="mt-3 text-sm text-muted">— اسم العميل —</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-ink-950 py-14 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <p className="eyebrow !text-gold-300">دعنا نبدأ رحلتك العقارية</p>
            <h2 className="mt-2 text-3xl">تواصل مع هاجر الدسوقي</h2>
            <p className="mt-2 text-white/75">للاستفسار أو حجز موعد استشارة شخصية</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3"><WaButton /><Link href="/book-viewing" className="btn btn-outline">احجز معاينة</Link></div>
          </div>
        </section>
      </main>
      <Footer /><WaFab />
    </>
  );
}
