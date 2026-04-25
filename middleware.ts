import { NextRequest, NextResponse } from "next/server";

const VALID_LANGS = new Set(["ca", "es", "en"]);

/**
 * Middleware: detecta idioma para "/" y redirige a "/{lang}".
 *
 * Orden de prioridad:
 *   1. Cookie NEXT_LOCALE (preferencia explícita del usuario)
 *   2. Header x-vercel-ip-country-region (Catalunya = "CT")
 *   3. Header Accept-Language del navegador
 *   4. Default: 'es'
 *
 * No toca rutas /ca, /es, /en, /privacidad, /cookies, /terminos, /api/, /_next/.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Solo procesamos "/" exacto
  if (pathname !== "/") return NextResponse.next();

  // 1. Cookie
  const cookieLang = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLang && VALID_LANGS.has(cookieLang)) {
    return NextResponse.redirect(new URL(`/${cookieLang}`, req.url));
  }

  // 2. Geo
  const region = req.headers.get("x-vercel-ip-country-region") || "";
  const country = req.headers.get("x-vercel-ip-country") || "";

  if (region === "CT") {
    // Catalunya
    return NextResponse.redirect(new URL("/ca", req.url));
  }

  // 3. Accept-Language
  const accept = req.headers.get("accept-language") || "";
  // Parseamos crudo: tomamos el primer código de 2 letras
  const preferred = accept
    .split(",")
    .map((s) => s.trim().split(";")[0].toLowerCase())
    .map((s) => s.split("-")[0])
    .find((s) => VALID_LANGS.has(s));

  if (preferred) {
    return NextResponse.redirect(new URL(`/${preferred}`, req.url));
  }

  // 4. Default: ES si IP en España, EN resto
  const fallback = country === "ES" ? "es" : "en";
  return NextResponse.redirect(new URL(`/${fallback}`, req.url));
}

export const config = {
  // Solo se ejecuta en "/"
  matcher: "/",
};
