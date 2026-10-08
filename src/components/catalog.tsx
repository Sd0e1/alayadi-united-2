"use client";

import ProductImage from "@/components/product-image";
import { useState } from "react";
import { isWhatsAppConfigured } from "@/config/store";
import { formatPrice, getWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

const normalize = (text: string) => text.normalize("NFKC").replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[أإآ]/g, "ا").toLocaleLowerCase("ar").trim();

export default function Catalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const categories = [...new Set(products.map((product) => product.category))];
  const filtered = products.filter((product) => normalize(product.name).includes(normalize(query)) && (!category || product.category === category));

  return <section id="products" aria-labelledby="catalog-title">
    <div className="mb-6 flex items-baseline justify-between gap-4"><h2 id="catalog-title" className="text-2xl font-bold">منتجات تعتني بيومك</h2><p role="status" className="text-sm text-stone-500">{filtered.length} منتجات</p></div>
    <div className="mb-5 grid gap-4 rounded-2xl border border-stone-200 bg-white p-5 sm:grid-cols-[1fr_240px]">
      <div><label htmlFor="search" className="mb-2 block text-sm font-bold">ابحث عن منتج</label><input id="search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ما الذي تبحث عنه؟" className="w-full rounded-lg border border-stone-300 bg-[#faf9f6] px-4 py-3 text-base" /></div>
      <div><label htmlFor="category" className="mb-2 block text-sm font-bold">التصنيف</label><select id="category" value={category} onChange={(event) => setCategory(event.target.value)} className="w-full rounded-lg border border-stone-300 bg-[#faf9f6] px-4 py-3"><option value="">جميع التصنيفات</option>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
    </div>
    <p id="order-help" className="mb-8 text-sm leading-7 text-stone-600">الضغط على زر الطلب يفتح WhatsApp برسالة جاهزة؛ تراجعها وترسلها بنفسك. لا يُرسل أي طلب تلقائيًا.{!isWhatsAppConfigured && <span className="block text-[#936b42]">الطلب غير مفعّل حاليًا حتى يضيف صاحب المتجر رقم WhatsApp الحقيقي.</span>}</p>
    {filtered.length ? <div className="product-list">{filtered.map((product, index) => {
      const url = getWhatsAppUrl(product);
      return <article key={product.id} aria-labelledby={`product-${product.id}`} className="product-feature grid overflow-hidden md:grid-cols-2">
        <div className={`product-image relative aspect-[3/4] bg-stone-100 md:aspect-auto md:min-h-[640px] ${index % 2 ? "md:order-2" : ""}`}><ProductImage product={product} /><span className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold ${product.available ? "bg-white/90 text-[#345a42]" : "bg-stone-700 text-white"}`}>{product.available === null ? "التوفر قيد التأكيد" : product.available ? "متوفر" : "غير متوفر"}</span></div>
        <div className="product-copy flex flex-col justify-center p-7 sm:p-10 lg:p-14"><p className="mb-3 text-sm font-bold text-[#936b42]">{product.category}</p><h3 id={`product-${product.id}`} className="text-3xl font-bold leading-snug sm:text-4xl">{product.name}</h3><p className="mt-3 text-xs text-stone-500">معرّف المنتج: <bdi>{product.id}</bdi></p><h4 className="mt-7 text-sm font-bold">عن المنتج</h4><p className="mb-7 mt-3 whitespace-pre-line text-base leading-8 text-stone-600">{product.description}</p><p className="mb-6 text-2xl font-bold">{formatPrice(product.price)}</p>
          {url ? <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`اطلب ${product.name} عبر WhatsApp (يفتح في نافذة جديدة)`} aria-describedby="order-help" className="primary-button text-center">اطلب عبر WhatsApp <span aria-hidden="true">↗</span></a> : <button disabled aria-describedby="order-help" className="cursor-not-allowed rounded-lg bg-stone-100 px-4 py-3 text-sm font-bold text-stone-500">{product.available === null ? "بانتظار تأكيد التوفر" : product.available ? "اطلب عبر WhatsApp" : "غير متوفر حاليًا"}</button>}
        </div>
      </article>;
    })}</div> : <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center"><h3 className="text-xl font-bold">لا توجد منتجات مطابقة</h3><p className="mt-3 text-stone-600">جرّب اسمًا آخر أو اختر جميع التصنيفات.</p><button onClick={() => { setQuery(""); setCategory(""); }} className="mt-6 rounded-lg bg-[#284d3e] px-5 py-3 text-white">عرض جميع المنتجات</button></div>}
  </section>;
}



