import { kv } from "./store";

const KEY = "whatsapp_number";
const envNumber = () => (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

/** E.164 digits without "+", e.g. 20XXXXXXXXXX. */
export const isValidWa = (n: string) => /^[1-9]\d{9,14}$/.test(n);

export const hasSettingsStore = () => !!kv();

/** Number saved from the dashboard (KV) wins; env var is the fallback. */
export async function getWhatsappNumber(): Promise<string> {
  try {
    const saved = ((await kv()?.get(KEY)) ?? "").replace(/\D/g, "");
    if (isValidWa(saved)) return saved;
  } catch {}
  const env = envNumber();
  return isValidWa(env) ? env : "";
}

export async function setWhatsappNumber(n: string) {
  const store = kv();
  if (!store) throw new Error("no-store");
  if (n) await store.put(KEY, n);
  else await store.delete(KEY);
}

/** wa.me link; falls back to /contact when no verified number is configured. */
export function waLink(number: string, message: string) {
  if (!number) return "/contact#form";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
