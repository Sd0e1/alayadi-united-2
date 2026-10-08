import Image from "next/image";
import Catalog from "@/components/catalog";
import { store } from "@/config/store";
import { products } from "@/lib/products";

export default function Home() {
  return <>
    <div className="announcement">كل احتياجات النظافة اليومية · تواصل واطلب بسهولة عبر WhatsApp</div>
    <header className="site-header"><div className="shell navigation">
      <a href="#" className="brand"><Image src="/brand/logo.webp" alt="شعار الأيادي المتحدة" width={80} height={80} priority className="company-logo" /><span>{store.name}<small>للمناديل والصابون ومنتجات المائدة</small></span></a>
      <nav aria-label="التنقل الرئيسي"><a href="#products">منتجاتنا</a><a href="#contact">تواصل معنا ↗</a></nav>
    </div></header>
    <main>
      <div className="mascot-hero-backdrop">
        <section className="hero shell mascot-hero" aria-labelledby="welcome-title">
          <div className="hero-copy"><span className="eyebrow">أهلًا بك في شركة الأيادي المتحدة</span><h1 id="welcome-title">لمسة نعومة،<br /><em>ترافقك كل يوم.</em></h1><p>مناديل لحظاتك الصغيرة، وراحة تستحقها أنت وعائلتك. اكتشف تشكيلتنا للمنزل ومكان العمل، واختر ما يناسب يومك.</p><a className="primary-button" href="#products">تصفح المنتجات <span aria-hidden="true">↓</span></a><div className="hero-notes"><span>كلاسيك</span><span>خرمان</span><span>لبيتك ومكان عملك</span></div></div>
          <div className="mascot-stage"><div className="mascot-halo" aria-hidden="true" /><span className="mascot-spark mascot-spark-one" aria-hidden="true">✦</span><span className="mascot-spark mascot-spark-two" aria-hidden="true">✧</span><div className="mascot-entrance"><div className="mascot-float"><Image src="/hero/mascot.webp" alt="شخصية كرتونية مبتسمة بشعر بني وملابس بيضاء وزرقاء تحمل منديلًا بجانب وجهها" fill priority sizes="(max-width: 767px) 90vw, (max-width: 1200px) 45vw, 530px" className="object-contain" /></div></div></div>
        </section>
      </div>
      <div className="category-strip"><div className="shell"><span>01 <strong>مناديل يومية</strong></span><span>02 <strong>رول جامبو</strong></span><span>03 <strong>سفر المائدة</strong></span><span>04 <strong>صابون</strong></span><span>05 <strong>سائل الجلي</strong></span></div></div>
      <div className="shell catalog-shell"><Catalog products={products} /></div>
      <section id="contact" className="contact-panel shell"><span className="eyebrow">نحن بالقرب منك</span><h2>اختَر احتياجك، ودعنا نتواصل.</h2><p>للاستفسار عن الأسعار وطلب المنتجات، تواصل مباشرة مع شركة الأيادي المتحدة.</p><a className="primary-button" href={`https://wa.me/${store.whatsappNumber}`} target="_blank" rel="noopener noreferrer">تواصل عبر WhatsApp ↗</a><span className="phone" dir="ltr">+964 774 927 0990</span></section>
    </main>
    <footer className="site-footer shell"><strong>{store.name}</strong><span>مناديل · رول جامبو · سفر المائدة · صابون · سائل الجلي</span><a href="#products">تصفّح الكتالوج ↑</a><small className="developer-credit">تم تطوير موقع بواسطة فيصل <bdi>fa</bdi></small></footer>
  </>;
}

