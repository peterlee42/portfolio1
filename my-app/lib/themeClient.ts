// Client-side theme utilities
export type Theme = 'light' | 'dark';

const THEME_COOKIE_NAME = 'theme';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

export function setThemeCookie(theme: Theme): void {
  document.cookie = `${THEME_COOKIE_NAME}=${theme}; max-age=${COOKIE_MAX_AGE}; path=/`;
}

export function getThemeCookie(): Theme | null {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === THEME_COOKIE_NAME) {
      return value as Theme;
    }
  }
  return null;
}

export function getInitialTheme(): Theme {
  // Check for saved cookie preference
  const savedTheme = getThemeCookie();
  if (savedTheme) {
    return savedTheme;
  }

  // Default to dark mode
  return 'dark';
}

export function applyTheme(theme: Theme): void {
  const html = document.documentElement;
  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}
