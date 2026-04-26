import { Navbar, Hero, Gallery, Shop, Services, Footer } from "@/components/ui";
import { locales } from "@/navigation";
import { setRequestLocale } from 'next-intl/server';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <Services />
        {/* <Shop /> */}
        {/* TODO: voucher here */}
      </main>
      <Footer />
    </div>
  );
}
