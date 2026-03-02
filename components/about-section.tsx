"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { Code2, Layers, Zap, Globe, Monitor, Link } from "lucide-react"

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
      { threshold: 0.15 }
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

const services = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Cross-Platform",
    description:
      "Developing cross-platform mobile applications using React Native with shared codebases, consistent UI, and near-native performance.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Design",
    description:
      "Designing modern, responsive websites and web applications with clean layouts and seamless user experience.",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Frontend Development",
    description:
      "Creating responsive web interfaces using React, React Native, TypeScript, and Tailwind CSS with focus on performance and accessibility.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "API Integration",
    description:
      "Integrating REST APIs, WebSockets, real-time data, authentication, push notifications, state management and backend services into mobile and web applications.",
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: "Blockchain / Trading Platform",
    description:
      "Building crypto trading applications with real-time trading UI, TradingView chart integrations, copy trading, algo trading features, and NFT wallet support.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Native Development",
    description:
      "Building high-performance Android applications using Kotlin with modern architecture, scalable structure, and smooth user experience.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-10">
          <span className="text-xs font-medium text-primary font-mono tracking-wider uppercase">
            What I Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-sans text-balance">
            Turning Ideas Into
            <span className="text-primary"> Digital Experiences</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            I create user-friendly mobile applications and modern websites, focusing on performance, clean UI, and seamless user experience.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 120}>
              <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 font-sans">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {service.description}
                </p>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ boxShadow: "0 0 30px oklch(0.75 0.18 175 / 0.1)" }} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
