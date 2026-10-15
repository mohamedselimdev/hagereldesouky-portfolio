import type { Metadata } from "next";
import { PageNav, Footer, WaFab, WaButton } from "@/components/Chrome";
import { getWhatsappNumber } from "@/lib/whatsapp";
import { getDict } from "@/lib/i18n";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getDict()).contact.title, alternates: { canonical: "/contact" } };
}
export default async function Page() {
  const d = await getDict();
  return (<><PageNav /><main id="form" className="mx-auto max-w-3xl px-4 py-10"><h1 className="text-3xl text-ink">{d.contact.title}</h1>
    <div className="card mt-6 space-y-4 p-6">
      {!(await getWhatsappNumber()) && <p className="rounded-lg bg-gold-200 p-3 text-sm">{d.contact.noNumber}</p>}
      <WaButton className="btn btn-primary w-full" />
      <Link href="/book-viewing" className="btn btn-gold w-full">{d.bookConsult}</Link>
    </div></main><Footer /><WaFab /></>);
}
