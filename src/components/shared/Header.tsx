import { siteConfig } from "@/config/links"
import { Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router"
import { Input } from "@/components/ui/input"
import { useRef, useState, useEffect } from "react";
import { docsContent, type DocContent } from "@/documentation/documents/docs";

interface SearchResult {
  path: string;
  title: string;
  description: string;
  matchType: "title" | "description" | "content";
}

export const Header = () => {
  const route = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const searchDocs = (query: string): SearchResult[] => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    Object.entries(docsContent).forEach(([path, doc]) => {
      if (doc.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          path,
          title: doc.title,
          description: doc.description,
          matchType: "title",
        });
      } else if (doc.description.toLowerCase().includes(lowerQuery)) {
        results.push({
          path,
          title: doc.title,
          description: doc.description,
          matchType: "description",
        });
      } else if (doc.content.toLowerCase().includes(lowerQuery)) {
        results.push({
          path,
          title: doc.title,
          description: doc.description,
          matchType: "content",
        });
      }
    });

    return results;
  };

  useEffect(() => {
    const results = searchDocs(searchQuery);
    setSearchResults(results);
    setSelectedIndex(0);
    setIsOpen(results.length > 0 && searchQuery.trim().length > 0);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setSearchQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, searchResults.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (event.key === "Enter" && searchResults.length > 0) {
      event.preventDefault();
      handleNavigate(searchResults[selectedIndex].path);
    } else if (event.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-2">
      <div className="flex h-14 w-full max-w-screen-2xl mx-auto items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold">{siteConfig.name}</span>
        </Link>

        <nav className="flex items-center gap-4">
          {
            route.pathname.includes('docs') && (
              <div ref={containerRef} className="relative">
                <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input 
                    ref={inputRef} 
                    placeholder="Search docs..." 
                    className="h-7 w-[200px] border-0 bg-transparent p-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => searchResults.length > 0 && setIsOpen(true)}
                  />
                </div>
                {isOpen && searchResults.length > 0 && (
                  <div className="absolute right-0 top-full mt-2 w-[350px] rounded-md border bg-background shadow-lg z-50">
                    <div className="max-h-[300px] overflow-y-auto p-2">
                      {searchResults.map((result, index) => (
                        <button
                          key={result.path}
                          onClick={() => handleNavigate(result.path)}
                          className={`w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${
                            index === selectedIndex 
                              ? "bg-accent text-accent-foreground" 
                              : "hover:bg-accent hover:text-accent-foreground"
                          }`}
                        >
                          <div className="font-medium">{result.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {result.description}
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground/70">
                            Found in {result.matchType}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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
