import { Link } from "react-router";
import PageMeta from "./components/PageMeta";
import { portfolio } from "./data/portfolio";
import "./App.css";

function App() {
  return (
    <div className="site" id="top">
      <PageMeta
        title="Renan Amador — Desenvolvimento web e educação"
        description={portfolio.intro}
      />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="topbar">
        <nav className="container nav" aria-label="Navegação principal">
          <a className="brand" href="#top" aria-label="Renan Amador, início">
            <span className="brand-icon" aria-hidden="true">
              r<span>.</span>
            </span>
            <span>
              renan<span className="brand-suffix">amador</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#projeto">Projetos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">
              Contato <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>
      <main id="conteudo" tabIndex={-1}>
        <section className="hero container" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> APRENDENDO. CONSTRUINDO.
              COMPARTILHANDO.
            </p>
            <h1 id="intro-title">
              Código com
              <br />
              <span>propósito.</span>
            </h1>
            <p className="hero-name">Olá, eu sou {portfolio.name}.</p>
            <p className="hero-text">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projeto">
                Explorar projetos <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-ghost"
                href={portfolio.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <aside
            className="code-card"
            aria-label="Perfil em formato de código ilustrativo"
          >
            <div className="code-toolbar">
              <span>
                <i />
                <i />
                <i />
              </span>
              <span>renan.ts</span>
              <span>TS</span>
            </div>
            <div className="code-content">
              <div className="code-comment">// Um pouco sobre mim</div>
              <pre>
                <code>
                  <span className="syntax-purple">const</span> renan = {"{"}
                  {"\n"} nome:{" "}
                  <span className="syntax-green">'Renan Amador'</span>,{"\n"}{" "}
                  interesses: [{"\n"}{" "}
                  <span className="syntax-green">'desenvolvimento web'</span>,
                  {"\n"}{" "}
                  <span className="syntax-green">'tecnologia e educação'</span>,
                  {"\n"} <span className="syntax-green">'Linux'</span>
                  {"\n"} ],{"\n"} aprendendo:{" "}
                  <span className="syntax-purple">true</span>
                  {"\n"}
                  {"};"}
                </code>
              </pre>
              <div className="code-comment code-last">
                // A próxima ideia começa na prática.
              </div>
            </div>
            <div className="code-status">
              <span>
                <span className="status-dot" /> Em construção contínua
              </span>
              <span>UTF-8</span>
            </div>
          </aside>
          <div className="hero-foot">
            <span>DESENVOLVIMENTO WEB / EDUCAÇÃO / LINUX</span>
            <a href="#projeto">Conheça meu trabalho ↓</a>
          </div>
        </section>
        <section
          className="work-section container"
          id="projeto"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / PROJETOS</p>
              <h2 id="projects-title">Ideias que viram código.</h2>
            </div>
            <p>
              O que estou construindo,
              <br />
              uma versão de cada vez.
            </p>
          </div>
          {portfolio.projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-art" aria-hidden="true">
                <div className="art-grid" />
                <div className="art-window">
                  <div className="art-window-top">
                    <span>programando o futuro</span>
                    <span>↗</span>
                  </div>
                  <div className="art-code">&lt;elas&gt;</div>
                  <p>
                    O futuro também
                    <br />é escrito por elas.
                  </p>
                  <div className="art-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JS</span>
                  </div>
                  <div className="art-bar" />
                  <div className="art-bar short" />
                </div>
                <span className="art-caption">IDEIA → CÓDIGO → DESCOBERTA</span>
              </div>
              <div className="project-copy">
                <div className="project-top">
                  <span className="eyebrow">{project.category}</span>
                  <span className="badge">{project.status}</span>
                </div>
                <h3>
                  {project.title}
                  <span>{project.subtitle}</span>
                </h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label="Tecnologias do projeto">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <Link className="button button-primary" to={project.demo}>
                    Experimentar a plataforma ↗
                  </Link>
                  <Link className="detail-link" to={project.detail}>
                    Sobre o projeto →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
        <section
          className="about-section container"
          id="sobre"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">02 / SOBRE MIM</p>
            <h2 id="about-title">
              Curiosidade para aprender.
              <br />
              <span>Intenção para construir.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p>{portfolio.about}</p>
            <p>
              Este portfólio acompanha meu desenvolvimento. Aqui compartilho
              projetos em andamento, escolhas técnicas e o que descubro pelo
              caminho.
            </p>
            <h3>Ferramentas que uso nos projetos</h3>
            <ul className="tags">
              {portfolio.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>
        <section
          className="contact-section container"
          id="contato"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">03 / CONEXÕES</p>
            <h2 id="contact-title">Vamos trocar ideias?</h2>
            <p>Acompanhe meus projetos e minha evolução no GitHub.</p>
          </div>
          <a
            className="button button-primary"
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
          >
            Encontrar no GitHub ↗
          </a>
        </section>
      </main>
      <footer className="footer container">
        <span>
          © {new Date().getFullYear()} {portfolio.name}
        </span>
        <span>Feito com curiosidade e código.</span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}
export default App;
