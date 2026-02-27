import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects, getProjectBySlug } from "@/lib/projects-data"
import { ProjectDetail } from "@/components/project-detail"
import { ParticleBackground } from "@/components/particle-background"
import { ProjectsPageNav } from "@/components/projects-page-nav"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | DevFolio`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <div className="relative z-10">
        <ProjectsPageNav />
        <ProjectDetail project={project} />
      </div>
    </main>
  )
}
