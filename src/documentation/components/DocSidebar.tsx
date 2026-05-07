import { useLocation, Link } from "react-router"
import { cn } from "@/lib/utils"
import { docsConfig, type NavItemWithChildren } from "@/config/docsRoutes"

export const DocSidebar = () => {
  const { pathname } = useLocation()

  const renderItem = (item: NavItemWithChildren) => {
    const isActive = pathname === item.route || pathname.startsWith((item.route ?? "") + "/")
    const baseClass = "group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-sm hover:underline"

    const label = item.label && (
      <span className="ml-2 rounded-md bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
        {item.label}
      </span>
    )


    if (item.disabled) {
      return (
        <span key={item.route ?? item.title} className={cn(baseClass, "cursor-not-allowed opacity-60 text-muted-foreground")}>
          {item.title}{label}
        </span>
      )
    }

    if (item.external) {
      return (
        <a key={item.route ?? item.title} href={item.route ?? "#"} target="_blank" rel="noreferrer" className={cn(baseClass, "text-muted-foreground")}>
          {item.title}{label}
        </a>
      )
    }

    return (
      <Link key={item.route ?? item.title} to={item.route ?? "#"} className={cn(baseClass, isActive ? "font-medium text-foreground" : "text-muted-foreground")}>
        {item.title}{label}
      </Link>
    )
  }

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <div className="h-full overflow-y-auto py-6 pr-6 lg:py-8">
        <nav className="w-full">
          {docsConfig.sidebarNav.map((section) => (
            <details key={section.title} className="pb-4" open>
              <summary className="list-none cursor-pointer">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
                  {section.title}
                </h4>
              </summary>
              {section.items?.length && (
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {section.items.map(renderItem)}
                </div>
              )}
            </details>
          ))}
        </nav>
      </div>
    </aside>
  )
}