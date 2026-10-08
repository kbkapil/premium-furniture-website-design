import { Phone, MapPin, Clock, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { business, navLinks, waLink } from "../data/site";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./icons";

/* ---------- Contact ---------- */
export function ContactSection({ onQuote }: { onQuote: () => void }) {
  const cards = [
    {
      icon: Phone,
      label: "Call Us",
      value: business.phoneDisplay,
      href: business.phoneHref,
      cta: "Call Now",
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: "Fastest response",
      href: waLink("Hi SA Pune Furniture! I have a furniture requirement."),
      cta: "WhatsApp Us",
      external: true,
    },
    {
      icon: MapPin,
      label: "Visit Showroom",
      value: "Pune, Maharashtra",
      href: business.mapsUrl,
      cta: "Get Directions",
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/8082229/pexels-photo-8082229.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Luxurious apartment interior with sofa and elegant lighting"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1c1917]/88" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="reveal max-w-2xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#e7c99a]">
            <span className="inline-block h-px w-8 bg-[#e7c99a]" /> Get In Touch
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.06] text-white sm:text-6xl text-balance">
            Let's Create Something Beautiful.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/75">
            Have a furniture requirement? Talk to our team today — for ready designs, custom builds
            or a showroom visit in Pune.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              className="reveal group border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.1]"
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                <c.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#e7c99a]">
                {c.label}
              </p>
              <p className="mt-1 font-serif text-2xl text-white">{c.value}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-white">
                {c.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>

        {/* info strip */}
        <div className="reveal mt-6 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, k: "Address", v: business.address },
            { icon: Clock, k: "Hours", v: business.hours },
            { icon: Mail, k: "Email", v: business.email },
            { icon: InstagramIcon, k: "Instagram", v: business.instagramHandle },
          ].map((row) => (
            <div key={row.k} className="flex items-start gap-3 bg-[#1c1917]/80 p-5">
              <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#e7c99a]" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{row.k}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-white/90">{row.v}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onQuote}
            className="flex items-center justify-center gap-2 bg-[#FAF9F6] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#1c1917] transition hover:bg-white"
          >
            Get a Free Quote
          </button>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            <MapPin className="h-4 w-4" /> Plan Showroom Visit
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-[#141210] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center bg-[#FAF9F6] font-serif text-lg text-[#1c1917]">
                SA
              </span>
              <span>
                <span className="block font-serif text-xl">SA Pune Furniture</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-[#c9a97c]">
                  Crafted Living · Pune
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Furniture crafted for modern living.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white hover:text-black"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white hover:text-black"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={waLink("Hi SA Pune Furniture!")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:bg-white hover:text-black"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Quick links">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c9a97c]">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks
                .filter((l) => l.label !== "Why Us")
                .map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-white/70 transition hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c9a97c]">Social</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={business.instagram} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-white">
                  Instagram — {business.instagramHandle}
                </a>
              </li>
              <li>
                <a href={business.facebook} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href={waLink("Hi SA Pune Furniture!")} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-white">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c9a97c]">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={business.phoneHref} className="transition hover:text-white">
                  Phone: {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={waLink("Hi SA Pune Furniture!")} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  WhatsApp: Chat now
                </a>
              </li>
              <li>Email: {business.email}</li>
              <li className="leading-relaxed">{business.address}</li>
              <li>{business.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} SA Pune Furniture · Pune, Maharashtra. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 transition hover:text-white">
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      {/* spacer for mobile sticky bar */}
      <div className="h-[68px] lg:hidden" />
    </footer>
  );
}

/* ---------- Sticky mobile CTA ---------- */
export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#e5ded1] bg-[#FAF9F6]/97 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={business.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-3 text-[#1c1917]"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Call</span>
        </a>
        <a
          href={waLink("Hi SA Pune Furniture! I have a furniture requirement.")}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-[#1f7a4d] py-3 text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em]">WhatsApp</span>
        </a>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[#1c1917]"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Location</span>
        </a>
      </div>
    </div>
  );
}

/* ---------- Floating WhatsApp (desktop) ---------- */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hi SA Pune Furniture! I'd like to enquire about furniture.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-[60] hidden items-center gap-3 lg:flex"
    >
      <span className="translate-x-2 border border-[#e5ded1] bg-white px-4 py-2.5 text-[13px] font-bold text-[#1c1917] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-[0_12px_30px_-8px_rgba(31,122,77,0.6)] transition-transform duration-300 group-hover:scale-110">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
    </a>
  );
}
