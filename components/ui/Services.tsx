/**
 * Services section rendered as a Server Component.
 */
import { services } from "@/configs/content";
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                alt="Không gian Studio"
                className="w-full h-full object-cover"
                src="/images/service/hynie-nail-front.jpg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-container rounded-full -z-10 blur-2xl opacity-40"></div>
          </div>

          <div>
            <h2 className="text-4xl font-headline text-on-surface mb-10 leading-tight">
              {t('title')}
            </h2>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border-b border-outline-variant/50 pb-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-headline">{service.name}</h4>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-12 rounded-full border-2 border-primary text-primary px-8 py-3 font-bold hover:bg-primary hover:text-on-primary transition-all">
              {t('viewMenu')}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
