import { Navbar, Hero, Gallery, Shop, Services, Footer } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <Shop />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
