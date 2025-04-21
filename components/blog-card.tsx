"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export type BlogPost = {
    id: number
    title: string
    description: string
    date: string
    slug: string
    thumbnail: string
    category: string
    tags: string[]
    views: number
}

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md border bg-white hover:shadow-lg transition-all">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <Badge variant="outline" className="text-xs">
            {post.category}
          </Badge>
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-1 pt-2">
            {post.tags.map((tag) => (
              <Badge key={tag} className="text-xs bg-gray-100 text-gray-600">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
