"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, type ReactNode, useEffect, useRef, useState } from "react";
import type { Locale } from "@/content";
import { ArrowUpIcon, CloseIcon, GithubIcon, LinkedinIcon, MenuIcon, MoonIcon, SunIcon, WhatsappIcon } from "./icons";

type Social = { github: string; linkedin: string; whatsapp: string };

export function LangSwitch({ lang, label, className = "" }: { lang: Locale; label: string; className?: string }) {
  const pathname = usePathname() ?? `/${lang}`;
  const other: Locale = lang === "pt" ? "en" : "pt";
  const href = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), `/${other}`);
  return (
    <Link
      href={href}
      hrefLang={other}
      // Trocar o idioma mantém a pessoa no mesmo ponto da página (sem isso o Next rolava até o fim).
      scroll={false}
      className={`rounded-full border border-line px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-muted transition hover:border-accent hover:text-accent ${className}`}
    >
      {label}
    </Link>
  );
}

/** Baixa o PDF pronto (gerado a partir da página /cv), sem passar pela janela de impressão. */
export function DownloadCvButton({ href, fileName, label }: { href: string; fileName: string; label: string }) {
  return (
    <a href={href} download={fileName} className="btn-outline !px-5 !py-2.5">
      <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
      </svg>
      {label}
    </a>
  );
}

