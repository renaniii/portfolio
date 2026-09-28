import { Link } from 'react-router'

import './ProgramandoFuturo.css'
import PageMeta from '../components/PageMeta'
function ProgramandoFuturo() {
  return (
    <div className="case-page">
      <PageMeta
        title="Programando o Futuro — Renan Amador"
        description="Case do projeto Programando o Futuro: elas na tecnologia, uma experiência educacional de introdução à programação com foco em prática, privacidade e acessibilidade."
        canonicalPath="/projetos/programando-o-futuro"
        type="article"
      />

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="case-nav">
        <div className="case-container case-nav-inner">
          <Link to="/" className="case-brand">
            <span className="case-brand-mark">R</span>
            Renan Amador
          </Link>

          <Link to="/" className="case-back">
            ← Voltar ao portfólio
          </Link>
        </div>
      </header>

      <main id="conteudo">
        <section className="case-hero case-container">
          <div className="case-status">
            <span />
            Projeto em andamento · 2026
          </div>

          <p className="case-eyebrow">CASE 01 · EDUCAÇÃO + TECNOLOGIA</p>

          <h1>
            Programando o Futuro:
            <span> elas na tecnologia.</span>
          </h1>

          <p className="case-lead">
            Uma experiência de introdução à programação para estudantes do
            ensino médio, criada para transformar o primeiro contato com código
            em algo acessível, prático e significativo.
          </p>

          <div className="case-facts">
            <div>
              <span>Formato</span>
              <strong>3 encontros</strong>
            </div>

            <div>
              <span>Duração</span>
              <strong>50 min cada</strong>
            </div>

            <div>
              <span>Ambiente</span>
              <strong>Chromebooks</strong>
            </div>

            <div>
              <span>Foco</span>
              <strong>Programação web</strong>
            </div>
          </div>
        </section>

        <section className="case-visual case-container">
          <div className="workshop-window">
            <div className="window-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>

              <span>programando-o-futuro</span>

              <span className="privacy-badge">privacidade ativa</span>
            </div>

            <div className="workshop-layout">
              <aside>
                <span className="active">01</span>
                <span>02</span>
                <span>03</span>
              </aside>

              <div className="workshop-code">
                <div className="editor-heading">
                  <div>
                    <span>missao-01.js</span>
                    <small>introdução</small>
                  </div>

                  <span className="live">● preview ativo</span>
                </div>

                <div className="editor-lines">
                  <p>
                    <em>01</em>
                    <span>
                      <b>const</b> mensagem ={' '}
                      <i>"Eu consigo programar!"</i>
                    </span>
                  </p>

                  <p>
                    <em>02</em>
                    <span />
                  </p>

                  <p>
                    <em>03</em>
                    <span>
                      <b>function</b> mostrarMensagem() {'{'}
                    </span>
                  </p>

                  <p>
                    <em>04</em>
                    <span className="indent">
                      document.querySelector(<i>"#resultado"</i>)
                    </span>
                  </p>

                  <p>
                    <em>05</em>
                    <span className="indent">
                      .textContent = mensagem
                    </span>
                  </p>

                  <p>
                    <em>06</em>
                    <span>{'}'}</span>
                  </p>
                </div>

                <div className="preview-result">
                  <span>resultado</span>
                  <strong>Eu consigo programar! ✦</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-container case-intro">
          <div>
            <span className="section-number">01</span>
            <p className="section-label">CONTEXTO</p>
          </div>

          <div className="case-text-large">
            <h2>
              O primeiro contato com programação não precisa começar com medo
              de código.
            </h2>

            <p>
              O projeto nasceu com a proposta de aproximar estudantes do ensino
              médio da tecnologia por meio de uma experiência prática, curta e
              possível de executar usando apenas os dispositivos já
              disponíveis na escola.
            </p>

            <p>
              Em vez de instalar ferramentas ou criar contas, toda a experiência
              acontece diretamente no navegador.
            </p>
          </div>
        </section>

        <section className="case-section case-container">
          <div>
            <span className="section-number">02</span>
            <p className="section-label">O DESAFIO</p>
          </div>

          <div>
            <h2>Projetar uma oficina com restrições reais.</h2>

            <div className="challenge-grid">
              <article>
                <span>01</span>
                <h3>Tempo</h3>
                <p>
                  Apenas três encontros de 50 minutos para criar uma experiência
                  que faça sentido.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Ambiente</h3>
                <p>
                  Chromebooks escolares, sem depender da instalação de programas
                  adicionais.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Experiência</h3>
                <p>
                  Criar algo acessível para quem pode nunca ter programado
                  anteriormente.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Privacidade</h3>
                <p>
                  Evitar contas, coleta desnecessária de dados e identificação
                  das participantes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="case-section case-container">
          <div>
            <span className="section-number">03</span>
            <p className="section-label">A SOLUÇÃO</p>
          </div>

          <div>
            <h2>Uma pequena plataforma criada especificamente para a oficina.</h2>

            <p className="case-body-copy">
              A experiência foi pensada como um ambiente web onde as
              participantes podem experimentar HTML, CSS e JavaScript, observar
              imediatamente o resultado e avançar através de pequenas missões.
            </p>

            <div className="solution-list">
              <div>
                <strong>Editor no navegador</strong>
                <span>Sem instalação.</span>
              </div>

              <div>
                <strong>Preview imediato</strong>
                <span>Alterou o código, viu o resultado.</span>
              </div>

              <div>
                <strong>Missões progressivas</strong>
                <span>Aprendizado dividido em pequenos desafios.</span>
              </div>

              <div>
                <strong>Exportação local</strong>
                <span>O trabalho pertence à participante.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-container">
          <div>
            <span className="section-number">04</span>
            <p className="section-label">EXPERIÊNCIA</p>
          </div>

          <div>
            <h2>Experimentar. Criar. Compartilhar.</h2>

            <div className="meeting-grid">
              <article>
                <span>ENCONTRO 01</span>
                <h3>Experimentar</h3>
                <p>
                  Entender que código produz resultados e começar modificando
                  exemplos já funcionais.
                </p>
              </article>

              <article>
                <span>ENCONTRO 02</span>
                <h3>Criar</h3>
                <p>
                  Combinar HTML, CSS e lógica simples para construir uma
                  experiência própria.
                </p>
              </article>

              <article>
                <span>ENCONTRO 03</span>
                <h3>Compartilhar</h3>
                <p>
                  Refinar o projeto, explicar decisões e compartilhar o que foi
                  desenvolvido.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <div className="case-container privacy-inner">
            <div>
              <p className="section-label purple">PRIVACIDADE POR DESIGN</p>

              <h2>
                Menos dados.
                <br />
                Mais autonomia.
              </h2>
            </div>

            <div className="privacy-copy">
              <p>
                A privacidade não foi adicionada depois do projeto. Ela faz parte
                da arquitetura da experiência.
              </p>

              <ul>
                <li>Sem login obrigatório</li>
                <li>Sem nomes completos</li>
                <li>Sem armazenamento automático em nuvem</li>
                <li>Sem rastreamento desnecessário</li>
                <li>Projetos exportáveis localmente</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="case-section case-container">
          <div>
            <span className="section-number">05</span>
            <p className="section-label">STACK</p>
          </div>

          <div>
            <h2>Tecnologia simples para um problema real.</h2>

            <div className="tech-table">
              <div>
                <span>Interface</span>
                <strong>React + TypeScript</strong>
              </div>

              <div>
                <span>Estilo</span>
                <strong>CSS</strong>
              </div>

              <div>
                <span>Execução</span>
                <strong>Navegador</strong>
              </div>

              <div>
                <span>Dispositivos</span>
                <strong>Chromebooks</strong>
              </div>

              <div>
                <span>Princípio</span>
                <strong>Local-first</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-container">
          <div>
            <span className="section-number">06</span>
            <p className="section-label">PROCESSO</p>
          </div>

          <div className="case-text-large">
            <h2>
              Mais do que escrever código, este projeto está me ensinando a
              projetar experiências.
            </h2>

            <p>
              Construir a oficina exige pensar simultaneamente em tecnologia,
              tempo de aula, acessibilidade, privacidade, clareza das
              instruções e experiência de quem estará usando o sistema.
            </p>

            <p>
              É um exercício de desenvolvimento, mas também de produto,
              educação e comunicação.
            </p>
          </div>
        </section>

        <section className="next-section">
          <div className="case-container">
            <p className="section-label">PRÓXIMOS PASSOS</p>

            <h2>O projeto ainda está sendo construído.</h2>

            <p>
              Depois da realização da oficina, este case será atualizado com os
              resultados, aprendizados e evolução da experiência.
            </p>

            <Link to="/">← Voltar ao portfólio</Link>
          </div>
        </section>
      </main>

      <footer className="case-footer case-container">
        <span>Renan Amador</span>
        <span>Case 01 · 2026</span>
      </footer>
    </div>
  )
}

export default ProgramandoFuturo