"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { getMoodIcon } from "@/lib/utils";

export default function ClientPost() {
  const params = useParams();
  const postId =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : null;
  const post = posts.find((p) => p.id === parseInt(postId || ""));

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white p-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-8 text-gray-400 hover:text-white group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Timeline
            </Button>
          </Link>
          <Card className="bg-gray-900 border-0">
            <CardContent className="p-8">
              <h1 className="text-xl font-bold">Post not found</h1>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-[#0A0A0A] text-white p-4"
    >
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-8 text-gray-400 hover:text-white group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Timeline
          </Button>
        </Link>

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
              {post.content.split("\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
