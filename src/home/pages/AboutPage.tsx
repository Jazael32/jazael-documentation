import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Years of Journey", value: "5+", suffix: "" },
  { label: "Quests Completed", value: "50", suffix: "+" },
  { label: "Runes Collected", value: "∞", suffix: "" },
  { label: "Bosses Defeated", value: "100", suffix: "%" },
]

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Developer",
    company: "Roundtable Hold Inc.",
    description: "Leading the fellowship in crafting scalable applications and mentoring aspiring tarnished developers.",
  },
  {
    period: "2022 — 2024",
    title: "Full Stack Developer",
    company: "Erdtree Technologies",
    description: "Built and maintained critical systems powering the grace sites across multiple realms.",
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "Limgrave Studios",
    description: "Crafted immersive user interfaces that guided travelers through treacherous digital landscapes.",
  },
]

export function AboutPage() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6"
    >
      {/* Atmospheric teal fog overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[oklch(0.12_0.04_175)]/50 via-transparent to-[oklch(0.1_0.03_180)]/30 pointer-events-none" />

      {/* Decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 bg-linear-to-b from-transparent via-primary/40 to-transparent hidden lg:block" />
      <div className="absolute right-12 top-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />

      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase">Chronicle</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - About text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-balance">
                A <span className="text-primary">Tarnished</span> Developer&apos;s Tale
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a developer passionate about crafting accessible, pixel-perfect user
                  interfaces that blend thoughtful design with robust engineering. My favorite
                  work lies at the intersection of design and development.
                </p>
                <p>
                  Currently, I&apos;m a Senior Developer at <span className="text-foreground">Roundtable Hold</span>,
                  specializing in building scalable web applications. I contribute to the creation
                  and maintenance of systems that power digital experiences across the realm.
                </p>
                <p>
                  In my spare time, I&apos;m usually exploring new technologies, contributing to
                  open source, or searching for the next great challenge to conquer.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`transition-all duration-500`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl md:text-3xl font-semibold text-primary">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Experience */}
            <div>
              <h3 className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-8">
                Journey Log
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className={`group relative pl-6 border-l border-border hover:border-primary transition-colors duration-300`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-0 top-0 w-2 h-2 translate-x-[-4.5px] bg-background border border-border group-hover:border-primary group-hover:bg-primary transition-all" />

                    <span className="text-xs text-muted-foreground tracking-wider">
                      {exp.period}
                    </span>
                    <h4 className="text-foreground font-medium mt-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-primary/80">{exp.company}</span>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
