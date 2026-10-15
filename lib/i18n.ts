import { cookies } from "next/headers";
import type { Property } from "./data";

export type Locale = "ar" | "en";
export const LOCALE_COOKIE = "lang";

export async function getLocale(): Promise<Locale> {
  return (await cookies()).get(LOCALE_COOKIE)?.value === "en" ? "en" : "ar";
}

const ar = {
  dir: "rtl" as "rtl" | "ltr",
  intl: "ar-EG",
  name: "هاجر الدسوقي",
  nameLatin: "HAGER EL DESOUKY",
  role: "مستشارة عقارية",
  siteTitle: "هاجر الدسوقي | مستشارة عقارية",
  siteDesc: "هاجر الدسوقي، مستشارة عقارية تساعدك في العثور على الوحدة المناسبة بخبرة وشفافية ومتابعة شخصية.",
  nav: [["/", "الرئيسية"], ["/#projects", "المشاريع"], ["/properties", "الوحدات المتاحة"], ["/about", "عني"], ["/#testimonials", "آراء العملاء"], ["/contact", "تواصل معي"]] as [string, string][],
  homeLabel: "هاجر الدسوقي - الرئيسية",
  mainNav: "القائمة الرئيسية", mobileNav: "قائمة الجوال", openMenu: "فتح القائمة", closeMenu: "إغلاق القائمة",
  themeToggle: "تبديل الوضع بين الفاتح والداكن", langToggle: "English", langAria: "Switch to English",
  wa: "تواصل عبر واتساب", waShort: "واتساب",
  waGeneral: "مرحباً أستاذة هاجر، أرغب في الاستفسار عن الوحدات المتاحة.",
  waProperty: (n: string, c: string, u: string) => `مرحباً أستاذة هاجر، مهتم بوحدة ${n} رقم ${c} ورابطها ${u}، وأرغب في معرفة التفاصيل أو حجز معاينة.`,
  bookViewing: "احجز معاينة", bookConsult: "احجز معاينة أو استشارة", contactMe: "تواصل معي", unitDetails: "تفاصيل الوحدة", viewAll: "عرض جميع الوحدات",
  demo: "تجريبي", demoF: "تجريبية", demoImg: "صورة تجريبية",
  status: { available: "متاح", ready: "جاهز للاستلام", soon: "قريباً" },
  sqm: "م²", currency: "ج.م", priceOnRequest: "السعر عند الطلب",
  footer: { blurb: "استشارات عقارية بخبرة وشفافية ومتابعة شخصية لاختيار وحدتك المناسبة.", links: "روابط", legal: "قانوني", privacy: "سياسة الخصوصية", copy: "© هاجر الدسوقي." },
  search: { label: "بحث عن وحدة", district: "المنطقة / المدينة", allDistricts: "كل المناطق", type: "نوع الوحدة", allTypes: "كل الأنواع", budget: "الميزانية", allBudgets: "كل الميزانيات", upTo: (n: string) => `حتى ${n} مليون`, goal: "الهدف", buyRent: "شراء أو إيجار", buy: "شراء", rent: "إيجار", go: "بحث عن عقار" },
  home: {
    eyebrow: "مستشارة عقارية متميزة",
    h1a: "لأنك تستحق أكثر", h1b: "من مجرد عقار",
    lead: "أساعدك في العثور على الفرصة العقارية المناسبة لأسلوب حياتك واستثماراتك، بخبرة وشفافية ومتابعة شخصية في كل خطوة.",
    browse: "استعرض الوحدات المتاحة",
    heroAlt: "هاجر الدسوقي، مستشارة عقارية",
    tagline: ["More than", "a property,", "a better tomorrow"],
    trust: [["متابعة ما بعد البيع", "لبناء علاقة طويلة المدى"], ["مصداقية وشفافية", "في كل خطوة"], ["أفضل المشاريع", "في أهم المواقع"], ["استشارات مخصصة", "تناسب أهدافك"]] as [string, string][],
    stepsLabel: "كيف نبدأ",
    steps: [["حدّد احتياجك", "أخبرني بما تبحث عنه وميزانيتك"], ["عرض الخيارات", "أقدّم لك وحدات مناسبة ومعلومات موثّقة"], ["حجز معاينة", "نحدد موعدًا يناسبك"], ["إتمام التعاقد", "ومتابعة حتى الاستلام"]] as [string, string][],
    projEyebrow: "مشاريع مختارة بعناية", projTitle: "أبرز المشاريع", projNote: "المشاريع المعروضة أمثلة تجريبية، وتُستبدل بالمشاريع الحقيقية بعد إضافتها وتأكيدها.",
    unitsEyebrow: "فرص مميزة تناسب احتياجاتك", unitsTitle: "وحدات مختارة لك", unitsNote: "الوحدات المعروضة تجريبية وتُستبدل بأول وحدة حقيقية تضيفها من لوحة التحكم.",
    aboutTitle: "عني", aboutBody: "أؤمن أن العقار ليس مجرد مكان، بل بداية لفصل جديد في حياتك. من خلال خبرتي في السوق العقاري، أقدّم لك استشارات مخصصة ورؤية متكاملة تساعدك على اتخاذ القرار الأفضل بثقة ووضوح.",
    pillars: [["دعم مستمر", "في كل خطوة"], ["استشارات مخصصة", "حسب احتياجاتك"], ["فهم عميق للسوق", "وتحليل الفرص"]] as [string, string][],
    aboutAlt: "هاجر الدسوقي", aboutCta: "تعرّف أكثر على رحلتي",
    tEyebrow: "قصص حقيقية من أشخاص حقيقيين", tTitle: "آراء عملائنا", tBody: "مكان مخصص لرأي عميل حقيقي، يُضاف بعد الحصول على موافقته.", tName: "— اسم العميل —",
    ctaEyebrow: "دعنا نبدأ رحلتك العقارية", ctaTitle: "تواصل مع هاجر الدسوقي", ctaBody: "للاستفسار أو حجز موعد استشارة شخصية",
  },
  projects: [{ name: "مشروع تجريبي ١", tag: "ساحلي" }, { name: "مشروع تجريبي ٢", tag: "سكني" }, { name: "مشروع تجريبي ٣", tag: "فاخر" }],
  projectPlace: "موقع يُحدَّد لاحقاً",
  listing: { title: "الوحدات المتاحة", sort: "ترتيب:", newest: "الأحدث", cheapest: "السعر الأقل", none: "لا توجد وحدات مطابقة", noneHint: "جرّب توسيع الفلاتر أو تواصل معي لمساعدتك.", clear: "مسح الفلاتر" },
  detail: { code: "الكود", project: "المشروع", district: "المنطقة", type: "النوع", area: "المساحة", beds: "الغرف", baths: "الحمامات", status: "الحالة", installments: "التقسيط", yes: "متاح", no: "غير متاح", demoNote: "الصورة والبيانات تجريبية وليست وحدة فعلية.", ask: "استفسر عبر واتساب", call: "اتصال بالمستشارة" },
  about: { title: "عني", body: "أؤمن أن العقار ليس مجرد مكان، بل بداية لفصل جديد في حياتك. أقدّم استشارات مخصصة ومتابعة شخصية تساعدك على اتخاذ القرار الأفضل بثقة ووضوح.", note: "السيرة المهنية والإنجازات تُضاف بعد التحقق منها. لا تُعرض أي أرقام (سنوات خبرة، عملاء، صفقات) قبل تأكيدها." },
  contact: { title: "تواصل معي", noNumber: "رقم واتساب لم يُضبط بعد . سيعمل الزر فور إضافة الرقم الموثّق." },
  privacy: { title: "سياسة الخصوصية", body: "نجمع الحد الأدنى من البيانات (الاسم، الهاتف، تفضيلات الموعد) لغرض التواصل بخصوص طلبك فقط، ولا نشاركها مع أطراف أخرى دون موافقتك. (مسودة، تُراجع قانونيًا قبل الإطلاق.)" },
  notFound: { title: "٤٠٤", body: "الصفحة غير موجودة", home: "الرئيسية" },
  book: {
    name: "الاسم", phone: "رقم الهاتف", property: "كود الوحدة (اختياري)", channel: "وسيلة التواصل", whatsapp: "واتساب", call: "اتصال", date: "التاريخ", time: "الوقت", notes: "ملاحظات",
    consentA: "أوافق على استخدام بياناتي للتواصل معي بخصوص هذا الطلب (", consentB: "سياسة الخصوصية", consentC: ").",
    busy: "جارٍ الإرسال...", submit: "تأكيد طلب الحجز", okTitle: "تم استلام طلب الحجز", okBody: "سنتواصل معك لتأكيد الموعد. الطلب لا يُعدّ مؤكدًا قبل التأكيد.", error: "حدث خطأ",
  },
};
export type Dict = typeof ar;

