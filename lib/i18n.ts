export const defaultLocale = "en"
export const locales = ["en", "ar", "ro", "sv", "es"] as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  ro: "Română",
  sv: "Svenska",
  es: "Español",
}

export const isRTL = (locale: Locale): boolean => {
  return locale === "ar"
}
