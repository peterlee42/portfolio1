import Navbar from './components/Navbar';
import HeroLinks from './components/HeroLinks';
import ThemeProvider from './components/ThemeProvider';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className='site-container'>
          <Navbar />
          <div className='content'>
            <section className='hero' id='hero'>
              <h1 className='text-balance'>Hi, I&apos;m Peter</h1>
              <div className='hero-desc-container'>
                <p className='hero-desc'>
                  Studying Computer Science at the{' '}
                  <span className='hero-emphasis'>University of Toronto</span>,
                  St. George Campus.
                </p>
                <p className='hero-desc'>
                  Focus: <span className='hero-emphasis'>Computer Systems</span>{' '}
                  and <span className='hero-emphasis'>AI/ML</span>
                </p>
              </div>
              <HeroLinks />
            </section>
            <div className='divider' />
            <section className='section' id='about'>
              <p className='section-label'>About</p>
              <p className='about-body'>
                I like understanding how things work under the hood — whether
                that&apos;s an operating system or a neural network. I&apos;m
                studying CS at UofT with a focus on systems and AI/ML, and
                I&apos;m happiest when I&apos;m building something that bridges
                the two. Always open to interesting projects and collaborations.
              </p>
              <p className='about-body'></p>
              <p className='section-label'>Currently</p>
            </section>
            <div className='divider' />
            <section className='section' id='experience'>
              <p className='section-label'>Experience</p>
              <div className='timeline'>
                <div className='timeline-item'>
                  <div className='timeline-marker' />
                  <div className='timeline-content'>
                    <span className='exp-date'>Apr 2024 — Aug 2024</span>
                    <h3>Senior Software Engineer</h3>
                    <p className='exp-company'>Acme Corp</p>
                    <p className='exp-desc'>
                      Leading frontend architecture for the core product.
                      Reduced bundle size by 40% and mentoring junior engineers
                      across two teams.
                    </p>
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-marker' />
                  <div className='timeline-content'>
                    <span className='exp-date'>2022 — 2024</span>
                    <h3>Software Engineer</h3>
                    <p className='exp-company'>Startup Inc</p>
                    <p className='exp-desc'>
                      Full-stack development on a high-growth SaaS platform.
                      Built real-time collaboration features and designed
                      RESTful APIs.
                    </p>
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-marker' />
                  <div className='timeline-content'>
                    <span className='exp-date'>2020 — 2022</span>
                    <h3>Junior Developer</h3>
                    <p className='exp-company'>Digital Agency</p>
                    <p className='exp-desc'>
                      Developed responsive web apps for clients across
                      industries. Introduced component-based architecture and
                      CI/CD pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className='divider' />
            <section className='section' id='projects'>
              <p className='section-label'>Projects</p>
              <div className='proj-grid proj-grid--minimal'>
                <article className='proj-card proj-card--minimal'>
                  <div className='proj-top'>
                    <span className='proj-kicker'>01</span>
                    <a
                      href='https://github.com/Lunear01/Tizcord'
                      className='proj-link'
                    >
                      repo ↗
                    </a>
                  </div>
                  <h3>tizcord</h3>
                  <p>
                    Tizcord is a robust, terminal-based concurrent chat
                    application inspired by Discord and built entirely in C. It
                    leverages a multiplexed client-server architecture over TCP
                    sockets to facilitate real-time communication between users.
                  </p>
                  <div className='proj-meta'>
                    <span>C</span>
                    <span>tcp</span>
                    <span>sockets</span>
                    <span>sqlite</span>
                    <span>linux</span>
                    <span>tui</span>
                    <span>real-time</span>
                  </div>
                </article>
                <article className='proj-card proj-card--minimal'>
                  <div className='proj-top'>
                    <span className='proj-kicker'>02</span>
                    <a
                      href='https://github.com/peterlee42/GitChores'
                      className='proj-link'
                    >
                      repo ↗
                    </a>
                  </div>
                  <h3>gitchores</h3>
                  <p>
                    GitChores is a desktop application build in Java to organize
                    roommate chores through a GitHub-style workflow. It features
                    a Swing-based GUI for task management, allowing users to
                    commit completed chores, and review other roommates through
                    pull requests.
                  </p>
                  <div className='proj-meta'>
                    <span>Java</span>
                    <span>Swing</span>
                    <span>Clean Architecture</span>
                    <span>Design Patterns</span>
                    <span>AWS</span>
                  </div>
                </article>
              </div>
            </section>
            <div className='divider' />
            <section className='section' id='blogs'>
              <p className='section-label'>blogs</p>
              <div className='coming-soon'>Coming Soon</div>
            </section>
            <div className='footer'>
              <p className='footer-copy'>Peter Lee · 2026</p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
