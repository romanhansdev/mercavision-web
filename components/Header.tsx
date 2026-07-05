import Link from "next/link";

const nav = [
  { href: "/productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/empresa", label: "Empresa" },
  { href: "/sucursales", label: "Sucursales" },
  { href: "/contacto", label: "Contacto" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Mercavision inicio">
          <span className="flex h-11 w-11 items-center justify-center rounded bg-brand text-lg font-semibold text-white">MV</span>
          <span>
            <span className="block text-lg font-semibold tracking-normal text-ink">Mercavision</span>
            <span className="block text-xs uppercase tracking-[0.18em] text-steel">Ópticas B2B</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-steel lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/productos"
          className="rounded border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
        >
          Ver catálogo
        </Link>
      </div>
    </header>
  );
}
