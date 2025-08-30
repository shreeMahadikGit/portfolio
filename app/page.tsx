import { SiteHeader } from "@/components/site-header"
import { HeroMinimal } from "@/components/hero-minimal"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4">
        <HeroMinimal />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </>
  )
}
