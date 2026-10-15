// DEMO DATA ONLY: not real listings. Replace via the dashboard once real units exist.
export type Property = {
  slug: string; code: string; name: string; project: string; district: string; type: string;
  area: number; beds: number; baths: number; price: number | null; status: "available" | "ready" | "soon";
  image: string; tags: string[]; installments: boolean; demo?: boolean;
};
export const statusLabel = { available: "متاح", ready: "جاهز للاستلام", soon: "قريباً" } as const;

export const demoProperties: Property[] = [
  { slug: "demo-apartment", code: "DEMO-001", name: "شقة تجريبية", project: "مشروع تجريبي أ", district: "منطقة تجريبية ١", type: "شقة", area: 160, beds: 3, baths: 2, price: null, status: "available", image: "/img/demo-unit-1.webp", tags: ["تجريبي"], installments: true, demo: true },
  { slug: "demo-villa", code: "DEMO-002", name: "فيلا تجريبية", project: "مشروع تجريبي ب", district: "منطقة تجريبية ٢", type: "فيلا", area: 350, beds: 4, baths: 4, price: null, status: "ready", image: "/img/demo-unit-2.webp", tags: ["تجريبي"], installments: false, demo: true },
  { slug: "demo-furnished", code: "DEMO-003", name: "شقة مفروشة تجريبية", project: "مشروع تجريبي ج", district: "منطقة تجريبية ١", type: "شقة", area: 120, beds: 2, baths: 2, price: null, status: "available", image: "/img/demo-unit-3.webp", tags: ["تجريبي"], installments: false, demo: true },
  { slug: "demo-townhouse", code: "DEMO-004", name: "تاون هاوس تجريبي", project: "مشروع تجريبي د", district: "منطقة تجريبية ٣", type: "تاون هاوس", area: 240, beds: 4, baths: 3, price: null, status: "soon", image: "/img/demo-unit-4.webp", tags: ["تجريبي"], installments: true, demo: true },
];

// Placeholder featured projects. No real developer or project names until supplied by the owner.
export const demoProjects = [
  { name: "مشروع تجريبي ١", tag: "ساحلي", place: "موقع يُحدَّد لاحقاً", image: "/img/demo-project-1.webp" },
  { name: "مشروع تجريبي ٢", tag: "سكني", place: "موقع يُحدَّد لاحقاً", image: "/img/demo-project-2.webp" },
  { name: "مشروع تجريبي ٣", tag: "فاخر", place: "موقع يُحدَّد لاحقاً", image: "/img/demo-project-3.webp" },
];

type Fmt = { intl: string; currency: string; priceOnRequest: string };
const arFmt: Fmt = { intl: "ar-EG", currency: "ج.م", priceOnRequest: "السعر عند الطلب" };
export const fmtPrice = (p: number | null, f: Fmt = arFmt) => (p == null ? f.priceOnRequest : new Intl.NumberFormat(f.intl).format(p) + " " + f.currency);
export const fmtNum = (n: number, intl = "ar-EG") => new Intl.NumberFormat(intl).format(n);
