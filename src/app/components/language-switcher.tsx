"use client"

import { useLanguage } from "../contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <button
        onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
        className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 border border-gray-300 rounded-md hover:border-blue-300"
      >
        {language === "fr" ? "EN" : "FR"}
      </button>
    </div>
  )
}
