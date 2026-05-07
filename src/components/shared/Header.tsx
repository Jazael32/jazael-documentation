import { siteConfig } from "@/config/links"
import { Search, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router"
import { Input } from "@/components/ui/input"
import { useSearchReducer } from "../reducer/useSearchReducer";
import { Button } from "@/components/ui/button"
import { useTheme } from "../../theme-provider";


export const Header = () => {

  const route = useLocation();
  const { theme, setTheme } = useTheme();
  const { state, dispatch, inputRef, containerRef, handleNavigate, handleKeyDown } = useSearchReducer();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-2">
      <div className="flex h-14 w-full max-w-screen-2xl mx-auto items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold">{siteConfig.name}</span>
        </Link>

        <nav className="flex items-center gap-4">
          {route.pathname.includes("docs") && (
            <div ref={containerRef} className="relative">
              <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  placeholder="Search docs..."
                  className="h-7 w-50 border-0 bg-transparent p-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={state.searchQuery}
                  onChange={(e) => dispatch({ type: "SET_QUERY", payload: e.target.value })}
                  onKeyDown={handleKeyDown}
                  onFocus={() => state.searchResults.length > 0 && dispatch({ type: "SET_IS_OPEN", payload: true })}
                />
              </div>
              {state.isOpen && state.searchResults.length > 0 && (
                <div className="absolute right-0 top-full mt-2 w-87.5 rounded-md border bg-background shadow-lg z-50">
                  <div className="max-h-75 overflow-y-auto p-2">
                    {state.searchResults.map((result, index) => (
                      <button
                        key={result.path}
                        onClick={() => handleNavigate(result.path)}
                        className={`w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${index === state.selectedIndex
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                          }`}
                      >
                        <div className="font-medium">{result.title}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">{result.description}</div>
                        <div className="mt-1 text-xs text-muted-foreground/70">Found in {result.matchType}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

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

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
