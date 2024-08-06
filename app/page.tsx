// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Welcome</h1>
      
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-3xl'>Recent Blogs</CardTitle>
          <CardDescription>Recent blog posts will be dispalyed here</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2'>
            <li>- <Link href='/satb/how-to' className='hover:underline'>How to use SATB</Link></li>
            <li>- <Link href='/christian/why-nextjs' className='hover:underline'>Why I use Next.JS</Link></li>
          </ul>
        </CardContent>
      </Card>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card>
          <CardHeader>
            <CardTitle className='text-3xl'>Writers</CardTitle>
            <CardDescription>Some of the authors</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              <li>- <Link href='/author' className='hover:underline'>Example Author</Link></li>
              <li>- <Link href='/christian' className='hover:underline'>Christian R</Link></li>
              <li>- <Link href='/satb' className='hover:underline'>SATB</Link></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-3xl'>Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>List of topics will be dispalyed here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
