import { ArrowRight, MessageCircle, Award, PenTool, TreePine, Sparkles, MapPin } from "lucide-react";
import { useParallax } from "../hooks/hooks";
import { business, waLink } from "../data/site";

const trustItems = [
  { icon: Award, label: "Premium Craftsmanship" },
  { icon: PenTool, label: "Custom Designs" },
  { icon: TreePine, label: "Quality Materials" },
  { icon: Sparkles, label: "Modern Designs" },
  { icon: MapPin, label: "Pune Service" },
];

export default function Hero({ onQuote }: { onQuote: () => void }) {
  const parallax = useParallax(0.22);

  return (
    <section id="home" className="relative">
      {/* Hero */}
      <div className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#1c1917]">
        {/* BG image with parallax */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="https://images.pexels.com/photos/8135267/pexels-photo-8135267.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury living room with velvet sofas and warm wooden flooring"
            className="h-[115%] w-full object-cover will-change-transform"
            style={{ transform: `translateY(${parallax}px)` }}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/45 to-[#1c1917]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917]/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-40 sm:px-6 sm:pb-32">
          <div className="max-w-3xl">
            <p
              className="hero-fade-up flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e7c99a]"
              style={{ animationDelay: "100ms" }}
            >
              <span className="inline-block h-px w-10 bg-[#e7c99a]" />
              SA Pune Furniture · Pune
            </p>
            <h1
              className="hero-fade-up mt-5 font-serif text-[44px] leading-[1.04] tracking-tight text-white text-balance sm:text-6xl lg:text-[76px]"
              style={{ animationDelay: "220ms" }}
            >
              Furniture That Makes Your Space Feel Like Home.
            </h1>
            <p
              className="hero-fade-up mt-5 max-w-xl text-[16px] leading-relaxed text-white/80 sm:text-lg"
              style={{ animationDelay: "340ms" }}
            >
              Discover beautifully crafted furniture designed for modern homes, elegant interiors and
              everyday comfort.
            </p>
            <div
              className="hero-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "460ms" }}
            >
              <a
                href="#collections"
                className="group flex items-center justify-center gap-2 bg-[#FAF9F6] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#1c1917] transition hover:bg-white"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={onQuote}
                className="flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#1c1917]"
              >
                <MessageCircle className="h-4 w-4" /> Get a Quote
              </button>
            </div>

            {/* mini meta */}
            <div
              className="hero-fade-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[13px] text-white/70"
              style={{ animationDelay: "580ms" }}
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e7c99a]" /> Sofas · Beds · Dining · Storage
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e7c99a]" /> Custom furniture on request
              </span>
              <a
                href={waLink("Hi! I'd like to visit your Pune showroom. Please share location & timings.")}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                Plan a showroom visit →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
            Scroll to explore ↓
          </span>
          <span className="flex h-10 w-6 justify-center rounded-full border border-white/25 p-1.5">
            <span className="animate-scroll-dot h-2 w-1 rounded-full bg-white/80" />
          </span>
        </div>

        {/* side label */}
        <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 items-center gap-3 xl:flex">
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/50">
            Est. Pune — {business.city}
          </span>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative z-20 border-b border-[#e5ded1] bg-[#FAF9F6]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#ece5d6] sm:grid-cols-3 lg:grid-cols-5">
          {trustItems.map((t, i) => (
            <div
              key={t.label}
              className={`reveal flex items-center justify-center gap-2.5 px-4 py-5 ${
                i === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <t.icon className="h-[18px] w-[18px] text-[#6b4a2f]" strokeWidth={1.6} />
              <span className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#292524]">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
