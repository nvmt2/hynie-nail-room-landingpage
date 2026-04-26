import { ArrowRight, ShoppingCart } from "lucide-react";

/**
 * Shop section rendered as a Server Component.
 */
import { products } from "@/configs/content";
import { useTranslations } from 'next-intl';

export default function Shop() {
  const t = useTranslations('Shop');

  return (
    <section className="py-24 bg-surface-container-low" id="shop">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-headline text-on-surface mb-4">{t('title')}</h2>
            <p className="text-on-surface-variant">{t('subtitle')}</p>
          </div>
          <button className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm transition-colors hover:text-on-surface">
            {t('viewCollection')} 
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                <img 
                  alt={t(`items.${product.key}.name`)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                {t.has(`items.${product.key}.tag`) && (
                  <div className="absolute top-3 left-3 bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    {t(`items.${product.key}.tag`)}
                  </div>
                )}
              </div>
              <h3 className="font-headline text-lg mb-2 text-on-surface">{t(`items.${product.key}.name`)}</h3>
              <div className="flex justify-between items-center">
                <span className="text-secondary font-semibold">{product.price}</span>
                <button className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
