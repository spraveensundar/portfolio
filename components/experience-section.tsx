"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react"

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

function TimelineConnector({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="absolute left-[23px] top-14 bottom-0 w-px overflow-hidden">
      <div
        className="w-full bg-primary/30 transition-all duration-1000 ease-out"
        style={{ height: isVisible ? "100%" : "0%" }}
      />
    </div>
  )
}

const experiences = [
  {
    company: "Maticz Technologies",
    role: "Mobile Application Developer",
    period: "Jul 2025 – Present",
    location: "Madurai, Tamil Nadu",
    type: "Full-time",
    description:
      "Contributing to the development of scalable fintech and real-time mobile applications using React Native and TypeScript, including trading platforms and service apps with advanced trading interfaces, API integrations, real-time chat using WebSockets, notifications, and map-based user interactions.",
    highlights: [
      "Worked on KYC and core app modules",
      "Built vendor, driver, and user app features",
      "Implemented map, chat, and real-time functionality",
      "Handled API integration across app modules",
    ],
    tech: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "WebSockets",
      "Map",
      "Web3",
      "Blockchain",
      "NFT"
    ],
  },
  {
    company: "HandBuiltApps",
    role: "Junior App Developer",
    period: "Aug 2024 – Mar 2025",
    location: "Sivakasi, Tamil Nadu",
    type: "Full-time",
    description:
      "Worked on cross-platform mobile applications using React Native and JavaScript, focusing on core features, API integration, and improving app stability and performance.",
    highlights: [
      "Built and maintained mobile app features using React Native",
      "Implemented Redux for global state management",
      "Integrated REST APIs and handled real-time data updates",
      "Collaborated with team members to improve app performance and stability",
    ],
    tech: ["React Native", "JavaScript", "Redux", "Redux Form", "Reanimated", "REST APIs", "Git"],
  },
  // {
  //   company: "PixelWave Agency",
  //   role: "Junior Developer & Web Designer",
  //   period: "2019 - 2021",
  //   location: "Remote",
  //   type: "Full-time",
  //   description:
  //     "Started as a web designer creating responsive websites, then transitioned into mobile development. Gained expertise in both web and mobile ecosystems while working with diverse global clients.",
  //   highlights: [
  //     "Designed and coded 30+ responsive websites",
  //     "Developed first mobile app with 50K+ downloads",
  //     "Created brand identities and landing pages for startups",
  //     "Mastered Flutter and launched 5 cross-platform apps",
  //   ],
  //   tech: ["HTML/CSS", "JavaScript", "Flutter", "Firebase", "Figma"],
  // },
  // {
  //   company: "Freelance",
  //   role: "Mobile & Web Developer",
  //   period: "2018 - 2019",
  //   location: "Remote",
  //   type: "Freelance",
  //   description:
  //     "Kickstarted my career as a freelance developer building websites and small mobile apps for local businesses. This is where I discovered my passion for creating pixel-perfect digital products.",
  //   highlights: [
  //     "Built websites for 10+ local businesses",
  //     "Developed my first React Native prototype",
  //     "Learned UI/UX fundamentals through real projects",
  //     "Established a client base that led to agency opportunities",
  //   ],
  //   tech: ["React", "WordPress", "React Native", "CSS", "Photoshop"],
  // },
]

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => new Set([...prev, index]))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = timelineRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-xs font-medium text-primary font-mono tracking-wider uppercase">
            Career Path
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-sans text-balance">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            My professional journey building mobile apps and designing web
            experiences for companies.
          </p>
        </AnimateOnScroll>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              data-index={i}
              className="relative pl-14 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1 w-[46px] h-[46px] rounded-xl flex items-center justify-center border-2 transition-all duration-700 ${visibleItems.has(i)
                  ? "bg-primary border-primary scale-100"
                  : "bg-card border-border scale-75 opacity-0"
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Building2
                  className={`w-5 h-5 transition-colors duration-500 ${visibleItems.has(i) ? "text-primary-foreground" : "text-muted-foreground"
                    }`}
                />
              </div>

              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <TimelineConnector isVisible={visibleItems.has(i)} />
              )}

              {/* Card */}
              <div
                className={`rounded-2xl bg-card border border-border p-6 transition-all duration-700 hover:border-primary/30 ${visibleItems.has(i)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
                  }`}
                style={{ transitionDelay: `${i * 150 + 100}ms` }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground font-sans">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-primary font-sans">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium font-mono shrink-0">
                    {exp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-muted-foreground font-sans">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-sans">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 mb-5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-foreground/80 font-sans"
                    >
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
