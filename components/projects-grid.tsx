"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ArrowUpRight, Smartphone, Globe } from "lucide-react"
import { projects } from "@/lib/projects-data"

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
      className={`${className} transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

type Filter = "all" | "mobile" | "web"

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("all")

  const filtered = projects.filter((p) => {
    if (filter === "all") return true
    return p.platform === filter
  })

  const filters: { label: string; value: Filter; icon: ReactNode }[] = [
    { label: "All Projects", value: "all", icon: null },
    {
      label: "Mobile Apps",
      value: "mobile",
      icon: <Smartphone className="w-3.5 h-3.5" />,
    },
    {
      label: "Web Projects",
      value: "web",
      icon: <Globe className="w-3.5 h-3.5" />,
    },
  ]

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-12">
          <span className="text-xs font-medium text-primary font-mono tracking-wider uppercase">
            Complete Portfolio
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground font-sans text-balance">
            All <span className="text-primary">Projects</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            A complete showcase of mobile applications and web projects I have built,
            from concept to delivery.
          </p>
        </AnimateOnScroll>

        {/* Filter Tabs */}
        <AnimateOnScroll className="flex items-center justify-center mb-12" delay={200}>
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-secondary border border-border">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-sans ${filter === f.value
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Count */}
        <AnimateOnScroll className="mb-8" delay={300}>
          <p className="text-sm text-muted-foreground font-sans">
            Showing <span className="text-foreground font-medium">{filtered.length}</span>{" "}
            project{filtered.length !== 1 ? "s" : ""}
          </p>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <AnimateOnScroll key={project.slug} delay={i * 100}>
              <Link href={`/projects/${project.slug}`} className="block group h-full">
                <div className="relative h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 flex flex-col">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      width={500}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, var(--card) 0%, transparent 60%)",
                      }}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-card/80 backdrop-blur-sm border border-border">
                      <span className="text-xs font-medium text-primary font-mono">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-semibold text-foreground font-sans">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        {
                          project.rating && (
                            <Star className="w-3 h-3 text-primary fill-primary" />
                          )
                        }
                        <span className="text-xs text-muted-foreground font-sans">
                          {project.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-sans flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-2 py-0.5 rounded-md bg-secondary text-muted-foreground text-xs font-mono">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground font-sans">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
