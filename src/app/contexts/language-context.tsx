"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Language } from "../lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => unknown // Changed return type to unknown
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): unknown => {
    // Changed return type to unknown
    const keys = key.split(".")
    let current: unknown = translations[language] // Changed 'any' to 'unknown'

    for (const k of keys) {
      if (typeof current === "object" && current !== null && k in current) {
        current = (current as Record<string, unknown>)[k]
      } else {
        current = undefined // Key not found or not an object
        break
      }
    }
    return current // Return the raw value, let the consumer handle type assertion
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
