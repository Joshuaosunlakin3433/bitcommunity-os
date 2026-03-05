import { TechnicalGrid } from "@/src/components/ui/TechnicalGrid";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/home/Hero";
import { Features } from "@/src/components/home/Features";
import { Footer } from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
      {/* Background grid + film grain */}
      <TechnicalGrid />

      {/* All page content */}
      <div className="relative z-20">
        <Navbar />

        <Hero />

        {/* Divider */}
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="border-t border-border-subtle" />
        </div>

        <Features />

        {/* Divider */}
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="border-t border-border-subtle" />
        </div>

        <Footer />
      </div>
    </div>
  );
}
