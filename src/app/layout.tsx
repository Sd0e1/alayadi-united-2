import type { Metadata } from "next";
import { store } from "@/config/store";
import "./globals.css";

export const metadata: Metadata = { title: `${store.name} | كتالوج المنتجات`, description: store.description };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
