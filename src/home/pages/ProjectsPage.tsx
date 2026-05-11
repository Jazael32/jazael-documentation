"use client"

import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Grace Site Finder",
    description: "A real-time map application helping travelers locate and mark points of rest across the vast digital landscape. Built with React and WebGL.",
    tags: ["React", "WebGL", "Node.js", "PostgreSQL"],
    link: "#",
    featured: true,
  },
  {
    title: "Rune Counter",
    description: "Analytics dashboard for tracking personal achievements and progression metrics. Features real-time updates and detailed statistics.",
    tags: ["Next.js", "TypeScript", "Chart.js", "Prisma"],
    link: "#",
    featured: true,
  },
  {
    title: "Spirit Ash Summoner",
    description: "CLI tool for scaffolding new projects with pre-configured templates and best practices baked in.",
    tags: ["Node.js", "TypeScript", "CLI"],
    link: "#",
    featured: false,
  },
  {
    title: "Tarnished Forum",
    description: "Community platform for developers to share knowledge, ask questions, and collaborate on challenging quests.",
    tags: ["Vue.js", "GraphQL", "MongoDB"],
    link: "#",
    featured: false,
  },
  {
    title: "Erdtree Components",
    description: "Open-source UI component library inspired by ancient runes. Accessible, customizable, and battle-tested.",
    tags: ["React", "TypeScript", "Storybook"],
    link: "#",
    featured: true,
  },
  {
    title: "Boss Fight Logger",
    description: "Application for tracking and analyzing debugging sessions, helping developers learn from past battles.",
    tags: ["Python", "FastAPI", "Redis"],
    link: "#",
    featured: false,
  },
]

export function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
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
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-6"
    >
      {/* Teal fog atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[oklch(0.12_0.035_175)] to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[oklch(0.2_0.04_175)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] uppercase">Conquests</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-balance">
              Legendary <span className="text-primary">Creations</span>
            </h2>
            <p className="text-muted-foreground max-w-md text-pretty">
              A collection of quests completed and challenges conquered throughout my journey.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                className={`group relative flex flex-col p-6 border border-border bg-card hover:border-primary/50 transition-all duration-300 ${project.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] text-primary tracking-[0.2em] uppercase">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project content */}
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 bg-secondary text-secondary-foreground tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span className="tracking-wider">View Project</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                {/* Hover glow effect */}
                {hoveredProject === project.title && (
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                )}
              </a>
            ))}
          </div>

          {/* View all link */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="tracking-wider">View Full Archive</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
