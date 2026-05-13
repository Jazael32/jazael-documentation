# Data Fetching

This guide covers data fetching patterns in the documentation.

## Static Content

Documentation content is stored statically in TypeScript files for optimal performance.

## Server Components

All documentation pages are Server Components by default:

```typescript
export default async function DocsPage({ params }: Props) {
  const doc = await getDocFromSlug(params.slug)
  return <DocContent doc={doc} />
}
```

## Benefits

- **Fast**: Content is rendered at build time
- **SEO**: Full server-side rendering
- **Simple**: No client-side data fetching needed
