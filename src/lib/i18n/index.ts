import { en } from "./en";
import type { Dict, Locale } from "./types";
import { zh } from "./zh";

export type { Dict, Locale, Plan } from "./types";

export const locales: Locale[] = ["en", "zh"];

const dictionaries: Record<Locale, Dict> = { en, zh };

export function getDict(lang: Locale): Dict {
  return dictionaries[lang];
}

/**
 * Locale-prefixed path for an internal link. English lives at the site root
 * ("/", "/pricing"); Chinese lives under "/zh". Paths that aren't internal
 * (absolute URLs, mailto:, bare "#") are returned unchanged.
 */
export function localePath(lang: Locale, path: string): string {
  if (lang === "en" || !path.startsWith("/")) return path;
  if (path === "/") return "/zh";
  if (path.startsWith("/#")) return `/zh${path.slice(1)}`;
  return `/zh${path}`;
}

/** The same page in the other language, given the current pathname. */
export function switchLocalePath(pathname: string): { lang: Locale; path: string } {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    return { lang: "en", path: pathname.slice("/zh".length) || "/" };
  }
  return { lang: "zh", path: localePath("zh", pathname) };
}
