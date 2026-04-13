import { Instagram, Facebook, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

/**
 * Footer section rendered as a Server Component.
 * Form submission logic removed to stay on the server.
 */
export default function Footer() {
  return (
    <footer className="bg-surface-container py-16 px-8 border-t border-outline-variant/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-headline italic text-primary font-semibold">
              Hynie Nails Room
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Nghệ thuật làm móng phong cách Hàn Quốc cao cấp. Kiến tạo những
              khoảnh khắc làm đẹp và thư giãn từ năm 2024.
            </p>
            <div className="flex gap-4">
              <a
                className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <Instagram size={16} />
              </a>
              <a
                className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-xs text-secondary">
              Liên Hệ
            </h5>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>
                  123 Artistry Lane, Suite 400
                  <br />
                  West Hollywood, CA 90048
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@hynienails.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-xs text-secondary">
              Giờ Mở Cửa
            </h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex justify-between">
                <span>Thứ 2 - Thứ 6</span>
                <span className="font-medium text-on-surface">
                  9:00 SA - 8:00 CH
                </span>
              </li>
              <li className="flex justify-between">
                <span>Thứ 7</span>
                <span className="font-medium text-on-surface">
                  10:00 SA - 6:00 CH
                </span>
              </li>
              <li className="flex justify-between">
                <span>Chủ Nhật</span>
                <span className="font-medium text-on-surface text-primary">
                  Đóng cửa
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-xs text-secondary">
              Bản Tin
            </h5>
            <p className="text-sm text-on-surface-variant">
              Cập nhật những mẫu thiết kế mới nhất.
            </p>
            <form className="flex gap-2">
              <input
                className="bg-white border border-outline-variant/50 rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                placeholder="Email"
                type="email"
                required
              />
              <button
                type="submit"
                className="bg-primary text-on-primary p-2 rounded-lg hover:bg-primary/90 transition-colors"
                aria-label="Đăng ký"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-secondary font-bold">
          <p>© 2024 Hynie Nails Room. Bảo lưu mọi quyền.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">
              Chính Sách Bảo Mật
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Điều Khoản Dịch Vụ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
