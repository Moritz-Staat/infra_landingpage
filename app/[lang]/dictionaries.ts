import "server-only"

const dictionaries = {
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pl: () => import("./dictionaries/pl.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (!["de", "en", "pl"].includes(locale)) {
    locale = "de" // Default to German if locale is not supported
  }
  return dictionaries[locale as "de" | "en" | "pl"]()
}
