import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { business, processSteps, waLink } from "../data/site";
import { SectionHead } from "./ui";

const aboutPoints = [
  "Thoughtful craftsmanship with clean joinery & finishing",
  "Custom sizes, fabrics & finishes for your space",
  "Quality materials selected for everyday Indian homes",
  "Friendly guidance from design to delivery in Pune",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-[#e5ded1] bg-[#f3efe7]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16">
        {/* Images */}
        <div className="relative">
          <div className="img-reveal overflow-hidden rounded-sm">
            <img
              src="https://images.pexels.com/photos/5711775/pexels-photo-5711775.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Carpenter shaping wooden furniture detail at a workbench"
              loading="lazy"
              decoding="async"
              className="aspect-[4/4.6] w-full object-cover sm:aspect-[4/4.2]"
            />
          </div>
          <div className="reveal absolute -bottom-6 -right-2 hidden w-56 overflow-hidden rounded-sm border-4 border-[#f3efe7] sm:block lg:-right-6 lg:w-64">
            <img
              src="https://images.pexels.com/photos/30907888/pexels-photo-30907888.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hands meticulously adjusting a woodworking plane tool"
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="reveal absolute -left-2 top-6 bg-[#1c1917] px-5 py-4 text-white sm:left-6 lg:-left-6">
            <p className="font-serif text-2xl">Pune</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a97c]">
              Designed · Built · Delivered
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center lg:py-6">
          <div className="reveal">
            <SectionHead
              eyebrow="About Us"
              title="Furniture Crafted For Modern Living"
              sub="SA Pune Furniture is a Pune-based furniture studio creating pieces for modern homes, elegant interiors and everyday comfort — from ready designs to fully custom builds."
            />
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {aboutPoints.map((p, i) => (
              <li
                key={p}
                className="reveal flex items-start gap-3 border border-[#e0d5c2] bg-[#FAF9F6] p-4"
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6b4a2f] text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold leading-snug text-[#292524]">{p}</span>
              </li>
            ))}
          </ul>
          <p className="reveal mt-6 text-[15px] leading-relaxed text-[#57534e]">
            Whether you are furnishing a new flat, refreshing a single room or need a one-of-a-kind
            piece, our team helps you choose materials, finishes and proportions that fit your space,
            style and lifestyle. Visit our Pune showroom or message us to begin.
          </p>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#1c1917] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#4e3421]"
            >
              Know More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Hi SA Pune Furniture! I'd like to know more about your furniture & showroom.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#1c1917]/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#1c1917] transition hover:border-[#1c1917]"
            >
              <MessageCircle className="h-4 w-4" /> Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CustomSection({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[320px] lg:min-h-full">
          <img
            src="https://images.pexels.com/photos/5711885/pexels-photo-5711885.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Artisan polishing a round wooden furniture detail in the workshop"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1c1917]/20 lg:bg-gradient-to-r lg:from-transparent lg:to-[#201812]/40" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-[#FAF9F6]/95 px-5 py-4 backdrop-blur-sm sm:right-auto sm:gap-10">
            <div>
              <p className="font-serif text-xl text-[#1c1917]">Made to measure</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6a4d]">
                Your size · Your finish · Your style
              </p>
            </div>
            <span className="hidden font-serif text-4xl text-[#e5ded1] sm:block">05</span>
          </div>
        </div>

        {/* Content side */}
        <div className="bg-[#201812] px-4 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="reveal">
            <SectionHead
              dark
              eyebrow="Custom Furniture"
              title="Have Something Specific In Mind?"
              sub="Tell us what you need and we'll help you create furniture that fits your space, style and lifestyle."
            />
          </div>

          <ol className="mt-10 space-y-0">
            {processSteps.map((s, i) => (
              <li
                key={s.no}
                className="reveal group flex gap-5 border-t border-white/10 py-5 last:border-b"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <span className="font-serif text-xl text-[#c9a97c]">{s.no}</span>
                <div>
                  <p className="font-bold text-white transition group-hover:text-[#e7c99a]">
                    {s.title}
                  </p>
                  <p className="mt-0.5 text-sm text-white/60">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onQuote}
              className="group flex items-center justify-center gap-2 bg-[#FAF9F6] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#1c1917] transition hover:bg-white"
            >
              Request Custom Furniture
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={`tel:${business.phoneHref.replace("tel:", "")}`}
              className="flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
