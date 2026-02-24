'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // This function only runs once during initial render on client
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      return savedTheme === 'dark' || (!savedTheme && prefersDark);
    }
    return false; // Server-side default
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <div
      className='absolute inset-0 h-full w-full bg-stone-100 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]
    dark:bg-black dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]'
    >
      <main className='flex min-h-screen justify-center px-6 font-extralight text-slate-900 dark:text-slate-100'>
        <section className='w-full max-w-xl rounded-lg bg-white px-10 py-12 shadow-sm dark:bg-mist-900'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold'>Peter Lee</div>
            <div className='flex items-center gap-6 text-sm'>
              <a>about</a>
              <a>projects</a>
              <button
                onClick={toggleDarkMode}
                className='rounded-md bg-stone-200 px-3 py-1 dark:bg-gray-700'
              >
                {isDarkMode ? 'light' : 'dark'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
