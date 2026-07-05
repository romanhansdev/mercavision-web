import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categorias, getProducto, productos, productosPorCategoria } from "@/data/catalog";
import { productQuoteMessage, whatsappUrl } from "@/lib/whatsapp";

export function generateStaticParams() {
  return productos.map((producto) => ({ categoria: producto.categoria, slug: producto.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string; slug: string }> }): Promise<Metadata> {
  const { categoria, slug } = await params;
  const producto = getProducto(categoria, slug);
  return {
    title: producto ? producto.nombre : "Producto",
    description: producto?.descripcion,
    openGraph: {
      images: producto?.imagenes[0] ? [producto.imagenes[0]] : []
    }
  };
}

export default async function ProductoPage({ params }: { params: Promise<{ categoria: string; slug: string }> }) {
  const { categoria, slug } = await params;
  const producto = getProducto(categoria, slug);
  if (!producto) notFound();

  const relacionados = productosPorCategoria(producto.categoria).filter((item) => item.id !== producto.id).slice(0, 3);

  return (
    <>
      <section className="section-pad bg-mist">
        <div className="container-page grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded bg-white shadow-soft">
              <Image src={producto.imagenes[0]} alt={producto.nombre} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {producto.imagenes.map((imagen) => (
                <div key={imagen} className="relative aspect-[4/3] overflow-hidden rounded border border-line bg-white">
                  <Image src={imagen} alt={`${producto.nombre} detalle`} fill sizes="160px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="self-center">
            <Link href={`/productos/${producto.categoria}`} className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {producto.categoria.replace("-", " ")}
            </Link>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink md:text-6xl">{producto.nombre}</h1>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-steel">
              {producto.sku ? <span className="rounded border border-line bg-white px-3 py-2">Código: {producto.sku}</span> : null}
              {producto.marca ? <span className="rounded border border-line bg-white px-3 py-2">Marca: {producto.marca}</span> : null}
            </div>
            <p className="mt-6 text-lg leading-8 text-steel">{producto.descripcion}</p>
            <a
              href={whatsappUrl(productQuoteMessage(producto.nombre, producto.sku))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition hover:brightness-95 sm:w-auto"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {relacionados.length > 0 ? (
        <section className="section-pad">
          <div className="container-page">
            <h2 className="text-3xl font-semibold text-ink">Productos relacionados</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relacionados.map((item) => (
                <ProductCard key={item.id} producto={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
