import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import uoftLogo from '../assets/uoft/uoft.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#about', label: 'about' },
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#awards', label: 'awards' },
    { href: '#blogs', label: 'blogs' },
    { href: '/Peter_Lee_Resume.pdf', label: 'resume' },
  ];

  return (
    <>
      <nav>
        <a href='#' className='nav-name'>
          <img src={uoftLogo} alt='UofT' className='nav-logo' />
          PL
        </a>

        <div className='nav-right'>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target={href.endsWith('.pdf') ? '_blank' : undefined}
              rel={href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
            >
              {label}
            </a>
          ))}
          <button
            type='button'
            onClick={toggleTheme}
            className='theme-btn'
            aria-label='Toggle theme'
          >
            <span className='theme-label'>{isDark ? 'light' : 'dark'}</span>
          </button>
        </div>

        <button
          type='button'
          className={`hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <div className='hamburger-icon'>
            <span />
            <span />
            <span />
          </div>
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay${menuOpen ? ' show' : ''}`}
        onClick={closeMenu}
      />

      {/* Side drawer */}
      <div className={`side-menu${menuOpen ? ' open' : ''}`}>
        <button
          type='button'
          className='close-btn'
          onClick={closeMenu}
          aria-label='Close menu'
        >
          ×
        </button>
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            target={href.endsWith('.pdf') ? '_blank' : undefined}
            rel={href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
          >
            {label}
          </a>
        ))}
        <button
          type='button'
          onClick={toggleTheme}
          className='theme-btn'
          aria-label='Toggle theme'
        >
          <span className='theme-label'>{isDark ? 'light' : 'dark'}</span>
        </button>
      </div>
    </>
  );
}
