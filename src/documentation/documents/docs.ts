export interface DocContent {
  title: string
  description: string
  content: string
}

export interface DocMeta {
  title: string
  description: string
  file: string
}

// Registry mapping routes to their metadata and file paths
// To add a new doc: 1) Create a .md file in content/ 2) Add entry here
export const docsRegistry: Record<string, DocMeta> = {
  // Getting Started
  "/docs": {
    title: "Introduction",
    description: "Welcome to the documentation. Learn how to get started with our platform.",
    file: "getting-started/introduction.md",
  },
  "/docs/installation": {
    title: "Installation",
    description: "How to install and set up the project in your local environment.",
    file: "getting-started/installation.md",
  },
  "/docs/project-structure": {
    title: "Project Structure",
    description: "Overview of the project structure and key files.",
    file: "getting-started/project-structure.md",
  },
  "/docs/configuration": {
    title: "Configuration",
    description: "Learn how to configure the documentation site.",
    file: "getting-started/configuration.md",
  },

  // Core Concepts
  "/docs/routing": {
    title: "Routing",
    description: "Understanding the routing system.",
    file: "core-concepts/routing.md",
  },
  "/docs/data-fetching": {
    title: "Data Fetching",
    description: "Learn about data fetching patterns.",
    file: "core-concepts/data-fetching.md",
  },
  "/docs/rendering": {
    title: "Rendering",
    description: "Understanding rendering strategies.",
    file: "core-concepts/rendering.md",
  },
  "/docs/caching": {
    title: "Caching",
    description: "Caching strategies for optimal performance.",
    file: "core-concepts/caching.md",
  },

  // Components
  "/docs/components": {
    title: "Components Overview",
    description: "Overview of available components.",
    file: "components/overview.md",
  },
  "/docs/components/button": {
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    file: "components/button.md",
  },
  "/docs/components/card": {
    title: "Card",
    description: "Displays a card with header, content, and footer.",
    file: "components/card.md",
  },
  "/docs/components/dialog": {
    title: "Dialog",
    description: "A modal dialog that interrupts the user with important content.",
    file: "components/dialog.md",
  },
  "/docs/components/form": {
    title: "Form",
    description: "Building forms with React Hook Form and Zod validation.",
    file: "components/form.md",
  },

  // API Reference
  "/docs/api/cli": {
    title: "CLI",
    description: "Command line interface reference.",
    file: "api/cli.md",
  },
  "/docs/api/configuration": {
    title: "API Configuration",
    description: "Configuration API reference.",
    file: "api/configuration.md",
  },
}

// Import all markdown files from the content directory
const markdownModules = import.meta.glob<string>("../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

// Helper to resolve the markdown content from the module cache
function getMarkdownContent(filePath: string): string {
  const fullPath = `../content/${filePath}`
  const content = markdownModules[fullPath]
  if (!content) {
    console.warn(`Markdown file not found: ${fullPath}`)
    return `# Content Not Found\n\nThe requested documentation file could not be found.`
  }
  return content
}

export function getDocBySlug(slug: string[]): DocContent | null {
  const path = slug?.length ? `/docs/${slug.join("/")}` : "/docs"
  const meta = docsRegistry[path]

  if (!meta) {
    return null
  }

  return {
    title: meta.title,
    description: meta.description,
    content: getMarkdownContent(meta.file),
  }
}

export function getAllDocSlugs(): string[] {
  return Object.keys(docsRegistry)
}

// Helper to get just the metadata without loading content
export function getDocMeta(slug: string[]): DocMeta | null {
  const path = slug?.length ? `/docs/${slug.join("/")}` : "/docs"
  return docsRegistry[path] || null
}

// Backwards compatible export for search functionality
// Returns all docs with their content pre-loaded
export const docsContent: Record<string, DocContent> = Object.fromEntries(
  Object.entries(docsRegistry).map(([path, meta]) => [
    path,
    {
      title: meta.title,
      description: meta.description,
      content: getMarkdownContent(meta.file),
    },
  ])
)
