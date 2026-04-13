import { Hero } from "@/components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Services Section Placeholder */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6">
                Curated services for the <br /> modern individual.
              </h2>
              <p className="text-[#6b6b6b] text-lg font-light">
                From classic manicures to complex nail art, we offer a range of services
                designed to pamper you and express your unique personality.
              </p>
            </div>
            <div className="pb-2">
              <a href="#" className="text-[#b08d7d] font-bold tracking-widest uppercase text-sm border-b border-[#b08d7d] pb-1 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors">
                View Full Menu
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Nail Artistry", desc: "Bespoke designs tailored to your unique style and aesthetic." },
              { title: "Luxury Spa", desc: "Complete rejuvenation for your hands and feet with premium oils." },
              { title: "Classic Care", desc: "Essential maintenance handled with expert precision and care." }
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-80 w-full bg-[#f7f0e9] rounded-2xl mb-6 overflow-hidden transition-transform duration-500 group-hover:scale-[0.98]">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-[#b08d7d]/30 font-serif italic text-2xl">
                    Service Image
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-3 text-[#1a1a1a]">{service.title}</h3>
                <p className="text-[#6b6b6b] leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Placeholder */}
      <section id="about" className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="h-[600px] bg-zinc-800 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-serif italic text-3xl">
              Studio View
            </div>
          </div>
          <div>
            <span className="text-sm font-bold tracking-[0.2em] text-[#b08d7d] uppercase mb-6 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Where beauty meets <br /> mindfulness.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
              At Hynie Nail Room, we believe that nail care is more than just a service—it's a form of self-expression and a moment of necessary stillness in a busy world.
            </p>
            <p className="text-zinc-400 text-lg mb-12 font-light leading-relaxed">
              Our studio is designed to be a sanctuary where technical mastery and tranquil atmosphere coexist, ensuring every guest leaves feeling both beautiful and balanced.
            </p>
            <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section Placeholder */}
      <section id="gallery" className="py-24 bg-[#faf9f6]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">Our Gallery</h2>
            <div className="w-20 h-1 bg-[#b08d7d] mx-auto opacity-30"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-white rounded-lg overflow-hidden group relative cursor-pointer shadow-sm">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium tracking-widest uppercase">View</span>
                </div>
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-[#b08d7d]/20">
                  <span className="font-serif italic text-lg">Work {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <section className="py-24 bg-white border-t border-[#f0f0f0]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-[#1a1a1a] mb-8">Ready for your transformation?</h2>
          <p className="text-[#6b6b6b] mb-10 max-w-lg mx-auto font-light">
            Join us at Hynie Nail Room for an experience that combines artistic excellence with premium care.
          </p>
          <button className="px-12 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
            Book My Session
          </button>
        </div>
      </section>
    </main>
  );
}
