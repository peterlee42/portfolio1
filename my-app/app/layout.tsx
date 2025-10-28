import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

import { NavigationBar } from './app-components/Navbar';
import { ModeToggle } from './app-components/ThemeButton';

const inconsolata = Inconsolata({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Peter Lee',
  description: "Peter Lee's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inconsolata.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          enableSystem
          defaultTheme='system'
          disableTransitionOnChange
        >
          <header className='fixed top-5 w-full flex justify-center'>
            <div className='bg-blue-100 w-1/2 p-3 rounded-full'>
              <ModeToggle />
              <NavigationBar />
            </div>
          </header>
          {children}
          <footer className='bg-zinc-100'>
            <p>footer</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
