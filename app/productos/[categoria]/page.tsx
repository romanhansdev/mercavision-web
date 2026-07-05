import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categorias, getCategoria, productosPorCategoria } from "@/data/catalog";

export function generateStaticParams() {
  return categorias.map((categoria) => ({ categoria: categoria.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }): Promise<Metadata> {
  const { categoria: categoriaSlug } = await params;
  const categoria = getCategoria(categoriaSlug);
  return {
    title: categoria ? categoria.nombre : "Categoría",
    description: categoria?.resumen
  };
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria: categoriaSlug } = await params;
  const categoria = getCategoria(categoriaSlug);
  if (!categoria) notFound();

  const items = productosPorCategoria(categoria.slug);

  return (
    <>
      <section className="bg-mist py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Categoría" title={categoria.nombre}>
            {categoria.resumen}
          </SectionHeading>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </>
  );
}