export function SocialLinks({ social, className = "" }: { social: Social; className?: string }) {
  const items = [
    { href: social.github, label: "GitHub", icon: <GithubIcon className="size-6" />, hover: "hover:text-fg" },
    { href: social.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="size-6" />, hover: "hover:text-[#0a66c2]" },
    { href: social.whatsapp, label: "WhatsApp", icon: <WhatsappIcon className="size-6" />, hover: "hover:text-[#25d366]" },
  ];
  return (
    <ul className={`flex items-center gap-6 ${className}`}>
      {items.map((i) => (
        <li key={i.label}>
          <a
            href={i.href}
            target="_blank"
            rel="noreferrer"
            title={i.label}
            aria-label={i.label}
            className={`block text-muted transition hover:-translate-y-0.5 ${i.hover}`}
          >
            {i.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

type NavProps = {
  lang: Locale;
  links: { id: string; label: string }[];
  social: Social;
  switchLabel: string;
  cvLabel: string;
  openLabel: string;
  closeLabel: string;
};

export function Nav({ lang, links, social, switchLabel, cvLabel, openLabel, closeLabel }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
      const line = window.scrollY + window.innerHeight / 2;
      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line && el.offsetTop + el.offsetHeight > line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Se a página trocar (ex.: mudar de idioma com o menu aberto), libera a rolagem.
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-[4.5rem] transition-colors duration-300 ${
        scrolled && !open ? "bg-[var(--nav-glass)] backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={close}
          className={`relative z-10 font-logo text-[2rem] leading-none tracking-wide transition-colors lg:text-[2.4rem] ${
            scrolled || open ? "text-fg/80" : "text-accent"
          }`}
        >
          caiobento
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative text-[0.95rem] font-bold transition after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-accent after:transition-all ${
                    active === l.id ? "text-accent after:w-1/2" : "text-fg/90 after:w-0 hover:text-accent hover:after:w-1/2"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link href={`/${lang}/cv`} className="text-[0.95rem] font-bold text-fg/90 transition hover:text-accent">
                {cvLabel}
              </Link>
            </li>
          </ul>
          <SocialLinks social={social} />
          <LangSwitch lang={lang} label={switchLabel} />
        </div>

        {/* Celular */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? closeLabel : openLabel}
          className={`relative z-10 lg:hidden ${open ? "text-fg" : scrolled ? "text-fg/80" : "text-accent"}`}
        >
          {open ? <CloseIcon className="size-9" /> : <MenuIcon className="size-9" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 flex flex-col items-center bg-bg/95 pt-[4.5rem] backdrop-blur-md transition duration-300 lg:hidden ${
          open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0"
        }`}
      >
        <ul className="mb-14 mt-16 flex flex-col items-center gap-8 text-xl font-bold">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={close} className="text-fg transition hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link href={`/${lang}/cv`} onClick={close} className="text-fg transition hover:text-accent">
              {cvLabel}
            </Link>
          </li>
        </ul>
        <SocialLinks social={social} />
        <LangSwitch lang={lang} label={switchLabel} className="mt-10" />
      </div>
    </nav>
  );
}

export function ThemeToggle({ label }: { label: string }) {
  // A posição da bolinha vem do CSS (data-theme no <html>), então não há estado aqui.
  const toggle = () => {
    const next = document.documentElement.dataset.theme !== "light";
    if (next) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={toggle}
      className="fixed bottom-5 left-5 z-40 flex h-10 w-20 items-center justify-around rounded-full border border-accent bg-surface"
    >
      <span className="absolute left-[5px] top-[4px] size-[30px] rounded-full bg-accent transition-transform duration-500 [:root[data-theme=light]_&]:translate-x-[38px]" />
      <MoonIcon className="relative size-[18px] fill-current text-fg" />
      <SunIcon className="relative size-[18px] text-fg" />
    </button>
  );
}

export function BackToTop({ label }: { label: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 550);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#home"
      title={label}
      aria-label={label}
      className={`fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full bg-accent text-white shadow-lg transition duration-200 hover:bg-accent-strong ${
        show ? "visible translate-y-0 opacity-100" : "invisible translate-y-full opacity-0"
      }`}
    >
      <ArrowUpIcon className="size-5" />
    </a>
  );
}

/** Mostra cada elemento com data-reveal quando ele entra na tela. */
export function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

type CarouselLabels = { prev: string; next: string; hint: string; goTo: string };

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

/**
 * Cards lado a lado: no celular a pessoa arrasta, no computador usa as setas ou as bolinhas.
 * A rolagem e o encaixe de cada card são do próprio CSS (scroll-snap), sem biblioteca.
 */
export function Carousel({ children, labels, regionLabel }: { children: ReactNode; labels: CarouselLabels; regionLabel: string }) {
  const items = Children.toArray(children);
  const total = items.length;
  const track = useRef<HTMLDivElement>(null);
  const [nearest, setNearest] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const slides = Array.from(el.children) as HTMLElement[];
      let best = 0;
      slides.forEach((s, i) => {
        if (Math.abs(s.offsetLeft - el.scrollLeft) < Math.abs(slides[best].offsetLeft - el.scrollLeft)) best = i;
      });
      setNearest(best);
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Card para onde a rolagem está indo: cliques seguidos somam, em vez de repetir o mesmo destino.
  const target = useRef<number | null>(null);
  const settle = useRef<ReturnType<typeof setTimeout>>(undefined);

  const goTo = (i: number) => {
    const el = track.current;
    const index = Math.max(0, Math.min(total - 1, i));
    const slide = el?.children[index] as HTMLElement | undefined;
    if (!el || !slide) return;
    target.current = index;
    clearTimeout(settle.current);
    settle.current = setTimeout(() => (target.current = null), 700);
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  };
  const step = (dir: 1 | -1) => goTo((target.current ?? nearest) + dir);

  // No fim da lista o último card pode nunca ficar "mais perto da esquerda"; aí a bolinha dele acende.
  const active = atEnd ? total - 1 : nearest;
  const arrow =
    "grid size-11 place-items-center rounded-full border border-line text-fg transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30";
  // Setas nas laterais, na altura da capa: dá para passar de projeto sem descer até o fim dos cards.
  const sideArrow =
    "absolute top-[14rem] z-10 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-card/90 text-fg shadow-lg backdrop-blur transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-0 md:grid";

  return (
    <div className="relative">
      <button type="button" onClick={() => step(-1)} disabled={atStart} aria-label={labels.prev} title={labels.prev} className={`${sideArrow} -left-4 lg:-left-6`}>
        <Chevron dir="left" />
      </button>
      <button type="button" onClick={() => step(1)} disabled={atEnd} aria-label={labels.next} title={labels.next} className={`${sideArrow} -right-4 lg:-right-6`}>
        <Chevron dir="right" />
      </button>
      <div
        ref={track}
        role="region"
        aria-roledescription="carousel"
        aria-label={regionLabel}
        tabIndex={0}
        className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto py-4 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${total}`}
            className="flex w-[85%] shrink-0 snap-start sm:w-[60%] md:w-[47%] lg:w-[31.5%]"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button type="button" onClick={() => step(-1)} disabled={atStart} aria-label={labels.prev} title={labels.prev} className={`${arrow} md:hidden`}>
          <Chevron dir="left" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${labels.goTo} ${i + 1}`}
              aria-current={active === i}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-accent" : "w-2 bg-line hover:bg-subtle"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => step(1)} disabled={atEnd} aria-label={labels.next} title={labels.next} className={`${arrow} md:hidden`}>
          <Chevron dir="right" />
        </button>
      </div>
      <p className="mt-3 text-xs text-subtle md:hidden">{labels.hint}</p>
    </div>
  );
}
