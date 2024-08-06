// components/header.tsx
import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <Link href="/" className='text-2xl font-bold text-gray-900'>
              San Antonio Tech Blog
            </Link>
          </div>
          <nav className='flex items-center space-x-4'>
            <Link href="/" passHref>
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="ghost">About</Button>
            </Link>
            <a href="https://github.com/cdreetz" target='_blank' rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className='h-5 w-5' />
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}