import { Link } from 'react-router'

import './App.css'
import PageMeta from './components/PageMeta'
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.28-1.28-5.28-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.28c.98 0 1.95.13 2.86.38 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.79 1.07.79 2.16v3.06c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z"
    />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M14 5h5v5M19 5l-8 8M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function App() {
  return (
    <div className="site">
      <PageMeta
        title="Renan Amador — Desenvolvedor"
        description="Portfólio de Renan Amador. Projetos em desenvolvimento web, Linux, open source, educação e inteligência artificial local."
        canonicalPath="/"
      />

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Navegação principal">
          <a className="brand" href="#top" aria-label="Ir para o início">
            <span className="brand-mark">R</span>
            <span>Renan Amador</span>
          </a>

          <div className="nav-links">
            <a href="#projects">Projetos</a>
            <a href="#about">Sobre</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contato</a>
          </div>
        </nav>
      </header>

      <main id="conteudo">
        <div id="top" />
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Desenvolvedor em formação
            </div>

            <h1>
              Construindo experiências digitais com
              <span> código e propósito.</span>
            </h1>

            <p className="hero-description">
              Sou Renan Amador. Transformo ideias em projetos para web,
              explorando desenvolvimento, Linux, open source e inteligência
              artificial local.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Ver projetos
                <ArrowIcon />
              </a>

              <a
                className="button button-secondary"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>

            <div className="hero-meta">
              <span>React</span>
              <span>TypeScript</span>
              <span>Linux</span>
              <span>Open Source</span>
            </div>
          </div>

          <div className="hero-panel-wrap">
            <div className="hero-glow" />

            <div className="dev-panel">
              <div className="panel-header">
                <span>workspace / renan</span>
                <div className="panel-dots">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="panel-body">
                <div className="panel-label">STATUS ATUAL</div>

                <div className="panel-status">
                  <span className="online-dot" />
                  Construindo novos projetos
                </div>

                <div className="panel-divider" />

                <div className="panel-grid">
                  <div>
                    <span>ambiente</span>
                    <strong>Fedora Linux</strong>
                  </div>

                  <div>
                    <span>foco</span>
                    <strong>Web + IA Local</strong>
                  </div>

                  <div>
                    <span>estudando</span>
                    <strong>React & TypeScript</strong>
                  </div>

                  <div>
                    <span>agora</span>
                    <strong>Portfolio v1</strong>
                  </div>
                </div>

                <div className="panel-project">
                  <div>
                    <span className="panel-label">PROJETO EM FOCO</span>
                    <strong>Programando o Futuro</strong>
                  </div>

                  <span className="panel-arrow">↗</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects container" id="projects">
          <div className="section-heading">
            <div>
              <span className="section-index">01</span>
              <p className="section-kicker">TRABALHOS SELECIONADOS</p>
            </div>

            <h2>
              Projetos que conectam
              <br />
              tecnologia a problemas reais.
            </h2>
          </div>

          <article className="featured-project">
            <div className="project-content">
              <div className="project-top">
                <span className="project-number">01 / DESTAQUE</span>
                <span className="project-year">2026</span>
              </div>

              <div>
                <p className="project-type">Projeto educacional</p>

                <h3>Programando o Futuro: elas na tecnologia</h3>

                <p className="project-description">
                  Uma experiência de introdução à programação pensada para
                  estudantes, com ambiente web interativo, aprendizagem prática
                  e decisões de produto orientadas por privacidade e
                  acessibilidade.
                </p>
              </div>

              <div className="project-highlights">
                <span>Interface web interativa</span>
                <span>Privacidade por padrão</span>
                <span>Aprendizagem prática</span>
              </div>

              <div className="project-footer">
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Web</span>
                  <span>Educação</span>
                </div>

                <Link
                  className="text-link"
                  to="/projetos/programando-o-futuro"
                >
                  Ver case
                  <ExternalIcon />
                </Link>
              </div>
            </div>

            <div className="project-preview" aria-hidden="true">
              <div className="mock-browser">
                <div className="mock-browser-bar">
                  <div>
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>programando-o-futuro</span>
                </div>

                <div className="mock-content">
                  <div className="mock-sidebar">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="mock-editor">
                    <div className="mock-editor-heading">
                      <span>missão_01.js</span>
                      <span>● ao vivo</span>
                    </div>

                    <div className="code-line">
                      <em>01</em>
                      <span>
                        <b>const</b> futuro = <i>'começar agora'</i>
                      </span>
                    </div>
                    <div className="code-line">
                      <em>02</em>
                      <span>
                        <b>function</b> criar() {'{'}
                      </span>
                    </div>
                    <div className="code-line indent">
                      <em>03</em>
                      <span>
                        return aprender(<i>futuro</i>)
                      </span>
                    </div>
                    <div className="code-line">
                      <em>04</em>
                      <span>{'}'}</span>
                    </div>

                    <div className="mock-result">
                      <small>resultado</small>
                      <strong>Olá, mundo! ✦</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="future-projects">
            <article className="future-card">
              <span>02</span>
              <div>
                <p>Próximo projeto</p>
                <h3>Em construção</h3>
              </div>
              <span className="future-arrow">↗</span>
            </article>

            <article className="future-card">
              <span>03</span>
              <div>
                <p>Experimento</p>
                <h3>Em breve</h3>
              </div>
              <span className="future-arrow">↗</span>
            </article>
          </div>
        </section>

        <section className="section about container" id="about">
          <div className="about-label">
            <span className="section-index">02</span>
            <p className="section-kicker">SOBRE</p>
          </div>

          <div className="about-content">
            <h2>
              Curiosidade técnica,
              <br />
              aprendizado constante.
            </h2>

            <div className="about-copy">
              <p>
                Gosto de entender como as coisas funcionam e transformar esse
                aprendizado em projetos que podem ser usados de verdade.
              </p>

              <p>
                Meu interesse passa por desenvolvimento web, Linux, ferramentas
                open source, inteligência artificial local e pela conexão entre
                tecnologia e educação.
              </p>
            </div>
          </div>
        </section>

        <section className="section stack container" id="stack">
          <div className="section-heading compact">
            <div>
              <span className="section-index">03</span>
              <p className="section-kicker">STACK & FERRAMENTAS</p>
            </div>

            <h2>O que faz parte do meu ambiente.</h2>
          </div>

          <div className="stack-grid">
            <div className="stack-group">
              <span className="stack-number">01</span>
              <p>Frontend</p>
              <div>
                <strong>React</strong>
                <strong>TypeScript</strong>
                <strong>JavaScript</strong>
                <strong>HTML & CSS</strong>
              </div>
            </div>

            <div className="stack-group">
              <span className="stack-number">02</span>
              <p>Ferramentas</p>
              <div>
                <strong>Git</strong>
                <strong>Vite</strong>
                <strong>Linux</strong>
                <strong>VSCodium</strong>
              </div>
            </div>

            <div className="stack-group">
              <span className="stack-number">03</span>
              <p>IA local</p>
              <div>
                <strong>Ollama</strong>
                <strong>Qwen</strong>
                <strong>Aider</strong>
                <strong>Local-first</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section now container">
          <div className="now-card">
            <div>
              <span className="section-kicker">AGORA</span>
              <h2>O que estou construindo.</h2>
            </div>

            <div className="now-list">
              <div>
                <span>01</span>
                <p>Refinando meu portfólio e identidade como desenvolvedor.</p>
              </div>
              <div>
                <span>02</span>
                <p>Explorando agentes e modelos de IA rodando localmente.</p>
              </div>
              <div>
                <span>03</span>
                <p>Desenvolvendo projetos acadêmicos e pessoais.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact container" id="contact">
          <p className="section-kicker">CONTATO</p>

          <h2>
            Tem uma ideia?
            <br />
            <span>Vamos conversar.</span>
          </h2>

          <p>
            Estou sempre aberto a trocar ideias, aprender e participar de novos
            projetos.
          </p>

          <div className="contact-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
            <a href="#">LinkedIn <span>↗</span></a>
            <a href="mailto:seuemail@exemplo.com">Email <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div>
          <span className="brand-mark small">R</span>
          <span>Renan Amador</span>
        </div>

        <p>Desenvolvido com React & TypeScript · 2026</p>
      </footer>
    </div>
  )
}

export default App