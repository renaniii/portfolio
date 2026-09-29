import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import PageMeta from '../components/PageMeta'
import {
  getEncounterOneProgress,
  markEncounterOneStarted,
  saveEncounterOneProgress,
} from '../lib/workshopStorage'
import './EncounterOne.css'

const missionItems = [
  'mude o título',
  'escolha outra cor',
  'altere a mensagem do botão',
  'faça mais uma mudança por conta própria',
]

function EncounterOne() {
  const [progress, setProgress] = useState(getEncounterOneProgress)

  useEffect(() => {
    const next = markEncounterOneStarted()
    setProgress(next)
  }, [])

  const completedSteps = progress.checklist.filter(Boolean).length
  const missionReady = completedSteps === missionItems.length

  const toggleMissionItem = (index: number) => {
    setProgress((current) => {
      const checklist = [...current.checklist]
      checklist[index] = !checklist[index]

      const next = {
        started: true,
        checklist,
        completed: current.completed && checklist.every(Boolean),
      }

      saveEncounterOneProgress(next)
      return next
    })
  }

  const completeEncounter = () => {
    if (!missionReady) return

    const next = {
      ...progress,
      started: true,
      completed: true,
    }

    saveEncounterOneProgress(next)
    setProgress(next)
  }

  return (
    <div className="encounter-page">
      <PageMeta
        title="Encontro 1 — Programando o Futuro"
        description="Primeiro encontro da oficina Programando o Futuro: experimentar código e entender como pequenas mudanças aparecem na tela."
        canonicalPath="/oficina/encontro-1"
      />

      <header className="encounter-header">
        <div className="encounter-container encounter-nav">
          <Link className="encounter-brand" to="/oficina">
            Programando o Futuro
          </Link>

          <div className="encounter-nav-right">
            <span className={progress.completed ? 'progress-done' : ''}>
              {progress.completed
                ? '✓ concluído'
                : `${completedSteps}/${missionItems.length} da missão`}
            </span>
            <Link className="encounter-back" to="/oficina">
              ← oficina
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="encounter-hero encounter-container">
          <p className="encounter-path">~/oficina/encontro-01</p>

          <div className="encounter-hero-grid">
            <div>
              <span className="encounter-kicker">ENCONTRO 01 · 50 MIN</span>
              <h1>Experimentar primeiro. Entender depois.</h1>

              <p className="encounter-lead">
                Hoje você não precisa decorar nada. A ideia é mexer em um projeto
                que já funciona, observar o que muda e descobrir como HTML, CSS e
                JavaScript aparecem na prática.
              </p>
            </div>

            <aside className="encounter-goal">
              <span>objetivo de hoje</span>
              <p>
                Sair daqui entendendo que código não é uma tela misteriosa: você
                muda uma coisa, vê o resultado e pode continuar testando.
              </p>
            </aside>
          </div>
        </section>

        <section className="encounter-section encounter-container">
          <div className="encounter-section-label">01 / roteiro</div>

          <div className="timeline">
            <article>
              <span>00–05</span>
              <div>
                <h2>Olhar antes de mexer</h2>
                <p>
                  Abra o projeto e veja como ele está dividido em HTML, CSS e
                  JavaScript. Sem preocupação em entender tudo.
                </p>
              </div>
            </article>

            <article>
              <span>05–15</span>
              <div>
                <h2>Mudar o conteúdo</h2>
                <p>
                  Troque o título e o texto da página. Essa é a primeira pista do
                  que o HTML faz.
                </p>
              </div>
            </article>

            <article>
              <span>15–25</span>
              <div>
                <h2>Mudar a aparência</h2>
                <p>
                  Teste outra cor de fundo, outra cor de texto e um tamanho
                  diferente. Aqui entra o CSS.
                </p>
              </div>
            </article>

            <article>
              <span>25–35</span>
              <div>
                <h2>Fazer algo acontecer</h2>
                <p>
                  Clique no botão, leia o JavaScript e mude a mensagem que aparece
                  depois do clique.
                </p>
              </div>
            </article>

            <article>
              <span>35–50</span>
              <div>
                <h2>Missão 01</h2>
                <p>
                  Personalize o cartão até ele parecer seu. Não precisa ficar
                  perfeito — precisa ser diferente do exemplo inicial.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="cheatsheet-section encounter-container" id="colinha">
          <div className="encounter-section-label">02 / colinha rápida</div>

          <div className="cheatsheet-content">
            <div className="cheatsheet-intro">
              <h2>Três ideias para consultar enquanto você mexe.</h2>
              <p>
                Não é para decorar. É só um lugar rápido para olhar quando bater a
                dúvida.
              </p>
            </div>

            <div className="cheatsheet-grid">
              <article>
                <span className="cheatsheet-language">HTML</span>
                <h3>O que aparece na página.</h3>
                <pre><code>{'<h1>Meu título</h1>\n<p>Meu texto</p>'}</code></pre>
                <p>
                  Quer mudar uma frase? Normalmente você vai encontrar essa frase
                  no HTML.
                </p>
                <Link to="/oficina?preset=html-basico#laboratorio">
                  testar HTML →
                </Link>
              </article>

              <article>
                <span className="cheatsheet-language">CSS</span>
                <h3>Como a página fica.</h3>
                <pre><code>{'background: #171321;\ncolor: #f8f4ff;'}</code></pre>
                <p>
                  Cores, tamanho, espaço e formato ficam principalmente aqui.
                </p>
                <Link to="/oficina?preset=css-basico#laboratorio">
                  testar CSS →
                </Link>
              </article>

              <article>
                <span className="cheatsheet-language">JavaScript</span>
                <h3>O que acontece.</h3>
                <pre><code>{'botao.addEventListener(\'click\', () => {\n  resposta.textContent = \'Funcionou!\'\n})'}</code></pre>
                <p>
                  O JavaScript pode reagir a um clique e mudar alguma coisa na
                  página.
                </p>
                <Link to="/oficina?preset=js-basico#laboratorio">
                  testar JavaScript →
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="encounter-container mission-grid">
            <div>
              <p className="encounter-path">~/missao-01</p>
              <h2>Faça esse projeto deixar de ser o meu exemplo e virar o seu.</h2>

              <div className="mission-progress">
                <span>{completedSteps}/{missionItems.length}</span>
                <div>
                  <i
                    style={{
                      width: `${(completedSteps / missionItems.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mission-copy">
              <p>
                Troque pelo menos três coisas: um texto, uma cor e a mensagem do
                botão. Depois disso, continue mexendo no que quiser.
              </p>

              <div className="mission-checks">
                {missionItems.map((item, index) => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      checked={Boolean(progress.checklist[index])}
                      onChange={() => toggleMissionItem(index)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>

              <p className="local-note">
                Esse progresso fica salvo somente neste navegador. Nenhum nome ou
                conta é necessário.
              </p>

              <Link
                className="mission-button"
                to="/oficina?preset=encontro-1#laboratorio"
              >
                abrir missão no laboratório →
              </Link>
            </div>
          </div>
        </section>

        <section className="encounter-section encounter-container">
          <div className="encounter-section-label">03 / se travar</div>

          <div className="help-grid">
            <article>
              <span>HTML</span>
              <h3>Quer mudar o que está escrito?</h3>
              <p>Procure pelo texto dentro de uma tag como &lt;h1&gt; ou &lt;p&gt;.</p>
            </article>

            <article>
              <span>CSS</span>
              <h3>Quer mudar uma cor?</h3>
              <p>Procure por background, color ou pelo código de uma cor.</p>
            </article>

            <article>
              <span>JS</span>
              <h3>Quer mudar o clique?</h3>
              <p>Procure pela frase que aparece depois que o botão é clicado.</p>
            </article>
          </div>
        </section>

        <section className="encounter-end encounter-container">
          <div>
            <span>{progress.completed ? 'encontro concluído ✓' : 'fim do encontro'}</span>
            <h2>
              {progress.completed
                ? 'Você terminou o primeiro encontro.'
                : 'Se você mudou o código e viu a tela responder, já começou.'}
            </h2>

            {!progress.completed && (
              <p className="completion-hint">
                {missionReady
                  ? 'Missão pronta. Agora você pode concluir o encontro.'
                  : `Complete os ${missionItems.length} itens da Missão 01 para finalizar.`}
              </p>
            )}
          </div>

          <div className="encounter-end-actions">
            {!progress.completed && (
              <button
                className="complete-button"
                type="button"
                disabled={!missionReady}
                onClick={completeEncounter}
              >
                concluir encontro 01
              </button>
            )}

            {progress.completed ? (
              <Link to="/oficina">voltar para a oficina →</Link>
            ) : (
              <Link to="/oficina?preset=encontro-1#laboratorio">
                voltar ao laboratório →
              </Link>
            )}
          </div>
        </section>
      </main>

      <footer className="encounter-footer encounter-container">
        <span>Programando o Futuro · Encontro 01</span>
        <span>progresso local · sem login</span>
      </footer>
    </div>
  )
}

export default EncounterOne
