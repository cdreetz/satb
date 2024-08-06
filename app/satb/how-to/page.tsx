// app/author/how-to-use-satb/page.tsx
import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';

const author = {
  username: "satb",
  name: "SATB",
  bio: "San Antonio Tech Blog related posts",
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
          <p>How to use San Antonio Tech Blog</p>
          <br/ >
          <p>Fork the repo</p>
          <p>Add an author page for yourself.  Should be app/your-name/page.tsx</p>
          <p>You can just copy an existing author page and change whatever parts you want</p>
          <p>Add blog post pages within your author path. Like app/your-name/blog-post/page.tsx</p>
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




//import React from 'react';
//import Link from 'next/link';
//import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
//import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';
//
//export default function HowToUseSATBPage() {
//  return (
//    <div className='max-w-4xl mx-auto px-4 py-8'>
//      <Breadcrumb className='flex items-center space-x-2 mb-4'>
//        <BreadcrumbList>
//          <BreadcrumbItem>
//            <BreadcrumbLink href="/">Home</BreadcrumbLink>
//          </BreadcrumbItem>
//          <BreadcrumbSeparator />
//          <BreadcrumbItem>
//            <BreadcrumbLink href="/author">Christian</BreadcrumbLink>
//          </BreadcrumbItem>
//          <BreadcrumbSeparator />
//          <BreadcrumbItem>
//            <BreadcrumbLink href="/author/how-to-use-satb">How to use SATB</BreadcrumbLink>
//          </BreadcrumbItem>
//        </BreadcrumbList>
//      </Breadcrumb>
//
//      <article className='mb-8'>
//        <h1 className='text-4xl font-bold mb-4'>How to use SATB</h1>
//        <div className='flex items-center space-x-4 mb-8'>
//          <Avatar className='w-12 h-12'>
//            <AvatarImage src="" alt="Christian" />
//            <AvatarFallback>C</AvatarFallback>
//          </Avatar>
//          <div>
//            <p className='font-semibold'>Christian</p>
//            <p className='text-sm text-gray-500'>2024-08-05</p>
//          </div>
//        </div>
//        <div className='prose max-w-none'>
//          <h1>How to use SATB</h1>
//          <p>SATB (San Antonio Tech Blog) is a powerful platform for sharing knowledge and experiences within the tech community. This guide will walk you through the basics of using SATB effectively.</p>
//          
//          <h2>Getting Started</h2>
//          <p>To begin using SATB, you'll need to create an account. Once you're logged in, you can start writing your first blog post.</p>
//          
//          <h2>Writing Your First Post</h2>
//          <p>When writing your post, remember to:</p>
//          <ul>
//            <li>Choose a clear and concise title</li>
//            <li>Use headings to structure your content</li>
//            <li>Include code snippets where relevant</li>
//            <li>Add images to illustrate your points</li>
//          </ul>
//          
//          <h2>Formatting Your Content</h2>
//          <p>SATB supports a wide range of HTML tags for formatting. Here are some examples:</p>
//          <pre><code>
//    &lt;strong&gt;Bold text&lt;/strong&gt;
//    &lt;em&gt;Italic text&lt;/em&gt;
//    &lt;code&gt;Inline code&lt;/code&gt;
//          </code></pre>
//          
//          <h2>Conclusion</h2>
//          <p>By following these guidelines, you'll be able to create engaging and informative blog posts on SATB. Happy writing!</p>
//        </div>
//      </article>
//    </div>
//  );
//}