import { ArrowRight, ShoppingCart } from "lucide-react";

/**
 * Shop section rendered as a Server Component.
 */
const products = [
  {
    id: 1,
    name: "Bộ Ba Sơn Móng Velvet",
    price: "$58.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlQJ_CrKrscRePWpHPf-jRqOuMKo5WN1OhQKk18_Z4xSuGLpm9z1GrW9a_72BmHM7KgaWj3w9aPYufp-ZduewahBDVeSVcd-sWGxcZN1zng4MmkkGbJ10kvz_BI1gGcynwiny8xeo6AUtRNPjjhDJF6zYVVnvMBS52te2nCT-yDkuANulkTweAodsoPB5YH3wH6bCOfNR2t6Cq3rHyKr0B_k_xstdC1G0iARjXEU-PTm1vg1z4z0CiiF9w4XRWuQMQ6W4U05Ok4GGN",
    tag: "Mới"
  },
  {
    id: 2,
    name: "Bộ Chăm Sóc Atelier",
    price: "$120.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsApzf5-SuqnWYzCsLPn8KTf3YHjxCIev56NZd2YtNS7mOwwYnkU8kXRpYUV9NbdkdT-V2Dhj9blC1yBeOolxqKAb2u-bxbp78flv4fKkB9zcIAZlFaLdkONpsKIqvUs29iZwXBxOr9tsup5OIIBPujb8mbHxuwYs3ZANDpYyId9q3_FqBMowaFgUkcGCwibHKiljF4JRlOF7mP7Nc8w5rUKZnM4b_KHj3XlaciazOdbesCoDFD1ruhoTEp5p7Xe9O7Y31CV4Rs90v"
  },
  {
    id: 3,
    name: "Móng Giả Petal",
    price: "$45.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwEVq2LZ4P1NdgkLfAhRYAB9aiSZx196dG0w1-ZCr04YL0X_yuXS-AkbY6B-fK4mJ5nTpixhI8tSVH622WeE-ebuEHharuY20zZjAOEy5tOPvJpjr2KtnioA2ozEo2JJsHX0Rr8gDhUDMP56p0ZdBSe4Tvblr1hODdyypVUDVm8EPPHAcfdvvIlJdSl2hP4fqbrJbp3E8IRVozqM4-R8LiYQV4jwZP1eHRB0vNF-pWiGOkSYGc3fz73UKonbDW8gRx901gE16VGMQr"
  },
  {
    id: 4,
    name: "Tinh Dầu Botanical Elixir",
    price: "$32.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0uidihAz0OA68xkv3m-5sGakAlGftHhaF7YfAuzopsm-OcFotQ0fRLf-81sH1-uO7_LWfeCC2V6ObMHoQG5fZiRCctDHRxeo8sA_HhlexVzo9P9ywsNlaE5VIfiB6fQgl2tt5WCwhkHntlF64NzoQ-utyHsJhqOx-3_7bgAiZJYcNG2UxVfV06zIHJwpL3QE5xNXm6Iqq-tw-wspEL34vNNv4pfo5SFb6u9SymqAhXmfmsfrRgN-Ihc8VBfGbfwYKc3GYUiONJn4J"
  }
];

export default function Shop() {
  return (
    <section className="py-24 bg-surface-container-low" id="shop">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-headline text-on-surface mb-4">Sản Phẩm Của Hynie</h2>
            <p className="text-on-surface-variant">Bộ dụng cụ chăm sóc móng chuyên nghiệp tại nhà.</p>
          </div>
          <button className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm transition-colors hover:text-on-surface">
            Xem Bộ Sưu Tập 
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
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    {product.tag}
                  </div>
                )}
              </div>
              <h3 className="font-headline text-lg mb-2 text-on-surface">{product.name}</h3>
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
