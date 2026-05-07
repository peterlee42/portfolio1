export function HeroLinks() {
  return (
    <p className='hero-links'>
      {'contact: '}
      <a href='mailto:pjoon.lee@mail.utoronto.ca'>email</a>
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
  );
}
