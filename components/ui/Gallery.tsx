import { siteConfig } from "@/configs/site";
import { Star } from "lucide-react";

const galleryItems = [
// ... (rest of galleryItems)
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJZjzSR3S09YZhwM5QxAykBoKHMkzjZziWWDVhjcBfSVdwUzCqFN4UolNGYhnzPm_KJrtoUA7W6rNmCFIWZgQ4esPbXEy8bNXld8jlxhJ13jBWRhwO6T7i9b6OQ-1vjpspg5exVPqD1bQEUsmmteYl0vs_ZTPRCn0zuS_lJQ5ox8O2ARR3ch_bbyFHJst_HoVI1GZi8LHw1ZkDLqyVdMb7RqXLBUNJYrZuhJhCEo62OA2E0exG16KhiTfssSRXGQVmXzUgk1JgwRLw",
    testimonial: "Nails đẹp lắm ạ, chủ tiệm rất tỉ mỉ!",
    author: "Lan Anh"
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3faIhnwHKstGIhpo3pBz3ag3M2trJV6f-U8Q-z2Fp9mSsgd4t06ZalnmtZ372xWdK8cv7jtQSUVXEFQmgChNmeL5RA7asXVTnIFzxIKGggQ3LfnBQR4v7hSJx9nuZmiKLuFgtRjZLda9p1RHI96gwJHQpeTcL0F4g7jXpKVEmwjvcf-Kl66PuxT8p1NXdg_1uBsq9ZD9iYzI_BnMTmRy2Csj3lAzf6f1SmKNecSDKjImY9w2xdkIrJQY639gsSc3YdQ2RCydIK-oW",
    testimonial: "Màu sơn rất mướt và bền màu, ưng quá!",
    author: "Minh Thư"
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm1W1y6INCCLtUr73wEjS-VRucCaXeJGoJDOS0B_4uBhF-17F6dbYL1RP2_-LT2q2SvJSvprGLSGMpUnO-5TySIiVRVFwsahmlSKzpw6JxvVFyxpfY_kNJ-BCk4xwK8MHCFHrkzu_bHDmXdqmdqtcWRR3Sue9Iu6BX91o3k47rb87lZgXYrMtySrstkiNToIpuRtr_wKAXPcrVfIhh4exRuljpzNCbjgqorS2-bn2DgLhEHEgn94tX2g6PMiRHqV5et0z7v-fx28uM",
    testimonial: "Dịch vụ 5 sao, không gian cực chill.",
    author: "Ngọc Hân"
  },
  {
    id: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDISZx9sD9IWlemj4csIToxLS0PssP1j1UWkG6TRkeZYKcyoQXD9sf-ZFWKpid8I0rnHP8eyU73dkAeEioCCAcIEuOdx4A7bHsBLvjs-8KUgpAe-Lsm8R7FMMzUgPXhz2ZEcSwRXiY7DOkMsuJZPoVMOPxOfc51VlCCCnx2r-SGVB1Ds9LUcpenmcZJU55iECrOXy7rHa2B5NEc0vfNMhX0J75HjPpHl0lXuEHPtGQOIml3GpdVOm9hn4zMKGXnnazUmtpan_OnUCbx",
    testimonial: "Đúng chuẩn phong cách Hàn Quốc thanh lịch.",
    author: "Phương Linh"
  }
];

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
                    <p className="text-xs italic text-on-surface-variant">"{item.testimonial}"</p>
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
