import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contact, getContent, hasLocale } from "@/content";
import { DownloadCvButton, LangSwitch } from "@/components/client";

export async function generateMetadata({ params }: PageProps<"/[lang]/cv">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: getContent(lang).cv.title };
}

export default async function CvPage({ params }: PageProps<"/[lang]/cv">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getContent(lang);

  return (
    <div className="print-wrap px-4 py-6 sm:py-10">
      <div className="no-print mx-auto mb-6 flex max-w-[52rem] flex-wrap items-center justify-between gap-3">
        <Link href={`/${lang}`} className="text-sm text-muted transition hover:text-fg">
          ← {t.cv.back}
        </Link>
        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} label={t.switchTo} />
          <DownloadCvButton
            href={`/caio-bento-cv-${lang}.pdf`}
            fileName={lang === "pt" ? "Caio Bento - Currículo.pdf" : "Caio Bento - Resume.pdf"}
            label={t.cv.print}
          />
        </div>
      </div>

      <article className="print-sheet mx-auto max-w-[52rem] rounded-2xl border border-line bg-surface px-6 py-10 shadow-sm sm:px-12 sm:py-12">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">{contact.name}</h1>
          <p className="mt-1 text-sm font-medium text-accent">{t.cv.headline}</p>
          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
            <span>{t.hero.location}</span>
            <Sep />
            <a href={`mailto:${contact.email}`} className="hover:text-fg">{contact.email}</a>
            <Sep />
            <a href={contact.linkedin} className="hover:text-fg">{contact.linkedinLabel}</a>
            <Sep />
            <a href={contact.github} className="hover:text-fg">{contact.githubLabel}</a>
            <Sep />
            <a href={contact.site} className="font-medium text-accent hover:underline">{contact.siteLabel}</a>
          </p>
        </header>

        <CvSection title={t.cv.summaryTitle}>
          <p className="text-sm leading-relaxed text-muted">{t.cv.summary}</p>
        </CvSection>

        <CvSection title={t.cv.skillsTitle}>
          <ul className="space-y-1 text-sm text-muted">
            {t.skills.map((g) => (
              <li key={g.group}>
                <span className="font-medium text-fg">{g.group}:</span> {g.items.join(", ")}
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title={t.cv.experienceTitle}>
          <div className="space-y-6">
            {t.jobs.map((j) => (
              <div key={j.company} className="avoid-break">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold">
                    {j.company} <span className="font-normal text-muted">| {j.role}</span>
                  </h3>
                  <p className="text-xs text-subtle">
                    {j.period} · {j.mode}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted marker:text-subtle">
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CvSection>

        <CvSection title={t.cv.educationTitle}>
          <p className="text-sm text-muted">
            {t.education.course}: <span className="font-medium text-fg">{t.education.school}</span> ·{" "}
            {t.education.period}
          </p>
        </CvSection>

        <CvSection title={t.cv.projectsTitle}>
          <div className="space-y-5">
            {t.projects.filter((p) => p.status !== "building" && !p.foraDoCurriculo).map((p) => (
              <div key={p.slug} className="avoid-break text-sm">
                <h3 className="font-semibold">
                  {p.name} <span className="font-normal text-muted">· {p.context}</span>
                </h3>
                <p className="mt-1 leading-relaxed text-muted">{p.summary}</p>
                <p className="mt-1 text-muted">
                  <span className="font-medium text-fg">{t.cv.impact}:</span> {p.impact}
                </p>
                <p className="mt-1 italic text-subtle">
                  {t.cv.technologies}: {p.stack.join(", ")}
                  {p.link && (
                    <>
                      {" · "}
                      <a href={p.link.href} className="not-italic text-accent hover:underline">
                        {p.link.href.replace("https://", "")}
                      </a>
                    </>
                  )}
                  {p.repo && (
                    <>
                      {" · "}
                      <a href={p.repo.href} className="not-italic text-accent hover:underline">
                        {p.repo.href.replace("https://", "")}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </CvSection>

        <CvSection title={t.cv.languagesTitle}>
          <ul className="space-y-0.5 text-sm text-muted">
            {t.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </CvSection>
      </article>
    </div>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-line pt-6">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{title}</h2>
      {children}
    </section>
  );
}

function Sep() {
  return <span aria-hidden className="text-subtle">•</span>;
}
