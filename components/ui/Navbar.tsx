/**
 * Premium Navbar rendered as a Server Component.
 */
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30 px-8 py-5 flex justify-between items-center">
      <div className="text-2xl font-headline italic text-primary font-semibold">Hynie Nails Room</div>
      <div className="hidden md:flex gap-10 items-center">
        <a className="text-on-surface hover:text-primary transition-colors font-medium tracking-tight" href="#gallery">Ảnh Từ Khách Hàng</a>
        <a className="text-on-surface hover:text-primary transition-colors font-medium tracking-tight" href="#shop">Sản phẩm</a>
        <a className="text-on-surface hover:text-primary transition-colors font-medium tracking-tight" href="#services">Dịch Vụ</a>
      </div>
      <button
        className="rounded-full bg-primary px-8 py-2.5 text-on-primary font-medium text-sm tracking-wide shadow-sm hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
      >
        Đặt Lịch Ngay
      </button>
    </nav>
  );
}
