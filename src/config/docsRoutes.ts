export interface NavItem {
  title: string
  route?: string
  disabled?: boolean
  external?: boolean
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      route: "/docs",
    },
    {
      title: "Components",
      route: "/docs/components",
    },
    {
      title: "GitHub",
      route: "https://github.com",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          route: "/docs",
        },
        {
          title: "Installation",
          route: "/docs/installation",
        },
        {
          title: "Project Structure",
          route: "/docs/project-structure",
        },
        {
          title: "Configuration",
          route: "/docs/configuration",
        },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        {
          title: "Routing",
          route: "/docs/routing",
        },
        {
          title: "Data Fetching",
          route: "/docs/data-fetching",
        },
        {
          title: "Rendering",
          route: "/docs/rendering",
        },
        {
          title: "Caching",
          route: "/docs/caching",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Overview",
          route: "/docs/components",
        },
        {
          title: "Button",
          route: "/docs/components/button",
        },
        {
          title: "Card",
          route: "/docs/components/card",
        },
        {
          title: "Dialog",
          route: "/docs/components/dialog",
        },
        {
          title: "Form",
          route: "/docs/components/form",
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        {
          title: "CLI",
          route: "/docs/api/cli",
        },
        {
          title: "Configuration",
          route: "/docs/api/configuration",
        },
      ],
    },
  ],
}
