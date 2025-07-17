"use client"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useLanguage } from "../contexts/language-context"

interface Education {
  degree: string
  institution: string
  period: string
  location: string
  type: string
}

interface Formation {
  title: string
  organizer: string
  description: string
}

interface AssociativeExp {
  title: string
  company: string
  period: string
  location: string
}

export function EducationSection() {
  const { t } = useLanguage()

  // Get data from translations with safe fallbacks and debugging
  let education: Education[] = []
  let formations: Formation[] = []
  let associative: AssociativeExp = { title: "", company: "", period: "", location: "" }

  try {
    const educationData = t("education.educationList")
    console.log(
      "Education data:",
      educationData,
      "Type:",
      typeof educationData,
      "Is array:",
      Array.isArray(educationData),
    )

    if (Array.isArray(educationData)) {
      education = educationData as Education[]
    } else if (educationData && typeof educationData === "object") {
      // Si c'est un objet, essayer de le convertir en tableau
      education = Object.values(educationData).filter(
        (item): item is Education => item && typeof item === "object" && "degree" in item,
      )
    }

    const formationsData = t("education.formations")
    if (Array.isArray(formationsData)) {
      formations = formationsData as Formation[]
    } else if (formationsData && typeof formationsData === "object") {
      formations = Object.values(formationsData).filter(
        (item): item is Formation => item && typeof item === "object" && "title" in item,
      )
    }

    const associativeData = t("education.associative")
    if (associativeData && typeof associativeData === "object" && !Array.isArray(associativeData)) {
      associative = associativeData as AssociativeExp
    }
  } catch (error) {
    console.error("Error loading education data:", error)
  }

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
              {education && education.length > 0 ? (
                education.map((edu: Education, index: number) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-600">{edu.degree || "Diplôme"}</CardTitle>
                      <h4 className="text-gray-900 font-semibold">{edu.institution || "Institution"}</h4>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{edu.period || "Période"}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{edu.location || "Lieu"}</span>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {edu.type || "Formation"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Aucune formation à afficher pour le moment.</p>
                  <p className="text-xs text-gray-400 mt-2">Vérifiez votre fichier de traductions.</p>
                </div>
              )}
            </div>
          </div>
          {/* Formations */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("education.professionalTraining")}</h3>
            <div className="space-y-6">
              {formations && formations.length > 0 ? (
                formations.map((formation: Formation, index: number) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-600">{formation.title || "Formation"}</CardTitle>
                      <h4 className="text-gray-900 font-semibold">{formation.organizer || "Organisme"}</h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{formation.description || "Description"}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Aucune formation professionnelle à afficher.</p>
                </div>
              )}
            </div>
            {/* Expérience associative */}
            {associative && associative.title && (
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
