import { Search } from "lucide-react";
import { getDict, getLocale } from "@/lib/i18n";

export async function SearchBar({ districts = [], types = [] }: { districts?: string[]; types?: string[] }) {
  const d = (await getDict()).search;
  const nf = new Intl.NumberFormat((await getDict()).intl);
  const sel = "field mt-1 appearance-auto";
  const budgets = [8, 12, 25];
  await getLocale();
  return (
    <form action="/properties" method="get" className="card mx-auto grid max-w-[1100px] items-end gap-3 p-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]" role="search" aria-label={d.label}>
      <label className="text-xs font-bold text-ink">{d.district}
        <select name="district" className={sel} defaultValue=""><option value="">{d.allDistricts}</option>{districts.map((x) => <option key={x}>{x}</option>)}</select></label>
      <label className="text-xs font-bold text-ink">{d.type}
        <select name="type" className={sel} defaultValue=""><option value="">{d.allTypes}</option>{types.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label className="text-xs font-bold text-ink">{d.budget}
        <select name="max" className={sel} defaultValue=""><option value="">{d.allBudgets}</option>{budgets.map((m) => <option key={m} value={m * 1_000_000}>{d.upTo(nf.format(m))}</option>)}</select></label>
      <label className="text-xs font-bold text-ink">{d.goal}
        <select name="goal" className={sel} defaultValue=""><option value="">{d.buyRent}</option><option value="buy">{d.buy}</option><option value="rent">{d.rent}</option></select></label>
      <button className="btn btn-primary"><Search size={18} aria-hidden /> {d.go}</button>
    </form>
  );
}
