import { IDictionary, Locale } from "@/shared/config/i18n.config";
import "server-only";

const dictionaries = {
  ["en-US"]: () =>
    import("@/dictionaries/en.json").then((module) => module.default),
  ["uk"]: () =>
    import("@/dictionaries/uk.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
