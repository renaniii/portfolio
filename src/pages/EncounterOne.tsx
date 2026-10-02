import { useEffect, useState } from "react";
import { Link } from "react-router";

import PageMeta from "../components/PageMeta";
import {
  getEncounterOneProgress,
  saveEncounterOneProgress,
} from "../lib/workshopStorage";
import "./EncounterOne.css";

const missionItems = [
  "mude o título",
  "escolha outra cor",
  "altere a mensagem do botão",
  "faça mais uma mudança por conta própria",
];

function EncounterOne() {
  const [progress, setProgress] = useState(() => ({
    ...getEncounterOneProgress(),
    started: true,
  }));

  useEffect(() => {
    saveEncounterOneProgress(progress);
  }, [progress]);

  const completedSteps = progress.checklist.filter(Boolean).length;
  const missionReady = completedSteps === missionItems.length;

  const toggleMissionItem = (index: number) => {
    setProgress((current) => {
      const checklist = [...current.checklist];
      checklist[index] = !checklist[index];

      const next = {
        started: true,
        checklist,
        completed: current.completed && checklist.every(Boolean),
      };

      saveEncounterOneProgress(next);
      return next;
    });
  };

  const completeEncounter = () => {
    if (!missionReady) return;

    const next = {
      ...progress,
      started: true,
      completed: true,
    };

    saveEncounterOneProgress(next);
    setProgress(next);
  };

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
            <span className={progress.completed ? "progress-done" : ""}>
              {progress.completed
                ? "✓ concluído"
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
                Hoje você não precisa decorar nada. A ideia é mexer em um
                projeto que já funciona, observar o que muda e descobrir como
                HTML, CSS e JavaScript aparecem na prática.
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
              <span>00–03</span>
              <div>
                <h2>Acolher a turma</h2>
                <p>Ninguém precisa chegar sabendo. Converse sobre o que a turma gostaria de criar e combine a alternância do teclado nas duplas.</p>
              </div>
            </article>
            <article>
              <span>03–08</span>
              <div>
                <h2>Pessoas por trás da tecnologia</h2>
                <p>Conheça cinco contribuições à computação em uma conversa de cinco minutos. Não é para memorizar datas: escolha uma ideia que chamou sua atenção.</p>
                <Link to="/oficina/historia-da-computacao">conhecer essas pessoas →</Link>
              </div>
            </article>
            <article>
              <span>08–15</span>
              <div>
                <h2>Ver uma mudança acontecer</h2>
                <p>Abra o exemplo e acompanhe uma mudança de texto, cor e mensagem do botão. Observe HTML, CSS e JavaScript trabalhando juntos.</p>
              </div>
            </article>
            <article>
              <span>15–35</span>
              <div>
                <h2>Experimentar na Missão 01</h2>
                <p>Mude um texto, uma cor e a mensagem do botão, testando uma alteração por vez. Em dupla, troque quem digita e quem revisa.</p>
              </div>
            </article>
            <article>
              <span>35–45</span>
              <div>
                <h2>Criar do seu jeito</h2>
                <p>Escolha um tema e faça mais uma mudança por conta própria. Peça ajuda quando precisar e explique o que tentou.</p>
              </div>
            </article>
            <article>
              <span>45–50</span>
              <div>
                <h2>Compartilhar e guardar</h2>
                <p>Mostre uma mudança, conte em qual parte do código mexeu e guarde o projeto para o próximo encontro.</p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="cheatsheet-section encounter-container"
          id="colinha"
        >
          <div className="encounter-section-label">02 / colinha rápida</div>

          <div className="cheatsheet-content">
            <div className="cheatsheet-intro">
              <h2>Três ideias para consultar enquanto você mexe.</h2>
              <p>
                Não é para decorar. É só um lugar rápido para olhar quando bater
                a dúvida.
              </p>
            </div>

            <div className="cheatsheet-grid">
              <article>
                <span className="cheatsheet-language">HTML</span>
                <h3>O que aparece na página.</h3>
                <pre>
                  <code>{"<h1>Meu título</h1>\n<p>Meu texto</p>"}</code>
                </pre>
                <p>
                  Quer mudar uma frase? Normalmente você vai encontrar essa
                  frase no HTML.
                </p>
                <Link to="/oficina?preset=html-basico#laboratorio">
                  testar HTML →
                </Link>
              </article>

              <article>
                <span className="cheatsheet-language">CSS</span>
                <h3>Como a página fica.</h3>
                <pre>
                  <code>{"background: #171321;\ncolor: #f8f4ff;"}</code>
                </pre>
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
                <pre>
                  <code>
                    {
                      "botao.addEventListener('click', () => {\n  resposta.textContent = 'Funcionou!'\n})"
                    }
                  </code>
                </pre>
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
              <h2>
                Faça esse projeto deixar de ser o meu exemplo e virar o seu.
              </h2>

              <div className="mission-progress">
                <span>
                  {completedSteps}/{missionItems.length}
                </span>
                <progress value={completedSteps} max={missionItems.length} />
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
                Esse progresso fica salvo somente neste navegador por até 12
                horas. Nenhum nome ou conta é necessário.
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
              <p>
                Procure pelo texto dentro de uma tag como &lt;h1&gt; ou
                &lt;p&gt;.
              </p>
            </article>

            <article>
              <span>CSS</span>
              <h3>Quer mudar uma cor?</h3>
              <p>Procure por background, color ou pelo código de uma cor.</p>
            </article>

            <article>
              <span>JS</span>
              <h3>Quer mudar o clique?</h3>
              <p>
                Procure pela frase que aparece depois que o botão é clicado.
              </p>
            </article>
          </div>
        </section>

        <section className="encounter-end encounter-container">
          <div>
            <span>
              {progress.completed ? "encontro concluído ✓" : "fim do encontro"}
            </span>
            <h2>
              {progress.completed
                ? "Você terminou o primeiro encontro."
                : "Se você mudou o código e viu a tela responder, já começou."}
            </h2>

            {!progress.completed && (
              <p className="completion-hint">
                {missionReady
                  ? "Missão pronta. Agora você pode concluir o encontro."
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
        <Link to="/oficina/privacidade">privacidade</Link>
        <span>progresso local · sem login</span>
      </footer>
    </div>
  );
}

export default EncounterOne;
