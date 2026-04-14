import { Phone, Instagram, Facebook, Clock } from "lucide-react";
import { siteConfig } from "@/configs/site";

/**
 * Premium Hero section rendered as a Server Component.
 * Motion animations removed to support full server rendering.
 */
export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden soft-gradient">
      <div className="container mx-auto px-8 relative z-10 text-center max-w-4xl">
        <span className="text-secondary font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
          Tiệm Làm Móng Phong Cách Hàn Quốc Cao Cấp
        </span>

        <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-tight mb-8">
          Vẻ Đẹp Của Bạn, <span className="serif-italic">Kiệt Tác Của Chúng Tôi</span>
        </h1>

        <p className="text-lg text-on-surface-variant leading-relaxed mb-12 max-w-2xl mx-auto">
          Khám phá nét thanh lịch nhẹ nhàng của phong cách làm móng Hàn Quốc.
          Chúng tôi kết hợp thẩm mỹ tối giản với sự tỉ mỉ chuẩn xác để tạo nên vẻ đẹp riêng biệt cho bạn.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="w-full sm:w-auto rounded-full bg-primary px-10 py-4 text-on-primary font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            <a href={`tel:${siteConfig.contact.phone}`}>
              Đặt Lịch Ngay
            </a>
          </button>
          <div className="flex gap-4 items-center">
            <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary-container transition-colors" href={`tel:${siteConfig.contact.phone}`}>
              <Phone size={20} />
            </a>
            <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary-container transition-colors" href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-outline-variant/50 max-w-5xl mx-auto">
          <div className="text-center">
            <Phone size={20} className="text-secondary mx-auto mb-2" />
            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Điện Thoại</p>
            <p className="text-sm font-medium">{siteConfig.contact.phoneFormatted}</p>
          </div>
          <div className="text-center">
            <Instagram size={20} className="text-secondary mx-auto mb-2" />
            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Instagram</p>
            <p className="text-sm font-medium">{siteConfig.business.instagramHandle}</p>
          </div>
          <div className="text-center">
            <Facebook size={20} className="text-secondary mx-auto mb-2" />
            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Facebook</p>
            <p className="text-sm font-medium">{siteConfig.business.facebookName}</p>
          </div>
          <div className="text-center">
            <Clock size={20} className="text-secondary mx-auto mb-2" />
            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Giờ Mở Cửa</p>
            <p className="text-sm font-medium">{siteConfig.business.openingHours}</p>
          </div>
        </div>
      </div>

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-container/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
