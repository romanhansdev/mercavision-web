import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/data/catalog";
import { productQuoteMessage, whatsappUrl } from "@/lib/whatsapp";

export function ProductCard({ producto }: { producto: Producto }) {
  return (
    <article className="overflow-hidden rounded border border-line bg-white shadow-sm">
      <Link href={`/productos/${producto.categoria}/${producto.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image
            src={producto.imagenes[0]}
            alt={producto.nombre}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">{producto.sku ?? producto.categoria}</p>
          <h3 className="mt-2 text-lg font-semibold text-ink">{producto.nombre}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-steel">{producto.descripcion}</p>
        </div>
      </Link>
      <div className="border-t border-line px-5 py-4">
        <a
          href={whatsappUrl(productQuoteMessage(producto.nombre, producto.sku))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </article>
  );
}
