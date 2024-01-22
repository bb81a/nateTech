import { NavBar } from '@/components/blogLayout';
import React from 'react';

interface BlogLayoutProp {
  children: React.ReactNode;
}
export default function BlogLayout({ children }: BlogLayoutProp) {
  return (
    <div className='relative flex flex-col'>
      <NavBar />
      <div className='container mx-auto max-w-5.5xl  pt-20 px-7'>
        {children}
      </div>
    </div>
  );
}
