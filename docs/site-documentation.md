# Documentacion del sitio Mercavision

## Objetivo

Construir un sitio rapido, moderno y administrable para Mercavision, enfocado en clientes B2B: opticas que necesitan revisar productos, contactar a la empresa y cotizar por WhatsApp.

El sitio busca resolver el problema actual de tener el catalogo principalmente en PDFs o carpetas externas, llevando la experiencia hacia una navegacion web clara por categorias y fichas de producto.

## Contexto del negocio

Mercavision es una importadora, exportadora y comercializadora de productos opticos con mas de 20 anos en el mercado chileno. La venta es B2B, orientada a opticas y no a consumidor final.

Categorias consideradas:

- Armazones
- Cristales
- Gafas de Sol
- Instrumentos
- Exhibidores
- Estuches
- Productos Personalizados
- Accesorios

## Stack tecnico

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS
- `next/image` para optimizacion de imagenes
- Datos locales en `data/catalog.ts`
- Helpers de WhatsApp en `lib/whatsapp.ts`

## Paginas implementadas

### Home `/`

Incluye:

- Hero principal con posicionamiento B2B.
- CTA a catalogo.
- CTA a WhatsApp.
- Categorias destacadas.
- Productos destacados.
- Bloque "Por que elegirnos".
- Resumen de sucursales con WhatsApp.
- CTA final para duenos de optica.

### Catalogo `/productos`

Incluye:

- Encabezado de catalogo.
- Tarjetas para las 8 categorias.
- Grilla general de productos activos.
- Enlace a ficha de detalle.
- CTA de cotizacion por WhatsApp por producto.

### Categoria `/productos/[categoria]`

Incluye:

- Encabezado dinamico por categoria.
- Resumen de la categoria.
- Grilla de productos filtrados por categoria.

Categorias disponibles:

- `/productos/armazones`
- `/productos/cristales`
- `/productos/gafas-sol`
- `/productos/instrumentos`
- `/productos/exhibidores`
- `/productos/estuches`
- `/productos/personalizados`
- `/productos/accesorios`

### Ficha de producto `/productos/[categoria]/[slug]`

Incluye:

- Galeria base de imagenes.
- Nombre del producto.
- Codigo SKU cuando existe.
- Marca cuando existe.
- Categoria.
- Descripcion.
- Boton "Cotizar por WhatsApp".
- Productos relacionados de la misma categoria.

El mensaje de WhatsApp se genera con este formato:

```text
Hola, quisiera cotizar: [Nombre producto] (Codigo: [SKU]).
```

### Empresa `/empresa`

Pagina corporativa con:

- Presentacion de Mercavision.
- Enfoque B2B.
- Cobertura nacional.
- Preparacion para catalogo escalable.

### Marcas `/marcas`

Pagina preparada para mostrar marcas representadas. Actualmente contiene placeholders y una referencia inicial a Vespa.

### Sucursales `/sucursales`

Incluye las sucursales cargadas en `data/catalog.ts`:

- Casa Matriz, Santiago
- Sucursal Mac Iver, Santiago
- Sucursal Concepcion
- Sucursal Temuco

Cada sucursal muestra:

- Ciudad
- Direccion
- Horario
- Telefonos
- WhatsApp directo
- Mapa embebido de Google Maps

### Contacto `/contacto`

Incluye:

- Datos comerciales principales.
- Email `ventas@mercavision.cl`.
- CTA a WhatsApp ventas.
- Formulario visual de contacto.

El formulario aun no envia datos a backend. Esta listo para conectarse en una siguiente etapa a email, CRM, Google Sheets, Airtable o una API.

## Modelo de datos

Los datos viven en:

```text
data/catalog.ts
```

### Producto

```ts
export interface Producto {
  id: string;
  nombre: string;
  slug: string;
  sku?: string;
  categoria: CategoriaSlug;
  marca?: string;
  descripcion?: string;
  imagenes: string[];
  destacado?: boolean;
  activo: boolean;
}
```

### Categoria

Cada categoria contiene:

- `slug`
- `nombre`
- `resumen`
- `imagen`

### Sucursal

Cada sucursal contiene:

- `nombre`
- `ciudad`
- `direccion`
- `telefonos`
- `whatsapp`
- `horario`

## WhatsApp

El sitio usa enlaces directos `wa.me`, sin API paga ni backend.

Archivo:

```text
lib/whatsapp.ts
```

Funciones:

- `whatsappUrl(message, number)`
- `productQuoteMessage(nombre, sku)`

Numero por defecto:

```text
56956086372
```

Este corresponde a Casa Matriz.

## Componentes principales

### `Header`

Navegacion principal del sitio.

### `Footer`

Footer con descripcion, accesos a catalogo y sucursales.

### `WhatsAppFloatingButton`

Boton flotante global visible en todas las paginas.

### `CategoryCard`

Tarjeta reutilizable para categorias.

### `ProductCard`

Tarjeta de producto con imagen, descripcion y CTA de WhatsApp.

### `SectionHeading`

Componente reutilizable para encabezados de seccion, con soporte para fondo claro u oscuro.

## SEO

Implementado:

- Metadata global en `app/layout.tsx`
- Metadata por paginas de catalogo y producto
- OpenGraph basico
- `app/sitemap.ts`
- `app/robots.ts`

Sitemap generado:

```text
/sitemap.xml
```

Robots:

```text
/robots.txt
```

## Diseno visual

Direccion actual:

- Base blanca y gris claro
- Color de marca azul profundo
- Acento amarillo moderado
- Verde WhatsApp reservado solo para botones de WhatsApp
- Bordes discretos
- Tarjetas con radio bajo
- UI B2B sobria y profesional

Colores definidos en `tailwind.config.ts`:

- `ink`
- `steel`
- `mist`
- `line`
- `brand`
- `accent`

## Estado actual

Completado:

- Sitio base en Next.js
- Catalogo navegable
- Categorias dinamicas
- Fichas de producto dinamicas
- WhatsApp global y por producto
- Paginas corporativas
- Sucursales con mapas
- SEO inicial
- Repositorio GitHub conectado

Pendiente:

- Reemplazar productos demo por catalogo real.
- Definir fuente de datos definitiva: Sanity, CSV/Excel, API o base propia.
- Agregar imagenes reales de productos.
- Completar marcas reales representadas.
- Conectar formulario de contacto.
- Definir estrategia de bot WhatsApp.
- Preparar deploy en Vercel.

## Proximas etapas recomendadas

1. Cargar catalogo real con SKU, categoria, marca, descripcion e imagenes.
2. Definir si el cliente administrara productos desde Sanity o desde archivos/CSV.
3. Conectar formulario de contacto.
4. Agregar analytics para medir clics en productos y WhatsApp.
5. Desplegar en Vercel.
6. Planificar bot de WhatsApp en fase posterior.
