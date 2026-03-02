import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects-grid"
import { ParticleBackground } from "@/components/particle-background"
import { ProjectsPageNav } from "@/components/projects-page-nav"

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Browse all mobile and web projects built by a professional app developer.",
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <div className="relative z-10">
        <ProjectsPageNav />
        <ProjectsGrid />
      </div>
    </main>
  )
}
