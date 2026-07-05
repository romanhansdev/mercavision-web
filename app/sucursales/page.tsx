import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { sucursales } from "@/data/catalog";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sucursales",
  description: "Sucursales Mercavision en Santiago, Concepción y Temuco."
};

export default function SucursalesPage() {
  return (
    <>
      <section className="bg-mist py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Sucursales" title="Elige la sucursal más cercana a tu óptica.">
            Cada ubicación tiene datos de contacto y WhatsApp directo para acelerar cotizaciones y consultas comerciales.
          </SectionHeading>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {sucursales.map((sucursal) => (
            <article key={sucursal.nombre} className="overflow-hidden rounded border border-line bg-white shadow-sm">
              <iframe
                title={`Mapa ${sucursal.nombre}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${sucursal.direccion}, ${sucursal.ciudad}, Chile`)}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">{sucursal.ciudad}</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">{sucursal.nombre}</h2>
                <p className="mt-3 text-steel">{sucursal.direccion}</p>
                <p className="mt-3 text-sm leading-6 text-steel">{sucursal.horario}</p>
                <div className="mt-4 grid gap-1 text-sm text-steel">
                  {sucursal.telefonos.map((telefono) => (
                    <span key={telefono}>{telefono}</span>
                  ))}
                </div>
                <a
                  href={whatsappUrl(`Hola, quisiera contactar a ${sucursal.nombre}.`, sucursal.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
