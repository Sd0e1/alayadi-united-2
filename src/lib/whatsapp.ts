import { isWhatsAppConfigured, store } from "@/config/store";
import type { Product } from "@/types/product";

export function formatPrice(price: number | null) {
  if (price === null) return "يُحدّد عند الاستفسار";
  return `${new Intl.NumberFormat("ar-IQ", { maximumFractionDigits: 0 }).format(price)} ${store.currencyLabel}`;
}

export function getWhatsAppUrl(product: Product): string | null {
  if (!isWhatsAppConfigured || !product.available) return null;
  const message = `مرحبًا، أرغب بطلب المنتج: ${product.name}\nمعرف المنتج: ${product.id}\nالسعر: ${formatPrice(product.price)} (${store.currency})`;
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
