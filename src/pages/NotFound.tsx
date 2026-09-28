import { Link } from 'react-router'

import PageMeta from '../components/PageMeta'

function NotFound() {
  return (
    <main className="not-found">
      <PageMeta
        title="Página não encontrada — Renan Amador"
        description="A página que você tentou acessar não existe."
        canonicalPath="/404"
      />

      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <p className="not-found__eyebrow">PÁGINA NÃO ENCONTRADA</p>
        <h1>Esse caminho ainda não existe.</h1>
        <p className="not-found__description">
          Volte ao portfólio para continuar explorando meus projetos.
        </p>
        <Link className="not-found__link" to="/">
          ← Voltar ao início
        </Link>
      </div>
    </main>
  )
}

export default NotFound
