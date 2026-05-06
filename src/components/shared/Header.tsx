import { siteConfig } from "@/config/links"
import { Search } from "lucide-react";
import { Link, useLocation } from "react-router"
import { Input } from "@/components/ui/input"
import { useRef } from "react";

export const Header = () => {
  const route = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  //!TODO
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = inputRef.current?.value ?? '';
      console.log(value);
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-2">
      <div className="flex h-14 w-full max-w-screen-2xl mx-auto items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold">{siteConfig.name}</span>
        </Link>

        <nav className="flex items-center gap-4">
          {
            route.pathname.includes('docs') && (
              <div className="flex items-center gap-1">
                <Search />
                <Input ref={inputRef} placeholder="search word" className="text-lg bg-white" onKeyDown={handleKeyDown} />
              </div>
            )
          }

          <Link
            to="/docs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            to={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  )
}