import { useEffect, useState } from "react"

export function HeroPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Atmospheric teal fog effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[oklch(0.15_0.04_175)] via-transparent to-[oklch(0.1_0.03_180)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[oklch(0.75_0.16_75)]/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[oklch(0.3_0.05_175)]/30 rounded-full blur-2xl animate-float" />
      </div>

      {/* Decorative Elden Ring circles - mimicking the golden ring from the image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-125 h-125 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: "60s" }} />
        <div className="absolute w-100 h-100 border border-[oklch(0.75_0.16_75)]/15 rounded-full animate-spin" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
        <div className="absolute w-75 h-75 border-2 border-primary/25 rounded-full animate-spin" style={{ animationDuration: "30s" }} />
        <div className="absolute w-50 h-50 border border-[oklch(0.7_0.15_65)]/20 rounded-full animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
        {/* Central glow point */}
        <div className="absolute w-4 h-4 bg-primary rounded-full blur-sm animate-pulse-gold" />
      </div>

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-8">
          <span className="text-primary/60 text-xs tracking-[0.5em] uppercase">
            Rise, Tarnished
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide mb-6 text-balance">
          <span className="text-foreground">Forging </span>
          <span className="text-primary">Digital</span>
          <br />
          <span className="text-foreground">Experiences</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          A developer who has ventured through countless code dungeons,
          conquering bugs and crafting legendary applications across
          the digital Lands Between.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wider text-sm uppercase transition-all hover:bg-primary/90"
          >
            <span className="relative z-10">View Conquests</span>
            <div className="absolute inset-0 bg-primary/50 blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-border text-foreground font-medium tracking-wider text-sm uppercase hover:border-primary hover:text-primary transition-all"
          >
            Summon Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
