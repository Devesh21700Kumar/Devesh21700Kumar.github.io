/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */ 
// src/app/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Sparkles, Brain, Code, BookOpen } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion'
import { posts } from '@/data/posts'
import type { Post } from '@/types'

function getMoodIcon(mood: Post['mood']) {
  switch (mood) {
    case 'excited': return <Sparkles className="text-yellow-400" />
    case 'confused': return <Brain className="text-red-400" />
    case 'accomplished': return <Code className="text-green-400" />
    case 'struggling': return <BookOpen className="text-blue-400" />
    default: return null
  }
}

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
    <div className="min-h-screen bg-[#0A0A0A] text-white p-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Learning Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg italic"
          >
            &quot;Documenting my path to becoming a better engineer, one messy note at a time...&quot;
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4"
          >
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
          </motion.div>
        </header>
        
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-0 hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    {getMoodIcon(post.mood)}
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  <Link href={`/post/${post.id}`}>
                    <Button 
                      variant="ghost" 
                      className="hover:bg-purple-500/20 text-purple-300"
                    >
                      Read More 
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="ml-2"
                      >
                        →
                      </motion.span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}