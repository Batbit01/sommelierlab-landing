import { es } from "./es";
import { ca } from "./ca";
import { en } from "./en";
import type { Dict, Lang } from "./types";

export { LANGS, DEFAULT_LANG, LANG_LABELS } from "./types";
export type { Dict, Lang };

const dicts: Record<Lang, Dict> = { es, ca, en };

export function getDict(lang: Lang): Dict {
  return dicts[lang] ?? dicts[ "es"];
}

export function isValidLang(lang: string): lang is Lang {
  return lang === "es" || lang === "ca" || lang === "en";
}
