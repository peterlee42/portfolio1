function SunIcon() {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='5' />
      <line x1='12' y1='1' x2='12' y2='3' />
      <line x1='12' y1='21' x2='12' y2='23' />
      <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
      <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
      <line x1='1' y1='12' x2='3' y2='12' />
      <line x1='21' y1='12' x2='23' y2='12' />
      <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
      <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
    </svg>
  );
}

export default function Home() {
  return (
    <div className='site-container'>
      <nav>
        <a href='#' className='nav-name'>
          Peter Lee
        </a>
        <div className='nav-right'>
          <a href='#about'>about</a>
          <a href='#experience'>experience</a>
          <a href='#projects'>projects</a>
          <a href='#blog'>blog</a>
          <button className='theme-btn' data-theme-toggle type='button'>
            <span className='theme-icon theme-icon--moon'>
              <MoonIcon />
            </span>
            <span className='theme-icon theme-icon--sun'>
              <SunIcon />
            </span>
            <span data-theme-label suppressHydrationWarning>
              Dark
            </span>
          </button>
        </div>
      </nav>

      <div className='content'>
        <section className='hero' id='hero'>
          <h1>Hi, I&apos;m Peter</h1>
          <p className='hero-desc'>
            I&apos;m Computer Science student at the University of Toronto, St.
            George.
          </p>
          <div className='hero-socials'>
            <a href='mailto:pjoon.lee@mail.utoronto.ca' aria-label='Email'>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                width='28'
                height='28'
              >
                <rect x='2' y='4' width='20' height='16' rx='2' />
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
              </svg>
            </a>
            <a href='https://github.com/peterlee42' aria-label='GitHub'>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                width='28'
                height='28'
              >
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/petersjlee42/'
              aria-label='LinkedIn'
            >
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                width='28'
                height='28'
              >
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
            </a>
          </div>
        </section>

        <div className='divider' />

        <section className='section' id='about'>
          <p className='section-label'>About</p>
          <p className='about-body'>
            I&apos;ve spent the past several years building web applications
            across the stack — from pixel-perfect interfaces to robust backend
            systems. I value simplicity, readability, and shipping work that
            I&apos;m proud of.
          </p>
          <p className='about-body'>
            Outside of work I&apos;m usually exploring new tools, contributing
            to open source, or writing about things I&apos;ve picked up along
            the way.
          </p>
          <p className='tech-title'>Technologies</p>
          <div className='tech-grid'>
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>GraphQL</span>
          </div>
        </section>

        <div className='divider' />

        <section className='section' id='experience'>
          <p className='section-label'>Experience</p>
          <div className='exp-item'>
            <span className='exp-date'>2024 — Present</span>
            <div className='exp-details'>
              <h3 className='font-serif'>Senior Software Engineer</h3>
              <p className='exp-company'>Acme Corp</p>
              <p className='exp-desc'>
                Leading frontend architecture for the core product. Reduced
                bundle size by 40% and mentoring junior engineers across two
                teams.
              </p>
            </div>
          </div>
          <div className='exp-item'>
            <span className='exp-date'>2022 — 2024</span>
            <div className='exp-details'>
              <h3 className='font-serif'>Software Engineer</h3>
              <p className='exp-company'>Startup Inc</p>
              <p className='exp-desc'>
                Full-stack development on a high-growth SaaS platform. Built
                real-time collaboration features and designed RESTful APIs.
              </p>
            </div>
          </div>
          <div className='exp-item'>
            <span className='exp-date'>2020 — 2022</span>
            <div className='exp-details'>
              <h3 className='font-serif'>Junior Developer</h3>
              <p className='exp-company'>Digital Agency</p>
              <p className='exp-desc'>
                Developed responsive web apps for clients across industries.
                Introduced component-based architecture and CI/CD pipelines.
              </p>
            </div>
          </div>
        </section>

        <div className='divider' />

        <section className='section' id='projects'>
          <p className='section-label'>Projects</p>
          <div className='proj-grid'>
            <div className='proj-card'>
              <div className='proj-top'>
                <span className='proj-icon'>📁</span>
                <a href='#' className='proj-link'>
                  GitHub ↗
                </a>
              </div>
              <h3 className='font-serif'>DevDash</h3>
              <p>
                A minimal developer dashboard aggregating GitHub activity, CI/CD
                status, and deployment health.
              </p>
              <div className='proj-tags'>
                <span>React</span>
                <span>Node.js</span>
                <span>WebSocket</span>
              </div>
            </div>
            <div className='proj-card'>
              <div className='proj-top'>
                <span className='proj-icon'>📁</span>
                <a href='#' className='proj-link'>
                  GitHub ↗
                </a>
              </div>
              <h3 className='font-serif'>MarkdownLab</h3>
              <p>
                Distraction-free markdown editor with live preview, syntax
                highlighting, and multi-format export.
              </p>
              <div className='proj-tags'>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>MDX</span>
              </div>
            </div>
            <div className='proj-card'>
              <div className='proj-top'>
                <span className='proj-icon'>📁</span>
                <a href='#' className='proj-link'>
                  GitHub ↗
                </a>
              </div>
              <h3 className='font-serif'>pql</h3>
              <p>
                Lightweight CLI for querying JSON files with SQL-like syntax.
                For devs who think in tables.
              </p>
              <div className='proj-tags'>
                <span>Python</span>
                <span>CLI</span>
                <span>SQLite</span>
              </div>
            </div>
            <div className='proj-card'>
              <div className='proj-top'>
                <span className='proj-icon'>📁</span>
                <a href='#' className='proj-link'>
                  Live ↗
                </a>
              </div>
              <h3 className='font-serif'>Palette</h3>
              <p>
                AI-powered color palette generator that creates accessible
                schemes from natural language.
              </p>
              <div className='proj-tags'>
                <span>Python</span>
                <span>FastAPI</span>
                <span>OpenAI</span>
              </div>
            </div>
          </div>
        </section>

        <div className='divider' />

        <section className='section' id='blog'>
          <p className='section-label'>Blog</p>
          <a className='blog-entry' href='#'>
            <div>
              <h3 className='font-serif'>On writing code that lasts</h3>
              <p>April 2026</p>
            </div>
            <span className='arrow'>→</span>
          </a>
          <a className='blog-entry' href='#'>
            <div>
              <h3 className='font-serif'>
                Why I switched to server components
              </h3>
              <p>February 2026</p>
            </div>
            <span className='arrow'>→</span>
          </a>
          <a className='blog-entry' href='#'>
            <div>
              <h3 className='font-serif'>Building a CLI in a weekend</h3>
              <p>December 2025</p>
            </div>
            <span className='arrow'>→</span>
          </a>
          <a className='blog-entry' href='#'>
            <div>
              <h3 className='font-serif'>The case for boring technology</h3>
              <p>October 2025</p>
            </div>
            <span className='arrow'>→</span>
          </a>
        </section>
        <div className='footer'>
          <p className='footer-copy'>Built by Peter Lee · 2026</p>
        </div>
      </div>
    </div>
  );
}
