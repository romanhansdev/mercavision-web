import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categorias, productos } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description: "Catálogo navegable de productos ópticos Mercavision para ópticas."
};

export default function ProductosPage() {
  return (
    <>
      <section className="bg-mist py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Catálogo" title="Productos ópticos navegables, filtrados por categoría.">
            Esta primera versión usa datos locales para validar navegación, ficha y cotización. La misma estructura permite migrar a Sanity o importar CSV.
          </SectionHeading>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categorias.map((categoria) => (
              <CategoryCard key={categoria.slug} categoria={categoria} />
            ))}
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
