import { useRef } from "react";
import { Play, ArrowLeft, ArrowRight, ArrowUpRight, Clapperboard, Camera, Hammer } from "lucide-react";
import { InstagramIcon } from "./icons";
import { reels, feedPosts, business } from "../data/site";
import { SectionHead, ImageStrip } from "./ui";

export function ReelsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const w = card ? card.getBoundingClientRect().width + 20 : 320;
    el.scrollBy({ left: dir * w * 2, behavior: "smooth" });
  };

  return (
    <section id="reels" className="scroll-mt-24 bg-[#141210] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            dark
            eyebrow="Instagram Reels"
            title="See Us In Action"
            sub="From craftsmanship to finished spaces — explore our latest work."
          />
          <div className="flex items-center gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
            >
              <InstagramIcon className="h-4 w-4" /> {business.instagramHandle}
            </a>
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollBy(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black"
                aria-label="Scroll reels left"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black"
                aria-label="Scroll reels right"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reel carousel */}
      <div className="mt-10">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        >
          {reels.map((r, i) => (
            <article
              key={r.id}
              className="reveal-scale group relative h-[480px] w-[270px] shrink-0 snap-start overflow-hidden rounded-md bg-[#292524] sm:h-[520px] sm:w-[295px]"
              style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}
            >
              <img
                src={r.thumbnail}
                alt={`${r.title} — Instagram reel thumbnail`}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30" />

              {/* top row */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className="flex items-center gap-1.5 bg-black/45 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  <Clapperboard className="h-3.5 w-3.5" /> Reel
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
                  <InstagramIcon className="h-4 w-4" />
                </span>
              </div>

              {/* center play */}
              <a
                href={r.reelUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${r.title} on Instagram`}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black"
              >
                <Play className="ml-0.5 h-6 w-6 fill-current" />
              </a>

              {/* bottom meta */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e7c99a]">
                  {r.category} {r.views ? `· ${r.views} views` : ""}
                </p>
                <h3 className="mt-1 font-serif text-[19px] leading-snug text-white">{r.title}</h3>
                <a
                  href={r.reelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 bg-white/95 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-black transition hover:bg-white"
                >
                  Watch on Instagram <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* progress shimmer */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#e7c99a] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}

          {/* Follow card */}
          <a
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
            className="group flex h-[480px] w-[270px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-md border border-dashed border-white/25 bg-white/[0.03] p-8 text-center transition hover:border-white/50 sm:h-[520px] sm:w-[295px]"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:scale-110">
              <InstagramIcon className="h-7 w-7" />
            </span>
            <p className="font-serif text-2xl text-white">More on Instagram</p>
            <p className="text-sm leading-relaxed text-white/60">
              Daily reels, workshop stories & finished Pune homes.
            </p>
            <span className="mt-2 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[#e7c99a]">
              Follow Us <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
        <p className="mt-4 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40 sm:px-6 lg:hidden">
          Swipe →
        </p>
      </div>

      {/* scrolling project strip */}
      <div className="mt-14">
        <ImageStrip
          images={[
            {
              src: "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=700",
              alt: "Modern living room project",
            },
            {
              src: "https://images.pexels.com/photos/8082562/pexels-photo-8082562.jpeg?auto=compress&cs=tinysrgb&w=700",
              alt: "Elegant bedroom project",
            },
            {
              src: "https://images.pexels.com/photos/5711775/pexels-photo-5711775.jpeg?auto=compress&cs=tinysrgb&w=700",
              alt: "Craftsman at workbench",
            },
            {
              src: "https://images.pexels.com/photos/7046002/pexels-photo-7046002.jpeg?auto=compress&cs=tinysrgb&w=700",
              alt: "Dining room project",
            },
            {
              src: "https://images.pexels.com/photos/6585610/pexels-photo-6585610.jpeg?auto=compress&cs=tinysrgb&w=700",
              alt: "Wooden storage wall",
            },
            {
              src: "https://images.pexels.com/photos/7214474/pexels-photo-7214474.jpeg?auto=compress&cs=tinysrgb&w=700",
              alt: "Complete bedroom interior",
            },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------- Instagram feed ---------- */
const typeIcon = { reel: Clapperboard, photo: Camera, workshop: Hammer };

export function FeedSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="reveal flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHead
          eyebrow="Social"
          title="From Instagram"
          sub="Reels, product photos, furniture projects and workshop moments — straight from our Pune studio."
        />
        <a
          href={business.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 bg-[#1c1917] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#4e3421]"
        >
          <InstagramIcon className="h-4 w-4" /> Follow {business.instagramHandle}
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {feedPosts.map((p, i) => {
          const Icon = typeIcon[p.type];
          return (
            <a
              key={p.id}
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className={`reveal-scale group relative overflow-hidden rounded-sm bg-[#f3efe7] ${
                i === 0 ? "row-span-2 aspect-[3/4.4] sm:aspect-auto sm:min-h-full" : "aspect-square"
              }`}
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
              aria-label={`Open ${p.label} post on Instagram`}
            >
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
              <span className="absolute left-3 top-3 flex items-center gap-1.5 bg-black/50 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                <Icon className="h-3 w-3" /> {p.label}
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                  <InstagramIcon className="h-6 w-6" />
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
