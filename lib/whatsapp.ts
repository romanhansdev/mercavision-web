const DEFAULT_NUMBER = "56956086372";

export function whatsappUrl(message: string, number = DEFAULT_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function productQuoteMessage(nombre: string, sku?: string) {
  const code = sku ? ` (Código: ${sku})` : "";
  return `Hola, quisiera cotizar: ${nombre}${code}.`;
}
