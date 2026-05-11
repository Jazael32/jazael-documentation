import { useEffect, useRef, useState } from "react"

const socialLinks = [
  { name: "GitHub", href: "#", icon: "github" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Email", href: "mailto:tarnished@example.com", icon: "email" },
]

export function ContactsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        )
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        )
      case "twitter":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        )
      case "email":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 bg-card"
    >
      {/* Background decoration with teal fog */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-t from-[oklch(0.1_0.03_180)] via-transparent to-[oklch(0.12_0.035_175)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-[oklch(0.25_0.04_175)]/20 rounded-full blur-2xl animate-float" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase">Summon</span>
            <div className="w-12 h-px bg-primary" />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-balance">
              Shall We <span className="text-primary">Embark</span> Together?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Whether you seek a fellow traveler for your next quest, have questions about
              the digital realms, or simply wish to share tales of adventure — my summon
              sign awaits your call.
            </p>
          </div>

          {/* Contact card */}
          <div className="max-w-lg mx-auto">
            <div className="border border-border bg-background p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-primary/30 mb-6">
                  <div className="w-3 h-3 bg-primary animate-pulse" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Place Your Summon Sign
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ready for cooperation
                </p>
              </div>

              <a
                href="mailto:tarnished@example.com"
                className="group flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground font-medium tracking-wider text-sm uppercase transition-all hover:bg-primary/90 mb-8"
              >
                <span>Send Message</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <div className="text-center">
                <span className="text-xs text-muted-foreground tracking-wider">
                  Or find me in these realms
                </span>

                <div className="flex items-center justify-center gap-4 mt-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="p-3 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all"
                      aria-label={link.name}
                    >
                      {renderIcon(link.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
