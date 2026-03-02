"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { ArrowDown, Download, Sparkles, Smartphone, Globe, Rocket } from "lucide-react"

function useTypewriter(texts: string[], speed = 80, deleteSpeed = 40, pause = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.substring(0, displayText.length + 1))
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), pause)
          }
        } else {
          setDisplayText(current.substring(0, displayText.length - 1))
          if (displayText.length === 0) {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pause])

  return displayText
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            start = Math.floor(eased * target)
            setCount(start)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-bold text-foreground font-sans">
      {count}
      {suffix}
    </div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const typedText = useTypewriter(
    ["Mobile Apps", "iOS Apps", "Android Apps", "Web Designs", "React Native Apps", "Websites"],
    80,
    50,
    1800
  )

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    const avatar = container.querySelector("[data-avatar]") as HTMLElement
    if (avatar) {
      avatar.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    }
    // Move orbs slightly
    const orbs = container.querySelectorAll("[data-orb]")
    orbs.forEach((orb, i) => {
      const el = orb as HTMLElement
      const factor = (i + 1) * 0.15
      el.style.transform = `translate(${x * factor}px, ${y * factor}px)`
    })
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          data-orb
          className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{ backgroundColor: "oklch(0.75 0.18 175 / 0.06)" }}
        />
        <div
          data-orb
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{ backgroundColor: "oklch(0.75 0.18 175 / 0.08)" }}
        />
        <div
          data-orb
          className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{ backgroundColor: "oklch(0.75 0.18 175 / 0.04)" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.97 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0 0) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[20%] left-[10%] transition-all duration-1000 ${isLoaded ? "opacity-20 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "800ms" }}>
          <Smartphone className="w-8 h-8 text-primary animate-float" />
        </div>
        <div className={`absolute top-[15%] right-[12%] transition-all duration-1000 ${isLoaded ? "opacity-15 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "1000ms" }}>
          <Globe className="w-6 h-6 text-primary animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className={`absolute bottom-[25%] left-[8%] transition-all duration-1000 ${isLoaded ? "opacity-15 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "1200ms" }}>
          <Rocket className="w-7 h-7 text-primary animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Available badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{
              backgroundColor: "oklch(0.75 0.18 175 / 0.1)",
              borderColor: "oklch(0.75 0.18 175 / 0.2)",
              transitionDelay: "200ms",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium text-primary font-mono tracking-wider uppercase">
              Available for Work
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] font-sans transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "350ms" }}
          >
            <span className="block text-balance">I Build</span>
            <span className="block text-primary h-[1.15em]">
              {typedText}
              <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 animate-pulse align-middle" />
            </span>
            <span className="block text-balance">That Users Love</span>
          </h1>

          <p
            className={`mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans text-pretty transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            {/* Specialized in crafting high-performance mobile applications
            and stunning web designs with seamless UX and clean architecture. From concept to launch. */}
            Building high-performance mobile apps and modern web experiences with seamless UX and clean architecture.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "650ms" }}
          >
            <a
              href="#projects"
              className="group relative px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                View My Work
              </span>
              <span className="absolute inset-0 bg-foreground/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            <a
              href="/cv/praveen-sundar-cv.pdf" download
              onClick={() => {
                const audio = new Audio("/sounds/click.mp3");
                audio.play();
              }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-12 flex items-center gap-8 justify-center lg:justify-start transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="text-center lg:text-left">
              <AnimatedCounter target={50} suffix="+" />
              <div className="text-xs text-muted-foreground mt-1 font-sans">Apps & Web</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center lg:text-left">
              <AnimatedCounter target={4} suffix="" />
              <div className="text-xs text-muted-foreground mt-1 font-sans">Avg Rating</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center lg:text-left">
              <AnimatedCounter target={1} suffix="+ Yr" />
              <div className="text-xs text-muted-foreground mt-1 font-sans">Experience</div>
            </div>
          </div>
        </div>

        {/* Right: Avatar with animated ring */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="relative" data-avatar>
            {/* Spinning ring behind avatar */}
            <div className="absolute -inset-4 rounded-[2rem] border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-8 rounded-[2.5rem] border border-primary/10 animate-[spin_30s_linear_infinite_reverse]" />

            {/* Avatar image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-primary/30 animate-pulse-glow">
              <Image
                src="/images/avatar.jpeg"
                alt="Mobile app developer animated portrait"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, oklch(0.75 0.18 175 / 0.05) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-xl bg-card border border-border shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
              <span className="text-xs font-medium text-primary font-mono">Android / iOS</span>
            </div>
            <div className="absolute -top-3 -left-3 px-3 py-2 rounded-lg bg-card border border-border shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
              <span className="text-xs font-medium text-primary font-mono">Web Design</span>
            </div>

            {/* Status dot */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm border border-border">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] text-muted-foreground font-mono">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        style={{ transitionDelay: "1200ms" }}
      >
        <span className="text-xs text-muted-foreground font-sans">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section >
  )
}
