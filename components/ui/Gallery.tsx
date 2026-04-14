import { siteConfig } from "@/configs/site";
import { Star } from "lucide-react";

import { galleryItems } from "@/configs/content";

/**
 * Premium Gallery rendered as a Server Component.
 * JS-based scrolling removed in favor of native CSS scroll snap.
 */
export default function Gallery() {
  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline text-on-surface mb-4">Ảnh Từ Khách Hàng Đã Làm</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-on-surface-variant">Những tác phẩm nghệ thuật từ studio của chúng tôi</p>
        </div>

        <div className="relative group">
          <div
            className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {galleryItems.map((item) => (
              <div key={item.id} className="flex-none w-72 md:w-80 snap-center">
                <div className="aspect-square rounded-xl overflow-hidden relative group/item">
                  <img
                    alt={`Mẫu móng ${item.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover/item:scale-110"
                    src={item.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 md:group-hover/item:opacity-100 transition-opacity"></div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg md:transform md:translate-y-2 md:opacity-0 md:group-hover/item:translate-y-0 md:group-hover/item:opacity-100 transition-all duration-300 shadow-sm">
                    <div className="flex gap-1 text-primary mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xs italic text-on-surface-variant">&quot;{item.testimonial}&quot;</p>
                    <p className="text-[10px] font-bold uppercase mt-2 text-secondary">- {item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {galleryItems.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-primary' : 'bg-primary/30'}`}></div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-primary font-bold uppercase tracking-widest text-sm hover:underline underline-offset-8 transition-all">
            Theo dõi để xem thêm {siteConfig.business.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
