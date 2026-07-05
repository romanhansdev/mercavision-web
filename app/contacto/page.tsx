import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto comercial Mercavision para ópticas."
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-mist py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Contacto" title="Conversemos sobre tu pedido.">
            Usa el canal que prefieras. Para cotizaciones rápidas, WhatsApp queda como vía principal.
          </SectionHeading>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded border border-line bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">Casa Matriz</h2>
            <p className="mt-4 text-steel">Claudio Gay 2548, Santiago</p>
            <a className="mt-4 block font-semibold text-brand" href="mailto:ventas@mercavision.cl">
              ventas@mercavision.cl
            </a>
            <a
              href={whatsappUrl("Hola, quisiera contactar al equipo comercial de Mercavision.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
            >
              WhatsApp ventas
            </a>
          </aside>
          <form className="grid gap-4 rounded border border-line bg-white p-6 shadow-sm">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-ink" htmlFor="nombre">Nombre</label>
              <input id="nombre" className="rounded border border-line px-4 py-3 outline-none focus:border-brand" placeholder="Tu nombre" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-ink" htmlFor="optica">Óptica</label>
              <input id="optica" className="rounded border border-line px-4 py-3 outline-none focus:border-brand" placeholder="Nombre de la óptica" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-ink" htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" rows={6} className="rounded border border-line px-4 py-3 outline-none focus:border-brand" placeholder="Cuéntanos qué productos quieres cotizar" />
            </div>
            <button type="button" className="rounded bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
