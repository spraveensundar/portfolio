"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"

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
      { threshold: 0.1 }
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

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-xs font-medium text-primary font-mono tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-sans text-balance">
            {"Let's Build Something"} <span className="text-primary">Amazing</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
            Have a mobile app idea or need a stunning website? I would love to help bring it to life.
            Reach out and let us discuss your project.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimateOnScroll>
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "hello@devfolio.app",
                  href: "mailto:hello@devfolio.app",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Location",
                  value: "San Francisco, CA",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-sans">{item.label}</div>
                    <div className="text-sm font-medium text-foreground font-sans">{item.value}</div>
                  </div>
                </a>
              ))}

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-2">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full p-8 rounded-2xl bg-card border border-primary/30 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Send className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-sans">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground font-sans">
                  Thank you for reaching out. I will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs text-muted-foreground mb-1.5 block font-sans">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs text-muted-foreground mb-1.5 block font-sans">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-sans"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-xs text-muted-foreground mb-1.5 block font-sans">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors font-sans"
                  >
                    <option value="">Select a project type</option>
                    <option value="ios">iOS App Development</option>
                    <option value="android">Android App Development</option>
                    <option value="cross">Cross-Platform App</option>
                    <option value="web">Website Design & Development</option>
                    <option value="saas">SaaS / Web App</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="text-xs text-muted-foreground mb-1.5 block font-sans">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors font-sans"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k">$5K - $10K</option>
                    <option value="10k">$10K - $25K</option>
                    <option value="25k">$25K - $50K</option>
                    <option value="50k">$50K+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs text-muted-foreground mb-1.5 block font-sans">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
