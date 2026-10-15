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

// WhatsApp number is editable from /admin/settings, so pages render per request.
export const dynamic = "force-dynamic";

const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "هاجر الدسوقي | مستشارة عقارية", template: "%s | هاجر الدسوقي" },
  description: "هاجر الدسوقي، مستشارة عقارية تساعدك في العثور على الوحدة المناسبة بخبرة وشفافية ومتابعة شخصية.",
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
