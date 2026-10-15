import type { Metadata } from "next";
import { PageNav, Footer, WaFab } from "@/components/Chrome";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { getProperties } from "@/lib/properties";
import { getDict, getLocale, localize } from "@/lib/i18n";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getDict()).listing.title, alternates: { canonical: "/properties" } };
}

export default async function Properties({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const q = await searchParams;
  const d = await getDict();
  const max = q.max ? Number(q.max) : undefined;
  const all = localize(await getProperties(), await getLocale());
  let list = all.filter((p) => (!q.district || p.district === q.district) && (!q.type || p.type === q.type) && (!max || p.price == null || p.price <= max));
  if (q.sort === "price") list = [...list].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  return (
    <>
      <PageNav />
      <main className="mx-auto max-w-[1280px] px-4 py-10">
        <h1 className="text-3xl text-ink">{d.listing.title}</h1>
        <div className="mt-6"><SearchBar districts={[...new Set(all.map((p) => p.district))]} types={[...new Set(all.map((p) => p.type))]} /></div>
        <div className="mt-6 flex gap-3 text-sm"><span className="text-muted">{d.listing.sort}</span>
          <Link href={{ query: { ...q, sort: "" } }} className="underline">{d.listing.newest}</Link>
          <Link href={{ query: { ...q, sort: "price" } }} className="underline">{d.listing.cheapest}</Link></div>
        {list.length ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{list.map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
        ) : (
          <div className="card mt-8 p-10 text-center"><p className="font-bold">{d.listing.none}</p><p className="mt-1 text-sm text-muted">{d.listing.noneHint}</p><Link href="/properties" className="btn btn-primary mt-4">{d.listing.clear}</Link></div>
        )}
      </main>
      <Footer /><WaFab />
    </>
  );
}
