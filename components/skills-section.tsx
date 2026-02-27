"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

function AnimateOnScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  )
}

const skills = [
  { name: "Flutter", level: 95 },
  { name: "React Native", level: 90 },
  { name: "React / Next.js", level: 92 },
  { name: "Swift / SwiftUI", level: 88 },
  { name: "Kotlin", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 94 },
  { name: "HTML / CSS", level: 96 },
  { name: "Firebase", level: 92 },
  { name: "REST / GraphQL", level: 88 },
]

const tools = [
  "Xcode", "Android Studio", "VS Code", "Figma",
  "Git", "CI/CD", "Fastlane", "Firebase",
  "AWS Amplify", "Supabase", "Vercel", "Netlify",
  "Adobe XD", "Photoshop", "Codemagic", "TestFlight",
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
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
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground font-sans">{name}</span>
        <span className="text-xs text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-xs font-medium text-primary font-mono tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-sans text-balance">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            Technologies and tools I use daily to build exceptional mobile and web experiences.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <AnimateOnScroll>
            <h3 className="text-lg font-semibold text-foreground mb-6 font-sans">Core Technologies</h3>
            <div className="flex flex-col gap-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 100} />
              ))}
            </div>
          </AnimateOnScroll>

          {/* Tools Grid */}
          <AnimateOnScroll>
            <h3 className="text-lg font-semibold text-foreground mb-6 font-sans">Tools & Platforms</h3>
            <div className="grid grid-cols-4 gap-3">
              {tools.map((tool, i) => (
                <div
                  key={tool}
                  className="group flex items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-sans text-center">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            {/* Experience summary */}
            <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "50+", label: "Projects" },
                  { value: "30+", label: "Clients" },
                  { value: "10M+", label: "Users Served" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-primary font-sans">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-sans">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
