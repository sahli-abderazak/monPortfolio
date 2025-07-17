"use client"

import { Users, Zap, Target, Trophy } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { useLanguage } from "../contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const qualities = [
    {
      icon: Users,
      title: t("about.teamwork"),
      description: t("about.teamworkDesc"),
    },
    {
      icon: Zap,
      title: t("about.autonomy"),
      description: t("about.autonomyDesc"),
    },
    {
      icon: Target,
      title: t("about.discipline"),
      description: t("about.disciplineDesc"),
    },
    {
      icon: Trophy,
      title: t("about.motivation"),
      description: t("about.motivationDesc"),
    },
  ]

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("about.description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualities.map((quality, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <quality.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{quality.title}</h3>
                <p className="text-gray-600 text-sm">{quality.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("about.interests")}</h3>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">{t("about.football")}</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">{t("about.fitness")}</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">{t("about.socialMedia")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
