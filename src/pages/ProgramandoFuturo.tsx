import { Link } from 'react-router'

import PageMeta from '../components/PageMeta'
import './ProgramandoFuturo.css'

function ProgramandoFuturo() {
  return (
    <div className="case-page">
      <PageMeta
        title="Programando o Futuro — Renan Amador"
        description="Case do projeto de extensão Programando o Futuro: elas na tecnologia, uma oficina introdutória de programação feita para o navegador."
        canonicalPath="/projetos/programando-o-futuro"
      />

      <a className="skip-link" href="#case-content">
        Pular para o conteúdo
      </a>

      <header className="case-nav">
        <div className="case-container case-nav-inner">
          <Link className="case-brand" to="/">
            renan<span>.dev</span>
          </Link>
          <Link className="case-back" to="/">
            ← portfólio
          </Link>
        </div>
      </header>

      <main id="case-content">
        <section className="case-hero case-container">
          <p className="case-label">// projeto_01 · extensão · 2026</p>

          <h1>
            Programando o Futuro:
            <br />
            <span>elas na tecnologia.</span>
          </h1>

          <p className="case-lead">
            Uma oficina introdutória de programação pensada para transformar o
            primeiro contato com código em uma experiência simples, prática e
            possível de executar diretamente no navegador.
          </p>

          <div className="case-meta">
            <div>
              <span>formato</span>
              <strong>oficina web</strong>
            </div>
            <div>
              <span>ambiente</span>
              <strong>browser-only</strong>
            </div>
            <div>
              <span>princípio</span>
              <strong>privacy-first</strong>
            </div>
            <div>
              <span>status</span>
              <strong className="status-active">● em construção</strong>
            </div>
          </div>
        </section>

        <section className="case-demo case-container" aria-label="Visão conceitual da oficina">
          <div className="demo-head">
            <span>workshop / experiência</span>
            <span>local-first</span>
          </div>

          <div className="demo-body">
            <div className="demo-steps">
              <span className="active">01 experimentar</span>
              <span>02 criar</span>
              <span>03 compartilhar</span>
            </div>

            <div className="demo-code">
              <p>
                <span>01</span>
                <code>
                  <b>const</b> ideia = <i>'minha primeira página'</i>
                </code>
              </p>
              <p>
                <span>02</span>
                <code>
                  <b>function</b> aprender() {'{'}
                </code>
              </p>
              <p>
                <span>03</span>
                <code className="indent">
                  return experimentar(ideia)
                </code>
              </p>
              <p>
                <span>04</span>
                <code>{'}'}</code>
              </p>

              <div className="demo-result">
                <span>preview</span>
                <strong>Olá, mundo! ✦</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-container">
          <div className="case-section-label">
            <span>01</span>
            <p>O PROJETO</p>
          </div>

          <div className="case-copy">
            <h2>Menos barreiras entre a estudante e o primeiro código.</h2>

            <p>
              A proposta é concentrar tudo em uma experiência web: exemplos
              funcionais, edição de HTML, CSS e JavaScript, visualização imediata
              do resultado e pequenas missões que conduzem a oficina.
            </p>

            <p>
              Sem depender de instalações ou contas obrigatórias, a atenção pode
              ficar no que realmente importa: entender, testar e criar.
            </p>
          </div>
        </section>

        <section className="case-section case-container">
          <div className="case-section-label">
            <span>02</span>
            <p>EXPERIÊNCIA</p>
          </div>

          <div className="experience-list">
            <article>
              <span>01</span>
              <div>
                <h3>Experimentar</h3>
                <p>Modificar exemplos e perceber imediatamente o efeito do código.</p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Criar</h3>
                <p>Combinar os conceitos em uma pequena experiência própria.</p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Compartilhar</h3>
                <p>Refinar o resultado e explicar o que foi construído.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="case-section case-container">
          <div className="case-section-label">
            <span>03</span>
            <p>PRINCÍPIOS</p>
          </div>

          <div className="principles-grid">
            <article>
              <span>browser_only</span>
              <h3>Direto no navegador.</h3>
              <p>A experiência deve funcionar sem instalação adicional.</p>
            </article>

            <article>
              <span>privacy_first</span>
              <h3>Coletar menos.</h3>
              <p>Sem exigir identificação ou armazenamento desnecessário.</p>
            </article>

            <article>
              <span>learning_by_doing</span>
              <h3>Aprender fazendo.</h3>
              <p>Código, resultado e descoberta no mesmo fluxo.</p>
            </article>
          </div>
        </section>

        <section className="build-section">
          <div className="case-container build-grid">
            <div>
              <p className="case-label">// agora</p>
              <h2>O projeto ainda está sendo construído.</h2>
            </div>

            <div className="build-copy">
              <p>
                React <span>/</span> TypeScript <span>/</span> CSS{' '}
                <span>/</span> Browser <span>/</span> Local-first
              </p>
              <p>
                Depois da oficina, este case será atualizado com os resultados,
                aprendizados e próximas iterações.
              </p>
              <Link to="/">← voltar ao portfólio</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="case-footer case-container">
        <span>Renan Amador</span>
        <span>projeto de extensão · 2026</span>
      </footer>
    </div>
  )
}

export default ProgramandoFuturo
