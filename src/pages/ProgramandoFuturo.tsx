import { Link } from 'react-router'

import PageMeta from '../components/PageMeta'
import './ProgramandoFuturo.css'

function ProgramandoFuturo() {
  return (
    <div className="case-page">
      <PageMeta
        title="Programando o Futuro — Renan Amador"
        description="Projeto de extensão de Renan Amador: uma oficina introdutória de programação para alunas do ensino médio."
        canonicalPath="/projetos/programando-o-futuro"
      />

      <a className="skip-link" href="#case-content">
        Pular para o conteúdo
      </a>

      <header className="case-nav">
        <div className="case-container case-nav-inner">
          <Link className="case-brand" to="/">
            renan@portfolio:~$
          </Link>
          <Link className="case-back" to="/">
            ← voltar
          </Link>
        </div>
      </header>

      <main id="case-content">
        <section className="case-hero case-container">
          <p className="case-path">~/Faculdade/Projeto_de_Extensao</p>

          <h1>
            Programando o Futuro:
            <br />
            <span>elas na tecnologia</span>
          </h1>

          <p className="case-lead">
            Meu projeto de extensão para apresentar programação a alunas do
            ensino médio em três encontros curtos, usando os Chromebooks da
            própria escola e sem depender de instalação de programas.
          </p>

          <dl className="case-meta">
            <div>
              <dt>encontros</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>duração</dt>
              <dd>50 min cada</dd>
            </div>
            <div>
              <dt>dispositivos</dt>
              <dd>Chromebooks</dd>
            </div>
            <div>
              <dt>status</dt>
              <dd><span className="status-dot" /> em preparação</dd>
            </div>
          </dl>
        </section>

        <section className="case-terminal case-container" aria-label="Resumo técnico do projeto">
          <div className="terminal-title">
            <span>planejamento.txt</span>
            <span>projeto_01</span>
          </div>

          <div className="terminal-body">
            <p><span>objetivo:</span> tornar o primeiro contato com programação menos distante</p>
            <p><span>limite:</span> usar somente o navegador</p>
            <p><span>ferramentas:</span> HTML + CSS + JavaScript</p>
            <p><span>material:</span> site próprio + editor + atividades da oficina</p>
            <p><span>dados:</span> evitar cadastro e coleta desnecessária</p>
          </div>
        </section>

        <section className="case-section case-container">
          <div className="case-section-label">01 / por que</div>

          <div className="case-copy">
            <h2>Esse projeto nasceu justamente porque eu estudo duas áreas bem diferentes.</h2>

            <p>
              Ciência da Computação e Pedagogia quase sempre aparecem separadas
              na minha rotina. Aqui eu consigo juntar as duas: pensar em código,
              mas também em como apresentar esse código para alguém que pode
              nunca ter programado antes.
            </p>

            <p>
              Eu não quero que a oficina vire uma sequência de conceitos para
              decorar. Quero que elas mexam, quebrem, mudem, vejam o resultado e
              percebam que conseguem criar alguma coisa.
            </p>
          </div>
        </section>

        <section className="case-section case-container">
          <div className="case-section-label">02 / os encontros</div>

          <div className="meeting-list">
            <article>
              <span>01</span>
              <div>
                <h3>Primeiro contato</h3>
                <p>
                  Entender o que código faz mexendo em exemplos que já funcionam.
                  A ideia é reduzir o medo antes de explicar muita teoria.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Construir</h3>
                <p>
                  Usar HTML, CSS e JavaScript para montar algo próprio, ainda com
                  orientação e exemplos por perto.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Finalizar e mostrar</h3>
                <p>
                  Ajustar o que foi criado, entender melhor as escolhas feitas e
                  compartilhar o resultado.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="case-section case-container">
          <div className="case-section-label">03 / o que estou construindo</div>

          <div className="build-list">
            <div>
              <span>site da oficina</span>
              <p>Um ponto único para abrir os materiais nos Chromebooks.</p>
            </div>
            <div>
              <span>editor no navegador</span>
              <p>Para testar código e ver o resultado sem instalar nada.</p>
            </div>
            <div>
              <span>atividades</span>
              <p>Exercícios curtos para caber nos três encontros.</p>
            </div>
            <div>
              <span>privacidade</span>
              <p>Evitar login, nomes completos e armazenamento sem necessidade.</p>
            </div>
          </div>
        </section>

        <section className="case-section case-container">
          <div className="case-section-label">04 / decisões práticas</div>

          <div className="case-copy">
            <h2>As limitações fazem parte do projeto.</h2>

            <p>
              Não dá para pensar a oficina como se cada participante estivesse
              num computador pessoal configurado para desenvolvimento. O ambiente
              real são Chromebooks escolares, tempo curto e uma turma começando
              do zero.
            </p>

            <p>
              Por isso eu estou tentando manter tudo simples: abrir o navegador,
              acessar o site e começar. Quanto menos tempo perdido configurando
              ferramenta, mais tempo sobra para programar.
            </p>
          </div>
        </section>

        <section className="case-now">
          <div className="case-container now-layout">
            <div>
              <p className="case-path">~/agora</p>
              <h2>Ainda estou montando tudo.</h2>
            </div>

            <div className="now-copy">
              <p>
                O site da oficina, os materiais e o roteiro dos encontros ainda
                estão sendo refinados. Depois da realização, quero voltar aqui e
                registrar o que funcionou, o que não funcionou e o que eu mudaria.
              </p>

              <p className="tech-line">React / TypeScript / CSS / Git / navegador</p>

              <Link to="/">← voltar ao portfólio</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="case-footer case-container">
        <span>Renan Amador · 2026</span>
        <span>Projeto de Extensão I</span>
      </footer>
    </div>
  )
}

export default ProgramandoFuturo
