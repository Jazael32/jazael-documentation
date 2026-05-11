import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Languages",
    icon: "⚔️",
    skills: ["TypeScript", "JavaScript", "Python", "Rust", "Go"],
  },
  {
    title: "Frontend",
    icon: "🛡️",
    skills: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "🏰",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
  },
  {
    title: "Tools",
    icon: "🗡️",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
]

const weapons = [
  { name: "TypeScript", level: 99, type: "Primary Weapon" },
  { name: "React", level: 95, type: "Shield" },
  { name: "Next.js", level: 92, type: "Armor" },
  { name: "Node.js", level: 88, type: "Talisman" },
  { name: "PostgreSQL", level: 85, type: "Spirit Ash" },
]

export function SkillsPage() {
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
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6 bg-card"
    >
      {/* Background pattern with teal fog */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-t from-[oklch(0.1_0.03_180)] via-transparent to-[oklch(0.12_0.035_175)]" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase">Armory</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - Skill categories */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-balance">
                Weapons of <span className="text-primary">Choice</span>
              </h2>

              <p className="text-muted-foreground mb-12 leading-relaxed">
                Every great warrior needs their arsenal. These are the tools and technologies
                I&apos;ve mastered throughout my journey in the digital realm.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {skillCategories.map((category, catIndex) => (
                  <div
                    key={category.title}
                    className={`group p-6 border border-border bg-background/50 hover:border-primary/50 transition-all duration-300`}
                    style={{ transitionDelay: `${catIndex * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="text-foreground font-medium tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 bg-secondary text-secondary-foreground tracking-wide"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Weapon stats */}
            <div>
              <h3 className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-8">
                Equipment Stats
              </h3>

              <div className="space-y-6">
                {weapons.map((weapon, index) => (
                  <div
                    key={weapon.name}
                    className={`group transition-all duration-500`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-foreground font-medium">{weapon.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          ({weapon.type})
                        </span>
                      </div>
                      <span className="text-primary font-mono text-sm">
                        LV.{weapon.level}
                      </span>
                    </div>
                    <div className="h-1 bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${weapon.level}%` : "0%",
                          transitionDelay: `${index * 150 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative stats card */}
              <div className="mt-12 p-6 border border-primary/20 bg-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary animate-pulse" />
                  <span className="text-xs text-primary tracking-[0.2em] uppercase">
                    Current Build
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-semibold text-primary">VIG</div>
                    <div className="text-xs text-muted-foreground">40</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-primary">INT</div>
                    <div className="text-xs text-muted-foreground">99</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-primary">END</div>
                    <div className="text-xs text-muted-foreground">60</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
