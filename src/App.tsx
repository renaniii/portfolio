import { Link } from 'react-router'

import './App.css'
import PageMeta from './components/PageMeta'

function App() {
  return (
    <div className="site">
      <PageMeta
        title="Renan Amador"
        description="Portfólio de Renan Amador. Desenvolvimento web, Linux, educação e o projeto Programando o Futuro: elas na tecnologia."
        canonicalPath="/"
      />

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topbar">
        <nav className="container nav" aria-label="Navegação principal">
          <a className="brand" href="#top">
            renan@portfolio:~$
          </a>

          <div className="nav-links">
            <a href="#projeto">projeto</a>
            <Link to="/oficina">oficina</Link>
            <a href="#sobre">sobre</a>
            <a href="https://github.com/renaniii" target="_blank" rel="noreferrer">
              github ↗
            </a>
          </div>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero container" id="top">
          <div className="hero-copy">
            <p className="path">~/Projetos/Pessoal/portfolio</p>

            <h1>Oi, eu sou Renan.</h1>

            <p className="hero-text">
              Estudo Ciência da Computação e Pedagogia. Gosto de web, Linux e de
              construir coisas que eu realmente vou usar. Agora, quase toda a
              minha atenção está em um projeto de extensão que junta tecnologia e
              educação.
            </p>

            <div className="hero-actions">
              <Link className="text-link strong" to="/oficina">
                entrar na oficina →
              </Link>
              <Link className="text-link" to="/projetos/programando-o-futuro">
                ver o projeto
              </Link>
              <a className="text-link" href="https://github.com/renaniii" target="_blank" rel="noreferrer">
                github
              </a>
            </div>
          </div>

          <aside className="terminal" aria-label="O que estou fazendo agora">
            <div className="terminal-title">
              <span>terminal</span>
              <span>fedora</span>
            </div>

            <div className="terminal-body">
              <p><span>renan@loq</span>:~/Projetos$ cat agora.txt</p>
              <p className="terminal-output">Programando o Futuro: elas na tecnologia</p>
              <p className="terminal-output muted">3 encontros · navegador · sem instalação</p>
              <p className="terminal-comment"># tentando fazer programação parecer menos distante</p>
              <p><span>renan@loq</span>:~/Projetos$ <i className="cursor" /></p>
            </div>
          </aside>
        </section>

        <section className="project-section container" id="projeto">
          <div className="section-tag">01 / projeto atual</div>

          <div className="project-layout">
            <div>
              <h2>
                Programando o Futuro:
                <br />
                <span>elas na tecnologia</span>
              </h2>

              <p className="project-summary">
                É meu projeto de extensão. A ideia é fazer uma oficina de
                programação para alunas do ensino médio usando só os Chromebooks
                da escola e o navegador. Quero que o primeiro contato com código
                seja simples, prático e interessante de verdade.
              </p>

              <div className="project-actions">
                <Link className="project-link project-link-primary" to="/oficina">
                  entrar na plataforma →
                </Link>
                <Link className="project-link" to="/projetos/programando-o-futuro">
                  ler sobre o projeto
                </Link>
              </div>
            </div>

            <dl className="project-facts">
              <div>
                <dt>formato</dt>
                <dd>3 encontros de 50 min</dd>
              </div>
              <div>
                <dt>ambiente</dt>
                <dd>Chromebooks + navegador</dd>
              </div>
              <div>
                <dt>vou construir</dt>
                <dd>site, materiais e editor web</dd>
              </div>
              <div>
                <dt>status</dt>
                <dd><span className="status-dot" /> em preparação</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="about-section container" id="sobre">
          <div className="section-tag">02 / sobre</div>

          <div className="about-layout">
            <h2>Duas áreas que acabaram se encontrando.</h2>

            <div className="about-copy">
              <p>
                Ciência da Computação e Pedagogia parecem caminhos bem diferentes,
                mas eu gosto justamente da parte em que uma começa a ajudar a
                outra. O Programando o Futuro nasceu desse encontro.
              </p>

              <p>
                No dia a dia eu uso Fedora, VSCodium, Git e ferramentas locais
                sempre que faz sentido. Na web, estou trabalhando principalmente
                com React e TypeScript.
              </p>

              <p className="small-mono">
                Fedora / VSCodium / Git / React / TypeScript
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>Renan Amador · 2026</span>
        <span>feito por mim, aos poucos.</span>
      </footer>
    </div>
  )
}

export default App
