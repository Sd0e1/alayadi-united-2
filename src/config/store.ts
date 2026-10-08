export const store = {
  name: "شركة الأيادي المتحدة",
  description: "اكتشف مناديل كلاسيك ورول الجامبو وسفر المائدة من خرمان، وتشكيلة صابون دوكسا وبرولايت، مع صور وتفاصيل كل منتج.",
  // ضع رقمك الحقيقي بالصيغة الدولية: أرقام فقط دون + أو مسافات.
  whatsappNumber: "9647749270990",
  currency: "IQD",
  currencyLabel: "د.ع",
} as const;

export const isWhatsAppConfigured = /^[1-9]\d{7,14}$/.test(store.whatsappNumber);

