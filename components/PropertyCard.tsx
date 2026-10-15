import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Ruler } from "lucide-react";
import { Property, fmtPrice, fmtNum } from "@/lib/data";
import { getDict } from "@/lib/i18n";

export async function PropertyCard({ p }: { p: Property }) {
  const d = await getDict();
  return (
    <article className="card flex flex-col overflow-hidden transition-shadow hover:shadow-[var(--shadow-hover)]">
      <div className="relative aspect-[4/3] bg-ink-800">
        <Image src={p.image} alt={p.demo ? `${p.name} (${d.demoImg})` : p.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" unoptimized={p.image.startsWith("http")} />
        <span className="absolute start-3 top-3 rounded-md bg-ink-900/90 px-3 py-0.5 text-xs font-bold text-gold-300">{d.status[p.status]}</span>
        {p.demo && <span className="absolute bottom-2 end-2 rounded bg-black/65 px-2 py-0.5 text-[11px] text-white">{d.demoF}</span>}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:gap-2 sm:p-4">
        <h3 className="text-base font-bold text-ink sm:text-lg">{p.name}</h3>
        <p className="text-sm text-muted">{p.project} · {p.district}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted sm:gap-4 sm:text-sm">
          <span className="flex items-center gap-1"><Ruler size={15} aria-hidden />{fmtNum(p.area, d.intl)} {d.sqm}</span>
          <span className="flex items-center gap-1"><BedDouble size={15} aria-hidden />{fmtNum(p.beds, d.intl)}</span>
          <span className="flex items-center gap-1"><Bath size={15} aria-hidden />{fmtNum(p.baths, d.intl)}</span>
        </div>
        <p className="text-base font-extrabold text-gold-700 sm:text-lg">{fmtPrice(p.price, d)}</p>
        <Link href={`/properties/${p.slug}`} className="btn btn-primary mt-auto w-full text-sm">{d.unitDetails}</Link>
      </div>
    </article>
  );
}
