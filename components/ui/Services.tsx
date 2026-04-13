/**
 * Services section rendered as a Server Component.
 */
const services = [
  {
    name: "Làm Móng Khô Cao Cấp",
    price: "$85",
    description: "Xử lý da chuyên nghiệp và hoàn thiện với gel chuẩn phom.",
  },
  {
    name: "Đắp Gel Mềm Hàn Quốc",
    price: "$120",
    description: "Nối móng tự nhiên với dòng gel mềm cao cấp.",
  },
  {
    name: "Nghệ Thuật Cảm Hứng",
    price: "Tùy chọn",
    description:
      "Các mẫu vẽ tay được thiết kế riêng theo gu thẩm mỹ của bạn.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                alt="Không gian Studio"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDISZx9sD9IWlemj4csIToxLS0PssP1j1UWkG6TRkeZYKcyoQXD9sf-ZFWKpid8I0rnHP8eyU73dkAeEioCCAcIEuOdx4A7bHsBLvjs-8KUgpAe-Lsm8R7FMMzUgPXhz2ZEcSwRXiY7DOkMsuJZPoVMOPxOfc51VlCCCnx2r-SGVB1Ds9LUcpenmcZJU55iECrOXy7rHa2B5NEc0vfNMhX0J75HjPpHl0lXuEHPtGQOIml3GpdVOm9hn4zMKGXnnazUmtpan_OnUCbx"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-container rounded-full -z-10 blur-2xl opacity-40"></div>
          </div>

          <div>
            <h2 className="text-4xl font-headline text-on-surface mb-10 leading-tight">
              Dịch Vụ Chính
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
            <button className="mt-12 rounded-full border-2 border-primary text-primary px-8 py-3 font-bold hover:bg-primary hover:text-white transition-all">
              Xem Toàn Bộ Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
