
export type Locale = "en-US" | "uk";
export const defaultLang = "en-US"
export const defaultDict = await import('@/dictionaries/en.json')
export type IDictionary = typeof import('@/dictionaries/en.json')
