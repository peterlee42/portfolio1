import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import ThemeProvider from './components/ThemeProvider';
import Link from './components/Link';
import ProjectImageCarousel from './components/ProjectImageCarousel';
import {
  tizcordImages,
  contextBasedCaptioningInterfaceImages,
  gitchoresImages,
  businessFlightImages,
  columnsImages,
  caschDataAnalysisImages,
} from './assets/project-images';

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
                  CS student at the{' '}
                  <span className='hero-emphasis'>University of Toronto</span>{' '}
                  focused on{' '}
                  <span className='hero-emphasis'>systems programming</span> and{' '}
                  <span className='hero-emphasis'>backend development</span>
                  .{' '}
                </p>
                <p className='hero-desc'>
                  I enjoy learning aobut how things work under the hood.
                </p>

                <SocialLinks />
              </div>
            </section>
            <div className='divider' />
            <section className='section' id='about'>
              <p className='section-label'>About</p>
              <p className='about-body'>
                I like to build web application, as well as lower-level projects
                in C/C++ that apply core CS concepts like networking,
                concurrency, and memory management. Recently built a
                socket-based chat server in C, which strengthened my interest in
                distributed systems and infrastructure-focused software
                engineering.
              </p>
              <p className='section-label'>Currently</p>
              <p className='about-body'>
                I&apos;m exploring distributed systems concepts through side
                projects in C++. Also, I'm expanding the Context Based
                Captioning and maintaining Tizcord.
              </p>
              <p className='section-label'>Outside of CS</p>
              <p className='about-body'>
                I enjoy lifting weights, playing my guitar, cooking, and
                listening to music.
              </p>
            </section>
            <div className='divider' />
            <section className='section' id='experience'>
              <p className='section-label'>Experience</p>
              <div className='timeline'>
                <div className='timeline-item'>
                  <div className='timeline-marker' />
                  <div className='timeline-content'>
                    <span className='exp-date'>May 2026 — Present</span>
                    <h3>Web &amp; Script Developer Intern</h3>
                    <Link
                      href='https://www.cranesupply.com/'
                      className='exp-company'
                    >
                      Crane Supply
                    </Link>
                    <p className='exp-desc'>
                      Work with senior developers to redesign and implement the
                      company website using React and Node.js.
                    </p>
                    <p className='exp-desc'>
                      Use Perl scripts to automate inventory tracking, stock
                      updates, and report generation.
                    </p>
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-marker' />
                  <div className='timeline-content'>
                    <span className='exp-date'>Oct 2025 — Apr 2026</span>
                    <h3>Software Engineer</h3>
                    <Link
                      href='https://tmi-website-v2.vercel.app/'
                      className='exp-company'
                    >
                      Trustworthy Machine Intelligence Club
                    </Link>
                    <p className='exp-desc'>
                      Developed the APIs and deployment pipelines required to
                      operationalize ethical AI models at scale.
                    </p>
                    <p className='exp-desc'>Built the TMI website.</p>
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-marker' />
                  <div className='timeline-content'>
                    <span className='exp-date'>Feb 2022 — Aug 2024</span>
                    <h3>Coding Instructor</h3>
                    <Link
                      href='https://www.codeninjas.com/'
                      className='exp-company'
                    >
                      Code Ninjas
                    </Link>
                    <p className='exp-desc'>
                      Taught children coding fundamentals through Javascript,
                      Roblox, and Unity.
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
                    <div className='proj-links'>
                      <Link
                        href='https://github.com/Lunear01/Tizcord'
                        className='proj-link'
                      >
                        repo ↗
                      </Link>
                    </div>
                  </div>
                  <ProjectImageCarousel
                    projectName='Tizcord'
                    images={tizcordImages}
                  />
                  <h3>Tizcord</h3>
                  <p>
                    Built a concurrent TCP chat server in C to better understand
                    socket multiplexing and real-time systems. Designed a custom
                    message protocol and SQLite-backed persistence layer for
                    multi-user communication.
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
                    <div className='proj-links'>
                      <Link
                        href='https://github.com/uoft-tmi/context-based-captioning-interface'
                        className='proj-link'
                      >
                        repo ↗
                      </Link>
                      <Link
                        href='https://github.com/uoft-tmi/context-based-captioning-interface'
                        className='proj-link'
                      >
                        live ↗
                      </Link>
                    </div>
                  </div>
                  <ProjectImageCarousel
                    projectName='Context Based Captioning Interface'
                    images={contextBasedCaptioningInterfaceImages}
                  />
                  <h3>Context Based Captioning Interface</h3>
                  <p>
                    A web app that provides context-aware real-time lecture
                    captioning. Users optionally upload PDF lecture notes before
                    a session, then stream microphone audio to receive
                    near-real-time captions and a downloadable final transcript.
                  </p>
                  <div className='proj-meta'>
                    <span>Python</span>
                    <span>TypeScript</span>
                    <span>FastAPI</span>
                    <span>Next.js</span>
                    <span>WebSockets</span>
                    <span>PostgreSQL</span>
                    <span>Real-time</span>
                  </div>
                </article>
                <article className='proj-card proj-card--minimal'>
                  <div className='proj-top'>
                    <span className='proj-kicker'>03</span>
                    <div className='proj-links'>
                      <Link
                        href='https://github.com/peterlee42/GitChores'
                        className='proj-link'
                      >
                        repo ↗
                      </Link>
                    </div>
                  </div>
                  <ProjectImageCarousel
                    projectName='GitChores'
                    images={gitchoresImages}
                  />
                  <h3>GitChores</h3>
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
                <article className='proj-card proj-card--minimal'>
                  <div className='proj-top'>
                    <span className='proj-kicker'>04</span>
                    <div className='proj-links'>
                      <Link
                        href='https://github.com/peterlee42/Business_Flight_Visualizer'
                        className='proj-link'
                      >
                        repo ↗
                      </Link>
                    </div>
                  </div>
                  <ProjectImageCarousel
                    projectName='Business Flight Visualizer'
                    images={businessFlightImages}
                  />
                  <h3>Business Flight Visualizer</h3>
                  <p>
                    Built a graph-based global meeting optimizer in Python using
                    DFS over a network of 10,000+ airport nodes to compute
                    minimum-travel central meeting locations.
                  </p>
                  <div className='proj-meta'>
                    <span>Python</span>
                    <span>Networkx</span>
                    <span>Pandas</span>
                    <span>Graph Algorithms</span>
                    <span>Data Analysis</span>
                  </div>
                </article>
                <article className='proj-card proj-card--minimal'>
                  <div className='proj-top'>
                    <span className='proj-kicker'>05</span>
                    <div className='proj-links'>
                      <Link
                        href='https://github.com/peterlee42/Columns'
                        className='proj-link'
                      >
                        repo ↗
                      </Link>
                    </div>
                  </div>
                  <ProjectImageCarousel
                    projectName='Columns'
                    images={columnsImages}
                  />
                  <h3>Columns</h3>
                  <p>
                    Developed a Tetris-inspired game in MIPS Assembly from
                    scratch, featuring piece generation, rotation, line
                    clearing, and a scoring system. The project deepened my
                    understanding of low-level programming and memory management
                    while providing a fun challenge in game development.
                  </p>
                  <div className='proj-meta'>
                    <span>Assembly</span>
                  </div>
                </article>
                <article className='proj-card proj-card--minimal'>
                  <div className='proj-top'>
                    <span className='proj-kicker'>06</span>
                    <div className='proj-links'>
                      <span className='proj-link'>research</span>
                    </div>
                  </div>
                  <ProjectImageCarousel
                    projectName='CASCH Research'
                    images={caschDataAnalysisImages}
                  />
                  <h3>CASCH Research</h3>
                  <p>
                    Analyzed 10,000+ survey observations to model predictors of
                    employee happiness using random forests.
                  </p>
                  <p>
                    Achieved 84% test-set accuracy by evaluating model
                    performance with confusion matrices and key classification
                    metrics.
                  </p>
                  <div className='proj-meta'>
                    <span>Python</span>
                    <span>pandas</span>
                    <span>scikit-learn</span>
                  </div>
                </article>
              </div>
            </section>
            <div className='divider' />
            <section className='section' id='skills'>
              <p className='section-label'>Skills</p>
              <div className='tech-by-category'>
                <div className='category-group'>
                  <h4 className='category-heading'>Languages</h4>
                  <ul className='tech-items-list'>
                    <li>C</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div className='category-group'>
                  <h4 className='category-heading'>Systems</h4>
                  <ul className='tech-items-list'>
                    <li>Linux</li>
                    <li>POSIX sockets</li>
                    <li>concurrency</li>
                    <li>TCP/IP</li>
                  </ul>
                </div>
                <div className='category-group'>
                  <h4 className='category-heading'>Web</h4>
                  <ul className='tech-items-list'>
                    <li>React</li>
                    <li>FastAPI</li>
                    <li>Node.js</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div className='category-group'>
                  <h4 className='category-heading'>Databases</h4>
                  <ul className='tech-items-list'>
                    <li>PostgreSQL</li>
                    <li>SQLite</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                  </ul>
                </div>
                <div className='category-group'>
                  <h4 className='category-heading'>Tools</h4>
                  <ul className='tech-items-list'>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Neovim</li>
                    <li>VS Code</li>
                  </ul>
                </div>
              </div>
            </section>
            <div className='divider' />
            <section className='section' id='awards'>
              <p className='section-label'>Awards & Recognition</p>

              <div className='awards-by-year'>
                <div className='year-group'>
                  <h4 className='year-heading'>2026</h4>
                  <ul className='awards-list'>
                    <li>
                      <span className='award-name'>
                        Dean&apos;s List (2024 — 2026)
                      </span>
                    </li>
                    <li>
                      <span className='award-name'>
                        Helen Dorothy Scholarship — $2,250
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='year-group'>
                  <h4 className='year-heading'>2024</h4>
                  <ul className='awards-list'>
                    <li>
                      <span className='award-name'>
                        University of Toronto Scholar — $10,000
                      </span>
                    </li>
                    <li>
                      <a
                        className='award-name award-link'
                        href='https://devpost.com/software/link-fro9b8'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        EducateHacks — 2nd Place
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='year-group'>
                  <h4 className='year-heading'>2023</h4>
                  <ul className='awards-list'>
                    <li>
                      <a
                        className='award-name award-link'
                        href='https://devpost.com/software/scipulse'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Hack the Ridge — 2nd Place
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='year-group'>
                  <h4 className='year-heading'>2022</h4>
                  <ul className='awards-list'>
                    <li>
                      <a
                        className='award-name award-link'
                        href='https://www.utsc.utoronto.ca/mgmt/hack-attack#:~:text=Hack%20Attack%20will%20feature%20networking,%2C%20Nestl%C3%A9%20Canada%2C%20and%20MNP.'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Hack Attack @ UofT Scarborough — 1st Place
                      </a>
                    </li>

                    <li>
                      <a
                        className='award-name award-link'
                        href='https://devpost.com/software/space-query'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        hths.hacks() — 4th Place
                      </a>
                    </li>

                    <li>
                      <a
                        className='award-name award-link'
                        href='https://devpost.com/software/classmate-li2803'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Hack::Peel Hackathon — 4th Place
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='year-group'>
                  <h4 className='year-heading'>2021</h4>
                  <ul className='awards-list'>
                    <li>
                      <a
                        className='award-name award-link'
                        href='https://dmz.torontomu.ca/post/hack-against-hate-winners'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Hack Against Hate @ TMU — 1st Place ($5,000)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <div className='divider' />
            <section className='section' id='blogs'>
              <p className='section-label'>blogs</p>
              <div className='coming-soon'>Coming Soon</div>
            </section>
            <div className='divider' />
            <div className='footer'>
              <p className='footer-desc'>
                Feel free to reach out about systems programming, backend
                engineering, or interesting ideas.
              </p>
              <SocialLinks containerClassName='footer-links' />
              <p className='footer-copy'>Peter Lee · 2026</p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
