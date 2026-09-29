import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'

import PageMeta from '../components/PageMeta'
import {
  clearLabDraft,
  clearWorkshopProgress,
  getEncounterOneProgress,
  getLabDraft,
  saveLabDraft,
} from '../lib/workshopStorage'
import './Workshop.css'

type EditorTab = 'html' | 'css' | 'js'
type PresetKey = 'base' | 'encontro-1' | 'html-basico' | 'css-basico' | 'js-basico'

type LabPreset = {
  label: string
  instruction: string
  html: string
  css: string
  js: string
  tab: EditorTab
  filename: string
}

type LabState = {
  presetKey: PresetKey
  html: string
  css: string
  js: string
}

const presets: Record<PresetKey, LabPreset> = {
  base: {
    label: 'projeto livre',
    instruction: 'Mexa no código, observe o resultado e teste suas ideias.',
    tab: 'html',
    filename: 'meu-projeto.html',
    html: `<main class="card">
  <p class="tag">meu primeiro projeto</p>
  <h1>Olá, mundo!</h1>
  <p>Eu fiz isso com HTML, CSS e JavaScript.</p>
  <button id="botao">clique aqui</button>
</main>`,
    css: `body {
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
}`,
    js: `const botao = document.querySelector('#botao')

botao.addEventListener('click', () => {
  botao.textContent = 'funcionou ✦'
})`,
  },

  'encontro-1': {
    label: 'missão 01',
    instruction:
      'Mude um texto, uma cor e a mensagem do botão. Depois faça mais uma alteração por conta própria.',
    tab: 'html',
    filename: 'missao-01.html',
    html: `<main class="cartao">
  <p class="etiqueta">meu primeiro site</p>
  <h1>Oi! Eu criei essa página.</h1>
  <p class="texto">Troque esse texto por alguma coisa que você gosta.</p>

  <button id="surpresa">mostrar mensagem</button>
  <p id="mensagem"></p>
</main>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #171321;
  color: #f8f4ff;
  font-family: system-ui, sans-serif;
}

.cartao {
  width: min(430px, 80vw);
  padding: 34px;
  border: 1px solid #8e79ec;
  border-radius: 18px;
  background: #211b30;
}

.etiqueta {
  margin: 0 0 14px;
  color: #b9aaf7;
  font-size: 12px;
}

h1 {
  margin: 0 0 14px;
}

.texto {
  line-height: 1.6;
}

button {
  margin-top: 12px;
  padding: 10px 14px;
  border: 0;
  border-radius: 9px;
  background: #a78bfa;
  color: #171321;
  font-weight: 700;
  cursor: pointer;
}

#mensagem {
  color: #c8bdf7;
}`,
    js: `const botao = document.querySelector('#surpresa')
const mensagem = document.querySelector('#mensagem')

botao.addEventListener('click', () => {
  mensagem.textContent = 'Você acabou de fazer o JavaScript responder ao seu clique :)'
})`,
  },

  'html-basico': {
    label: 'exemplo de HTML',
    instruction:
      'Troque o título e o parágrafo. Depois adicione mais uma linha com uma tag <p>.',
    tab: 'html',
    filename: 'exemplo-html.html',
    html: `<main>
  <h1>Meu primeiro título</h1>
  <p>Esse texto veio do HTML.</p>
  <button>um botão</button>
</main>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f4f0ff;
  color: #211b30;
  font-family: system-ui, sans-serif;
}

main {
  width: min(420px, 80vw);
  padding: 32px;
}

button {
  padding: 10px 14px;
}`,
    js: '',
  },

  'css-basico': {
    label: 'exemplo de CSS',
    instruction:
      'Mude background, color e border-radius. Veja cada mudança aparecer na hora.',
    tab: 'css',
    filename: 'exemplo-css.html',
    html: `<main class="caixa">
  <h1>CSS muda a aparência.</h1>
  <p>Teste outras cores, tamanhos e formas.</p>
</main>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #171321;
  font-family: system-ui, sans-serif;
}

.caixa {
  width: min(420px, 80vw);
  padding: 32px;
  background: #9b87f5;
  color: #171321;
  border-radius: 18px;
}

h1 {
  font-size: 32px;
}`,
    js: '',
  },

  'js-basico': {
    label: 'exemplo de JavaScript',
    instruction:
      'Clique no botão e depois troque a frase dentro de textContent.',
    tab: 'js',
    filename: 'exemplo-javascript.html',
    html: `<main>
  <h1>JavaScript faz coisas acontecerem.</h1>
  <button id="teste">testar</button>
  <p id="resposta">Nada aconteceu ainda.</p>
</main>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #171321;
  color: #f8f4ff;
  font-family: system-ui, sans-serif;
}

main {
  width: min(430px, 80vw);
  text-align: center;
}

button {
  padding: 10px 16px;
  border: 0;
  border-radius: 8px;
  background: #a78bfa;
  color: #171321;
  font-weight: 700;
  cursor: pointer;
}`,
    js: `const botao = document.querySelector('#teste')
const resposta = document.querySelector('#resposta')

botao.addEventListener('click', () => {
  resposta.textContent = 'Funcionou! O JavaScript mudou a página.'
})`,
  },
}

