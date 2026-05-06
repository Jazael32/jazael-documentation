export interface DocContent {
  title: string
  description: string
  content: string
}

export const docsContent: Record<string, DocContent> = {
  "/docs": {
    title: "Introduction",
    description: "Welcome to the documentation. Learn how to get started with our platform.",
    content: `
# Introduction

Welcome to the documentation. This is a comprehensive guide to help you get started with our platform.

## What is this?

This is a beautifully designed documentation template built with Next.js and shadcn/ui. It provides a clean, responsive layout perfect for technical documentation.

## Features

- **Fast Navigation**: Sidebar navigation with collapsible sections
- **Search**: Built-in search functionality (coming soon)
- **Dark Mode**: Full dark mode support
- **Responsive**: Works on all devices
- **MDX Support**: Write content in MDX format

## Getting Started

To get started, check out the [Installation](/docs/installation) guide.

\`\`\`bash
npx create-next-app@latest my-docs --example with-mdx
\`\`\`

## Philosophy

Our documentation is designed around these core principles:

1. **Clarity**: Every page should be clear and concise
2. **Examples**: Code examples for every concept
3. **Accessibility**: Documentation should be accessible to everyone
    `,
  },
  "/docs/installation": {
    title: "Installation",
    description: "How to install and set up the project in your local environment.",
    content: `
# Installation

Get started by installing the dependencies and running the development server.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0 or later
- npm, yarn, or pnpm

## Quick Start

1. Clone the repository:

\`\`\`bash
git clone https://github.com/example/docs.git
cd docs
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
pnpm install
# or
yarn install
\`\`\`

3. Start the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Manual Installation

If you prefer to set things up manually, follow these steps:

### Step 1: Create a new project

\`\`\`bash
npx create-next-app@latest my-docs
\`\`\`

### Step 2: Install shadcn/ui

\`\`\`bash
npx shadcn@latest init
\`\`\`

### Step 3: Add components

\`\`\`bash
npx shadcn@latest add button card
\`\`\`
    `,
  },
  "/docs/project-structure": {
    title: "Project Structure",
    description: "Overview of the project structure and key files.",
    content: `
# Project Structure

This page provides an overview of the project structure and key files.

## Directory Structure

\`\`\`
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
\`\`\`

## Key Files

| File | Description |
|------|-------------|
| \`app/layout.tsx\` | Root layout with providers |
| \`app/docs/layout.tsx\` | Documentation layout with sidebar |
| \`config/docs.ts\` | Navigation configuration |
| \`content/docs.ts\` | Documentation content |
    `,
  },
  "/docs/configuration": {
    title: "Configuration",
    description: "Learn how to configure the documentation site.",
    content: `
# Configuration

This guide covers all the configuration options available.

## Site Configuration

The site configuration is located in \`config/site.ts\`:

\`\`\`typescript
export const siteConfig = {
  name: "Docs",
  url: "https://example.com",
  description: "Your documentation description",
  links: {
    twitter: "https://twitter.com/your-handle",
    github: "https://github.com/your-repo",
  },
}
\`\`\`

## Navigation Configuration

Configure the sidebar navigation in \`config/docs.ts\`:

\`\`\`typescript
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
\`\`\`

## Theme Configuration

The theme can be customized in \`app/globals.css\` using CSS variables.
    `,
  },
  "/docs/routing": {
    title: "Routing",
    description: "Understanding the routing system.",
    content: `
# Routing

Learn about the routing system and how to create new pages.

## File-based Routing

This documentation uses Next.js App Router with file-based routing.

## Creating New Pages

To add a new documentation page:

1. Add an entry to \`config/docs.ts\`
2. Add content to \`content/docs.ts\`

\`\`\`typescript
// config/docs.ts
{
  title: "New Page",
  href: "/docs/new-page",
}

// content/docs.ts
"/docs/new-page": {
  title: "New Page",
  description: "Description of new page",
  content: \`# New Page\n\nContent here...\`
}
\`\`\`

## Dynamic Routes

The \`[[...slug]]\` catch-all route handles all documentation pages dynamically.
    `,
  },
  "/docs/data-fetching": {
    title: "Data Fetching",
    description: "Learn about data fetching patterns.",
    content: `
# Data Fetching

This guide covers data fetching patterns in the documentation.

## Static Content

Documentation content is stored statically in TypeScript files for optimal performance.

## Server Components

All documentation pages are Server Components by default:

\`\`\`typescript
export default async function DocsPage({ params }: Props) {
  const doc = await getDocFromSlug(params.slug)
  return <DocContent doc={doc} />
}
\`\`\`

## Benefits

- **Fast**: Content is rendered at build time
- **SEO**: Full server-side rendering
- **Simple**: No client-side data fetching needed
    `,
  },
  "/docs/rendering": {
    title: "Rendering",
    description: "Understanding rendering strategies.",
    content: `
# Rendering

Learn about the rendering strategies used in the documentation.

## Server-Side Rendering

All documentation pages are server-rendered for optimal performance and SEO.

## Static Generation

Pages can be statically generated at build time:

\`\`\`typescript
export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({
    slug: slug.split('/').filter(Boolean),
  }))
}
\`\`\`

## Incremental Static Regeneration

For frequently updated content, use ISR:

\`\`\`typescript
export const revalidate = 3600 // Revalidate every hour
\`\`\`
    `,
  },
  "/docs/caching": {
    title: "Caching",
    description: "Caching strategies for optimal performance.",
    content: `
# Caching

Understand the caching strategies used for optimal performance.

## Built-in Caching

Next.js provides built-in caching at multiple levels:

1. **Request Memoization**: Duplicate requests are cached
2. **Data Cache**: Fetch results are cached
3. **Full Route Cache**: Rendered routes are cached

## Cache Revalidation

Revalidate cached data using:

\`\`\`typescript
// Time-based revalidation
export const revalidate = 3600

// On-demand revalidation
import { revalidatePath } from 'next/cache'
revalidatePath('/docs')
\`\`\`
    `,
  },
  "/docs/components": {
    title: "Components Overview",
    description: "Overview of available components.",
    content: `
# Components

A collection of beautifully designed components built with Radix UI and Tailwind CSS.

## Philosophy

Components are designed with these principles:

- **Accessible**: Built on Radix UI primitives
- **Customizable**: Styled with Tailwind CSS
- **Composable**: Flexible composition patterns

## Installation

Install components using the CLI:

\`\`\`bash
npx shadcn@latest add button
\`\`\`

## Available Components

Browse the components in the sidebar to see detailed documentation for each.
    `,
  },
  "/docs/components/button": {
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    content: `
# Button

Displays a button or a component that looks like a button.

## Installation

\`\`\`bash
npx shadcn@latest add button
\`\`\`

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click me</Button>
}
\`\`\`

## Variants

The button component supports multiple variants:

- \`default\` - Primary action button
- \`secondary\` - Secondary action button
- \`destructive\` - Destructive action button
- \`outline\` - Outlined button
- \`ghost\` - Ghost button
- \`link\` - Link styled button

## Sizes

- \`default\` - Default size
- \`sm\` - Small button
- \`lg\` - Large button
- \`icon\` - Icon only button
    `,
  },
  "/docs/components/card": {
    title: "Card",
    description: "Displays a card with header, content, and footer.",
    content: `
# Card

Displays a card with header, content, and footer.

## Installation

\`\`\`bash
npx shadcn@latest add card
\`\`\`

## Usage

\`\`\`tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
\`\`\`
    `,
  },
  "/docs/components/dialog": {
    title: "Dialog",
    description: "A modal dialog that interrupts the user with important content.",
    content: `
# Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Installation

\`\`\`bash
npx shadcn@latest add dialog
\`\`\`

## Usage

\`\`\`tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
\`\`\`
    `,
  },
  "/docs/components/form": {
    title: "Form",
    description: "Building forms with React Hook Form and Zod validation.",
    content: `
# Form

Building forms with React Hook Form and Zod validation.

## Installation

\`\`\`bash
npx shadcn@latest add form
\`\`\`

## Usage

\`\`\`tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
\`\`\`
    `,
  },
  "/docs/api/cli": {
    title: "CLI",
    description: "Command line interface reference.",
    content: `
# CLI Reference

The command line interface for managing your project.

## Commands

### init

Initialize a new project:

\`\`\`bash
npx shadcn@latest init
\`\`\`

### add

Add components to your project:

\`\`\`bash
npx shadcn@latest add [component]
\`\`\`

### diff

Check for component updates:

\`\`\`bash
npx shadcn@latest diff [component]
\`\`\`

## Options

| Option | Description |
|--------|-------------|
| \`--yes\` | Skip confirmation prompts |
| \`--overwrite\` | Overwrite existing files |
| \`--cwd\` | Set working directory |
    `,
  },
  "/docs/api/configuration": {
    title: "API Configuration",
    description: "Configuration API reference.",
    content: `
# Configuration API

Reference for all configuration options.

## components.json

The \`components.json\` file holds configuration for your project:

\`\`\`json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
\`\`\`

## Options

| Option | Description | Default |
|--------|-------------|---------|
| \`style\` | Component style | \`default\` |
| \`rsc\` | React Server Components | \`true\` |
| \`tsx\` | Use TypeScript | \`true\` |
    `,
  },
}

export function getDocBySlug(slug: string[]): DocContent | null {
  const path = slug?.length ? `/docs/${slug.join("/")}` : "/docs"
  return docsContent[path] || null
}

export function getAllDocSlugs(): string[] {
  return Object.keys(docsContent)
}
