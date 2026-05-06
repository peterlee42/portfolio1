import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Peter Lee',
  description: 'Created by Peter Lee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getStoredTheme() {
                  try {
                    return localStorage.getItem('theme');
                  } catch (e) {
                    return null;
                  }
                }

                function getPreferredTheme() {
                  var stored = getStoredTheme();
                  if (stored === 'dark' || stored === 'light') return stored;
                  try {
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  } catch (e) {
                    return 'light';
                  }
                }

                function applyTheme(theme) {
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }

                function setLabel(theme) {
                  var label = document.querySelector('[data-theme-label]');
                  if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
                }

                function persistTheme(theme) {
                  try {
                    localStorage.setItem('theme', theme);
                  } catch (e) {
                    // Ignore storage errors
                  }
                }

                function initToggle() {
                  var button = document.querySelector('[data-theme-toggle]');
                  if (!button) return;

                  if (!button.__themeBound) {
                    button.__themeBound = true;
                    button.addEventListener('click', function() {
                      var isDark = document.documentElement.classList.contains('dark');
                      var nextTheme = isDark ? 'light' : 'dark';
                      applyTheme(nextTheme);
                      setLabel(nextTheme);
                      persistTheme(nextTheme);
                    });
                  }

                  var currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                  setLabel(currentTheme);
                }

                var initialTheme = getPreferredTheme();
                applyTheme(initialTheme);

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', initToggle);
                } else {
                  initToggle();
                }

                window.addEventListener('pageshow', function(event) {
                  if (event.persisted) initToggle();
                });
              })();
            `,
          }}
        />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
