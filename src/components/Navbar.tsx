import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { business, navLinks, waLink } from "../data/site";

export default function Navbar({ onQuote }: { onQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          solid
            ? "border-b border-[#e5ded1] bg-[#FAF9F6]/95 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        {/* top micro-bar (desktop) */}
        <div
          className={`hidden overflow-hidden transition-all duration-300 lg:block ${
            scrolled ? "max-h-0" : "max-h-10"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[12px] tracking-wide text-white/85">
            <p className="font-medium">Pune · Custom & Premium Home Furniture</p>
            <div className="flex items-center gap-5">
              <a href={business.phoneHref} className="flex items-center gap-1.5 hover:text-white">
                <Phone className="h-3.5 w-3.5" /> {business.phoneDisplay}
              </a>
              <span className="h-3 w-px bg-white/25" />
              <p>{business.hours}</p>
            </div>
          </div>
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Brand */}
          <a href="#home" className="group flex items-center gap-3" aria-label="SA Pune Furniture home">
            <span
              className={`flex h-10 w-10 items-center justify-center font-serif text-lg transition ${
                solid ? "bg-[#1c1917] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#1c1917]"
              }`}
            >
              SA
            </span>
            <span className="leading-tight">
              <span
                className={`block font-serif text-[19px] tracking-tight transition ${
                  solid ? "text-[#1c1917]" : "text-white"
                }`}
              >
                SA Pune Furniture
              </span>
              <span
                className={`block text-[10px] font-bold uppercase tracking-[0.24em] transition ${
                  solid ? "text-[#8a6a4d]" : "text-white/70"
                }`}
              >
                Crafted Living · Pune
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-semibold tracking-wide transition hover:opacity-100 ${
                  solid ? "text-[#44403c] hover:text-[#1c1917]" : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onQuote}
              className="hidden items-center gap-2 bg-[#6b4a2f] px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#4e3421] sm:flex"
            >
              <MessageCircle className="h-4 w-4" /> Get Quote
            </button>
            <a
              href={waLink("Hi SA Pune Furniture! I'd like a quote for furniture.")}
              target="_blank"
              rel="noreferrer"
              className={`hidden h-10 w-10 items-center justify-center rounded-full transition lg:flex ${
                solid
                  ? "border border-[#1c1917]/15 text-[#1c1917] hover:bg-[#1c1917] hover:text-white"
                  : "border border-white/30 text-white hover:bg-white hover:text-black"
              }`}
              aria-label="Chat on WhatsApp"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={`flex h-10 w-10 items-center justify-center transition lg:hidden ${
                solid ? "text-[#1c1917]" : "text-white"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[55] transition lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-[#FAF9F6] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#e5ded1] px-5 py-4 pt-20">
            <p className="font-serif text-xl text-[#1c1917]">Menu</p>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5ded1]"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-4">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-[#efe9dc] py-4"
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-xs font-bold text-[#a3805a]">0{i + 1}</span>
                  <span className="font-serif text-2xl text-[#1c1917] transition group-hover:translate-x-1 group-hover:text-[#6b4a2f]">
                    {l.label}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#a3805a]" />
              </a>
            ))}
          </nav>
          <div className="border-t border-[#e5ded1] bg-[#f3efe7] p-5 pb-24">
            <button
              onClick={() => {
                setOpen(false);
                onQuote();
              }}
              className="flex w-full items-center justify-center gap-2 bg-[#1c1917] py-4 text-sm font-bold uppercase tracking-[0.14em] text-white"
            >
              <MessageCircle className="h-4 w-4" /> Get a Quote
            </button>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 border border-[#1c1917]/20 bg-white py-3 text-[13px] font-bold text-[#1c1917]"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-[#1c1917]/20 bg-white py-3 text-[13px] font-bold text-[#1c1917]"
              >
                <MapPin className="h-4 w-4" /> Location
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
