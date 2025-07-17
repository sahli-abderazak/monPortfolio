"use client"

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  User,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useLanguage } from "../contexts/language-context"
import { sendEmail } from "../actions/send-email"
import { useActionState, useEffect, useRef } from "react"

export function ContactSection() {
  const { t } = useLanguage()
  const [state, formAction, isPending] = useActionState(sendEmail, null)
  const formRef = useRef<HTMLFormElement>(null)

  // Reset form on successful submission
  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset()
    }
  }, [state?.success])

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "sahliabderazak53@gmail.com",
      href: "mailto:sahliabderazak53@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "24 987 088",
      href: "tel:+21624987088",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: t("hero.location"),
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@sahli-abderazak",
      href: "https://github.com/sahli-abderazak",
      color: "bg-gray-900 hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "@Abderazak sahli",
      href: "https://www.linkedin.com/in/abderazak-sahli-923184236/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-gray-600">{t("contact.description")}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t("contact.stayInTouch")}</h3>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md">
                    <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl shadow-lg`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-gray-900 hover:text-blue-600 transition-colors duration-200 font-semibold"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">{t("contact.socialNetworks")}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 px-6 py-3 ${social.color} text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-medium">{social.username}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="shadow-2xl border-0 overflow-hidden bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{t("contact.sendMessage")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              {state && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                    state.success
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {state.success ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                  <span>{state.message}</span>
                </div>
              )}

              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <User className="h-4 w-4 mr-2 text-blue-600" />
                      {t("contact.name")}
                    </label>
                    <Input
                      name="name"
                      required
                      disabled={isPending}
                      placeholder={t("contact.namePlaceholder")}
                      className="border-2 border-gray-200 focus:border-blue-500 rounded-lg disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      {t("contact.email")}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      disabled={isPending}
                      placeholder={t("contact.emailPlaceholder")}
                      className="border-2 border-gray-200 focus:border-blue-500 rounded-lg disabled:opacity-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-700">
                    <MessageCircle className="h-4 w-4 mr-2 text-blue-600" />
                    {t("contact.subject")}
                  </label>
                  <Input
                    name="subject"
                    required
                    disabled={isPending}
                    placeholder={t("contact.subjectPlaceholder")}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-700">
                    <Send className="h-4 w-4 mr-2 text-blue-600" />
                    {t("contact.message")}
                  </label>
                  <Textarea
                    name="message"
                    required
                    disabled={isPending}
                    placeholder={t("contact.messagePlaceholder")}
                    rows={5}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg resize-none disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                  <span>{isPending ? t("contact.sending") : t("contact.sendButton")}</span>
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer modernisé */}
      <div className="mt-20 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 font-medium">© 2025 Abderazak SAHLI</p>
        </div>
      </div>
    </section>
  )
}
