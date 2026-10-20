import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ResearchSection } from "@/components/research-section";
import { AchievementsSection } from "@/components/achievements-section";
import { SkillsSection } from "@/components/skills-section";
import { WritingPreview } from "@/components/writing-preview";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <AchievementsSection />
      <SkillsSection />
      <WritingPreview />
      <ContactSection />
    </>
  );
}
