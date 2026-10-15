import { Suspense } from "react";
import type { Metadata } from "next";
import { PageNav, Footer, WaFab } from "@/components/Chrome";
import { getDict } from "@/lib/i18n";
import { BookingForm } from "./BookingForm";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getDict()).bookViewing, alternates: { canonical: "/book-viewing" } };
}
export default async function Page() {
  const d = await getDict();
  return (<><PageNav /><main className="mx-auto max-w-3xl px-4 py-10"><h1 className="mb-6 text-3xl text-ink">{d.bookConsult}</h1><Suspense><BookingForm t={d.book} /></Suspense></main><Footer /><WaFab /></>);
}
