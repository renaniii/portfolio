import { workshop } from "../data/workshop";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router";

import PageMeta from "../components/PageMeta";
import {
  clearLabDraft,
  clearWorkshopProgress,
  getEncounterOneProgress,
  getLabDraft,
  saveLabDraft,
} from "../lib/workshopStorage";
import "./Workshop.css";

type EditorTab = "html" | "css" | "js";
type PresetKey =
  "base" | "encontro-1" | "html-basico" | "css-basico" | "js-basico";

type LabPreset = {
  label: string;
  instruction: string;
  html: string;
  css: string;
  js: string;
  tab: EditorTab;
  filename: string;
};

type LabState = {
  presetKey: PresetKey;
  html: string;
  css: string;
  js: string;
};

const presets: Record<PresetKey, LabPreset> = {
  base: {
    label: "projeto livre",
    instruction: "Mexa no código, observe o resultado e teste suas ideias.",
    tab: "html",
    filename: "meu-projeto.html",
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

  "encontro-1": {
    label: "missão 01",
    instruction:
      "Mude um texto, uma cor e a mensagem do botão. Depois faça mais uma alteração por conta própria.",
    tab: "html",
    filename: "missao-01.html",
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

  "html-basico": {
    label: "exemplo de HTML",
    instruction:
      "Troque o título e o parágrafo. Depois adicione mais uma linha com uma tag <p>.",
    tab: "html",
    filename: "exemplo-html.html",
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
    js: "",
  },

  "css-basico": {
    label: "exemplo de CSS",
    instruction:
      "Mude background, color e border-radius. Veja cada mudança aparecer na hora.",
    tab: "css",
    filename: "exemplo-css.html",
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
    js: "",
  },

  "js-basico": {
    label: "exemplo de JavaScript",
    instruction:
      "Clique no botão e depois troque a frase dentro de textContent.",
    tab: "js",
    filename: "exemplo-javascript.html",
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
};

const loadLabState = (presetKey: PresetKey): LabState => {
  const preset = presets[presetKey];
  const draft = getLabDraft(presetKey);

  return {
    presetKey,
    html: draft?.html ?? preset.html,
    css: draft?.css ?? preset.css,
    js: draft?.js ?? preset.js,
  };
};

function Workshop() {
  const [searchParams] = useSearchParams();
  const presetParam = searchParams.get("preset");
  const presetKey: PresetKey =
    presetParam && Object.hasOwn(presets, presetParam)
      ? (presetParam as PresetKey)
      : "base";
  return <WorkshopContent key={presetKey} presetKey={presetKey} />;
}

function WorkshopContent({ presetKey }: { presetKey: PresetKey }) {
  const preset = presets[presetKey];
  const [tab, setTab] = useState<EditorTab>(preset.tab);
  const [lab, setLab] = useState<LabState>(() => loadLabState(presetKey));
  const [progress, setProgress] = useState(getEncounterOneProgress);

  useEffect(() => {
    if (lab.presetKey !== presetKey) return;

    const saveTimer = window.setTimeout(() => {
      saveLabDraft(presetKey, {
        html: lab.html,
        css: lab.css,
        js: lab.js,
      });
    }, 350);

    return () => window.clearTimeout(saveTimer);
  }, [lab, presetKey]);

  useEffect(() => {
    if (!window.location.hash) return;

    const id = window.location.hash.slice(1);
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [presetKey]);

  const preview = useMemo(() => {
    const safeJs = lab.js.replace(/<\/script/gi, "<\\/script");

    return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    http-equiv="Content-Security-Policy"
    content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; connect-src 'none'; font-src 'none'; media-src 'none'; object-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'none'"
  />
  <style>${lab.css}</style>
</head>
<body>
  ${lab.html}
  <script>
    try {
      ${safeJs}
    } catch (error) {
      const message = document.createElement('pre')
      message.textContent = String(error)
      document.body.appendChild(message)
    }
  </script>
</body>
</html>`;
  }, [lab.css, lab.html, lab.js]);

  const previewFrame = useRef<HTMLIFrameElement>(null);

  const sendPreview = useCallback(() => {
    previewFrame.current?.contentWindow?.postMessage(
      {
        type: "workshop-preview",
        html: preview,
      },
      "*",
    );
  }, [preview]);

  useEffect(() => {
    const handleReady = (event: MessageEvent) => {
      if (
        event.source === previewFrame.current?.contentWindow &&
        event.data?.type === "workshop-preview-ready"
      )
        sendPreview();
    };
    window.addEventListener("message", handleReady);
    const previewTimer = window.setTimeout(sendPreview, 180);
    return () => {
      window.clearTimeout(previewTimer);
      window.removeEventListener("message", handleReady);
    };
  }, [sendPreview]);

  const resetProject = () => {
    clearLabDraft(presetKey);
    setLab({
      presetKey,
      html: preset.html,
      css: preset.css,
      js: preset.js,
    });
    setTab(preset.tab);
  };

  const exportProject = () => {
    const file = new Blob([preview], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = preset.filename;
    link.click();

    URL.revokeObjectURL(url);
  };

  const [fileMessage, setFileMessage] = useState("");
  const importInput = useRef<HTMLInputElement>(null);

  const saveEditableProject = () => {
    const data = {
      format: "programando-futuro",
      version: 1,
      html: lab.html,
      css: lab.css,
      js: lab.js,
    };
    const file = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    if (file.size > 500_000) {
      setFileMessage("O projeto ultrapassou 500 KB. Reduza o código antes de guardar um arquivo que possa ser reaberto.");
      return;
    }
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "meu-projeto.json";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setFileMessage(
      "Download solicitado. Guarde o arquivo .json para continuar no próximo encontro.",
    );
  };

  const importEditableProject = async (file: File | undefined) => {
    if (!file) return;
    if (file.size > 500_000) {
      setFileMessage(
        "Esse arquivo é muito grande. Escolha um projeto .json de até 500 KB.",
      );
      return;
    }
    try {
      const data: unknown = JSON.parse(await file.text());
      if (
        !data ||
        typeof data !== "object" ||
        !("format" in data) ||
        data.format !== "programando-futuro" ||
        !("version" in data) ||
        data.version !== 1 ||
        !("html" in data) ||
        typeof data.html !== "string" ||
        !("css" in data) ||
        typeof data.css !== "string" ||
        !("js" in data) ||
        typeof data.js !== "string"
      ) {
        throw new Error("Formato inválido");
      }
      if (
        !window.confirm(
          "Abrir este arquivo substitui o código atual deste exemplo. Você já guardou o que deseja manter?",
        )
      )
        return;
      setLab({ presetKey, html: data.html, css: data.css, js: data.js });
      setTab("html");
      setFileMessage(
        "Projeto aberto neste navegador. O arquivo não foi enviado ao servidor.",
      );
    } catch {
      setFileMessage(
        "Não foi possível abrir. Escolha o arquivo .json criado por ‘guardar projeto’, não o HTML.",
      );
    }
  };

  const clearLocalData = () => {
    const confirmed = window.confirm(
      "Apagar o progresso e os códigos salvos neste navegador?",
    );

    if (!confirmed) return;

    clearWorkshopProgress();
    setProgress(getEncounterOneProgress());
    setLab({
      presetKey,
      html: preset.html,
      css: preset.css,
      js: preset.js,
    });
    setTab(preset.tab);
  };

  const currentValue =
    tab === "html" ? lab.html : tab === "css" ? lab.css : lab.js;

  const setCurrentValue = (value: string) => {
    setLab((current) => ({
      ...current,
      [tab]: value,
    }));
  };

  const completedSteps = progress.checklist.filter(Boolean).length;

  return (
    <div className="workshop-page">
      <PageMeta
        title="Programando o Futuro — Oficina"
        description="Plataforma da oficina Programando o Futuro: primeiros passos na programação."
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
            <a href="/oficina/educador">educador</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="workshop-hero workshop-container" id="inicio">
          <div className="workshop-hero-copy">
            <p className="workshop-path">
              {workshop.title} · {workshop.subtitle}
            </p>
            <h1>
              Bora criar
              <br />
              alguma coisa?
            </h1>

            <p>
              {workshop.audience} Aqui você testa código, escolhe um tema de que
              gosta e cria uma página interativa. {workshop.format}
            </p>

            <a className="workshop-start" href="#encontros">
              começar ↓
            </a>
          </div>

          <aside className="privacy-note">
            <span>privacidade</span>
            <p>
              Neste laboratório não pedimos nome, e-mail ou conta. Eventuais
              inscrições são organizadas separadamente pela escola. O
              laboratório roda no próprio navegador e não envia seu código para
              um servidor.
            </p>
          </aside>
        </section>

        {progress.started && (
          <section className="local-progress workshop-container">
            <div>
              <span>progresso neste navegador</span>
              <p>
                Encontro 01 ·{" "}
                {progress.completed
                  ? "concluído ✓"
                  : `${completedSteps}/4 itens da missão`}
              </p>
            </div>

            <Link to="/oficina/encontro-1">
              {progress.completed ? "rever encontro →" : "continuar →"}
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
                {progress.completed ? "✓" : "01"}
              </span>
              <div>
                <p>
                  {progress.completed
                    ? "concluído neste navegador"
                    : progress.started
                      ? `${completedSteps}/4 da missão · em andamento`
                      : "primeiro contato · disponível"}
                </p>
                <h3>Experimentar</h3>
                <span>
                  Conhecer pessoas que contribuíram para a computação e depois
                  mudar código, observar o resultado e criar algo seu.
                </span>
                <Link className="meeting-open" to="/oficina/encontro-1">
                  {progress.completed
                    ? "rever encontro 01 →"
                    : progress.started
                      ? "continuar encontro 01 →"
                      : "abrir encontro 01 →"}
                </Link>
              </div>
            </article>

            <article className="meeting-card-active">
              <span className="meeting-number">02</span>
              <div>
                <p>mão na massa · roteiro disponível</p>
                <h3>Criar</h3>
                <span>
                  Juntar HTML, CSS e JavaScript em uma página sobre um tema de
                  sua escolha.
                </span>
                <a
                  className="meeting-open"
                  href={`${workshop.guide}#encontro-2`}
                >
                  abrir roteiro 02 →
                </a>
              </div>
            </article>

            <article className="meeting-card-active">
              <span className="meeting-number">03</span>
              <div>
                <p>testar e apresentar · roteiro disponível</p>
                <h3>Compartilhar</h3>
                <span>
                  Ajustar o projeto, entender as escolhas e mostrar o que foi
                  construído.
                </span>
                <a
                  className="meeting-open"
                  href={`${workshop.guide}#encontro-3`}
                >
                  abrir roteiro 03 →
                </a>
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
              Mude o código do lado esquerdo. O resultado aparece do lado
              direito depois de uma pausa curtinha, para o editor ficar mais
              estável nos Chromebooks. Suas alterações ficam salvas somente
              neste navegador.
            </p>

            {presetKey !== "base" && (
              <div className="lab-mission">
                <span>{preset.label} carregado</span>
                <p>{preset.instruction}</p>
                {presetKey === "encontro-1" ? (
                  <Link to="/oficina/encontro-1">ver encontro ↑</Link>
                ) : (
                  <Link to="/oficina/encontro-1#colinha">ver colinha ↑</Link>
                )}
              </div>
            )}

            <div className="project-file-tools">
              <p>
                Para continuar em outra semana, guarde o projeto e reabra o
                arquivo no próximo encontro.
              </p>
              <div>
                <button type="button" onClick={saveEditableProject}>
                  guardar projeto (.json)
                </button>
                <button
                  type="button"
                  onClick={() => importInput.current?.click()}
                >
                  abrir projeto (.json)
                </button>
                <input
                  ref={importInput}
                  type="file"
                  accept=".json,application/json"
                  hidden
                  aria-label="Arquivo de projeto"
                  onChange={(event) => {
                    void importEditableProject(event.target.files?.[0]);
                    event.target.value = "";
                  }}
                />
              </div>
              <p role="status" aria-live="polite">
                {fileMessage}
              </p>
            </div>
            <div className="lab-window">
              <div className="lab-toolbar">
                <div
                  className="editor-tabs"
                  role="tablist"
                  aria-label="Arquivos do projeto"
                >
                  {(["html", "css", "js"] as EditorTab[]).map((item) => (
                    <button
                      className={tab === item ? "active" : ""}
                      key={item}
                      onClick={() => setTab(item)}
                      role="tab"
                      aria-selected={tab === item}
                    >
                      {item === "js" ? "script.js" : `index.${item}`}
                    </button>
                  ))}
                </div>

                <div className="lab-actions">
                  <span className="autosave-label">rascunho no navegador</span>
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
                    autoComplete="off"
                    autoCapitalize="off"
                    wrap="off"
                    aria-label={`Código ${tab.toUpperCase()}`}
                  />
                </label>

                <div className="preview-pane">
                  <div className="preview-label">resultado</div>
                  <iframe
                    ref={previewFrame}
                    title="Resultado do código"
                    sandbox="allow-scripts"
                    referrerPolicy="no-referrer"
                    allow="camera 'none'; microphone 'none'; geolocation 'none'; fullscreen 'none'"
                    src="/workshop-preview.html"
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
              <div><span>contexto · 5 min</span><h3>Pessoas que fizeram história na computação</h3></div>
              <p>Cinco contribuições para conhecer antes de criar sua página.</p>
              <Link className="material-link" to="/oficina/historia-da-computacao">conhecer →</Link>
            </article>
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
                  ? "Concluída neste navegador."
                  : "Personalizar o projeto inicial e testar as primeiras mudanças."}
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
                <span>guia completo</span>
                <h3>Três encontros, um projeto</h3>
              </div>
              <p>
                Roteiros, desafios, exemplos e orientações para criar e
                apresentar sua página interativa.
              </p>
              <a className="material-link" href={workshop.guide}>
                abrir guia →
              </a>
            </article>
          </div>

          <div className="local-data-controls">
            <p>
              Progresso e código ficam neste navegador, com validade de 12
              horas. Registros vencidos são descartados quando lidos novamente.
              Apague os dados antes de devolver um Chromebook compartilhado.
            </p>
            <button type="button" onClick={clearLocalData}>
              apagar dados deste navegador
            </button>
          </div>
        </section>
      </main>

      <footer className="workshop-footer workshop-container">
        <span>Programando o Futuro · 2026</span>
        <div className="workshop-footer-links">
          <a href="/oficina/educador">apoio do educador</a>
          <Link to="/oficina/privacidade">privacidade</Link>
        </div>
        <span>sem login · dados locais · direto no navegador</span>
      </footer>
    </div>
  );
}

export default Workshop;
