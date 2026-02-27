"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Star, ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/lib/projects-data"

function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ProjectsSection() {
  const featured = getFeaturedProjects()

  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-xs font-medium text-primary font-mono tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-sans text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            A collection of mobile apps and web projects I have designed and developed,
            each solving real-world problems with elegant solutions.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project, i) => (
            <AnimateOnScroll key={project.slug} delay={i * 150}>
              <Link href={`/projects/${project.slug}`} className="block group">
                <div className="relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, var(--card) 0%, transparent 60%)",
                      }}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm border border-border">
                      <span className="text-xs font-medium text-primary font-mono">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-foreground" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground font-sans">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                        <span className="text-sm text-muted-foreground font-sans">
                          {project.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-sans">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground font-sans">
                        {project.downloads}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center" delay={600}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:gap-3 font-sans"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
