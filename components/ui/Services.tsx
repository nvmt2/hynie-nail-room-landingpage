/**
 * Services section rendered as a Server Component.
 */
import { services } from "@/configs/content";

export default function Services() {
  return (
    <section className="py-24 bg-background" id="services">
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
            <button className="mt-12 rounded-full border-2 border-primary text-primary px-8 py-3 font-bold hover:bg-primary hover:text-on-primary transition-all">
              Xem Toàn Bộ Menu
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
