import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { CollectionsSection, FurnitureSection } from "./components/Collections";
import { ReelsSection, FeedSection } from "./components/Reels";
import { AboutSection, CustomSection } from "./components/AboutCustom";
import { GallerySection, WhySection, TestimonialsSection } from "./components/GalleryWhy";
import { ContactSection, Footer, MobileCTA, WhatsAppFloat } from "./components/ContactFooter";
import { TextMarquee, EnquiryModal } from "./components/ui";
import { useGlobalReveal } from "./hooks/hooks";

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteType, setQuoteType] = useState("");

  useGlobalReveal();

  const openQuote = useCallback((type = "") => {
    setQuoteType(type);
    setQuoteOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#1c1917]">
      <a
        href="#collections"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      <Navbar onQuote={() => openQuote()} />

      <main>
        <Hero onQuote={() => openQuote()} />
        <CollectionsSection onQuote={(t) => openQuote(t)} />
        <TextMarquee />
        <FurnitureSection />
        <ReelsSection />
        <FeedSection />
        <AboutSection />
        <CustomSection onQuote={() => openQuote()} />
        <GallerySection />
        <WhySection />
        <TestimonialsSection />
        <ContactSection onQuote={() => openQuote()} />
      </main>

      <Footer />
      <MobileCTA />
      <WhatsAppFloat />
      <EnquiryModal open={quoteOpen} defaultType={quoteType} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
