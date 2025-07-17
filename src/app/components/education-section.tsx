"use client"

import { Calendar, MapPin, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useLanguage } from "../contexts/language-context"

export function EducationSection() {
  const { t } = useLanguage()

  // Get data from translations
  const education = (t("education.educationList") as any) || []
  const formations = (t("education.formations") as any) || []
  const associative = (t("education.associative") as any) || {}

  return (
    <section id="formation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("education.title")}</h2>
          <p className="text-lg text-gray-600">{t("education.description")}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Diplômes */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
              {t("education.degrees")}
            </h3>
            <div className="space-y-6">
              {education.map((edu: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{edu.degree}</CardTitle>
                    <h4 className="text-gray-900 font-semibold">{edu.institution}</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {edu.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Formations */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("education.professionalTraining")}</h3>
            <div className="space-y-6">
              {formations.map((formation: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{formation.title}</CardTitle>
                    <h4 className="text-gray-900 font-semibold">{formation.organizer}</h4>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{formation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Expérience associative */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">{t("education.associativeExp")}</h4>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{associative.title}</CardTitle>
                  <h4 className="text-gray-900 font-semibold">{associative.company}</h4>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{associative.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{associative.location}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
