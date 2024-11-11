/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */ 
// src/app/page.tsx
// src/app/post/[id]/page.tsx
import ClientPost from '@/components/ClientPostNew'
import { posts } from '@/data/posts'

// This tells Next.js which routes to generate at build time
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString()
  }))
}

export default function PostPage() {
  return <ClientPost />
}