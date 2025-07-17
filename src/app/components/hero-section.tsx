"use client"

import { MapPin, Phone, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "../contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <Image
                src="/profile-photo.jpg"
                alt="Abderazak SAHLI"
                fill
                className="rounded-full object-cover border-4 border-white shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abderazak SAHLI
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 mb-6 font-semibold">{t("hero.title")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">{t("hero.description")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>{t("hero.location")}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>{t("hero.phone")}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>{t("hero.email")}</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/sahli-abderazak"
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abderazak-sahli-923184236/"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
