import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://mercavision.cl"),
  title: {
    default: "Mercavision | Productos ópticos para ópticas en Chile",
    template: "%s | Mercavision"
  },
  description:
    "Catálogo B2B de armazones, cristales, gafas de sol, instrumentos, exhibidores, estuches y accesorios para ópticas.",
  openGraph: {
    title: "Mercavision",
    description: "Importadora líder en productos ópticos para ópticas en Chile.",
    url: "https://mercavision.cl",
    siteName: "Mercavision",
    locale: "es_CL",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
