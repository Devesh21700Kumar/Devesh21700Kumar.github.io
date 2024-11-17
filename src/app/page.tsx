/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import { useState } from "react";
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
import JourneyTimeline from "@/components/JourneyTimeline";
import { Post } from "@/types";
import { cn } from "@/lib/utils";
import { useFilteredPosts } from "./hooks/useFllteredPosts";

export default function Home() {
  const {
    filteredPosts,
    searchTerm,
    setSearchTerm,
    isSearching,
    activeFilters,
    setActiveFilters,
    clearFilters,
    totalResults,
  } = useFilteredPosts(posts);

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
        </header>

        <motion.div className="mt-8 space-y-4">
          {/* Search and Filter Controls */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                placeholder="Search learning notes..."
                className="pl-10 bg-gray-900 border-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {isSearching && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full"
                  />
                </div>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "bg-gray-900 hover:bg-gray-800",
                    activeFilters.category && "border-purple-500"
                  )}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {activeFilters.category || "Filter"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-gray-800">
                <DropdownMenuLabel className="text-white">
                  Categories
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-white"
                  onClick={() => setActiveFilters({ category: null })}
                >
                  All Categories
                </DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    className={cn(
                      "text-white",
                      activeFilters.category === category && "bg-purple-500/20"
                    )}
                    onClick={() => setActiveFilters({ category })}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {(activeFilters.category || searchTerm) && (
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
                onClick={clearFilters}
              >
                Clear
              </Button>
            )}
          </div>

          {/* Results count */}
          {(activeFilters.category || searchTerm) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-400"
            >
              Found {totalResults} {totalResults === 1 ? "result" : "results"}
              {activeFilters.category && ` in ${activeFilters.category}`}
              {searchTerm && ` for "${searchTerm}"`}
            </motion.div>
          )}
        </motion.div>

        <div className="space-y-6 mt-8">
          {filteredPosts.length > 0 ? (
            <JourneyTimeline posts={filteredPosts} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-400"
            >
              No posts found. Try adjusting your search or filters.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
