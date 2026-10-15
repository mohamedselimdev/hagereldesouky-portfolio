import type { Metadata } from "next";
import "@fontsource/tajawal/arabic-400.css";
import "@fontsource/tajawal/arabic-500.css";
import "@fontsource/tajawal/arabic-700.css";
import "@fontsource/tajawal/arabic-800.css";
import "@fontsource/tajawal/latin-500.css";
import "@fontsource/tajawal/latin-700.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/allura/latin-400.css";
import "./globals.css";
import { getDict, getLocale } from "@/lib/i18n";

// WhatsApp number is editable from /admin/settings, so pages render per request.
export const dynamic = "force-dynamic";

const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export async function generateMetadata(): Promise<Metadata> {
  const d = await getDict();
  return {
    metadataBase: new URL(site),
    title: { default: d.siteTitle, template: `%s | ${d.name}` },
    description: d.siteDesc,
    alternates: { canonical: "/" },
    icons: { icon: "/icon.png" },
    openGraph: { title: d.siteTitle, description: d.siteDesc, images: ["/brand/logo-full.png"] },
  };
}

// Runs before paint: saved choice, else the OS preference.
const themeInit = `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const d = await getDict();
  return (
    <html lang={locale} dir={d.dir} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
