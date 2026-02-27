import { Smartphone, Heart } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Smartphone className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-base font-bold text-foreground font-sans">
              Dev<span className="text-primary">Folio</span>
            </span>
          </a>

          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            2026 DevFolio. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground font-sans">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}
