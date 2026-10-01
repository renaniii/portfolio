# Como atualizar seu portfólio

## 1. Guardar e revisar

1. Guarde uma cópia do projeto que você usa atualmente.
2. Extraia este ZIP. A pasta `portfolio-main` contém o código, não um instalador.
3. No seu repositório local, substitua os arquivos correspondentes pelos desta pasta. Preserve a pasta `.git` do seu repositório.
4. Confira também os arquivos ocultos, incluindo `.github` e `.gitignore`.
5. Abra a pasta no VSCodium e confira nome, GitHub e textos em `src/data/portfolio.ts`.

O projeto continua com React + Vite; não precisa trocar de hospedagem nem alterar o DNS.

## 2. Testar antes de enviar

No terminal dentro da pasta:

```bash
npm ci
npm run lint
npm run build
npm run preview
```

Confira no navegador:

- Navegação Projetos, Sobre, Contato e Voltar ao topo.
- Visual no celular, teclado Tab e foco visível.
- Link público do GitHub.
- Oficina: alterar HTML, CSS e JavaScript; testar o botão do exemplo.
- Trocar exemplos sem misturar rascunhos; atualizar a página e verificar restauração.
- Baixar um projeto HTML e usar o botão para apagar dados locais.
- Acessar diretamente `/oficina/encontro-1` e atualizar a página.

## 3. Publicar na Vercel

Se o projeto da Vercel estiver conectado ao seu repositório GitHub, envie as alterações para esse mesmo repositório. Para revisar antes de produção, use uma branch e uma pull request; confira o deploy de preview antes de mesclar na branch de produção.

Se você usa a interface do GitHub, use **Add file → Upload files** para enviar os arquivos extraídos ao repositório correto. Não envie apenas o ZIP e não crie uma segunda pasta `portfolio-main` dentro da raiz do projeto. Confira a lista de alterações antes de confirmar.

Configuração esperada na Vercel:

- Framework: Vite
- Build: `npm run build`
- Output: `dist`
- Root Directory: a pasta que contém `package.json`
- Nenhuma chave secreta necessária para esta versão.

Esta entrega não publicou mudanças na sua conta. A publicação acontece após seu envio ao repositório conectado, ou um deploy feito por você.

## 4. Conferir após o deploy

- Abra o link de preview da Vercel, depois o domínio final.
- Repita os testes do editor: os cabeçalhos de produção podem interferir no iframe.
- No DevTools → Network, abra a resposta da home: deve haver `Content-Security-Policy` e `X-Content-Type-Options`.
- A resposta de `/workshop-preview.html` deve ter uma CSP diferente, permitindo scripts inline somente nesse documento isolado.
- A oficina deve responder com `X-Robots-Tag: noindex, nofollow, noarchive`.
- Confirme HTTPS e o redirecionamento raiz → www configurado na sua conta.

## 5. Manter organizado

Para adicionar projetos, duplique um item de `projects` em `src/data/portfolio.ts`, use um `id` único e informe links de demonstração e detalhe que realmente existam. O componente atual espera rotas internas. Crie a página e registre a rota em `src/main.tsx` quando necessário. As descrições e tecnologias devem refletir o que você fez; atualize o status apenas quando mudar de verdade.

Uma mudança por vez: editar → testar → revisar → publicar. Guarde os commits para poder voltar a uma versão anterior. Evite atualizações automáticas de dependências sem rodar build e lint.
