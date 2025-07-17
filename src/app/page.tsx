import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { EducationSection } from "./components/education-section";
import { ExperienceSection } from "./components/experience-section";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { SkillsSection } from "./components/skills-section";



export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
