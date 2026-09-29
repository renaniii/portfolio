import { Link } from 'react-router'

import PageMeta from '../components/PageMeta'
import './WorkshopPrivacy.css'

function WorkshopPrivacy() {
  return (
    <div className="privacy-page">
      <PageMeta
        title="Privacidade — Programando o Futuro"
        description="Como a plataforma da oficina Programando o Futuro trata dados e código durante o uso."
        canonicalPath="/oficina/privacidade"
      />

      <header className="privacy-header">
        <div className="privacy-container privacy-nav">
          <Link to="/oficina">Programando o Futuro</Link>
          <Link to="/oficina">← oficina</Link>
        </div>
      </header>

      <main className="privacy-container privacy-main">
        <p className="privacy-path">~/oficina/privacidade</p>
        <h1>Privacidade sem complicação.</h1>

        <p className="privacy-lead">
          A plataforma foi feita para funcionar com o mínimo de dados possível.
          Ela não precisa saber quem você é para ensinar programação.
        </p>

        <section>
          <span>01</span>
          <div>
            <h2>O que a plataforma não pede</h2>
            <p>
              Não há cadastro, nome, e-mail, senha, perfil, ranking ou conta de
              estudante. A aplicação também não inclui ferramentas próprias de
              analytics, anúncios ou rastreamento de comportamento.
            </p>
          </div>
        </section>

        <section>
          <span>02</span>
          <div>
            <h2>O que fica no navegador</h2>
            <p>
              O progresso do Encontro 1 e os códigos digitados no laboratório são
              salvos localmente para evitar perder o trabalho ao recarregar a
              página. Esses dados expiram automaticamente em até 12 horas e podem
              ser apagados antes disso pela própria plataforma.
            </p>
          </div>
        </section>

        <section>
          <span>03</span>
          <div>
            <h2>Como o laboratório é isolado</h2>
            <p>
              O código é executado dentro de uma área isolada do restante da
              plataforma. Ela não recebe acesso à conta, ao armazenamento da
              página principal, à câmera, ao microfone ou à localização.
            </p>
            <p>
              O preview também bloqueia conexões externas por padrão, para que os
              exemplos da oficina funcionem sem enviar o código para serviços de
              terceiros.
            </p>
          </div>
        </section>

        <section>
          <span>04</span>
          <div>
            <h2>Hospedagem</h2>
            <p>
              Como qualquer site publicado na internet, a infraestrutura de
              hospedagem precisa processar informações técnicas necessárias para
              entregar a página, como a conexão feita pelo navegador. A aplicação
              da oficina não usa esses dados para criar perfis das participantes.
            </p>
          </div>
        </section>

        <section>
          <span>05</span>
          <div>
            <h2>Antes de sair de um Chromebook compartilhado</h2>
            <p>
              Se o computador for usado por outra pessoa depois da oficina, use
              “apagar dados deste navegador” na página principal da oficina. Isso
              remove o progresso e os rascunhos guardados pela plataforma.
            </p>
            <Link className="privacy-action" to="/oficina#materiais">
              voltar e gerenciar dados →
            </Link>
          </div>
        </section>
      </main>

      <footer className="privacy-footer privacy-container">
        <span>Programando o Futuro · privacidade</span>
        <span>mínimo de dados · sem login</span>
      </footer>
    </div>
  )
}

export default WorkshopPrivacy
