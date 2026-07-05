import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categorias, productos, sucursales } from "@/data/catalog";
import { whatsappUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const destacados = productos.filter((producto) => producto.destacado);

  return (
    <>
      <section className="bg-mist">
        <div className="container-page grid min-h-[calc(100vh-80px)] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Venta exclusiva a ópticas</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-normal text-ink md:text-6xl">
              Importadora líder en productos ópticos para Chile.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              Más de 20 años equipando ópticas con armazones, cristales, gafas de sol, instrumentos y accesorios listos para cotizar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/productos" className="rounded bg-brand px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-ink">
                Ver catálogo
              </Link>
              <a
                href={whatsappUrl("Hola, soy una óptica y quisiera cotizar productos Mercavision.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-[#25D366] px-6 py-4 text-center text-sm font-semibold text-white transition hover:brightness-95"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded bg-white shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1600&q=85"
              alt="Productos ópticos Mercavision"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/85 to-transparent p-7 text-white">
              <p className="text-sm text-white/75">Catálogo navegable</p>
              <p className="mt-2 text-2xl font-semibold">Productos listos para descubrir, filtrar y cotizar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading eyebrow="Categorías" title="Todo el surtido óptico en una experiencia navegable.">
            Ocho líneas comerciales pensadas para que cada óptica encuentre productos por categoría y pida cotización sin descargar PDFs.
          </SectionHeading>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categorias.map((categoria) => (
              <CategoryCard key={categoria.slug} categoria={categoria} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Destacados" title="Productos para cotizar hoy.">
              Muestra inicial con estructura lista para conectar a Sanity, CSV o el catálogo real de SharePoint.
            </SectionHeading>
            <Link href="/productos" className="text-sm font-semibold text-brand hover:text-ink">
              Ver todos los productos
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destacados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Por qué elegirnos" title="B2B serio, cobertura real y atención directa.">
            Mercavision concentra catálogo, sucursales y canales comerciales en una web rápida para equipos de venta y clientes ópticos.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {["20+ años en el mercado chileno", "Venta exclusiva a ópticas", "4 sucursales a nivel nacional", "Cotización directa por WhatsApp"].map((item) => (
              <div key={item} className="rounded border border-line bg-white p-6">
                <p className="text-lg font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-page">
          <SectionHeading eyebrow="Sucursales" title="Atención local para cada óptica." inverted>
            Santiago, Mac Iver, Concepción y Temuco con teléfonos, horarios y WhatsApp directo por sucursal.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sucursales.map((sucursal) => (
              <article key={sucursal.nombre} className="rounded border border-white/12 bg-white/6 p-5">
                <p className="font-semibold">{sucursal.nombre}</p>
                <p className="mt-2 text-sm text-white/70">{sucursal.direccion}</p>
                <a
                  className="mt-5 inline-flex rounded bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
                  href={whatsappUrl(`Hola, quisiera contactar a ${sucursal.nombre}.`, sucursal.whatsapp)}
                >
                  WhatsApp
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-accent/20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Cotización B2B</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-5xl">¿Eres dueño de óptica?</h2>
            <p className="mt-4 max-w-2xl text-steel">Escríbenos y un ejecutivo puede ayudarte a preparar tu pedido.</p>
          </div>
          <a
            href={whatsappUrl("Hola, tengo una óptica y quisiera cotizar un pedido Mercavision.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Cotizar ahora
          </a>
        </div>
      </section>
    </>
  );
}
