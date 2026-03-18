# Deployment Guide: OVHcloud + Coolify + PostgreSQL

## Architecture Overview

```
GitHub (vankyaccount/UrbanSparkleCleaners)
    │
    │  git push → auto-deploy
    ▼
OVHcloud VPS (Ubuntu 22.04)
    └── Coolify
        ├── Next.js App (Docker container, port 3000)
        ├── PostgreSQL (Docker container)
        └── Nginx + SSL (Let's Encrypt, auto-managed)
```

---

## Part 1 — OVHcloud VPS Setup

### 1.1 Order a VPS

1. Go to [ovhcloud.com](https://ovhcloud.com) → VPS
2. Recommended spec: **VPS Starter** or higher (2 vCPU, 2 GB RAM minimum for Coolify + PostgreSQL + Next.js)
3. OS: **Ubuntu 22.04 LTS**
4. Region: Canada (BHS) or closest to your users
5. Complete order and note your **VPS IP address**

### 1.2 Initial Server Setup

SSH into your VPS:

```bash
ssh ubuntu@YOUR_VPS_IP
# or root@YOUR_VPS_IP depending on OVHcloud plan
```

Update the system:

```bash
sudo apt update && sudo apt upgrade -y
```

Set up a firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 8000/tcp  # Coolify dashboard
sudo ufw enable
```

---

## Part 2 — Install Coolify

### 2.1 Run the Coolify Installer

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

This installs Docker, Docker Compose, and Coolify automatically. Wait 2–3 minutes.

### 2.2 Access Coolify Dashboard

Open your browser:

```
http://YOUR_VPS_IP:8000
```

- Create your admin account (email + password)
- Complete the onboarding wizard
- Select **localhost** as your server (Coolify is already connected to its own VPS)

---

## Part 3 — Create PostgreSQL Database

### 3.1 Add a New Database Resource

1. In Coolify → click **+ New Resource**
2. Select **Database**
3. Select **PostgreSQL**
4. Fill in:
   - **Name:** `urbansparklecleaners-db`
   - **PostgreSQL Version:** 16 (latest stable)
   - **Database name:** `urbansparklecleaners`
   - **Username:** `postgres` (or custom)
   - **Password:** Generate a strong password and save it securely
5. Click **Save** then **Deploy**

### 3.2 Get the Connection String

After the database container starts:

1. Go to the database resource → **Connection** tab
2. Copy the **Internal URL** (used by the Next.js app inside the same server):
   ```
   postgresql://postgres:YOUR_PASSWORD@postgres-container-name:5432/urbansparklecleaners
   ```
   > Use the **internal** URL (not the public one) — it's faster and more secure since both containers are on the same Docker network.

---

## Part 4 — Connect GitHub to Coolify

### 4.1 Add GitHub Source

1. In Coolify → **Settings** → **Sources** → **+ Add**
2. Select **GitHub App**
3. Click **Register Now on GitHub** → it will redirect to GitHub
4. Install the Coolify GitHub App on your account
5. Grant access to `vankyaccount/UrbanSparkleCleaners`
6. Return to Coolify — the source will now be connected

---

## Part 5 — Deploy the Next.js App

### 5.1 Create Application Resource

1. In Coolify → **+ New Resource** → **Application**
2. Select **GitHub** → select your connected source
3. Select repository: `vankyaccount/UrbanSparkleCleaners`
4. Branch: `master`
5. Click **Continue**

### 5.2 Configure Build Settings

| Setting | Value |
|---|---|
| Build Pack | **Dockerfile** |
| Dockerfile location | `/Dockerfile` |
| Port | `3000` |
| Base directory | `/` |

### 5.3 Set Environment Variables

In the app → **Environment Variables** tab, add each variable:

```env
DATABASE_URL=postgresql://postgres:YOUR_PG_PASSWORD@POSTGRES_CONTAINER_NAME:5432/urbansparklecleaners
GMAIL_USER=urbansparklecleaners@gmail.com
GMAIL_APP_PASSWORD=your-16-char-gmail-app-password
NEXT_PUBLIC_SITE_URL=https://urbansparklecleaners.ca
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
ADMIN_PASSWORD=your-secure-admin-password
```

> **DATABASE_URL tip:** Replace `POSTGRES_CONTAINER_NAME` with the internal hostname shown in Coolify's database Connection tab.

### 5.4 Deploy the App

Click **Deploy**. Coolify will:
1. Pull code from GitHub
2. Build the Docker image (using your `Dockerfile`)
3. Run `prisma generate` during build
4. Start the container on port 3000

Watch the build logs in real time in Coolify's **Logs** tab. First build takes ~3–5 minutes.

---

## Part 6 — Run Database Migrations

After the first successful deploy, initialize the database schema.

### Option A — via Coolify Terminal (recommended)

1. In Coolify → your app → **Terminal**
2. Run:

```bash
npx prisma db push
```

This creates all tables defined in `prisma/schema.prisma`.

### Option B — via SSH + Docker

```bash
ssh ubuntu@YOUR_VPS_IP

# Find the container name
docker ps | grep urbansparkle

# Open a shell in the container
docker exec -it CONTAINER_NAME sh

# Run migration
npx prisma db push
exit
```

---

## Part 7 — Configure Domain & SSL

### 7.1 Point DNS to Your VPS

In your domain registrar (e.g., OVHcloud DNS, Cloudflare):

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `YOUR_VPS_IP` | 300 |
| A | `www` | `YOUR_VPS_IP` | 300 |

DNS propagation takes up to 48 hours (usually under 30 minutes).

### 7.2 Add Domain in Coolify

1. In Coolify → your app → **Domains**
2. Click **+ Add Domain**
3. Enter: `https://urbansparklecleaners.ca`
4. Also add: `https://www.urbansparklecleaners.ca`
5. Click **Save**

Coolify automatically provisions a **Let's Encrypt SSL certificate** once DNS is pointing to your server.

### 7.3 Verify

Open `https://urbansparklecleaners.ca` in your browser. You should see the site with a valid SSL padlock.

---

## Part 8 — Auto-Deploy on Git Push

Coolify auto-deploys every time you push to the `master` branch.

### Enable Webhook (if not auto-enabled)

1. In Coolify → your app → **Webhooks**
2. Copy the webhook URL
3. In GitHub → `vankyaccount/UrbanSparkleCleaners` → **Settings** → **Webhooks** → **Add webhook**
4. Paste the URL, content type: `application/json`, event: **Just the push event**

### Your deployment workflow going forward

```bash
# Make changes locally
git add .
git commit -m "your message"
git push origin master
# → Coolify detects push and auto-deploys
```

---

## Part 9 — Verify Everything Works

### Checklist

- [ ] Site loads at `https://urbansparklecleaners.ca`
- [ ] SSL certificate is valid (green padlock)
- [ ] Booking form submits and sends email notification
- [ ] Contact form submits and stores in database
- [ ] Career form submits and stores in database
- [ ] `/blog` loads blog posts
- [ ] `/services` and `/areas` pages load
- [ ] Redirects work (e.g., `/cleaning-services` → `/services`)

### Test the database connection

In the Coolify terminal:

```bash
npx prisma studio
# Opens a web UI to browse your database tables
# Note: only useful for quick checks; not available in production browser
```

Or check via SQL:

```bash
# In the PostgreSQL container terminal (via Coolify → DB → Terminal)
psql -U postgres -d urbansparklecleaners
\dt        # list all tables
SELECT COUNT(*) FROM "Booking";
\q
```

---

## Troubleshooting

### Build fails: "prisma generate" error

Ensure `prisma/schema.prisma` has the correct `url` field:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### App starts but can't connect to database

- Verify `DATABASE_URL` uses the **internal** container hostname (not `localhost`)
- Check that the PostgreSQL container is running in Coolify
- Check the database name matches exactly

### Emails not sending

- Confirm `GMAIL_APP_PASSWORD` is a 16-character App Password (not your Gmail account password)
- Ensure 2-Step Verification is enabled on the Gmail account
- Check app logs in Coolify for SMTP error messages

### SSL certificate not provisioning

- Confirm DNS A records are pointing to the correct VPS IP
- Wait for DNS propagation (up to 48 hours)
- Ports 80 and 443 must be open on the firewall (`sudo ufw status`)

---

## Maintenance

### Update the app

```bash
git push origin master  # triggers auto-deploy via Coolify
```

### View live logs

Coolify → your app → **Logs** tab

Or via SSH:

```bash
docker logs CONTAINER_NAME --follow
```

### Backup the database

In Coolify → your PostgreSQL resource → **Backups** → configure automatic daily backups to S3 or local storage.

Manual backup:

```bash
docker exec POSTGRES_CONTAINER pg_dump -U postgres urbansparklecleaners > backup_$(date +%Y%m%d).sql
```

### Restore a backup

```bash
docker exec -i POSTGRES_CONTAINER psql -U postgres urbansparklecleaners < backup_20260318.sql
```
