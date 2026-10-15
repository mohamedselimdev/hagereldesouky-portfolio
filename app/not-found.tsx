import Link from "next/link";
import { getDict } from "@/lib/i18n";

export default async function NF() {
  const d = (await getDict()).notFound;
  return <main className="grid min-h-screen place-items-center bg-cream text-center"><div><h1 className="text-5xl font-extrabold text-ink">{d.title}</h1><p className="mt-2 text-muted">{d.body}</p><Link href="/" className="btn btn-primary mt-4">{d.home}</Link></div></main>;
}
