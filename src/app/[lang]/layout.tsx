import type { Metadata } from "next";
import { DM_Sans, Gemunu_Libre, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getContent, hasLocale, locales } from "@/content";
import "../globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin", "latin-ext"] });
const gemunu = Gemunu_Libre({ variable: "--font-gemunu", subsets: ["latin"], weight: ["300", "500"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Roda antes da página aparecer: aplica o tema salvo e liga as animações de entrada.
const boot = `try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.dataset.theme="light"}catch(e){}document.documentElement.classList.add("js")`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getContent(lang);
  return {
    metadataBase: new URL("https://caiobento.vercel.app"),
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      url: `/${lang}`,
      siteName: "Caio Bento",
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
    alternates: { languages: { "pt-BR": "/pt", en: "/en" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      className={`${dmSans.variable} ${gemunu.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
