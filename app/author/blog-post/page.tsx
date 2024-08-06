// app/author/blog-post/page.tsx
import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';

export const author = {
  username: "author",
  name: "Example Author",
  bio: "Example bio",
  avatarUrl: ""
}

const postMetadata = {
  title: "How to use SATB",
  date: "2024-08-05",
}

const relatedPosts = [
  { title: "What I use Next.JS", slug: "why-nextjs" },
]

export default function BlogPostPage({ params }: { params: { username: string, title: string }}) {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <Breadcrumb className='flex items-center space-x-2 mb-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${author.username}`}>{author.name}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${params.title}/${params.title}`}>{postMetadata.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className='mb-12'>
        <h1 className='text-4xl font-bold mb-4'>{postMetadata.title}</h1>
        <div className='flex items-center space-x-4 mb-8'>
          <div>
            <p className='font-semibold'>{author.name}</p>
            <p className='text-sm text-gray-500'>{postMetadata.date}</p>
          </div>
        </div>
        <div className='prose max-w-none'>
          <h2>Introduction</h2>
          <p>This is where you`d start writing your blog post content..</p>

          <h2>Main Content</h2>
          <p>Continue your blog post here..</p>

          <h3>Subsection</h3>
          <p>Add more details, code snippets, images, etc...</p>

          <h2>Conclusion</h2>
          <p>Wrap up your blog post..</p>
        </div>
      </article>

      <Card>
        <CardHeader>
          <CardTitle>Related Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2'>
            {relatedPosts.map((relatedPost, index) => (
              <li key={index}>
                <Link href={`/${params.username}/${relatedPost.slug}`} className='hover:underline'>
                  {relatedPost.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}






