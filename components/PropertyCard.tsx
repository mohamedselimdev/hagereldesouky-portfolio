import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Ruler } from "lucide-react";
import { Property, fmtPrice, fmtNum, statusLabel } from "@/lib/data";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="card flex flex-col overflow-hidden transition-shadow hover:shadow-[var(--shadow-hover)]">
      <div className="relative aspect-[4/3] bg-ink-800">
        <Image src={p.image} alt={p.demo ? `${p.name} (صورة تجريبية)` : p.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" unoptimized={p.image.startsWith("http")} />
        <span className="absolute start-3 top-3 rounded-md bg-ink-900/90 px-3 py-0.5 text-xs font-bold text-gold-300">{statusLabel[p.status]}</span>
        {p.demo && <span className="absolute bottom-2 end-2 rounded bg-black/65 px-2 py-0.5 text-[11px] text-white">تجريبية</span>}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-bold text-ink-900">{p.name}</h3>
        <p className="text-sm text-muted">{p.project} · {p.district}</p>
        <div className="flex gap-4 text-sm text-muted">
          <span className="flex items-center gap-1"><Ruler size={15} aria-hidden />{fmtNum(p.area)} م²</span>
          <span className="flex items-center gap-1"><BedDouble size={15} aria-hidden />{fmtNum(p.beds)}</span>
          <span className="flex items-center gap-1"><Bath size={15} aria-hidden />{fmtNum(p.baths)}</span>
        </div>
        <p className="text-lg font-extrabold text-gold-700">{fmtPrice(p.price)}</p>
        <Link href={`/properties/${p.slug}`} className="btn btn-primary mt-auto w-full text-sm">تفاصيل الوحدة</Link>
      </div>
    </article>
  );
}
