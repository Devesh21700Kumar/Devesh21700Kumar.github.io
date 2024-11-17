/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";
import { Post } from "@/types";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { getMoodIcon, getMoodText } from "@/lib/utils";
import { useMemo } from "react";

interface Props {
  posts: Post[];
}

export default function JourneyTimeline({ posts }: Props) {
  // Memoize the reversed posts to prevent unnecessary re-renders
  const reversedPosts = useMemo(() => [...posts].reverse(), [posts]);

  // Container variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Item variants for individual post animations
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

      {reversedPosts.map((post, index) => (
        <motion.div
          key={`${post.id}-${index}`} // Unique key combination
          variants={itemVariants}
          className="mb-8 pl-20 relative group"
        >
          {/* Timeline dot */}
          <div className="absolute left-6 w-4 h-4 rounded-full bg-purple-500 transform -translate-x-1/2 mt-2">
            <div className="absolute w-8 h-8 rounded-full border-2 border-purple-500 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>

          <Card className="bg-gray-900 border-0 hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
            <CardContent className="p-6">
              {/* Mood indicator */}
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  {getMoodIcon(post.mood)}
                  <span className="text-sm text-gray-400 italic">
                    {getMoodText(post.mood)}
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-400">{post.date}</span>
                <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <h2 className="text-xl font-bold mb-2 text-purple-300 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

              {/* Read More Button */}
              <Link href={`/post/${post.id}`} passHref>
                <Button
                  variant="ghost"
                  className="hover:bg-purple-500/20 text-purple-300 group"
                >
                  Read More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="ml-2 opacity-70 group-hover:opacity-100"
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