const loadLabState = (presetKey: PresetKey): LabState => {
  const preset = presets[presetKey]
  const draft = getLabDraft(presetKey)

  return {
    presetKey,
    html: draft?.html ?? preset.html,
    css: draft?.css ?? preset.css,
    js: draft?.js ?? preset.js,
  }
}

function Workshop() {
  const [searchParams] = useSearchParams()
  const presetParam = searchParams.get('preset')
  const presetKey: PresetKey =
    presetParam && presetParam in presets ? (presetParam as PresetKey) : 'base'
  const preset = presets[presetKey]

  const [tab, setTab] = useState<EditorTab>(preset.tab)
  const [lab, setLab] = useState<LabState>(() => loadLabState(presetKey))
  const [progress, setProgress] = useState(getEncounterOneProgress)

  useEffect(() => {
    if (lab.presetKey === presetKey) return

    const next = loadLabState(presetKey)
    setLab(next)
    setTab(preset.tab)
  }, [lab.presetKey, preset, presetKey])

  useEffect(() => {
    if (lab.presetKey !== presetKey) return

    saveLabDraft(presetKey, {
      html: lab.html,
      css: lab.css,
      js: lab.js,
    })
  }, [lab, presetKey])

  useEffect(() => {
    if (!window.location.hash) return

    const id = window.location.hash.slice(1)
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [presetKey])

  const preview = useMemo(() => {
    const safeJs = lab.js.replace(/<\/script/gi, '<\\/script')

    return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>${lab.css}</style>
</head>
<body>
  ${lab.html}
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
  }, [lab.css, lab.html, lab.js])

  const resetProject = () => {
    clearLabDraft(presetKey)
    setLab({
      presetKey,
      html: preset.html,
      css: preset.css,
      js: preset.js,
    })
    setTab(preset.tab)
  }

  const exportProject = () => {
    const file = new Blob([preview], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')

    link.href = url
    link.download = preset.filename
    link.click()

    URL.revokeObjectURL(url)
  }

  const clearLocalData = () => {
    const confirmed = window.confirm(
      'Apagar o progresso e os códigos salvos neste navegador?',
    )

    if (!confirmed) return

    clearWorkshopProgress()
    setProgress(getEncounterOneProgress())
    setLab({
      presetKey,
      html: preset.html,
      css: preset.css,
      js: preset.js,
    })
    setTab(preset.tab)
  }

  const currentValue =
    tab === 'html' ? lab.html : tab === 'css' ? lab.css : lab.js

  const setCurrentValue = (value: string) => {
    setLab((current) => ({
      ...current,
      [tab]: value,
    }))
  }

  const completedSteps = progress.checklist.filter(Boolean).length

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

        {progress.started && (
          <section className="local-progress workshop-container">
            <div>
              <span>progresso neste navegador</span>
              <p>
                Encontro 01 ·{' '}
                {progress.completed
                  ? 'concluído ✓'
                  : `${completedSteps}/4 itens da missão`}
              </p>
            </div>

            <Link to="/oficina/encontro-1">
              {progress.completed ? 'rever encontro →' : 'continuar →'}
            </Link>
          </section>
        )}

        <section className="workshop-section workshop-container" id="encontros">
          <div className="workshop-section-head">
            <span>01</span>
            <h2>Encontros</h2>
          </div>

          <div className="meeting-cards">
            <article className="meeting-card-active">
              <span className="meeting-number">
                {progress.completed ? '✓' : '01'}
              </span>
              <div>
                <p>
                  {progress.completed
                    ? 'concluído neste navegador'
                    : progress.started
                      ? `${completedSteps}/4 da missão · em andamento`
                      : 'primeiro contato · disponível'}
                </p>
                <h3>Experimentar</h3>
                <span>
                  Mudar coisas prontas, ver o resultado e entender o que o código
                  está fazendo.
                </span>
                <Link className="meeting-open" to="/oficina/encontro-1">
                  {progress.completed
                    ? 'rever encontro 01 →'
                    : progress.started
                      ? 'continuar encontro 01 →'
                      : 'abrir encontro 01 →'}
                </Link>
              </div>
            </article>

            <article className="meeting-card-locked">
              <span className="meeting-number">02</span>
              <div>
                <p>mão na massa · em preparação</p>
                <h3>Criar</h3>
                <span>
                  Juntar HTML, CSS e JavaScript para montar um projeto próprio.
                </span>
              </div>
            </article>

            <article className="meeting-card-locked">
              <span className="meeting-number">03</span>
              <div>
                <p>acabamento · em preparação</p>
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
              Suas alterações ficam salvas somente neste navegador.
            </p>

            {presetKey !== 'base' && (
              <div className="lab-mission">
                <span>{preset.label} carregado</span>
                <p>{preset.instruction}</p>
                {presetKey === 'encontro-1' ? (
                  <Link to="/oficina/encontro-1">ver encontro ↑</Link>
                ) : (
                  <Link to="/oficina/encontro-1#colinha">ver colinha ↑</Link>
                )}
              </div>
            )}

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
                  <span className="autosave-label">salvo localmente</span>
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
                <h3>Colinha do Encontro 1</h3>
              </div>
              <p>HTML, CSS e JavaScript explicados com exemplos pequenos.</p>
              <Link className="material-link" to="/oficina/encontro-1#colinha">
                abrir →
              </Link>
            </article>

            <article>
              <div>
                <span>atividade</span>
                <h3>Missão 01</h3>
              </div>
              <p>
                {progress.completed
                  ? 'Concluída neste navegador.'
                  : 'Personalizar o projeto inicial e testar as primeiras mudanças.'}
              </p>
              {progress.completed ? (
                <span className="material-complete">concluída ✓</span>
              ) : (
                <Link
                  className="material-link"
                  to="/oficina?preset=encontro-1#laboratorio"
                >
                  começar →
                </Link>
              )}
            </article>

            <article>
              <div>
                <span>próximos encontros</span>
                <h3>Mais materiais</h3>
              </div>
              <p>Novas colinhas e missões entram aqui conforme os encontros forem montados.</p>
              <span className="material-status">em preparação</span>
            </article>
          </div>

          <div className="local-data-controls">
            <p>
              Progresso e código ficam apenas neste navegador. Use esta opção se
              quiser limpar o Chromebook ao terminar.
            </p>
            <button type="button" onClick={clearLocalData}>
              apagar dados deste navegador
            </button>
          </div>
        </section>
      </main>

      <footer className="workshop-footer workshop-container">
        <span>Programando o Futuro · 2026</span>
        <span>sem login · dados locais · direto no navegador</span>
      </footer>
    </div>
  )
}

export default Workshop
