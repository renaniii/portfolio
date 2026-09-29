import { Link } from 'react-router'

import PageMeta from '../components/PageMeta'
import './EncounterOne.css'

function EncounterOne() {
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
          <Link className="encounter-back" to="/oficina">
            ← oficina
          </Link>
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

        <section className="mission-section">
          <div className="encounter-container mission-grid">
            <div>
              <p className="encounter-path">~/missao-01</p>
              <h2>Faça esse projeto deixar de ser o meu exemplo e virar o seu.</h2>
            </div>

            <div className="mission-copy">
              <p>
                Troque pelo menos três coisas: um texto, uma cor e a mensagem do
                botão. Depois disso, continue mexendo no que quiser.
              </p>

              <div className="mission-checks">
                <span>□ mude o título</span>
                <span>□ escolha outra cor</span>
                <span>□ altere a mensagem do botão</span>
                <span>□ faça mais uma mudança por conta própria</span>
              </div>

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
          <div className="encounter-section-label">02 / se travar</div>

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
            <span>fim do encontro</span>
            <h2>Se você mudou o código e viu a tela responder, já começou.</h2>
          </div>

          <Link to="/oficina?preset=encontro-1#laboratorio">
            voltar ao laboratório →
          </Link>
        </section>
      </main>

      <footer className="encounter-footer encounter-container">
        <span>Programando o Futuro · Encontro 01</span>
        <span>sem login · direto no navegador</span>
      </footer>
    </div>
  )
}

export default EncounterOne
