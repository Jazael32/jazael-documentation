import { ArrowRight, BookOpen, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { Link } from "react-router"
import { siteConfig } from "@/config/links"

export const HomePage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="flex-1 mx-auto">
        <section className="container flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:py-10 lg:py-24">
          <div className="flex max-w-245 flex-col items-center gap-4 text-center">
            <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Documentation Template
            </span>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Build beautiful documentation{" "}
              <span className="bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                with ease
              </span>
            </h1>
            <p className="max-w-187.5 text-lg text-muted-foreground sm:text-xl">
              A clean, modern documentation template built with Next.js and
              shadcn/ui. Fully customizable and ready to use.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link to="/docs">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
                View on GitHub
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast & Lightweight</h3>
              <p className="text-muted-foreground">
                Built with performance in mind. Static generation for instant
                page loads.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fully Customizable</h3>
              <p className="text-muted-foreground">
                Every component is customizable. Make it your own with Tailwind
                CSS.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Great DX</h3>
              <p className="text-muted-foreground">
                Write documentation in Markdown. Easy navigation with sidebar
                and search.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

