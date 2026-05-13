# Configuration API

Reference for all configuration options.

## components.json

The `components.json` file holds configuration for your project:

```json
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
```

## Options

| Option | Description | Default |
|--------|-------------|---------|
| `style` | Component style | `default` |
| `rsc` | React Server Components | `true` |
| `tsx` | Use TypeScript | `true` |
