# Verificação desta entrega

- `npm run lint`: passou sem avisos.
- `npm run build`: passou.
- Conferência visual em Chromium: home em 1440 px e 390 px; sem overflow horizontal na home de 390 px.
- Rotas: projeto, encontro 1, privacidade, educador e página inexistente carregaram.
- Editor: alteração de HTML refletida na prévia, restauração após recarregar, download HTML e reset do exemplo passaram.
- Exemplo JavaScript: clique real no botão alterou o texto da prévia.
- Armazenamento: restauração, validade vencida, dados malformados e armazenamento bloqueado passaram.
- Nenhum erro JavaScript observado nos fluxos verificados.

O build foi servido localmente com os cabeçalhos definidos em `vercel.json`, reproduzidos por um servidor de teste. Isso verifica o comportamento no navegador; não substitui conferir a aplicação dessas regras no deploy real da Vercel. Nenhuma publicação ou configuração da conta foi alterada nesta entrega.

A conferência visual cobriu Chromium. Firefox, Safari e aparelhos físicos não foram testados.

## Ampliação da oficina — 02/10/2026

- Build e lint passaram após as alterações.
- Rotas de portfólio, projeto, oficina, educador, privacidade e guia carregaram sem a identidade restrita ao público anterior.
- Exportação e importação de projeto JSON passaram; prévia renderizou o conteúdo reaberto.
- Arquivo inválido, cancelamento da substituição e limite de 500 KB preservaram o trabalho atual.
- Home, oficina e guia sem overflow horizontal em 390 px.
- Guia conferido visualmente em desktop; nenhum erro de navegador observado nos fluxos testados.
- Teste local em Chromium com as políticas de resposta do projeto; publicação real, Google Forms e documentos institucionais não foram alterados por esses testes.
