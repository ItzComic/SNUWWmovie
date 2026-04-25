# Supernatural Movie Site

Simple static website powered by a single YAML file.

## Deploy On TrueNAS With Dockge

If you are using TrueNAS SCALE + Dockge, you can run this site as a Docker stack.

1. Copy this folder to your TrueNAS dataset.
2. In Dockge, create a new stack.
3. Paste the content from `docker-compose.yml`.
4. Save and Deploy.
5. Open `http://YOUR-TRUENAS-IP:8088`.

### Point Your Domain

1. Add an `A` record for your domain/subdomain to your public IP.
2. Forward port `80` and `443` on your router to your reverse proxy (recommended), or forward `8088` directly for quick testing.
3. Route your domain to this container through your reverse proxy (Nginx Proxy Manager, Traefik, or Caddy).

For SSL, use Let's Encrypt in your reverse proxy.

## Edit Content

1. Open `movies.yaml`.
2. Update any movie fields under `movies`.
3. Refresh the website.

## Run Locally

Because browsers block local file `fetch` in many setups, run a tiny local server:

```bash
cd supernatural-movie-site
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy To Your Domain

You can upload all files in this folder to:
- your cPanel/hosting file manager
- Netlify
- Vercel
- GitHub Pages

After deployment, point your domain DNS to that hosting provider.
