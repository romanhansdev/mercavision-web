import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Marcas",
  description: "Marcas y líneas representadas por Mercavision."
};

export default function MarcasPage() {
  const marcas = ["Vespa", "Mercavision", "Líneas ópticas por confirmar", "Nuevas colecciones"];

  return (
    <>
      <section className="bg-mist py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Marcas" title="Representaciones y colecciones para ópticas.">
            Esta sección queda preparada para incorporar logos oficiales, líneas vigentes y páginas de marca cuando el cliente entregue el listado final.
          </SectionHeading>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {marcas.map((marca) => (
            <article key={marca} className="flex min-h-36 items-center justify-center rounded border border-line bg-white p-6 text-center shadow-sm">
              <h2 className="text-xl font-semibold text-ink">{marca}</h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
