// app/satb/page.tsx
import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';

const author = {
  username: "satb",
  name: "SATB",
  bio: "San Antonio Tech Blog related posts",
  avatarUrl: ""
}

export default function AuthorPage() {
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
        </BreadcrumbList>
      </Breadcrumb>

      <Card className='mb-8'>
        <CardHeader className='flex flex-col sm:flex-row items-center sm:items-start gap-4'>
          <Avatar className='w-24 h-24'>
            <AvatarImage src={author.avatarUrl} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className='text-3xl mb-2'>{author.name}</CardTitle>
            <CardDescription>{author.bio}</CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Add component for listing the authors blog posts*/}
      <Card>
        <CardHeader>
          <CardTitle>Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-4'>
            <li className='border-b pb-4'>
              <Link href="/satb/how-to" className='block hover:bg-gray-100 p-2 rounded'>
                <h3 className='text-lg font-semibold'>How to use SATB</h3>
                <p className='text-sm text-gray-500'>2024-08-05</p>
              </Link>
            </li>
            {/* Add more li for other blog posts here*/}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
