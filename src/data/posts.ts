// src/data/posts.ts
import type { Post } from '@/types'

export const posts: Post[] = [
  {
    id: 1,
    title: "Understanding React Server Components",
    date: "2024-11-11",
    category: "React",
    excerpt: "Today I dove deep into React Server Components and how they change the game...",
    content: `# Understanding React Server Components

React Server Components represent a paradigm shift in how we build React applications. Here's what I learned today:

## Key Concepts
- Server Components run only on the server
- They can access server resources directly
- Zero impact on bundle size
- Automatic code splitting

## Benefits
1. Improved performance
2. Better SEO
3. Reduced client-side JavaScript
4. Direct database access

This is just the beginning of my journey with RSC. More updates to come!`,
    mood: "excited"
  },
  {
    id: 2,
    title: "TypeScript Generic Constraints",
    date: "2024-11-10",
    category: "TypeScript",
    excerpt: "Spent hours wrestling with TypeScript generics today...",
    content: "Full content here...",
    mood: "struggling"
  }
]