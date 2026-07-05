import type { MetadataRoute } from "next";
import { categorias, productos } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mercavision.cl";
  const staticRoutes = ["", "/productos", "/marcas", "/empresa", "/sucursales", "/contacto"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
  const categoryRoutes = categorias.map((categoria) => ({
    url: `${base}/productos/${categoria.slug}`,
    lastModified: new Date()
  }));
  const productRoutes = productos.map((producto) => ({
    url: `${base}/productos/${producto.categoria}/${producto.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
