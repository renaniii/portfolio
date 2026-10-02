# Renan Amador — Portfólio

Portfólio pessoal com React, TypeScript e Vite. Tema escuro com roxo, projetos, apresentação e link público do GitHub. Inclui a plataforma Programando o Futuro, ainda em preparação.

## Começar no seu computador

Use Node.js 22.12 ou superior compatível com as versões do projeto.

```bash
npm ci
npm run dev
```

Abra o endereço que o terminal mostrar. Para verificar antes de publicar:

```bash
npm run lint
npm run build
npm run preview
```

`preview` não reproduz os cabeçalhos da Vercel. Depois de publicar, faça também os testes descritos em `ATUALIZAR.md`.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Nome, resumo, GitHub, tecnologias e lista de projetos | `src/data/portfolio.ts` |
| Estrutura e textos adicionais da página inicial | `src/App.tsx` |
| Cores, espaçamentos e visual responsivo da home | `src/App.css` |
| Estudo de caso do projeto | `src/pages/ProgramandoFuturo.tsx` |
| Exemplos e editor da oficina | `src/pages/Workshop.tsx` |
| Domínio e metadados das páginas | `src/data/portfolio.ts` e `src/components/PageMeta.tsx` |
| Metadados iniciais para buscadores e redes sociais | `index.html` |
| Lista pública para buscadores | `public/sitemap.xml` |
| Regras da hospedagem atual | `vercel.json` |

Mantenha `origin`, os links absolutos em `index.html`, `robots.txt` e `sitemap.xml` consistentes se trocar de domínio. A versão atual usa `https://www.renanamador.dev`, considerando o redirecionamento do domínio raiz para www.

## Rotas

- `/`: portfólio
- `/projetos/programando-o-futuro`: apresentação do projeto
- `/oficina`: laboratório e materiais
- `/oficina/encontro-1`: atividade guiada
- `/oficina/historia-da-computacao`: cinco perfis curtos para a abertura do primeiro encontro
- `/oficina/privacidade`: explicação dos dados locais
- `/oficina/educador`: **guia público**, sem dados de estudantes e sem autenticação
- Outras URLs: tela de página não encontrada (fallback SPA; pode retornar HTTP 200).

## Privacidade e limites

A aplicação não inclui analytics, anúncios, cadastro ou banco de dados. Rascunhos e progresso ficam em localStorage, têm validade de 12 horas e são descartados na leitura após esse prazo; não são apagados com a página fechada. Use o botão de apagar dados em computadores compartilhados. Se o navegador impedir gravações, o editor continua funcionando, mas é preciso exportar para guardar o trabalho.

O editor usa iframes com `sandbox="allow-scripts"`, sem `allow-same-origin`, e uma política de conteúdo própria. Isso limita acesso ao portfólio e conexões externas; não torna seguro executar qualquer código arbitrário. Código com loops infinitos pode travar a aba. A infraestrutura de hospedagem ainda processa informações técnicas de conexão.

`vercel.json` define CSP, restrições de permissões, regras de indexação da oficina e proteção contra enquadramento. A página de preview precisa de uma política diferente para executar exemplos dentro do sandbox. **Não aplique a CSP da home ao preview.**

Os arquivos `public/_headers`, `public/_redirects` e `netlify/` são legados da hospedagem anterior, preservados para referência. Eles **não configuram a Vercel**. O login antigo da Netlify não protege nenhuma rota na Vercel; o guia do educador contém somente conteúdo público. Nunca coloque documentos, senhas ou informações de estudantes no frontend.

## Atualização

Siga `ATUALIZAR.md`. Não envie `node_modules`, `.env` ou credenciais para o GitHub. O arquivo de dependências travadas (`package-lock.json`) deve acompanhar `package.json`.

## Oficina para todos os estudantes

Identidade compartilhada em `src/data/workshop.ts`. Materiais de planejamento, inscrição, comunicação e registros em `docs/oficina/LEIA-PRIMEIRO.md`. Guia público e imprimível em `/materiais/guia-oficina.html`. O editor permite guardar e abrir projetos `.json` localmente, para continuar entre semanas. Datas, capacidade e validação institucional precisam de confirmação; a sondagem inicial no Forms é separada da inscrição e seu banner ainda precisa ser substituído.
