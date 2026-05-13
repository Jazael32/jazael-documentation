# Routing

Learn about the routing system and how to create new pages.

## File-based Routing

This documentation uses Next.js App Router with file-based routing.

## Creating New Pages

To add a new documentation page:

1. Add an entry to `config/docs.ts`
2. Add content to `content/docs.ts`

```typescript
// config/docs.ts
{
  title: "New Page",
  href: "/docs/new-page",
}

// content/docs.ts
"/docs/new-page": {
  title: "New Page",
  description: "Description of new page",
  content: `# New Page\n\nContent here...`
}
```

## Dynamic Routes

The `[[...slug]]` catch-all route handles all documentation pages dynamically.
