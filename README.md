# Hager El Desouky | Real Estate Consultant

Arabic (RTL) portfolio and listings site for the real estate consultant Hager El Desouky.
Next.js 15 (App Router) + TypeScript + Tailwind 4, deployed to Cloudflare Workers with `@opennextjs/cloudflare`.

## Architecture
- `app/`: public pages (home, listings, listing details, book a viewing, contact, about, privacy) and `app/admin/*` (units, bookings, settings).
- `lib/store.ts`: Cloudflare KV binding `SETTINGS`. Everything persistent lives there (units, bookings, WhatsApp number). `DEV_MEMORY_KV=1` swaps in an in-memory store for local testing only.
- `lib/data.ts`: labelled demo units/projects, shown until the first real unit is added from `/admin/properties`.
- `lib/bookings.ts` + `app/api/bookings/route.ts`: validated bookings, one booking per date/time slot.
- `lib/notify.ts`: optional Telegram / Resend notifications for new bookings.
- `lib/whatsapp.ts`: number saved in `/admin/settings` wins; falls back to `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- `middleware.ts`: Basic Auth for `/admin` (fails closed with 503 when credentials are missing).
- Theme tokens (colours, radii, fonts) are CSS variables at the top of `app/globals.css`.

## Local run
Create `.env.local` (git-ignored) with temporary values:
```
ADMIN_USER=...
ADMIN_PASSWORD=...
DEV_MEMORY_KV=1
```
then `npm install && npm run dev`.

## Content status
Demo units, demo projects and testimonial placeholders are labelled "تجريبي". No real prices, reviews, statistics or developer names are shipped. Replace them from the dashboard / with verified material.

## Deploy (Cloudflare Workers)
Worker name: `hager-desouky-realestate`. The `SETTINGS` KV namespace is created automatically on first deploy by Wrangler; do not reuse an id from another project.
1. From a local machine: `npx wrangler login`, then `npm run cf:deploy`.
2. Set secrets: `npx wrangler secret put ADMIN_USER` and `npx wrangler secret put ADMIN_PASSWORD` (long random password).
3. Optional: `NEXT_PUBLIC_SITE_URL` (canonical URL), `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID`, `RESEND_API_KEY` + `NOTIFY_EMAIL_FROM` + `NOTIFY_EMAIL_TO`.

Alternatives: Cloudflare Workers Builds (Import a repository, build `npm run cf:build`, deploy `npx opennextjs-cloudflare deploy`), or the manual GitHub Actions workflow in `.github/workflows/deploy.yml` (needs `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `ADMIN_USER`, `ADMIN_PASSWORD` repository secrets).
