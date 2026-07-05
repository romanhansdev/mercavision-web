# Mercavision Web

Sitio web moderno para Mercavision, importadora y comercializadora B2B de productos opticos en Chile.

El proyecto reemplaza una experiencia basada en PDFs descargables por un catalogo navegable con categorias, grilla de productos, fichas individuales y cotizacion directa por WhatsApp.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Datos de catalogo locales en TypeScript, preparados para migrar a Sanity, CSV o una API

## Funcionalidades actuales

- Home con hero, categorias destacadas, productos destacados, propuesta de valor, sucursales y CTA final.
- Catalogo general en `/productos`.
- Paginas por categoria en `/productos/[categoria]`.
- Fichas individuales en `/productos/[categoria]/[slug]`.
- Boton flotante global de WhatsApp.
- Boton "Cotizar por WhatsApp" en cada producto con mensaje prellenado.
- Paginas corporativas: empresa, marcas, sucursales y contacto.
- Mapas embebidos por sucursal.
- SEO base con metadata, `sitemap.xml` y `robots.txt`.

## Rutas principales

| Ruta | Descripcion |
| --- | --- |
| `/` | Home principal |
| `/productos` | Catalogo completo |
| `/productos/armazones` | Categoria de armazones |
| `/productos/[categoria]/[slug]` | Ficha individual de producto |
| `/empresa` | Informacion corporativa |
| `/marcas` | Marcas y lineas representadas |
| `/sucursales` | Sucursales, horarios, telefonos, WhatsApp y mapas |
| `/contacto` | Contacto comercial |

## Como ejecutar localmente

```bash
pnpm install
pnpm dev
```

Luego abrir:

```text
http://localhost:3000
```

## Build de produccion

```bash
pnpm build
pnpm start
```

## Estructura relevante

```text
app/                         Rutas de Next.js App Router
components/                  Componentes reutilizables de UI
data/catalog.ts              Categorias, productos y sucursales
lib/whatsapp.ts              Helpers para links y mensajes de WhatsApp
docs/site-documentation.md   Documentacion funcional y tecnica del sitio
```

## Nota de contenido

Los productos actuales son datos demo para validar navegacion, fichas y cotizacion. La siguiente etapa es cargar el catalogo real de Mercavision desde una fuente estructurada como Sanity, CSV/Excel o una API propia.
