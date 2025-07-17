"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code, Database, Globe, MessageSquare, Star, TrendingUp } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.programming"),
      icon: Code,
      skills: ["JavaScript", "Python", "PHP", "Java", "C", "Dart"],
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-blue-50",
    },
    {
      title: t("skills.frameworks"),
      icon: Globe,
      skills: ["Next.js", "React.js", "Laravel", "Node.js", "Angular", "Flutter"],
      color: "from-purple-500 to-pink-500",
      bgPattern: "bg-purple-50",
    },
    {
      title: t("skills.databases"),
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "from-green-500 to-emerald-500",
      bgPattern: "bg-green-50",
    },
    {
      title: t("skills.languages"),
      icon: MessageSquare,
      skills: [
        t("skills.languagesList.arabic"),
        t("skills.languagesList.french"),
        t("skills.languagesList.english"),
        t("skills.languagesList.german"),
      ],
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-orange-50",
    },
  ]

  return (
    <section
      id="competences"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("skills.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className={`${category.bgPattern} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-110 transition-transform duration-500 delay-100"></div>

                <div className="flex items-center space-x-4 relative z-10">
                  <div
                    className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {category.skills.length} {t("skills.skillsCount")}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-3 text-sm font-semibold bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border border-gray-200 hover:border-gray-300 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 text-center justify-center"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "6+", label: t("common.languages"), color: "text-blue-600" },
            { number: "6+", label: "Frameworks", color: "text-purple-600" },
            { number: "2+", label: t("skills.databases"), color: "text-green-600" },
            { number: "4", label: t("common.languages"), color: "text-orange-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
