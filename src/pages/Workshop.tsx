import { useMemo, useState } from 'react'

import PageMeta from '../components/PageMeta'
import './Workshop.css'

const starterHtml = `<main class="card">
  <p class="tag">meu primeiro projeto</p>
  <h1>Olá, mundo!</h1>
  <p>Eu fiz isso com HTML, CSS e JavaScript.</p>
  <button id="botao">clique aqui</button>
</main>`

const starterCss = `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #111018;
  color: #f7f3ff;
  font-family: system-ui, sans-serif;
}

.card {
  width: min(420px, 80vw);
  padding: 32px;
  border: 1px solid #6d5bd0;
  border-radius: 18px;
  background: #171520;
}

.tag {
  color: #a99af7;
  font-size: 12px;
}

button {
  padding: 10px 14px;
  border: 0;
  border-radius: 10px;
  background: #9b87f5;
  color: #111018;
  font-weight: 700;
  cursor: pointer;
}`

const starterJs = `const botao = document.querySelector('#botao')

botao.addEventListener('click', () => {
  botao.textContent = 'funcionou ✦'
})`

type EditorTab = 'html' | 'css' | 'js'

function Workshop() {
  const [tab, setTab] = useState<EditorTab>('html')
  const [html, setHtml] = useState(starterHtml)
  const [css, setCss] = useState(starterCss)
  const [js, setJs] = useState(starterJs)

  const preview = useMemo(() => {
    const safeJs = js.replace(/<\/script/gi, '<\\/script')

    return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>${css}</style>
</head>
<body>
  ${html}
  <script>
    try {
      ${safeJs}
    } catch (error) {
      document.body.insertAdjacentHTML(
        'beforeend',
        '<pre style="color:#ff8fa3;padding:16px;font:12px monospace">' +
          String(error) +
          '</pre>',
      )
    }
  <\/script>
</body>
</html>`
  }, [html, css, js])

  const resetProject = () => {
    setHtml(starterHtml)
    setCss(starterCss)
    setJs(starterJs)
    setTab('html')
  }

  const exportProject = () => {
    const file = new Blob([preview], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')

    link.href = url
    link.download = 'meu-projeto.html'
    link.click()

    URL.revokeObjectURL(url)
  }

  const currentValue = tab === 'html' ? html : tab === 'css' ? css : js
  const setCurrentValue =
    tab === 'html' ? setHtml : tab === 'css' ? setCss : setJs

  return (
    <div className="workshop-page">
      <PageMeta
        title="Programando o Futuro — Oficina"
        description="Plataforma da oficina Programando o Futuro: elas na tecnologia."
        canonicalPath="/oficina"
      />

      <header className="workshop-header">
        <div className="workshop-container workshop-nav">
          <a className="workshop-brand" href="#inicio">
            Programando o Futuro
          </a>

          <nav aria-label="Navegação da oficina">
            <a href="#encontros">encontros</a>
            <a href="#laboratorio">laboratório</a>
            <a href="#materiais">materiais</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="workshop-hero workshop-container" id="inicio">
          <div className="workshop-hero-copy">
            <p className="workshop-path">~/oficina/inicio</p>
            <h1>
              Bora criar
              <br />
              alguma coisa?
            </h1>

            <p>
              Este é o espaço da oficina. Aqui você encontra os encontros, testa
              código no navegador e acessa os materiais sem precisar instalar
              nada.
            </p>

            <a className="workshop-start" href="#encontros">
              começar ↓
            </a>
          </div>

          <aside className="privacy-note">
            <span>privacidade</span>
            <p>
              Não pedimos nome, e-mail ou conta. O laboratório roda no próprio
              navegador e não envia seu código para um servidor.
            </p>
          </aside>
        </section>

        <section className="workshop-section workshop-container" id="encontros">
          <div className="workshop-section-head">
            <span>01</span>
            <h2>Encontros</h2>
          </div>

          <div className="meeting-cards">
            <article>
              <span className="meeting-number">01</span>
              <div>
                <p>primeiro contato</p>
                <h3>Experimentar</h3>
                <span>
                  Mudar coisas prontas, ver o resultado e entender o que o código
                  está fazendo.
                </span>
              </div>
            </article>

            <article>
              <span className="meeting-number">02</span>
              <div>
                <p>mão na massa</p>
                <h3>Criar</h3>
                <span>
                  Juntar HTML, CSS e JavaScript para montar um projeto próprio.
                </span>
              </div>
            </article>

            <article>
              <span className="meeting-number">03</span>
              <div>
                <p>acabamento</p>
                <h3>Compartilhar</h3>
                <span>
                  Ajustar o projeto, entender as escolhas e mostrar o que foi
                  construído.
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="lab-section" id="laboratorio">
          <div className="workshop-container">
            <div className="workshop-section-head">
              <span>02</span>
              <h2>Laboratório</h2>
            </div>

            <p className="lab-intro">
              Mude o código do lado esquerdo. O resultado aparece do lado direito.
              Não tem como “estragar” nada: se ficar confuso, use restaurar.
            </p>

            <div className="lab-window">
              <div className="lab-toolbar">
                <div className="editor-tabs" role="tablist" aria-label="Arquivos do projeto">
                  {(['html', 'css', 'js'] as EditorTab[]).map((item) => (
                    <button
                      className={tab === item ? 'active' : ''}
                      key={item}
                      onClick={() => setTab(item)}
                      role="tab"
                      aria-selected={tab === item}
                    >
                      {item === 'js' ? 'script.js' : `index.${item}`}
                    </button>
                  ))}
                </div>

                <div className="lab-actions">
                  <button onClick={resetProject}>restaurar</button>
                  <button className="export-button" onClick={exportProject}>
                    salvar .html
                  </button>
                </div>
              </div>

              <div className="lab-grid">
                <label className="editor-pane">
                  <span className="sr-only">Editor de {tab}</span>
                  <textarea
                    value={currentValue}
                    onChange={(event) => setCurrentValue(event.target.value)}
                    spellCheck={false}
                    aria-label={`Código ${tab.toUpperCase()}`}
                  />
                </label>

                <div className="preview-pane">
                  <div className="preview-label">resultado</div>
                  <iframe
                    title="Resultado do código"
                    sandbox="allow-scripts"
                    srcDoc={preview}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="workshop-section workshop-container" id="materiais">
          <div className="workshop-section-head">
            <span>03</span>
            <h2>Materiais</h2>
          </div>

          <div className="materials-list">
            <article>
              <div>
                <span>guia</span>
                <h3>Colinha de HTML</h3>
              </div>
              <p>Os elementos que vamos usar durante a oficina.</p>
              <span className="material-status">em preparação</span>
            </article>

            <article>
              <div>
                <span>guia</span>
                <h3>Colinha de CSS</h3>
              </div>
              <p>Cores, tamanhos, espaçamento e outras mudanças visuais.</p>
              <span className="material-status">em preparação</span>
            </article>

            <article>
              <div>
                <span>desafios</span>
                <h3>Missões da oficina</h3>
              </div>
              <p>Pequenos objetivos para seguir sem ficar perdida.</p>
              <span className="material-status">em preparação</span>
            </article>
          </div>
        </section>
      </main>

      <footer className="workshop-footer workshop-container">
        <span>Programando o Futuro · 2026</span>
        <span>sem login · sem rastreamento · direto no navegador</span>
      </footer>
    </div>
  )
}

export default Workshop
