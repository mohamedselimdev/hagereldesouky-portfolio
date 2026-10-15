import type { Metadata } from "next";
import Image from "next/image";
import { PageNav, Footer, WaFab, WaButton } from "@/components/Chrome";
export const metadata: Metadata = { title: "عني", alternates: { canonical: "/about" } };
export default function Page() {
  return (<><PageNav /><main className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-[1fr_1.4fr]">
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-800"><Image src="/img/hager-about.webp" alt="هاجر الدسوقي" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover object-top" /></div>
    <div><p className="eyebrow">مستشارة عقارية</p><h1 className="text-3xl text-ink-900">هاجر الدسوقي</h1>
      <p className="mt-4 leading-8 text-muted">أؤمن أن العقار ليس مجرد مكان، بل بداية لفصل جديد في حياتك. أقدّم استشارات مخصصة ومتابعة شخصية تساعدك على اتخاذ القرار الأفضل بثقة ووضوح.</p>
      <p className="mt-4 rounded-lg bg-gold-200 p-3 text-sm text-ink-800">السيرة المهنية والإنجازات تُضاف بعد التحقق منها. لا تُعرض أي أرقام (سنوات خبرة، عملاء، صفقات) قبل تأكيدها.</p>
      <div className="mt-6"><WaButton className="btn btn-primary" /></div></div></main><Footer /><WaFab /></>);
}
