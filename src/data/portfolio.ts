import { workshop } from "./workshop";
// Edite aqui o conteúdo da página inicial. Publique apenas informações públicas.
export const portfolio = {
  name: "Renan Amador",
  github: "https://github.com/renaniii",
  origin: "https://www.renanamador.dev",
  intro:
    "Estudante de Ciência da Computação e Pedagogia. Exploro desenvolvimento web, Linux e formas de tornar a tecnologia mais acessível.",
  about:
    "Gosto de entender como as coisas funcionam e transformar esse aprendizado em projetos úteis. A computação me dá ferramentas para construir; a pedagogia me ajuda a pensar em quem vai usar.",
  tools: ["React", "TypeScript", "HTML & CSS", "Git", "Fedora", "VSCodium"],
  projects: [
    {
      id: "programando-o-futuro",
      number: "01",
      category: "TECNOLOGIA + EDUCAÇÃO",
      title: workshop.title,
      subtitle: workshop.subtitle,
      status: "Em preparação",
      description:
        "Uma plataforma para experimentar programação no navegador. Reúne atividades guiadas e um laboratório de HTML, CSS e JavaScript, sem cadastro de estudantes.",
      tags: ["React", "TypeScript", "Editor web"],
      detail: "/projetos/programando-o-futuro",
      demo: "/oficina",
    },
  ],
} as const;
