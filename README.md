# RateXpose

RateXpose is an anonymous rate-sharing platform for Canadians. The idea is simple: telecom and utility pricing in Canada is notoriously opaque, and most people have no idea if they're overpaying. RateXpose lets users anonymously submit what they actually pay for their mobile, internet, and utility plans so that everyone can compare and make better decisions.

Live at [ratexpose.ca](https://ratexpose.ca)

## What it does

Users can browse submitted rates across three categories (mobile plans, internet plans, and utility bills), filter and sort by provider/price/data, and view price distribution and trend charts. To submit your own rates, you sign up for a free account and go through a guided multi-step form where you pick your provider, enter your plan details, and submit. Everything is anonymous.

The app pulls all its data from Supabase, which handles both auth and the database. Visualizations on the homepage show price distributions by provider and 90-day pricing trends, built with Recharts.

## Tech stack

- **Next.js 14** with TypeScript and the App Router
- **Supabase** for authentication and PostgreSQL database
- **Tailwind CSS** for styling
- **Recharts** for data visualizations

## Project structure

```
src/
├── app/
│   ├── components/          # Shared UI (Header, Footer, Modal, plan cards, charts)
│   ├── mobile-plans/        # Browse mobile plans page
│   ├── internet-plans/      # Browse internet plans page
│   ├── utility-plans/       # Browse utility plans page
│   ├── post-mobile-plan/    # Submit mobile plan form
│   ├── post-internet-plan/  # Submit internet plan form
│   ├── post-utility-provider/ # Submit utility bill form
│   ├── post-bill/           # Category selection hub
│   ├── login/               # Login page
│   ├── sign-up/             # Registration page
│   ├── about/               # About page
│   └── page.tsx             # Landing page
├── lib/
│   ├── supabase.ts          # Supabase client, all DB queries, data aggregation
│   ├── auth.ts              # Auth helpers (sign up, sign in, sign out, session)
│   ├── AuthContext.tsx       # React context for auth state
│   └── hooks/               # Custom hooks for plan filtering/sorting
│       ├── useMobilePlans.ts
│       ├── useInternetPlans.ts
│       └── useUtilityPlans.ts
└── styles/
    └── globals.css          # Tailwind config and custom component styles
```

## Running locally

```bash
git clone https://github.com/muzman123/rateXpose.git
cd rateXpose
npm install
```

Create a `.env.local` file with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Then start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contributors

Built by [muzman123](https://github.com/muzman123) with initial scaffolding by [mahsanziak](https://github.com/mahsanziak).
