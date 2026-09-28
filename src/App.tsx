import { Link } from 'react-router'

import './App.css'
import PageMeta from './components/PageMeta'

function App() {
  return (
    <div className="site">
      <PageMeta
        title="Renan Amador — Desenvolvimento & educação"
        description="Portfólio de Renan Amador, com foco no projeto de extensão Programando o Futuro: elas na tecnologia."
        canonicalPath="/"
      />

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topbar">
        <nav className="container nav" aria-label="Navegação principal">
          <a className="brand" href="#top">
            renan<span>.dev</span>
          </a>

          <div className="nav-links">
            <a href="#projeto">projeto</a>
            <a href="#sobre">sobre</a>
            <a
              href="https://github.com/renaniii"
              target="_blank"
              rel="noreferrer"
            >
              github ↗
            </a>
          </div>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero container" id="top">
          <div className="hero-copy">
            <p className="mono-label">// portfolio · 2026</p>

            <h1>
              Código para aprender,
              <br />
              <span>criar e compartilhar.</span>
            </h1>

            <p className="hero-text">
              Sou Renan Amador. Desenvolvimento web, Linux e tecnologia com
              propósito — hoje, com foco em uma experiência de programação para
              estudantes.
            </p>

            <div className="hero-actions">
              <Link className="primary-link" to="/projetos/programando-o-futuro">
                ver projeto <span>↗</span>
              </Link>
              <a
                className="quiet-link"
                href="https://github.com/renaniii"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </div>
          </div>

          <aside className="focus-panel" aria-label="Projeto atual">
            <div className="focus-top">
              <span>current_project.ts</span>
              <span className="live">● ativo</span>
            </div>

            <div className="focus-code" aria-hidden="true">
              <div>
                <span className="code-muted">01</span>
                <code><span className="code-keyword">const</span> foco = {'{'}</code>
              </div>
              <div>
                <span className="code-muted">02</span>
                <code>&nbsp;&nbsp;nome: <span className="code-string">'Programando o Futuro'</span>,</code>
              </div>
              <div>
                <span className="code-muted">03</span>
                <code>&nbsp;&nbsp;tema: <span className="code-string">'elas na tecnologia'</span>,</code>
              </div>
              <div>
                <span className="code-muted">04</span>
                <code>&nbsp;&nbsp;formato: <span className="code-string">'oficina web'</span></code>
              </div>
              <div>
                <span className="code-muted">05</span>
                <code>{'}'}</code>
              </div>
            </div>

            <div className="focus-footer">
              <span>privacy-first</span>
              <span>browser-only</span>
              <span>learning-by-doing</span>
            </div>
          </aside>
        </section>

        <section className="project-section container" id="projeto">
          <div className="section-line">
            <span>01</span>
            <span>PROJETO EM FOCO</span>
          </div>

          <article className="project-feature">
            <div className="project-main">
              <p className="project-kind">Projeto de extensão · Educação + Web</p>

              <h2>
                Programando o Futuro:
                <br />
                <span>elas na tecnologia.</span>
              </h2>

              <p className="project-summary">
                Uma oficina introdutória de programação construída para funcionar
                diretamente no navegador, com uma experiência simples, prática e
                consciente sobre privacidade.
              </p>

              <Link className="case-link" to="/projetos/programando-o-futuro">
                explorar o case <span>→</span>
              </Link>
            </div>

            <div className="project-notes">
              <div>
                <span>01</span>
                <p>Sem instalação e sem contas obrigatórias.</p>
              </div>
              <div>
                <span>02</span>
                <p>HTML, CSS e JavaScript em uma experiência guiada.</p>
              </div>
              <div>
                <span>03</span>
                <p>Experimentar, criar e compartilhar em três etapas.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="about-section container" id="sobre">
          <div className="section-line">
            <span>02</span>
            <span>SOBRE</span>
          </div>

          <div className="about-grid">
            <h2>Construindo enquanto aprendo.</h2>

            <div className="about-copy">
              <p>
                Tenho interesse em desenvolvimento web, Linux, open source e
                inteligência artificial local. Gosto de transformar estudo em
                coisas que podem ser usadas de verdade.
              </p>

              <p className="stack-line">
                React <span>/</span> TypeScript <span>/</span> Vite{' '}
                <span>/</span> Linux <span>/</span> Git
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>Renan Amador</span>
        <span>feito com React + TypeScript</span>
      </footer>
    </div>
  )
}

export default App
