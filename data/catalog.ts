export type CategoriaSlug =
  | "armazones"
  | "cristales"
  | "gafas-sol"
  | "instrumentos"
  | "exhibidores"
  | "estuches"
  | "personalizados"
  | "accesorios";

export interface Producto {
  id: string;
  nombre: string;
  slug: string;
  sku?: string;
  categoria: CategoriaSlug;
  marca?: string;
  descripcion?: string;
  imagenes: string[];
  destacado?: boolean;
  activo: boolean;
}

export const categorias: Array<{
  slug: CategoriaSlug;
  nombre: string;
  resumen: string;
  imagen: string;
}> = [
  {
    slug: "armazones",
    nombre: "Armazones",
    resumen: "Modelos ópticos para adultos, jóvenes y líneas profesionales.",
    imagen: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "cristales",
    nombre: "Cristales",
    resumen: "Soluciones oftálmicas para distintas necesidades visuales.",
    imagen: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "gafas-sol",
    nombre: "Gafas de Sol",
    resumen: "Protección, diseño y rotación comercial para ópticas.",
    imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "instrumentos",
    nombre: "Instrumentos",
    resumen: "Equipamiento de apoyo para atención y operación óptica.",
    imagen: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "exhibidores",
    nombre: "Exhibidores",
    resumen: "Mobiliario y displays para presentar mejor el catálogo.",
    imagen: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "estuches",
    nombre: "Estuches",
    resumen: "Protección y presentación para armazones y gafas.",
    imagen: "https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "personalizados",
    nombre: "Personalizados",
    resumen: "Productos y accesorios con identidad de marca para ópticas.",
    imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "accesorios",
    nombre: "Accesorios",
    resumen: "Complementos de venta y reposición para el día a día.",
    imagen: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=1200&q=80"
  }
];

export const productos: Producto[] = [
  {
    id: "mv-arm-101",
    nombre: "Armazón Urban Flex",
    slug: "armazon-urban-flex",
    sku: "ARM-101",
    categoria: "armazones",
    marca: "Mercavision",
    descripcion: "Armazón liviano de uso diario con terminación resistente y calce cómodo para alta rotación en ópticas.",
    imagenes: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80"],
    destacado: true,
    activo: true
  },
  {
    id: "mv-arm-204",
    nombre: "Armazón Classic Metal",
    slug: "armazon-classic-metal",
    sku: "ARM-204",
    categoria: "armazones",
    marca: "Mercavision",
    descripcion: "Línea metálica sobria para clientes que buscan diseño atemporal y buena durabilidad.",
    imagenes: ["https://images.unsplash.com/photo-1512099053734-e6767b535838?auto=format&fit=crop&w=1200&q=80"],
    activo: true
  },
  {
    id: "mv-cri-310",
    nombre: "Cristal Blue Control",
    slug: "cristal-blue-control",
    sku: "CRI-310",
    categoria: "cristales",
    descripcion: "Cristal con tratamiento para uso frecuente en pantallas y jornadas extensas de trabajo.",
    imagenes: ["https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80"],
    destacado: true,
    activo: true
  },
  {
    id: "mv-sol-442",
    nombre: "Gafa Solar Milano",
    slug: "gafa-solar-milano",
    sku: "SOL-442",
    categoria: "gafas-sol",
    marca: "Vespa",
    descripcion: "Gafa de sol de diseño comercial, ideal para exhibición de temporada y vitrinas.",
    imagenes: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80"],
    destacado: true,
    activo: true
  },
  {
    id: "mv-ins-118",
    nombre: "Set Herramientas Ópticas",
    slug: "set-herramientas-opticas",
    sku: "INS-118",
    categoria: "instrumentos",
    descripcion: "Kit de apoyo para ajustes básicos, mantención y operación diaria en punto de venta.",
    imagenes: ["https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80"],
    activo: true
  },
  {
    id: "mv-exh-070",
    nombre: "Exhibidor Counter 24",
    slug: "exhibidor-counter-24",
    sku: "EXH-070",
    categoria: "exhibidores",
    descripcion: "Display compacto para mesón, con capacidad para ordenar colecciones de alta rotación.",
    imagenes: ["https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1200&q=80"],
    activo: true
  },
  {
    id: "mv-est-052",
    nombre: "Estuche Rígido Premium",
    slug: "estuche-rigido-premium",
    sku: "EST-052",
    categoria: "estuches",
    descripcion: "Estuche resistente para entrega final de armazones y gafas, disponible para compras por volumen.",
    imagenes: ["https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=1200&q=80"],
    activo: true
  },
  {
    id: "mv-per-601",
    nombre: "Paño Microfibra Personalizado",
    slug: "pano-microfibra-personalizado",
    sku: "PER-601",
    categoria: "personalizados",
    descripcion: "Paños con marca de la óptica para reforzar recordación en la entrega de productos.",
    imagenes: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"],
    activo: true
  },
  {
    id: "mv-acc-219",
    nombre: "Cordón Deportivo Ajustable",
    slug: "cordon-deportivo-ajustable",
    sku: "ACC-219",
    categoria: "accesorios",
    descripcion: "Accesorio práctico para gafas y armazones, recomendado para venta complementaria.",
    imagenes: ["https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=1200&q=80"],
    activo: true
  }
];

export const sucursales = [
  {
    nombre: "Casa Matriz",
    ciudad: "Santiago",
    direccion: "Claudio Gay 2548",
    telefonos: ["+56 22 6898888", "+56 22 6897777"],
    whatsapp: "56956086372",
    horario: "Lun-Jue 08:30-14:00 / 15:00-18:30 · Vie 08:30-14:00 / 15:00-17:30"
  },
  {
    nombre: "Sucursal Mac Iver",
    ciudad: "Santiago",
    direccion: "Enrique Mac Iver 142, Of 211-406",
    telefonos: ["+56 22 6322692", "+56 22 6396100"],
    whatsapp: "56940282391",
    horario: "Lun-Jue 08:30-18:30 · Vie 08:30-17:30"
  },
  {
    nombre: "Sucursal Concepción",
    ciudad: "Concepción",
    direccion: "Lincoyán 357",
    telefonos: ["+56 41 2224114", "+56 41 2921796", "+56 41 2921797"],
    whatsapp: "56963324667",
    horario: "Horario comercial"
  },
  {
    nombre: "Sucursal Temuco",
    ciudad: "Temuco",
    direccion: "Manuel Rodríguez 963, Piso 2",
    telefonos: ["+56 45 2317307"],
    whatsapp: "56973931925",
    horario: "Lun-Jue 09:00-14:00 / 15:00-19:00 · Vie 09:00-14:00 / 15:00-18:00"
  }
];

export function getCategoria(slug: string) {
  return categorias.find((categoria) => categoria.slug === slug);
}

export function getProducto(categoria: string, slug: string) {
  return productos.find((producto) => producto.categoria === categoria && producto.slug === slug && producto.activo);
}

export function productosPorCategoria(categoria: string) {
  return productos.filter((producto) => producto.categoria === categoria && producto.activo);
}
