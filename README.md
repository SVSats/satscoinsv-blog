# satscoinsv-blog

Blog personal de Satscoin — Linux, Bitcoin, Nostr y soberanía tecnológica.
Construido con [Deno Fresh](https://fresh.deno.dev).

## Despliegue en Deno Deploy

### 1. Sube el código a GitHub

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/satscoinsv-blog.git
git push -u origin main
```

### 2. Crea el proyecto en Deno Deploy

1. Ve a https://dash.deno.com y crea una cuenta (gratis)
2. Clic en **"New Project"**
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Production branch:** `main`
   - **Entrypoint:** `main.ts`
5. En **Settings → Environment**, NO necesitas variables de entorno por ahora
6. Clic en **Deploy**

Tu blog quedará en: `https://satscoinsv.deno.dev`

### 3. Dominio personalizado con Cloudflare (opcional)

Si tienes un dominio propio (ej. `satscoinsv.com`):

1. En Deno Deploy → **Settings → Domains** → añade tu dominio
2. En Cloudflare DNS añade:
   ```
   Tipo: CNAME
   Nombre: @  (o www)
   Valor: satscoinsv.deno.dev
   Proxy: ✅ activado (naranja)
   ```
3. Deno Deploy te dará un TXT de verificación — añádelo también en Cloudflare DNS

### 4. Añadir nuevos posts

Crea un archivo `.md` en la carpeta `posts/`:

```markdown
---
title: Mi nuevo post
date: 2025-09-01
description: Descripción corta del post.
---

Contenido del post en Markdown...
```

Luego haz commit y push — se despliega automáticamente.

## Desarrollo local

```bash
deno task start
```

Abre http://localhost:8000
