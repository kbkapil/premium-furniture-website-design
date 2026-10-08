import { useState } from "react";
import {
  Expand,
  Award,
  PenTool,
  TreePine,
  Sparkles,
  SearchCheck,
  Headset,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { works, features, testimonials } from "../data/site";
import { SectionHead, Lightbox } from "./ui";

const galleryCats = ["All", "Living Room", "Bedroom", "Dining", "Office", "Custom Furniture"];

/* ---------- Gallery ---------- */
export function GallerySection() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const visible = cat === "All" ? works : works.filter((w) => w.category === cat);

  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHead
          eyebrow="Our Work"
          title="Spaces We're Proud Of"
          sub="A glimpse of living rooms, bedrooms, dining spaces and custom builds styled and delivered with care."
        />
      </div>

      <div className="reveal no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
        {galleryCats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`shrink-0 border px-5 py-2.5 text-[13px] font-bold transition ${
              cat === c
                ? "border-[#1c1917] bg-[#1c1917] text-white"
                : "border-[#e5ded1] bg-white text-[#57534e] hover:border-[#1c1917] hover:text-[#1c1917]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:mb-4">
        {visible.map((w, i) => (
          <figure
            key={w.id}
            onClick={() => setLightbox(i)}
            className="reveal-scale group relative cursor-zoom-in break-inside-avoid overflow-hidden rounded-sm bg-[#f3efe7]"
            style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
          >
            <img
              src={w.image}
              alt={w.alt}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                w.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e7c99a]">
                  {w.category}
                </span>
                <span className="block font-serif text-xl text-white">{w.title}</span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">
                <Expand className="h-4 w-4" />
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox works={visible} index={lightbox} onClose={() => setLightbox(null)} onNav={setLightbox} />
      )}
    </section>
  );
}

/* ---------- Why choose us ---------- */
const featureIcons = [Award, PenTool, TreePine, Sparkles, SearchCheck, Headset];

export function WhySection() {
  return (
    <section id="why-us" className="scroll-mt-24 border-y border-[#e5ded1] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionHead
            align="center"
            eyebrow="Why Choose Us"
            title="The SA Pune Furniture Promise"
            sub="Considered design, honest materials and careful finishing — in every piece we deliver."
          />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <div
                key={f.id}
                className="reveal group border border-[#ece5d6] bg-[#FAF9F6] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6b4a2f]/40 hover:shadow-[0_20px_40px_-20px_rgba(107,74,47,0.35)]"
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6b4a2f]/25 bg-white text-[#6b4a2f] transition group-hover:bg-[#6b4a2f] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="font-serif text-3xl text-[#ece5d6] transition group-hover:text-[#e0d5c2]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-[22px] text-[#1c1917]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#57534e]">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const go = (dir: number) => setIndex((index + dir + testimonials.length) % testimonials.length);

  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="reveal mx-auto max-w-2xl text-center">
        <SectionHead
          align="center"
          eyebrow="Testimonials"
          title="Loved Across Pune"
          sub="Real reviews from our customers will appear here. Placeholders below — replace with verified feedback."
        />
      </div>

      <div className="reveal-scale relative mt-10 border border-[#e5ded1] bg-white p-8 text-center sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3efe7] text-[#6b4a2f]">
          <Quote className="h-6 w-6 fill-current" />
        </span>
        <div className="mt-4 flex justify-center gap-1" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#c9963c] text-[#c9963c]" />
          ))}
        </div>
        <blockquote key={t.id} className="mx-auto mt-5 max-w-2xl font-serif text-2xl leading-snug text-[#1c1917] sm:text-[28px]">
          “{t.quote}”
        </blockquote>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#1c1917]">{t.name}</p>
        <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#8a6a4d]">
          {t.location}
          {t.placeholder && " · Placeholder"}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1c1917]/15 transition hover:bg-[#1c1917] hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((x, i) => (
              <button
                key={x.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-[#6b4a2f]" : "w-1.5 bg-[#e5ded1] hover:bg-[#a8a29e]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1c1917]/15 transition hover:bg-[#1c1917] hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
