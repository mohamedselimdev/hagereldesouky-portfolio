import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageNav, Footer, WaButton } from "@/components/Chrome";
import { fmtPrice, fmtNum } from "@/lib/data";
import { getProperty } from "@/lib/properties";
import { getDict, getLocale, localize } from "@/lib/i18n";

type P = { params: Promise<{ slug: string }> };
async function load(slug: string) {
  const p = await getProperty(slug);
  return p ? localize([p], await getLocale())[0] : undefined;
}
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const p = await load(slug);
  if (!p) return {};
  return { title: p.name, alternates: { canonical: `/properties/${p.slug}` } };
}

export default async function PropertyPage({ params }: P) {
  const { slug } = await params;
  const p = await load(slug);
  if (!p) notFound();
  const d = await getDict();
  const t = d.detail;
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const msg = d.waProperty(p.name, p.code, `${site}/properties/${p.slug}`);
  const rows: [string, string][] = [[t.code, p.code], [t.project, p.project], [t.district, p.district], [t.type, p.type], [t.area, `${fmtNum(p.area, d.intl)} ${d.sqm}`], [t.beds, fmtNum(p.beds, d.intl)], [t.baths, fmtNum(p.baths, d.intl)], [t.status, d.status[p.status]], [t.installments, p.installments ? t.yes : t.no]];
  return (
    <>
      <PageNav />
      <main className="mx-auto grid max-w-[1280px] gap-8 px-4 py-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-ink-800">
            <Image src={p.image} alt={p.demo ? `${p.name} (${d.demoImg})` : p.name} fill priority sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" unoptimized={p.image.startsWith("http")} />
          </div>
          {p.demo && <p className="mt-2 text-xs text-muted">{t.demoNote}</p>}
          <h1 className="mt-4 text-3xl text-ink">{p.name}</h1>
          <dl className="card mt-6 grid grid-cols-2 gap-4 p-6 sm:grid-cols-3">
            {rows.map(([k, v]) => <div key={k}><dt className="text-xs text-muted">{k}</dt><dd className="font-bold">{v}</dd></div>)}
          </dl>
        </div>
        <aside className="card h-fit space-y-3 p-6 lg:sticky lg:top-6">
          <p className="text-2xl font-extrabold text-gold-700">{fmtPrice(p.price, d)}</p>
          <WaButton message={msg} label={t.ask} className="btn btn-primary w-full" />
          <Link href={`/book-viewing?property=${p.code}`} className="btn btn-gold w-full">{d.bookViewing}</Link>
          <Link href="/contact" className="btn w-full border border-line">{t.call}</Link>
        </aside>
      </main>
      <Footer />
    </>
  );
}
