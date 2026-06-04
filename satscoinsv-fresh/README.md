# satscoinsv-fresh

Sitio web de Satscoin construido con [Deno Fresh](https://fresh.deno.dev/).  
Réplica de https://satscoinsv.bearblog.dev/ usando Deno Fresh.

## Requisitos

- [Deno](https://deno.land/) v1.38 o superior

## Instalación de Deno

```bash
# Linux / macOS
curl -fsSL https://deno.land/install.sh | sh

# Windows (PowerShell)
irm https://deno.land/install.ps1 | iex
```

## Iniciar en desarrollo

```bash
deno task start
```

El servidor inicia en http://localhost:8000 con hot-reload automático.

## Build para producción

```bash
deno task build
deno task preview
```

## Estructura del proyecto

```
satscoinsv-fresh/
├── components/
│   └── Layout.tsx          # Layout compartido (header + nav + footer)
├── routes/
│   ├── _app.tsx            # Wrapper HTML raíz
│   ├── _404.tsx            # Página 404
│   ├── index.tsx           # Homepage: Soy Satscoin
│   └── blog/
│       ├── index.tsx                                          # Lista del blog
│       ├── nuevo-post.tsx                                     # Preguntas comunes de Bitcoin
│       ├── herramientas-descentralizadas.tsx                  # Nostr y herramientas libres
│       ├── tu-libertad-financiera-con-bitcoin-y-lightning.tsx # Bitcoin y Lightning
│       └── inicia-tu-privacidad-tecnologica-con-linux.tsx     # Guía Linux
├── static/
│   └── styles.css          # Estilos globales (inspirado en BearBlog)
├── deno.json
├── fresh.config.ts
├── fresh.gen.ts
├── main.ts
└── dev.ts
```

## Páginas disponibles

| Ruta | Contenido |
|------|-----------|
| `/` | Homepage — Soy Satscoin |
| `/blog` | Listado de posts |
| `/blog/nuevo-post` | Preguntas más comunes de Bitcoin |
| `/blog/herramientas-descentralizadas` | Nostr y herramientas descentralizadas |
| `/blog/tu-libertad-financiera-con-bitcoin-y-lightning` | Libertad financiera con Bitcoin |
| `/blog/inicia-tu-privacidad-tecnologica-con-linux` | Primeros pasos con Linux |
