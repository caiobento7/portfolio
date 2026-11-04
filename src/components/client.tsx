"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
