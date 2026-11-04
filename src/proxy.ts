import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/content";

// Quem abre o endereço sem idioma (/ ou /cv) vai para /pt ou /en
// conforme o idioma do navegador.
function preferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  const first = header.split(",")[0]?.trim().toLowerCase() ?? "";
  if (first.startsWith("pt")) return "pt";
  if (first.startsWith("en")) return "en";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  request.nextUrl.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
