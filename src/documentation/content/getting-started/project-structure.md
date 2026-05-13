# Project Structure

This page provides an overview of the project structure and key files.

## Directory Structure

```
my-docs/
├── app/
│   ├── docs/
│   │   ├── [[...slug]]/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── docs/
│   │   ├── doc-sidebar.tsx
│   │   └── toc.tsx
│   └── ui/
├── config/
│   ├── docs.ts
│   └── site.ts
├── content/
│   └── docs.ts
└── lib/
    └── utils.ts
```

## Key Files

| File | Description |
|------|-------------|
| `app/layout.tsx` | Root layout with providers |
| `app/docs/layout.tsx` | Documentation layout with sidebar |
| `config/docs.ts` | Navigation configuration |
| `content/docs.ts` | Documentation content |
