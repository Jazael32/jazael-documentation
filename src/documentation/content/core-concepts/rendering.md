# Rendering

Learn about the rendering strategies used in the documentation.

## Server-Side Rendering

All documentation pages are server-rendered for optimal performance and SEO.

## Static Generation

Pages can be statically generated at build time:

```typescript
export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({
    slug: slug.split('/').filter(Boolean),
  }))
}
```

## Incremental Static Regeneration

For frequently updated content, use ISR:

```typescript
export const revalidate = 3600 // Revalidate every hour
```
