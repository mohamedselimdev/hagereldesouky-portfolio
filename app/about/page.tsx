import type { Metadata } from "next";
import Image from "next/image";
import { PageNav, Footer, WaButton } from "@/components/Chrome";
import { getDict } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getDict()).about.title, alternates: { canonical: "/about" } };
}
export default async function Page() {
  const d = await getDict();
  return (<><PageNav /><main className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-[1fr_1.4fr]">
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-800"><Image src="/img/hager-about.webp" alt={d.name} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover object-top" /></div>
    <div><p className="eyebrow">{d.role}</p><h1 className="text-3xl text-ink">{d.name}</h1>
      <p className="mt-4 leading-8 text-muted">{d.about.body}</p>
      <p className="mt-4 rounded-lg bg-gold-200 p-3 text-sm text-ink">{d.about.note}</p>
      <div className="mt-6"><WaButton className="btn btn-primary" /></div></div></main><Footer /></>);
}
