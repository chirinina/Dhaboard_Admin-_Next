import { defineRouting } from "next-intl/routing";

const locales = ["es", "en"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "es",
  /**
   * Always prefix locales so navigation resolves to the real `[locale]` routes
   * even in environments where default-locale rewrites are not applied.
   */
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];

const localePrefixPattern = new RegExp(`^/(?:${locales.join("|")})(?=/|$)`);

export const stripLocalePrefix = (path: string) =>
  path.replace(localePrefixPattern, "") || "/";

export const buildLocalizedPath = (locale: Locale, path: string) =>
  path === "/" ? `/${locale}` : `/${locale}${path}`;

export const getLocaleFromPathname = (pathname: string): Locale =>
  locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  ) ?? routing.defaultLocale;
