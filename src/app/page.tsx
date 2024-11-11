/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */ 
'use client'
import { ScrollArea } from "@/components/scroll-area"
import { Post } from '@/types'
import JourneyTimeline from '@/components/JourneyTimeline'
import PageTransition from '@/components/PageTransition'

// src/app/page.tsx

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const posts: Post[] = [
  {
    id: 1,
    title: "Understanding React Server Components",
    date: "2024-11-11",
    category: "React",
    excerpt: "Today I dove deep into React Server Components and how they change the game...",
    content: "Full content here...",
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

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !categoryFilter || post.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(posts.map(post => post.category)))

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-4">
      <PageTransition>
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 mt-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Learning Journey
            </h1>
            <p className="mt-4 text-gray-400 text-lg italic">
              &quot;Documenting my path to becoming a better engineer, one messy note at a time...&quot;
            </p>

            <div className="mt-8 flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search learning notes..."
                  className="pl-10 bg-gray-900 border-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-gray-900 hover:bg-gray-800">
                    <Filter className="h-4 w-4 mr-2" />
                    {categoryFilter || 'Filter'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-800">
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setCategoryFilter(null)}>
                    All
                  </DropdownMenuItem>
                  {categories.map(category => (
                    <DropdownMenuItem 
                      key={category}
                      onClick={() => setCategoryFilter(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <JourneyTimeline posts={filteredPosts} />
          </ScrollArea>
        </div>
      </PageTransition>
    </main>
  )
}