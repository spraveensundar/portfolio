"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Smartphone } from "lucide-react"

export function ProjectsPageNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
            <Smartphone className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground font-sans tracking-tight">
            Dev<span className="text-primary">Folio</span>
          </span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </nav>
  )
}
