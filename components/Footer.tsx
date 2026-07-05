import Link from "next/link";
import { sucursales } from "@/data/catalog";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xl font-semibold">Mercavision</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/72">
            Importadora, exportadora y comercializadora de productos ópticos para ópticas en Chile.
          </p>
          <a className="mt-5 inline-block text-sm font-semibold text-accent" href="mailto:ventas@mercavision.cl">
            ventas@mercavision.cl
          </a>
        </div>
        <div>
          <p className="font-semibold">Catálogo</p>
          <div className="mt-4 grid gap-2 text-sm text-white/72">
            <Link href="/productos/armazones">Armazones</Link>
            <Link href="/productos/cristales">Cristales</Link>
            <Link href="/productos/gafas-sol">Gafas de Sol</Link>
            <Link href="/productos/instrumentos">Instrumentos</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Sucursales</p>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            {sucursales.slice(0, 3).map((sucursal) => (
              <a key={sucursal.nombre} href={whatsappUrl(`Hola, quisiera contactar a ${sucursal.nombre}.`, sucursal.whatsapp)}>
                {sucursal.nombre} · {sucursal.ciudad}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page text-xs text-white/55">© 2026 Mercavision. Sitio demostrativo listo para catálogo real.</div>
      </div>
    </footer>
  );
}
