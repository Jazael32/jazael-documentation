# Configuration

This guide covers all the configuration options available.

## Site Configuration

The site configuration is located in `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Docs",
  url: "https://example.com",
  description: "Your documentation description",
  links: {
    twitter: "https://twitter.com/your-handle",
    github: "https://github.com/your-repo",
  },
}
```

## Navigation Configuration

Configure the sidebar navigation in `config/docs.ts`:

```typescript
export const docsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
  ],
}
```

## Theme Configuration

The theme can be customized in `app/globals.css` using CSS variables.
