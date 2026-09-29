import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'

import PageMeta from '../components/PageMeta'
import './EducatorArea.css'

const TOTAL_SECONDS = 50 * 60

function EducatorArea() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          setRunning(false)
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [running])

  const clock = useMemo(() => {
    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }, [secondsLeft])

  const resetTimer = () => {
    setRunning(false)
    setSecondsLeft(TOTAL_SECONDS)
  }

  return (
    <div className="educator-page">
      <PageMeta
        title="Apoio do educador — Programando o Futuro"
        description="Área de apoio para condução dos encontros da oficina Programando o Futuro."
        canonicalPath="/oficina/educador"
      />

      <header className="educator-header">
        <div className="educator-container educator-nav">
          <Link to="/oficina">Programando o Futuro</Link>
          <span>apoio do educador</span>
          <Link to="/oficina">← oficina</Link>
        </div>
      </header>

      <main>
        <section className="educator-hero educator-container">
          <div>
            <p className="educator-path">~/oficina/educador</p>
            <span className="educator-kicker">ENCONTRO 01 · APOIO DE SALA</span>
            <h1>Uma tela para quem está conduzindo.</h1>
            <p>
              Esta área não acompanha estudantes e não recebe respostas da turma.
              Ela existe só para deixar roteiro, links e tempo do encontro em um
              lugar rápido durante a aula.
            </p>
          </div>

          <aside className="educator-timer" aria-label="Cronômetro do encontro">
            <span>cronômetro · 50 min</span>
            <strong>{clock}</strong>
            <div>
              <button type="button" onClick={() => setRunning((value) => !value)}>
                {running ? 'pausar' : secondsLeft === TOTAL_SECONDS ? 'iniciar' : 'continuar'}
              </button>
              <button type="button" onClick={resetTimer}>
                zerar
              </button>
            </div>
          </aside>
        </section>

        <section className="educator-section educator-container">
          <div className="educator-label">01 / abrir rápido</div>

          <div className="educator-links">
            <Link to="/oficina/encontro-1">
              <span>roteiro</span>
              <strong>Encontro 1</strong>
              <small>página que as alunas também podem consultar →</small>
            </Link>

            <Link to="/oficina?preset=encontro-1#laboratorio">
              <span>atividade</span>
              <strong>Missão 01</strong>
              <small>abrir o projeto principal no laboratório →</small>
            </Link>

            <Link to="/oficina?preset=html-basico#laboratorio">
              <span>exemplo</span>
              <strong>HTML</strong>
              <small>abrir exemplo focado em conteúdo →</small>
            </Link>

            <Link to="/oficina?preset=css-basico#laboratorio">
              <span>exemplo</span>
              <strong>CSS</strong>
              <small>abrir exemplo focado em aparência →</small>
            </Link>

            <Link to="/oficina?preset=js-basico#laboratorio">
              <span>exemplo</span>
              <strong>JavaScript</strong>
              <small>abrir exemplo focado em interação →</small>
            </Link>

            <Link to="/oficina/privacidade">
              <span>apoio</span>
              <strong>Privacidade</strong>
              <small>explicação simples sobre os dados locais →</small>
            </Link>
          </div>
        </section>

        <section className="educator-section educator-container">
          <div className="educator-label">02 / ritmo sugerido</div>

          <div className="educator-timeline">
            <article>
              <span>00–05</span>
              <div>
                <h2>Apresentar a ideia</h2>
                <p>
                  Mostrar que ninguém precisa saber programar antes de começar.
                  Abrir o laboratório e deixar o resultado visível.
                </p>
              </div>
            </article>

            <article>
              <span>05–15</span>
              <div>
                <h2>HTML</h2>
                <p>
                  Alterar um título e um parágrafo junto com a turma. Evitar
                  aprofundar em sintaxe agora.
                </p>
              </div>
            </article>

            <article>
              <span>15–25</span>
              <div>
                <h2>CSS</h2>
                <p>
                  Mudar fundo, cor e formato. O foco é perceber a relação entre
                  código e resultado.
                </p>
              </div>
            </article>

            <article>
              <span>25–35</span>
              <div>
                <h2>JavaScript</h2>
                <p>
                  Fazer um clique alterar a página e mostrar que código também
                  pode reagir ao que a pessoa faz.
                </p>
              </div>
            </article>

            <article>
              <span>35–50</span>
              <div>
                <h2>Missão 01</h2>
                <p>
                  Circular pela sala, ajudar quem travar e deixar espaço para
                  personalização. Não precisa terminar todo mundo igual.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="educator-section educator-container">
          <div className="educator-label">03 / antes de começar</div>

          <div className="educator-checklist">
            <label>
              <input type="checkbox" />
              <span>abrir a plataforma em um Chromebook real</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>testar HTML, CSS, JavaScript e a Missão 01</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>confirmar que o projetor mostra código e resultado legíveis</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>deixar o link da oficina pronto para compartilhar</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>ter uma dupla como plano B se algum Chromebook falhar</span>
            </label>
          </div>
        </section>

        <section className="educator-note">
          <div className="educator-container educator-note-grid">
            <div>
              <p className="educator-path">~/importante</p>
              <h2>Sem painel de alunas de propósito.</h2>
            </div>

            <div>
              <p>
                A plataforma não centraliza nomes, códigos, progresso ou atividade
                das participantes. Para saber como a turma está, a observação em
                sala continua sendo o principal instrumento.
              </p>
              <p>
                Mais para frente, esta área vai receber seus materiais de condução:
                roteiro de fala, plano de aula, exemplos para projetar e plano B
                para cada etapa.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="educator-footer educator-container">
        <span>Programando o Futuro · apoio do educador</span>
        <div className="educator-footer-actions">
          <Link to="/oficina/privacidade">privacidade</Link>
          <a href="/oficina/educador?logout=1">sair</a>
        </div>
      </footer>
    </div>
  )
}

export default EducatorArea