const en: Dict = {
  dir: "ltr",
  intl: "en-US",
  name: "Hager El Desouky",
  nameLatin: "REAL ESTATE CONSULTANT",
  role: "Real Estate Consultant",
  siteTitle: "Hager El Desouky | Real Estate Consultant",
  siteDesc: "Hager El Desouky, a real estate consultant helping you find the right property with expertise, transparency and personal follow-up.",
  nav: [["/", "Home"], ["/#projects", "Projects"], ["/properties", "Properties"], ["/about", "About"], ["/#testimonials", "Testimonials"], ["/contact", "Contact"]],
  homeLabel: "Hager El Desouky - Home",
  mainNav: "Main navigation", mobileNav: "Mobile navigation", openMenu: "Open menu", closeMenu: "Close menu",
  themeToggle: "Switch between light and dark mode", langToggle: "عربي", langAria: "التبديل إلى العربية",
  wa: "Chat on WhatsApp", waShort: "WhatsApp",
  waGeneral: "Hello Hager, I would like to ask about the available properties.",
  waProperty: (n, c, u) => `Hello Hager, I am interested in ${n} (code ${c}), link: ${u}. I would like more details or to book a viewing.`,
  bookViewing: "Book a viewing", bookConsult: "Book a viewing or consultation", contactMe: "Contact me", unitDetails: "View details", viewAll: "View all properties",
  demo: "Demo", demoF: "Demo", demoImg: "demo image",
  status: { available: "Available", ready: "Ready to move in", soon: "Coming soon" },
  sqm: "sqm", currency: "EGP", priceOnRequest: "Price on request",
  footer: { blurb: "Real estate advice with expertise, transparency and personal follow-up to help you choose the right property.", links: "Links", legal: "Legal", privacy: "Privacy policy", copy: "© Hager El Desouky." },
  search: { label: "Property search", district: "Area / City", allDistricts: "All areas", type: "Property type", allTypes: "All types", budget: "Budget", allBudgets: "Any budget", upTo: (n) => `Up to ${n}M`, goal: "Goal", buyRent: "Buy or rent", buy: "Buy", rent: "Rent", go: "Search properties" },
  home: {
    eyebrow: "Distinguished real estate consultant",
    h1a: "Because you deserve", h1b: "more than a property",
    lead: "I help you find the right real estate opportunity for your lifestyle and investments, with expertise, transparency and personal follow-up at every step.",
    browse: "Browse available properties",
    heroAlt: "Hager El Desouky, real estate consultant",
    tagline: ["More than", "a property,", "a better tomorrow"],
    trust: [["After-sale follow-up", "Building a long-term relationship"], ["Honesty and transparency", "At every step"], ["Top projects", "In prime locations"], ["Tailored advice", "Matched to your goals"]],
    stepsLabel: "How we start",
    steps: [["Define your needs", "Tell me what you are looking for and your budget"], ["See the options", "I present suitable, verified properties"], ["Book a viewing", "We pick a time that suits you"], ["Close the deal", "And follow up until handover"]],
    projEyebrow: "Carefully selected projects", projTitle: "Featured projects", projNote: "The projects shown are demo examples and will be replaced with real projects once added and confirmed.",
    unitsEyebrow: "Great opportunities for your needs", unitsTitle: "Selected for you", unitsNote: "The properties shown are demo content and are replaced as soon as the first real property is added from the dashboard.",
    aboutTitle: "About me", aboutBody: "I believe a property is not just a place, but the start of a new chapter in your life. With my experience in the real estate market, I offer tailored advice and a complete view to help you decide with confidence and clarity.",
    pillars: [["Ongoing support", "At every step"], ["Tailored advice", "Based on your needs"], ["Deep market insight", "And opportunity analysis"]],
    aboutAlt: "Hager El Desouky", aboutCta: "Learn more about my journey",
    tEyebrow: "Real stories from real people", tTitle: "Client testimonials", tBody: "Space for a real client review, added only with their consent.", tName: "— Client name —",
    ctaEyebrow: "Let us start your property journey", ctaTitle: "Get in touch with Hager El Desouky", ctaBody: "To ask a question or book a personal consultation",
  },
  projects: [{ name: "Demo project 1", tag: "Coastal" }, { name: "Demo project 2", tag: "Residential" }, { name: "Demo project 3", tag: "Luxury" }],
  projectPlace: "Location to be announced",
  listing: { title: "Available properties", sort: "Sort:", newest: "Newest", cheapest: "Lowest price", none: "No matching properties", noneHint: "Try widening the filters or contact me for help.", clear: "Clear filters" },
  detail: { code: "Code", project: "Project", district: "Area", type: "Type", area: "Size", beds: "Bedrooms", baths: "Bathrooms", status: "Status", installments: "Installments", yes: "Available", no: "Not available", demoNote: "The image and data are demo content, not a real property.", ask: "Ask on WhatsApp", call: "Contact the consultant" },
  about: { title: "About me", body: "I believe a property is not just a place, but the start of a new chapter in your life. I offer tailored advice and personal follow-up to help you decide with confidence and clarity.", note: "Professional background and achievements are added once verified. No figures (years of experience, clients, deals) are shown before they are confirmed." },
  contact: { title: "Contact me", noNumber: "The WhatsApp number is not set yet. The button works as soon as a verified number is added." },
  privacy: { title: "Privacy policy", body: "We collect the minimum data (name, phone, appointment preferences) only to follow up on your request, and never share it with third parties without your consent. (Draft, to be reviewed legally before launch.)" },
  notFound: { title: "404", body: "Page not found", home: "Home" },
  book: {
    name: "Name", phone: "Phone number", property: "Property code (optional)", channel: "Preferred contact", whatsapp: "WhatsApp", call: "Phone call", date: "Date", time: "Time", notes: "Notes",
    consentA: "I agree to my data being used to contact me about this request (", consentB: "privacy policy", consentC: ").",
    busy: "Sending...", submit: "Confirm booking request", okTitle: "Booking request received", okBody: "We will contact you to confirm the time. The request is not confirmed until then.", error: "Something went wrong",
  },
};

export const dicts: Record<Locale, Dict> = { ar, en };
export const getDict = async () => dicts[await getLocale()];

// Demo units are stored in Arabic; show English text for them. Real units keep whatever was entered.
const demoEn: Record<string, Pick<Property, "name" | "project" | "district" | "type" | "tags">> = {
  "demo-apartment": { name: "Demo apartment", project: "Demo project A", district: "Demo area 1", type: "Apartment", tags: ["Demo"] },
  "demo-villa": { name: "Demo villa", project: "Demo project B", district: "Demo area 2", type: "Villa", tags: ["Demo"] },
  "demo-furnished": { name: "Demo furnished apartment", project: "Demo project C", district: "Demo area 1", type: "Apartment", tags: ["Demo"] },
  "demo-townhouse": { name: "Demo townhouse", project: "Demo project D", district: "Demo area 3", type: "Townhouse", tags: ["Demo"] },
};
export const localize = (list: Property[], locale: Locale): Property[] =>
  locale === "ar" ? list : list.map((p) => (p.demo && demoEn[p.slug] ? { ...p, ...demoEn[p.slug] } : p));
