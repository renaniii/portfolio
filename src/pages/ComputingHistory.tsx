import { Link } from "react-router";
import PageMeta from "../components/PageMeta";
import { workshop } from "../data/workshop";
import "./ComputingHistory.css";

const people = [
  {
    name: "Ada Lovelace", idea: "Imaginar possibilidades",
    text: "Em 1843, publicou notas sobre a Máquina Analítica de Charles Babbage, incluindo um procedimento para calcular números de Bernoulli. Percebeu que uma máquina poderia trabalhar com mais do que números.",
    source: "Computer History Museum", url: "https://www.computerhistory.org/babbage/adalovelace/",
  },
  {
    name: "Alan Turing", idea: "Pensar em instruções",
    text: "Em 1936, propôs um modelo matemático de máquina capaz de seguir instruções. Seu trabalho ajudou a estabelecer as bases da computação e a investigar o que pode ser calculado.",
    source: "Universidade de Manchester", url: "https://curation.cs.manchester.ac.uk/digital60/www.digital60.org/about/biographies/alanturing/index.html",
  },
  {
    name: "Grace Hopper", idea: "Facilitar a programação",
    text: "Desenvolveu um dos primeiros compiladores, ferramentas que traduzem programas para execução por máquinas. Também teve um papel importante na definição da linguagem COBOL, aproximando a programação de uma escrita mais legível.",
    source: "Computer History Museum", url: "https://computerhistory.org/profile/grace-murray-hopper/",
  },
  {
    name: "Margaret Hamilton", idea: "Construir com cuidado",
    text: "Liderou a equipe responsável pelo software de voo das missões Apollo. Seu trabalho mostra a importância de testar programas, lidar com falhas e construir sistemas confiáveis em equipe.",
    source: "NASA", url: "https://science.nasa.gov/people/margaret-hamilton/",
  },
  {
    name: "Tim Berners-Lee", idea: "Conectar informações",
    text: "Inventou a World Wide Web em 1989, no CERN, e desenvolveu o primeiro navegador e servidor web. A Web conecta páginas por links; ela é um dos serviços que usam a internet.",
    source: "CERN", url: "https://home.cern/science/computing/the-birth-of-the-web/",
  },
];

export default function ComputingHistory() {
  return (
    <div className="computing-history-page">
      <PageMeta title="Pessoas que fizeram história na computação"
        description="Conheça contribuições de Ada Lovelace, Alan Turing, Grace Hopper, Margaret Hamilton e Tim Berners-Lee em uma introdução breve à prática."
        canonicalPath="/oficina/historia-da-computacao" />
      <a className="skip-link" href="#historia-conteudo">Pular para o conteúdo</a>
      <header className="history-header history-container">
        <Link to="/oficina">{workshop.title}</Link>
        <Link to="/oficina/encontro-1">← Encontro 1</Link>
      </header>
      <main id="historia-conteudo" className="history-container">
        <section className="history-intro">
          <p className="history-eyebrow">{workshop.subtitle} · contexto de 5 minutos</p>
          <h1>Pessoas que fizeram história na computação</h1>
          <p>A tecnologia é construída por muitas pessoas, em diferentes épocas e equipes.
            Estes são cinco exemplos, não uma história completa. Você não precisa decorar
            nomes ou datas: procure uma ideia que desperte sua curiosidade.</p>
        </section>
        <section className="history-cards" aria-label="Cinco contribuições">
          {people.map((person, index) => (
            <article key={person.name}>
              <span className="history-eyebrow">0{index + 1} / {person.idea}</span>
              <h2>{person.name}</h2>
              <p>{person.text}</p>
              <a href={person.url} target="_blank" rel="noopener noreferrer">
                Fonte: {person.source} <span className="history-source-note">(nova aba)</span>
              </a>
            </article>
          ))}
        </section>
        <section className="history-practice">
          <p className="history-eyebrow">Agora é a sua vez</p>
          <h2>Qual ideia você gostaria de experimentar?</h2>
          <p>Imagine algo, escreva uma instrução, teste e melhore. É assim que vamos começar:
            mudando um texto, uma cor e a resposta de um botão. Há espaço para estudantes
            de todos os gêneros, inclusive quem nunca programou.</p>
          <div className="history-actions">
            <Link to="/oficina?preset=encontro-1#laboratorio">Abrir a Missão 01 →</Link>
            <Link to="/oficina/encontro-1">Voltar ao roteiro</Link>
          </div>
        </section>
      </main>
      <footer className="history-footer history-container">
        <span>{workshop.title} · sem login de estudante</span>
        <Link to="/oficina/privacidade">Privacidade</Link>
      </footer>
    </div>
  );
}
