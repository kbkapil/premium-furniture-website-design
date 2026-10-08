import { useRef, useState } from "react";
import { ArrowRight, ArrowLeft, MessageCircle, Eye } from "lucide-react";
import { collections, products, business, waLink, type Product } from "../data/site";
import { SectionHead, ProductModal } from "./ui";

/* ---------- Collections ---------- */
export function CollectionsSection({ onQuote }: { onQuote: (type: string) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="collections" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="Our Collections"
          title="Designed For The Way You Live"
          sub="Explore furniture pieces created to bring comfort, character and style into your space."
        />
        <div className="hidden gap-3 md:flex">
          <button
            onClick={() => scrollBy(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1c1917]/15 transition hover:bg-[#1c1917] hover:text-white"
            aria-label="Scroll collections left"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1c1917]/15 transition hover:bg-[#1c1917] hover:text-white"
            aria-label="Scroll collections right"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop editorial grid */}
      <div className="mt-12 hidden gap-5 lg:grid lg:grid-cols-3">
        {collections.map((c, i) => (
          <article
            key={c.id}
            className={`reveal-scale group relative cursor-pointer overflow-hidden rounded-sm bg-[#1c1917] ${
              i === 0 ? "lg:col-span-2 lg:row-span-2 lg:min-h-[560px]" : "min-h-[270px]"
            }`}
            style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            onClick={() => onQuote(c.name)}
          >
            <img
              src={c.image}
              alt={c.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e7c99a]">
                {c.pieces}
              </p>
              <div className="mt-1 flex items-end justify-between gap-4">
                <div>
                  <h3 className={`font-serif text-white ${i === 0 ? "text-4xl" : "text-[26px]"}`}>{c.name}</h3>
                  <p className="mt-1 max-w-sm text-sm text-white/75">{c.description}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
            <span className="absolute left-6 top-5 font-serif text-sm italic text-white/60">
              0{i + 1}
            </span>
          </article>
        ))}
      </div>

      {/* Mobile / tablet horizontal swipe */}
      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:hidden"
      >
        {collections.map((c, i) => (
          <article
            key={c.id}
            onClick={() => onQuote(c.name)}
            className="group relative h-[420px] w-[78%] shrink-0 snap-start overflow-hidden rounded-sm bg-[#1c1917] sm:w-[46%]"
          >
            <img
              src={c.image}
              alt={c.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <span className="absolute left-5 top-4 font-serif text-sm italic text-white/60">0{i + 1}</span>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e7c99a]">{c.pieces}</p>
              <h3 className="mt-1 font-serif text-3xl text-white">{c.name}</h3>
              <p className="mt-1 text-sm text-white/75">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-white">
                View Collection <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* mobile scroll hint */}
      <div className="mt-4 flex items-center justify-between lg:hidden">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a8a29e]">Swipe →</p>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1917]/15"
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1917]/15"
            aria-label="Scroll right"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured furniture ---------- */
export function FurnitureSection() {
  const [active, setActive] = useState<Product | null>(null);
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="furniture" className="scroll-mt-24 border-y border-[#e5ded1] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="Catalogue"
            title="Featured Furniture"
            sub="A curated selection from our Pune showroom. Every piece can be customised in size, fabric and finish."
          />
          <a
            href={waLink("Hi SA Pune Furniture! Please share your full furniture catalogue.")}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#6b4a2f]"
          >
            Full catalogue on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Filters */}
        <div className="reveal no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`shrink-0 border px-5 py-2.5 text-[13px] font-bold transition ${
                filter === c
                  ? "border-[#1c1917] bg-[#1c1917] text-white"
                  : "border-[#e5ded1] bg-[#FAF9F6] text-[#57534e] hover:border-[#1c1917] hover:text-[#1c1917]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <article
              key={p.id}
              className="reveal group flex flex-col"
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
            >
              <div
                className="card-shadow card-shadow-hover relative cursor-pointer overflow-hidden rounded-sm bg-[#f3efe7] transition-shadow duration-300"
                onClick={() => setActive(p)}
              >
                <div className="aspect-[4/5] overflow-hidden sm:aspect-[4/4.4]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                {p.tag && (
                  <span className="absolute left-4 top-4 bg-[#FAF9F6]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4e3421]">
                    {p.tag}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#1c1917] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Eye className="h-4 w-4" />
                </span>
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6a4d]">
                    {p.category}
                  </p>
                  {p.price && <p className="font-serif text-lg text-[#4e3421]">{p.price}</p>}
                </div>
                <h3
                  className="mt-1.5 cursor-pointer font-serif text-[26px] leading-snug text-[#1c1917] transition hover:text-[#6b4a2f]"
                  onClick={() => setActive(p)}
                >
                  {p.name}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#57534e]">{p.description}</p>
                <div className="mt-4 flex gap-2.5 pt-1">
                  <button
                    onClick={() => setActive(p)}
                    className="flex-1 border border-[#1c1917]/20 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#1c1917] transition hover:border-[#1c1917] hover:bg-[#1c1917] hover:text-white"
                  >
                    View Details
                  </button>
                  <a
                    href={waLink(`Hi ${business.name}! I'm interested in "${p.name}" (${p.category}). Please share details.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 bg-[#6b4a2f] py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#4e3421]"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
