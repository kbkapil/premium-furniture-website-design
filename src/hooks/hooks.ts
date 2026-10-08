import { useEffect, useRef, useState } from "react";

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* Reveal on scroll — adds .is-visible when element enters viewport */
export function useRevealRoot<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (reducedMotion) {
      root.querySelectorAll(".reveal,.reveal-scale,.img-reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }
    const els = root.querySelectorAll(".reveal,.reveal-scale,.img-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}

/* Global reveal observer for dynamically added content */
export function useGlobalReveal() {
  useEffect(() => {
    if (reducedMotion) {
      document.querySelectorAll(".reveal,.reveal-scale,.img-reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
    );
    const observeAll = () => {
      document
        .querySelectorAll(".reveal:not(.is-visible),.reveal-scale:not(.is-visible),.img-reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };
    observeAll();
    const t = setInterval(observeAll, 800);
    return () => {
      io.disconnect();
      clearInterval(t);
    };
  }, []);
}

/* Subtle parallax value on scroll */
export function useParallax(speed = 0.25) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (reducedMotion) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);
  return offset;
}

/* Counter animation when visible */
export function useCountUp(target: number, started: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    if (reducedMotion) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return value;
}

export function useVisible<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}
