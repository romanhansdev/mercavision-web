import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Más de 20 años comercializando productos ópticos para ópticas en Chile."
};

export default function EmpresaPage() {
  return (
    <>
      <section className="bg-mist py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Empresa" title="Más de 20 años junto a ópticas chilenas.">
            Mercavision importa, exporta y comercializa productos ópticos con foco B2B. El nuevo sitio ordena el catálogo, mejora el contacto comercial y prepara el camino para una operación digital más ágil.
          </SectionHeading>
          <div className="relative aspect-[5/3] overflow-hidden rounded bg-white shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80"
              alt="Atención profesional óptica"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            ["Especialistas B2B", "Venta enfocada en ópticas, con comunicación comercial clara y cotización directa."],
            ["Cobertura nacional", "Sucursales en Santiago, Concepción y Temuco para atender mejor por zona."],
            ["Catálogo escalable", "Estructura preparada para cargar productos reales con imágenes, SKUs y marcas."]
          ].map(([title, text]) => (
            <article key={title} className="rounded border border-line p-6">
              <h2 className="text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 leading-7 text-steel">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
