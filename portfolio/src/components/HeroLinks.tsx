import { useState } from 'react';

const emailAddress = 'pjoon.lee@mail.utoronto.ca';

export default function HeroLinks() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <>
      <p className='hero-links'>
        <a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
          email
        </a>
        {' / '}
        <a
          href='https://github.com/peterlee42'
          target='_blank'
          rel='noopener noreferrer'
        >
          github
        </a>
        {' / '}
        <a
          href='https://www.linkedin.com/in/petersjlee42/'
          target='_blank'
          rel='noopener noreferrer'
        >
          linkedin
        </a>
      </p>

      <div
        className={`toast ${copied ? 'show' : ''}`}
        role='status'
        aria-live='polite'
      >
        email copied to clipboard
      </div>
    </>
  );
}
