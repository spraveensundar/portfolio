"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react"

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
      className={`${className} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
            {"Let’s Start a "} <span className="text-primary">Conversation</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans text-pretty">


            Feel free to reach out — always happy to connect and have a conversation.
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
                  value: "praveensundar.dev@gmail.com",
                  href: "mailto:praveensundar.dev@gmail.com",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  value: "+91 9361299044",
                  href: "tel:+919361299044",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Location",
                  value: "Tenkasi, Tamil Nadu, India",
                  href: "https://maps.google.com/?q=Tenkasi,Tamil Nadu,India",
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
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/spraveensundar", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/praveen-sundar-s", label: "LinkedIn" },
                  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/praveen_sundars", label: "Twitter" },
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
                  Thanks for contacting me. I appreciate your message and will respond soon.
                </p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/praveensundar.dev@gmail.com"
                method="POST"
                onSubmit={() => {
                  setSubmitted(true)
                }}
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Portfolio Message" />
                <input type="hidden" name="_template" value="table" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs text-muted-foreground mb-1.5 block font-sans">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
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
                      name="email"
                      type="email"
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-sans"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs text-muted-foreground mb-1.5 block font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                  disabled={submitted}
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
