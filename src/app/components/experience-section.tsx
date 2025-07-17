"use client"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
}

export function ExperienceSection() {
  const { t } = useLanguage()

  // Get experiences from translations with safe fallback
  const experiencesData = t("experience.experiences")
  const experiences: Experience[] = Array.isArray(experiencesData) ? experiencesData : []

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("experience.title")}</h2>
          <p className="text-lg text-gray-600">{t("experience.description")}</p>
        </div>
        <div className="space-y-8">
          {experiences.length > 0 ? (
            experiences.map((exp: any, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-blue-600 mb-2">{exp.title}</CardTitle>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(exp.technologies) &&
                      exp.technologies.map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucune expérience à afficher pour le moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
