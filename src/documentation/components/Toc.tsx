import * as React from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  title: string
  url: string
  depth: number
}

interface TableOfContentsProps {
  content: string
}

function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm
  const headings: TocItem[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length
    const title = match[2].trim()
    const url = "#" + title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    headings.push({ title, url, depth })
  }
  return headings
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("")
  const headings = extractHeadings(content)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    const headingElements = document.querySelectorAll("h1, h2, h3")
    headingElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <ul className="m-0 list-none text-sm">
        {headings.map((heading, index) => {
          const isActive = activeId === heading.url.slice(1)
          const className = cn(
            "inline-block no-underline transition-colors hover:text-foreground",
            heading.depth > 1 ? "pl-4" : "",
            isActive ? "font-medium text-foreground" : "text-muted-foreground"
          )
          return (
            <li key={`${heading.url}-${index}`} className="mt-0 pt-2">
              <a href={heading.url} className={className}>
                {heading.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}