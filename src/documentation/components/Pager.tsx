import { Link } from "react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { docsConfig } from "@/config/docsRoutes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface DocsPagerProps {
  slug: string[]
}

export function DocsPager({ slug }: DocsPagerProps) {
  const currentPath = slug?.length ? `/docs/${slug.join("/")}` : "/docs"

  const flattenedLinks = docsConfig.sidebarNav.flatMap((section) =>
    section.items?.map((item) => ({
      title: item.title,
      route: item.route,
    })) ?? []
  )

  const currentIndex = flattenedLinks.findIndex((link) => link.route === currentPath)
  const prev = currentIndex > 0 ? flattenedLinks[currentIndex - 1] : null
  const next = currentIndex < flattenedLinks.length - 1 ? flattenedLinks[currentIndex + 1] : null

  return (
    <div className="flex flex-row items-center justify-between">
      {prev?.route ? (
        <Link to={prev.route} className={cn(buttonVariants({ variant: "outline" }), "gap-1")}>
          <ChevronLeft className="h-4 w-4" />
          {prev.title}
        </Link>
      ) : (
        <div />
      )}
      {next?.route ? (
        <Link to={next.route} className={cn(buttonVariants({ variant: "outline" }), "gap-1")}>
          {next.title}
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}