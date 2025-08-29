import type { Locale } from "./i18n"

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  ar: () => import("../dictionaries/ar.json").then((module) => module.default),
  ro: () => import("../dictionaries/ro.json").then((module) => module.default),
  sv: () => import("../dictionaries/sv.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en()
}
