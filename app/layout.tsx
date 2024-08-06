// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "San Antonio Tech Blog",
  description: "Open source blog for San Antonio tech community",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} San Antonio Tech Blog. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
