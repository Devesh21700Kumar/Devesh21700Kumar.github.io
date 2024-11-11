/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */ 
import ClientPost from '@/components/ClientPostNew'
import { posts } from '@/data/posts'

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString()
  }))
}

export default function PostPage() {
  return <ClientPost />
}