# Caching

Understand the caching strategies used for optimal performance.

## Built-in Caching

Next.js provides built-in caching at multiple levels:

1. **Request Memoization**: Duplicate requests are cached
2. **Data Cache**: Fetch results are cached
3. **Full Route Cache**: Rendered routes are cached

## Cache Revalidation

Revalidate cached data using:

```typescript
// Time-based revalidation
export const revalidate = 3600

// On-demand revalidation
import { revalidatePath } from 'next/cache'
revalidatePath('/docs')
```
