# Urban Sparkle Cleaners

Professional cleaning services website for the Hamilton/Burlington area (Ontario, Canada).

**Stack:** Next.js 16 · TypeScript · Tailwind CSS · Prisma · PostgreSQL · Nodemailer

## Features

- Service booking with email notifications
- Contact & career application forms
- Dynamic service area pages (16 cities)
- Blog, FAQ, pricing calculator
- SEO-optimized with JSON-LD, sitemap, robots.txt
- Standalone Docker build for self-hosted deployment

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
# Fill in all values in .env.local
```

### 3. Set up the database

```bash
# Push schema to your PostgreSQL database
npm run db:push

# Or run migrations (production)
npm run db:migrate
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See [.env.example](.env.example) for all required variables:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `GMAIL_USER` | Gmail address for sending notifications |
| `GMAIL_APP_PASSWORD` | Gmail App Password (not your account password) |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID |
| `ADMIN_PASSWORD` | Admin access password |

## Deployment (Coolify + OVHcloud)

See deployment steps below. The app uses `output: "standalone"` in Next.js config, making it ideal for Docker/Coolify deployment.

### Build Docker image locally

```bash
docker build -t urbansparklecleaners .
docker run -p 3000:3000 --env-file .env.local urbansparklecleaners
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push Prisma schema to DB |
| `npm run db:migrate` | Run Prisma migrations |
