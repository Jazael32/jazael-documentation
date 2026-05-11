import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { HeroPage } from "./HeroPage"
import { AboutPage } from "./AboutPage"
import { SkillsPage } from "./SkillsPage"
import { ProjectsPage } from "./ProjectsPage"
import { ContactsPage } from "./ContactsPage"


export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroPage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactsPage />

      {/* Footer */}
      <Footer />
    </>
  )
}

