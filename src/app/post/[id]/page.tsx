// src/app/post/[id]/page.tsx
'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Sparkles, Brain, Code, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { Post } from '@/types'

const posts: Post[] = [
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

export default function PostPage() {
  const router = useRouter()
  const params = useParams()
  const post = posts.find(p => p.id === Number(params.id))

  if (!post) return null

  const getMoodIcon = (mood: Post['mood']) => {
    switch (mood) {
      case 'excited': return <Sparkles className="text-yellow-400" />
      case 'confused': return <Brain className="text-red-400" />
      case 'accomplished': return <Code className="text-green-400" />
      case 'struggling': return <BookOpen className="text-blue-400" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-[#0A0A0A] text-white p-4"
    >
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-8 text-gray-400 hover:text-white"
          onClick={() => router.push('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Timeline
        </Button>

        <Card className="bg-gray-900 border-0">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              {getMoodIcon(post.mood)}
              <span className="text-sm text-gray-400">{post.date}</span>
              <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              {post.title}
            </h1>

            <div className="prose prose-invert max-w-none">
              {post.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}