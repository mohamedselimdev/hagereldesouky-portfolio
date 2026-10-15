import type { Metadata } from "next";
import { PageNav, Footer } from "@/components/Chrome";
import { getDict } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getDict()).privacy.title };
}
export default async function Page() {
  const d = await getDict();
  return (<><PageNav /><main className="mx-auto max-w-3xl space-y-3 px-4 py-10 leading-8"><h1 className="text-3xl">{d.privacy.title}</h1>
    <p>{d.privacy.body}</p></main><Footer /></>);
}
