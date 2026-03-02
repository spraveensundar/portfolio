"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Building2,
  Download,
  CheckCircle2,
  Zap,
  Trophy,
  ChevronRight,
} from "lucide-react"
import { type Project, projects } from "@/lib/projects-data";

const platformIcons = {
  android: "/icon/android.png",
  ios: "/icon/ios.png",
  website: "/icon/web.png",
  github: "/icon/github.png",
} as const;

type PlatformKey = keyof typeof platformIcons;

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

export function ProjectDetail({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <article className="pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <AnimateOnScroll className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{project.title}</span>
          </nav>
        </AnimateOnScroll>

        {/* Hero Image */}
        <AnimateOnScroll className="mb-10" delay={100}>
          <div className="relative rounded-2xl overflow-hidden border border-border">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              width={1200}
              height={600}
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--background) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs font-mono font-medium mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-sans text-balance">
                {project.title}
              </h1>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Meta Info Bar */}
        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {
              project?.live ?
                (
                  <>
                    {[
                      { icon: <Calendar className="w-4 h-4 text-primary" />, label: "Year", value: project.year },
                      { icon: <Clock className="w-4 h-4 text-primary" />, label: "Duration", value: project.duration },
                      {
                        icon: project.platform === "mobile"
                          ? <Download className="w-4 h-4 text-primary" />
                          : <Star className="w-4 h-4 text-primary fill-primary" />,
                        label: project.platform === "mobile" ? "Downloads" : "Rating",
                        value: project.platform === "mobile" ? project.downloads : `${project.rating} / 5`,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                      >
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-sans">{item.label}</p>
                          <p className="text-sm font-semibold text-foreground font-sans">{item.value}</p>
                        </div>
                      </div>
                    ))}

                  </>
                ) : (
                  null
                )
            }
            <div className="flex items-center gap-6 p-4 w-fit">
              {(Object.keys(platformIcons) as PlatformKey[]).map((key) => {
                const url = project[key];
                if (!url) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center 
                            hover:scale-110 hover:-translate-y-1
                            transition-all duration-300"
                  >
                    <Image
                      src={platformIcons[key]}
                      alt={`${key} icon`}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Description + Tags */}
        <AnimateOnScroll delay={300} className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground font-sans mb-4">
                About This Project
              </h2>
              <p className="text-muted-foreground leading-relaxed font-sans text-base">
                {project.longDescription}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground font-sans mb-3 uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium font-mono border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {
                project.rating && (
                  <div className="mt-6 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-semibold text-foreground font-sans">
                      {project.rating}
                    </span>
                    <span className="text-sm text-muted-foreground font-sans">
                      rating
                    </span>
                  </div>
                )
              }
            </div>
          </div>
        </AnimateOnScroll>

        {/* Features, Challenges, Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          <AnimateOnScroll delay={100}>
            <div className="rounded-2xl bg-card border border-border p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground font-sans">
                  Key Features
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {
            project.challenges?.length > 0 && (
              <AnimateOnScroll delay={200}>
                <div className="rounded-2xl bg-card border border-border p-6 h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground font-sans">
                      Challenges
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed font-sans">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            )
          }
          {
            project.results?.length > 0 && (
              <AnimateOnScroll delay={300}>
                <div className="rounded-2xl bg-card border border-border p-6 h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                      <Trophy className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground font-sans">
                      Results
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed font-sans">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            )
          }

        </div>

        {/* Prev / Next Navigation */}
        <AnimateOnScroll delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-sans">Previous</p>
                  <p className="text-sm font-semibold text-foreground font-sans group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-end gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground font-sans">Next</p>
                  <p className="text-sm font-semibold text-foreground font-sans group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </AnimateOnScroll>

        {/* Back to All */}
        <AnimateOnScroll className="mt-10 text-center" delay={200}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:border-primary/40 transition-all duration-300 font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </AnimateOnScroll>
      </div>
    </article>
  )
}
