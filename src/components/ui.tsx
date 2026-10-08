import { useEffect, useState, type ReactNode } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import { business, waLink, furnitureTypes, marqueeItems, type Work } from "../data/site";

/* ---------- Section heading ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#8a6a4d]">
      <span className="inline-block h-px w-8 bg-[#8a6a4d]/60" />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center items-center" : "text-left items-start"} flex max-w-2xl flex-col gap-4`}>
      <p
        className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] ${
          dark ? "text-[#c9a97c]" : "text-[#8a6a4d]"
        } ${centered ? "justify-center" : ""}`}
      >
        <span className={`inline-block h-px w-8 ${dark ? "bg-[#c9a97c]/70" : "bg-[#8a6a4d]/60"}`} />
        {eyebrow}
        {centered && <span className={`inline-block h-px w-8 ${dark ? "bg-[#c9a97c]/70" : "bg-[#8a6a4d]/60"}`} />}
      </p>
      <h2
        className={`font-serif text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl ${
          dark ? "text-[#FAF9F6]" : "text-[#1c1917]"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`max-w-xl text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-[#57534e]"}`}>{sub}</p>
      )}
    </div>
  );
}

/* ---------- Text marquee ---------- */
export function TextMarquee({ dark = false }: { dark?: boolean }) {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className={`marquee-paused overflow-hidden border-y py-4 ${
        dark ? "border-white/10 bg-[#1c1917]" : "border-[#e5ded1] bg-[#f3efe7]"
      }`}
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                <span
                  className={`font-serif text-lg tracking-wide sm:text-xl ${
                    dark ? "text-[#ede6d8]" : "text-[#4e3421]"
                  }`}
                >
                  {item}
                </span>
                <span className={`text-sm ${dark ? "text-[#a3805a]" : "text-[#a3805a]"}`}>●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Image strip marquee ---------- */
export function ImageStrip({ images }: { images: { src: string; alt: string }[] }) {
  const doubled = [...images, ...images];
  return (
    <div className="marquee-paused overflow-hidden" aria-hidden="true">
      <div className="animate-marquee-slow flex w-max gap-4 pr-4">
        {doubled.map((img, i) => (
          <div
            key={i}
            className="relative h-52 w-72 shrink-0 overflow-hidden rounded-sm sm:h-60 sm:w-96"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Lightbox ---------- */
export function Lightbox({
  works,
  index,
  onClose,
  onNav,
}: {
  works: Work[];
  index: number;
  onClose: () => void;
  onNav: (i: number) => void;
}) {
  const work = works[index];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % works.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + works.length) % works.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, works.length, onClose, onNav]);

  if (!work) return null;
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#1c1917]/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black"
        aria-label="Close gallery"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav((index - 1 + works.length) % works.length);
        }}
        className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black sm:flex"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav((index + 1) % works.length);
        }}
        className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black sm:flex"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <figure
        className="lightbox-in max-h-[86vh] w-full max-w-4xl overflow-hidden rounded-md bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={work.image} alt={work.alt} className="max-h-[70vh] w-full object-contain" />
        <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a97c]">
              {work.category}
            </p>
            <p className="font-serif text-xl text-white">{work.title}</p>
          </div>
          <p className="text-sm tabular-nums text-white/60">
            {index + 1} / {works.length}
          </p>
        </figcaption>
      </figure>
      {/* mobile nav */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3 sm:hidden">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNav((index - 1 + works.length) % works.length);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNav((index + 1) % works.length);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- Product quick-view modal ---------- */
export function ProductModal({
  product,
  onClose,
}: {
  product: {
    name: string;
    category: string;
    description: string;
    image: string;
    alt: string;
    price?: string;
    tag?: string;
  } | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;
  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-[#1c1917]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="modal-up grid max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-[#FAF9F6] sm:rounded-md md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative min-h-64 md:min-h-full">
          <img src={product.image} alt={product.alt} className="h-64 w-full object-cover md:h-full md:min-h-[420px]" />
          {product.tag && (
            <span className="absolute left-4 top-4 bg-[#1c1917] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FAF9F6]">
              {product.tag}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6a4d]">
                {product.category}
              </p>
              <h3 className="mt-1 font-serif text-3xl leading-tight text-[#1c1917]">{product.name}</h3>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e5ded1] text-[#57534e] transition hover:bg-[#1c1917] hover:text-white"
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-[15px] leading-relaxed text-[#57534e]">{product.description}</p>
          {product.price ? (
            <p className="font-serif text-2xl text-[#4e3421]">{product.price}</p>
          ) : (
            <p className="border border-dashed border-[#c9b896] bg-[#f3efe7] px-4 py-3 text-sm text-[#6b4a2f]">
              Price on request — sizes, fabrics & finishes can be customised. Message us for a quick quote.
            </p>
          )}
          <ul className="grid grid-cols-2 gap-2 text-[13px] text-[#57534e]">
            {["Custom sizes", "Fabric options", "Quality checked", "Pune delivery"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#6b4a2f]" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-2">
            <a
              href={waLink(`Hi ${business.name}! I'm interested in "${product.name}" (${product.category}). Please share details & price.`)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1c1917] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#4e3421]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 border border-[#1c1917]/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#1c1917] transition hover:border-[#1c1917]"
            >
              Call Showroom <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Enquiry modal ---------- */
export function EnquiryModal({
  open,
  onClose,
  defaultType = "",
}: {
  open: boolean;
  onClose: () => void;
  defaultType?: string;
}) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    type: defaultType,
    requirement: "",
    contact: "WhatsApp",
  });

  useEffect(() => {
    setForm((f) => ({ ...f, type: defaultType }));
  }, [defaultType, open]);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const waMessage = `Hi ${business.name}! New custom furniture enquiry:%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AWhatsApp: ${encodeURIComponent(form.whatsapp || form.phone)}%0AType: ${encodeURIComponent(form.type)}%0ARequirement: ${encodeURIComponent(form.requirement)}%0APreferred contact: ${encodeURIComponent(form.contact)}`;

  return (
    <div
      className="fixed inset-0 z-[95] flex items-end justify-center bg-[#1c1917]/70 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Request custom furniture"
    >
      <div
        className="modal-up max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-[#FAF9F6] p-6 sm:rounded-md sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        {!sent ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8a6a4d]">
                  Custom Furniture
                </p>
                <h3 className="mt-2 font-serif text-3xl text-[#1c1917]">Request a Quote</h3>
                <p className="mt-1 text-sm text-[#57534e]">
                  Share a few details — our team will call you back shortly.
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e5ded1] transition hover:bg-[#1c1917] hover:text-white"
                aria-label="Close form"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-semibold text-[#1c1917]">Name *</span>
                <input
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                  className="border border-[#e5ded1] bg-white px-4 py-3 outline-none placeholder:text-[#a8a29e] focus:border-[#6b4a2f]"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-semibold text-[#1c1917]">Phone *</span>
                <input
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 XXXXX XXXXX"
                  inputMode="tel"
                  className="border border-[#e5ded1] bg-white px-4 py-3 outline-none placeholder:text-[#a8a29e] focus:border-[#6b4a2f]"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-semibold text-[#1c1917]">WhatsApp Number</span>
                <input
                  value={form.whatsapp}
                  onChange={set("whatsapp")}
                  placeholder="Same as phone if empty"
                  inputMode="tel"
                  className="border border-[#e5ded1] bg-white px-4 py-3 outline-none placeholder:text-[#a8a29e] focus:border-[#6b4a4d] focus:border-[#6b4a2f]"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-semibold text-[#1c1917]">Furniture Type *</span>
                <select
                  required
                  value={form.type}
                  onChange={set("type")}
                  className="border border-[#e5ded1] bg-white px-4 py-3 outline-none focus:border-[#6b4a2f]"
                >
                  <option value="">Select type…</option>
                  {furnitureTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                <span className="font-semibold text-[#1c1917]">Requirement *</span>
                <textarea
                  required
                  value={form.requirement}
                  onChange={set("requirement")}
                  rows={4}
                  placeholder="Size, material, colour, budget, timeline… e.g. 6-seater dining table in walnut finish for Baner flat"
                  className="resize-none border border-[#e5ded1] bg-white px-4 py-3 outline-none placeholder:text-[#a8a29e] focus:border-[#6b4a2f]"
                />
              </label>
              <fieldset className="sm:col-span-2">
                <legend className="text-sm font-semibold text-[#1c1917]">Preferred Contact Method</legend>
                <div className="mt-2 flex gap-2">
                  {["WhatsApp", "Call", "Either"].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setForm({ ...form, contact: c })}
                      className={`flex-1 border px-4 py-2.5 text-sm font-semibold transition ${
                        form.contact === c
                          ? "border-[#1c1917] bg-[#1c1917] text-white"
                          : "border-[#e5ded1] bg-white text-[#57534e] hover:border-[#1c1917]"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </fieldset>
              <button
                type="submit"
                className="bg-[#6b4a2f] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#4e3421] sm:col-span-2"
              >
                Send Enquiry
              </button>
              <p className="text-center text-xs text-[#a8a29e] sm:col-span-2">
                By sending, you agree to be contacted about your requirement.
              </p>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6b4a2f]/10">
              <CheckCircle2 className="h-8 w-8 text-[#6b4a2f]" />
            </span>
            <h3 className="mt-5 font-serif text-3xl text-[#1c1917]">Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}!</h3>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#57534e]">
              Your enquiry has been noted. For the fastest response, send it directly on WhatsApp —
              our team replies quickly during business hours.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3">
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1f7a4d] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" /> Send on WhatsApp
              </a>
              <button
                onClick={onClose}
                className="border border-[#1c1917]/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#1c1917] transition hover:border-[#1c1917]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
