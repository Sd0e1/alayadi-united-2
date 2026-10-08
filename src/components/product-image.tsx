"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Product } from "@/types/product";

export default function ProductImage({ product }: { product: Product }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <button type="button" className="product-image-trigger" aria-label={`تكبير صورة ${product.name}`} onClick={() => dialog.current?.showModal()}>
      <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain p-3 sm:p-6" />
      <span className="image-zoom-hint">⤢ اضغط لتكبير الصورة</span>
    </button>
    <dialog ref={dialog} className="product-lightbox" aria-label={`صورة مكبرة: ${product.name}`} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="lightbox-toolbar"><strong>{product.name}</strong><button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="إغلاق الصورة المكبرة">إغلاق ×</button></div>
      <div className="lightbox-image"><Image src={product.image} alt={product.imageAlt} fill unoptimized sizes="100vw" className="object-contain" /></div>
      <p className="lightbox-note">الصورة بالحجم الكبير · للإغلاق اضغط Escape أو زر الإغلاق</p>
    </dialog>
  </>;
}
