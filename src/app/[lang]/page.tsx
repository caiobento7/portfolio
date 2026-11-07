import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contact, getContent, hasLocale } from "@/content";
import { HeroArt, PhoneArt, ProjectCover } from "@/components/art";
import { BackToTop, Carousel, Nav, Reveal, SocialLinks, ThemeToggle } from "@/components/client";
import { DocIcon, EyeIcon, GithubIcon, MailIcon, PhoneIcon, PinIcon, SkillIcon, WhatsappIcon } from "@/components/icons";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getContent(lang);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "knowledge", label: t.sections.knowledge },
    { id: "contact", label: t.nav.contact },
  ];
  const social = { github: contact.github, linkedin: contact.linkedin, whatsapp: contact.whatsapp };
  const whatsappHref = `${contact.whatsapp}?text=${encodeURIComponent(t.sections.whatsappMsg)}`;

  return (
    <>
      <Nav
        lang={lang}
        links={links}
        social={social}
        switchLabel={lang === "pt" ? "EN" : "PT"}
        cvLabel={t.nav.cv}
        openLabel={t.sections.openMenu}
        closeLabel={t.sections.closeMenu}
      />

      <main>
        {/* HOME */}
        <section
          id="home"
          className="relative flex min-h-[max(100svh,46rem)] items-center overflow-hidden bg-surface pb-20 pt-28 lg:pb-10 lg:pt-[4.5rem]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_70%_45%,black,transparent_70%)]"
            style={{
              backgroundImage:
                "linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-xs font-bold text-accent">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {t.hero.available}
              </p>
              <p className="mt-8 text-lg font-medium text-muted">{t.hero.greeting}</p>
              <h1 className="mt-1 text-5xl font-bold tracking-tight text-fg sm:text-6xl lg:text-7xl">
                {contact.name}
                <span className="text-accent">.</span>
              </h1>
              <p className="mt-3 text-xl font-bold text-accent lg:text-2xl">{t.hero.role}</p>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">{t.hero.headline}</p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a href="#projects" className="btn-solid">
                  {t.hero.ctaProjects}
                </a>
                <Link href={`/${lang}/cv`} className="btn-outline">
                  <DocIcon className="size-5" /> {t.nav.cv}
                </Link>
              </div>

              <div className="mt-12 flex flex-col items-center gap-6 border-t border-line pt-7 sm:flex-row sm:items-start sm:justify-center sm:gap-10 lg:justify-start">
                <div className="text-center sm:shrink-0 sm:text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-subtle">{t.hero.now}</p>
                  <p className="mt-1.5 font-bold text-fg">{t.hero.nowRole}</p>
                  <p className="mt-0.5 text-sm text-subtle">{t.hero.before}</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-subtle">{t.hero.stackLabel}</p>
                  <ul className="mt-2 flex max-w-xs flex-wrap justify-center gap-1.5 sm:justify-start">
                    {t.hero.stack.map((s) => (
                      <li key={s} className="rounded-md border border-line px-2 py-0.5 text-xs text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <HeroArt code={t.hero.code} />
          </div>
        </section>

        {/* SOBRE */}
        <section id="about" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_25rem] lg:gap-20">
              <div data-reveal>
                <h2 className="text-3xl font-bold text-accent lg:text-[2.5rem]">{t.sections.about}</h2>
                <p className="mt-6 text-[1.05rem] leading-[1.65] text-muted">{t.about[0]}</p>

                <div className="mt-8 rounded-[1.25rem] border border-accent/25 bg-surface p-6 shadow-card sm:p-7">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {t.adapt.label}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-fg">{t.adapt.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{t.adapt.text}</p>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {t.adapt.products.map((pr) => (
                      <li key={pr.name} className="rounded-lg border border-line bg-card p-4 transition duration-300 hover:border-accent/50">
                        <p className="font-bold text-fg">{pr.name}</p>
                        <p className="mt-1 text-sm leading-snug text-muted">{pr.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-subtle">{t.adapt.ai}</p>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-subtle">{t.adapt.doingTitle}</p>
                  <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
                    {t.adapt.doing.map((d) => (
                      <li key={d} className="flex gap-2.5">
                        <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-8 text-[1.05rem] leading-[1.65] text-muted">{t.about[1]}</p>
              </div>

              <aside
                data-reveal
                style={{ ["--delay" as string]: "120ms" }}
                className="overflow-hidden rounded-[1.25rem] bg-surface shadow-card"
              >
                <div className="relative aspect-[4/3.4] w-full">
                  <Image
                    src="/caio.jpg"
                    alt={contact.name}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover object-[50%_30%]"
                  />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-surface to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-7 pb-4">
                    <p className="text-lg font-bold text-fg">{contact.name}</p>
                    <p className="text-sm font-medium text-accent">{t.hero.role}</p>
                  </div>
                </div>
                <div className="p-7 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-subtle">{t.timelineTitle}</p>
                <ol className="mt-6">
                  {t.timeline.map((e, i) => (
                    <li key={e.org} className="grid grid-cols-[3.25rem_1fr] gap-3">
                      <span className={`pt-0.5 font-mono text-sm font-bold ${i === 0 ? "text-accent" : "text-subtle"}`}>
                        {e.year}
                      </span>
                      <div className={`relative border-l border-line pl-5 ${i === t.timeline.length - 1 ? "pb-0" : "pb-7"}`}>
                        <span
                          className={`absolute -left-[6px] top-1.5 size-[11px] rounded-full border-2 border-surface ${
                            i === 0 ? "bg-accent ring-4 ring-accent/20" : "bg-subtle"
                          }`}
                        />
                        <p className="font-bold leading-snug text-fg">{e.role}</p>
                        <p className="mt-0.5 text-sm text-muted">
                          {e.org}
                          {e.current && (
                            <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold uppercase text-accent">
                              {t.sections.current}
                            </span>
                          )}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-7 flex items-center gap-2 border-t border-line pt-5 text-sm text-muted">
                  <PinIcon className="size-4 text-accent" /> {t.hero.location}
                </p>
                </div>
              </aside>
            </div>

            <div
              data-reveal
              className="mt-16 grid divide-y divide-line overflow-hidden rounded-[1.25rem] border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            >
              {t.stats.map((s) => (
                <div key={s.value} className="p-8 transition duration-300 hover:bg-hover">
                  <p className="text-4xl font-bold tracking-tight text-accent lg:text-5xl">{s.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projects" className="bg-surface px-6 py-24 text-center lg:py-32">
          <div className="mx-auto max-w-6xl">
            <header data-reveal className="mb-16">
              <h2 className="text-3xl font-bold text-accent lg:text-[2.5rem]">{t.sections.projects}</h2>
              <p className="mx-auto mt-4 max-w-xl text-[1.05rem] text-muted">{t.sections.projectsIntro}</p>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-hover px-5 py-2 text-sm text-muted transition hover:opacity-70"
              >
                GitHub
              </a>
            </header>
            <div data-reveal>
              <Carousel labels={t.sections.carousel} regionLabel={t.sections.projects}>
                {t.projects.map((p) => (
                  <article
                    key={p.slug}
                    className="group flex w-full flex-col items-center gap-4 rounded-md bg-card p-6 shadow-card transition duration-300 hover:bg-hover"
                  >
                    <div>
                      {p.status === "building" && (
                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 text-[10px] font-medium text-subtle">
                          <span className="size-1 rounded-full bg-subtle" />
                          {t.sections.building}
                        </span>
                      )}
                      <h3 className="text-lg font-bold leading-snug text-fg">{p.name}</h3>
                      <p className="mt-1 text-[11px] uppercase tracking-wider text-subtle">{p.context}</p>
                    </div>
                    <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-md">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(min-width: 768px) 520px, 100vw"
                          className="object-cover object-top transition duration-300 group-hover:opacity-50"
                        />
                      ) : (
                        <div className="h-full transition duration-300 group-hover:opacity-50">
                          <ProjectCover project={p} lang={lang} />
                        </div>
                      )}
                      {(p.link || p.repo) && (
                        <div className="invisible absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition duration-300 group-hover:visible group-hover:opacity-100">
                          {p.repo && (
                            <a
                              href={p.repo.href}
                              target="_blank"
                              rel="noreferrer"
                              title={p.repo.label}
                              aria-label={p.repo.label}
                              className="grid size-12 place-items-center rounded-full bg-white text-black transition hover:bg-black hover:text-white"
                            >
                              <GithubIcon className="size-6" />
                            </a>
                          )}
                          {p.link && (
                            <a
                              href={p.link.href}
                              target="_blank"
                              rel="noreferrer"
                              title={p.link.label}
                              aria-label={p.link.label}
                              className="grid size-12 place-items-center rounded-full bg-white text-black transition hover:bg-black hover:text-white"
                            >
                              <EyeIcon className="size-6" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <p className="line-clamp-4 text-sm leading-relaxed text-muted" title={p.summary}>
                      {p.summary}
                    </p>
                    {p.status === "building" ? (
                      <div className="w-full text-left">
                        <p className="text-sm font-bold text-accent">{t.sections.scope}:</p>
                        <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-muted">
                          {p.bullets.slice(0, 3).map((b) => (
                            <li key={b} className="flex gap-2.5">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-[13px] leading-relaxed text-muted">
                        <span className="font-bold text-accent">{t.sections.impact}:</span> {p.impact}
                      </p>
                    )}
                    <p className="mt-auto text-xs text-subtle">{p.stack.join(" · ")}</p>
                    {p.status === "building" && <p className="text-xs italic text-subtle">{t.sections.soon}</p>}
                    {(p.link || p.repo) && (
                      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold">
                        {p.link && (
                          <a href={p.link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
                            <EyeIcon className="size-4" /> {p.link.label}
                          </a>
                        )}
                        {p.repo && (
                          <a href={p.repo.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">
                            <GithubIcon className="size-4" /> {p.repo.label}
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experience" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 data-reveal className="mb-16 text-center text-3xl font-bold text-accent lg:text-[2.5rem]">
              {t.sections.experience}
            </h2>
            <ol className="relative space-y-10 border-l-2 border-line pl-8">
              {t.jobs.map((j, i) => (
                <li key={j.company} data-reveal className="relative">
                  <span
                    className={`absolute -left-[43px] top-8 size-4 rounded-full border-4 border-bg ${
                      i === 0 ? "bg-accent" : "bg-subtle"
                    }`}
                  />
                  <div className="rounded-md bg-surface p-7 text-left shadow-card transition duration-300 hover:bg-hover">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-bold text-fg">
                        {j.role} <span className="text-accent">@ {j.company}</span>
                      </h3>
                      <p className="font-mono text-xs text-subtle">
                        {j.period} · {j.mode}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2 text-[0.97rem] leading-relaxed text-muted">
                      {j.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONHECIMENTOS */}
        <section id="knowledge" className="bg-surface px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 data-reveal className="mb-16 text-center text-3xl font-bold text-accent lg:text-[2.5rem]">
              {t.sections.knowledge}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {t.skills.map((g, i) => (
                <div
                  key={g.group}
                  data-reveal
                  style={{ ["--delay" as string]: `${(i % 3) * 100}ms` }}
                  className={`rounded-md bg-card p-7 shadow-card transition duration-300 hover:bg-hover ${
                    i === t.skills.length - 1 && t.skills.length % 3 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <span className="grid size-14 place-items-center rounded-xl bg-accent-soft text-accent">
                    <SkillIcon name={g.icon} className="size-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-fg">{g.group}</h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">{g.desc}</p>
                  <p className="mt-4 text-sm text-subtle">{g.items.join(" - ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contact" className="px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_28rem]">
            <div data-reveal className="flex flex-col items-center lg:items-start">
              <h2 className="text-3xl font-bold text-accent lg:text-[2.5rem]">{t.sections.contact}</h2>
              <p className="mt-4 max-w-lg text-center text-[1.05rem] text-muted lg:text-left">{t.sections.contactIntro}</p>
              <ul className="mb-6 mt-8 space-y-1">
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-lg p-3 text-muted transition hover:bg-hover">
                    <MailIcon className="size-6 text-accent" /> {contact.email}
                  </a>
                </li>
                <li>
                  <a href={contact.phoneHref} className="flex items-center gap-3 rounded-lg p-3 text-muted transition hover:bg-hover">
                    <PhoneIcon className="size-6 -rotate-12 text-accent" /> {contact.phone}
                  </a>
                </li>
              </ul>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-outline">
                <WhatsappIcon className="size-6" /> WhatsApp
              </a>
            </div>
            <div data-reveal>
              <PhoneArt />
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 border-t border-subtle/50 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <a href="#home" className="font-logo text-[2.4rem] leading-none text-fg/60">
              caiobento
            </a>
            <p className="mt-4 text-sm leading-loose text-muted">
              © {contact.name}. <br />
              {t.sections.rights}
            </p>
          </div>
          <SocialLinks social={social} className="lg:justify-end" />
        </div>
      </footer>

      <ThemeToggle label={t.sections.theme} />
      <BackToTop label={t.sections.backToTop} />
      <Reveal />
    </>
  );
}
