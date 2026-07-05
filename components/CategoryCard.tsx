import Image from "next/image";
import Link from "next/link";
import type { categorias } from "@/data/catalog";

type Categoria = (typeof categorias)[number];

export function CategoryCard({ categoria }: { categoria: Categoria }) {
  return (
    <Link href={`/productos/${categoria.slug}`} className="group block overflow-hidden rounded border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={categoria.imagen}
          alt={categoria.nombre}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{categoria.nombre}</h3>
        <p className="mt-2 text-sm leading-6 text-steel">{categoria.resumen}</p>
      </div>
    </Link>
  );
}
