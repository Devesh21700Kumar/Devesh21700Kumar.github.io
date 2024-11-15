/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { getMoodIcon } from "@/lib/utils";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(posts.map((post) => post.category)));

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
            &quot;Documenting thoughts, one messy note at a time...&quot;
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
                <Button
                  variant="outline"
                  className="bg-gray-900 hover:bg-gray-800"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {categoryFilter || "Filter"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-gray-800">
                <DropdownMenuLabel className="text-white ">
                  Categories
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-white "
                  onClick={() => setCategoryFilter(null)}
                >
                  All
                </DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem
                    className="text-white "
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
          <JourneyTimeline posts={filteredPosts} />
        </div>
      </div>
    </div>
  );
}
