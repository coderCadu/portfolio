import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Carlos Silva — Desenvolvedor Web Fullstack",
  author: "Carlos Silva",
  description:
    "Desenvolvedor de São Paulo (ZO),  especializado no desenvolvimento de aplicações web e na aplicação de práticas de DevOps no dia a dia.",
  lang: "pt-BR",
  siteLogo: "/carlos.jpeg",
  navLinks: [
    { text: "Experiência", href: "#experience" },
    { text: "Projetos", href: "#projects" },
    { text: "Sobre", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/codercadu/" },
    { text: "Github", href: "https://github.com/coderCadu/" },
  ],
  socialImage: "/portfolio.png",
  canonicalURL: "https://codercadu.dev.br/",

};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Carlos Silva",
    specialty: "Desenvolvedor Web Fullstack",
    summary:
      "Desenvolvedor de São Paulo (ZO),  especializado no desenvolvimento de aplicações web e na aplicação de práticas de DevOps no dia a dia.",
    email: "carlosedu.waldorf@gmail.com",
  },
  experience: [
    {
      company: "Telefonica BR (Vivo)",
      position: "Desenvolvedor Fullstack Sr",
      startDate: "Maio 2025",
      endDate: "Atual",
      summary: [
        "Atuei como mentor de uma desenvolvedora da squad, que foi promovida de estagiária a desenvolvedora plena.",
        "Participo, junto ao tech lead, das definições das histórias e de seus pontos técnicos antes que sejam repassadas para a squad.",
        "Desenvolvi o projeto de atualização da interface do eSIM B2B, modernizando o design e implementando responsividade e acessibilidade.",
      ],
    },
    {
      company: "Telefonica BR (Vivo)",
      position: "Desenvolvedor Fullstack Pl",
      startDate: "Outubro 2022",
      endDate: "Maio 2025",
      summary: [
        "Desenvolvi, no projeto eSIM B2B, uma interface de gestão de chips eSIM voltada para gestores e colaboradores das empresas. A solução superou 10 mil ativações nos primeiros dias após o lançamento.",
        "Implementei uma evolução no projeto eSIM B2B que permitiu aos gestores ativar múltiplos chips simultaneamente — uma funcionalidade essencial, já que, na prática, raramente se ativa apenas um chip por vez.",
        "Otimizei o pacote da aplicação sob responsabilidade da minha squad, reduzindo os tempos de carregamento do módulo em até 30%.",
        "Participei do time de SRE B2B, atuando em situações críticas para garantir a estabilidade do sistema.",
        "Conduzi o processo de onboarding de diversos desenvolvedores e arquitetos, garantindo que pudessem alcançar uma boa performance ao integrarem suas respectivas squads.",
      ],
    },
    {
      company: "Telefonica BR (Vivo)",
      position: "Desenvolvedor Fullstack Jr",
      startDate: "Agosto 2021",
      endDate: "Outubro 2022",
      summary: [
        "Codifiquei no projeto de gestão de consumo, no qual usuários de planos B2B com características específicas podiam administrar, por meio de uma interface web, a quantidade de dados e minutos alocados nos telefones corporativos — proporcionando uma melhor experiência do usuário. Esse projeto era essencial para o controle eficiente da alocação de dados e minutos nos aparelhos.",
        "Atuei ativamente nas discussões técnicas do time, colaborando na definição de diferentes abordagens para as soluções do projeto de gestão de consumo.",
      ]
    },
    {
      company: "Pontaltech",
      position: "Desenvolvedor Backend Jr | Node",
      startDate: "Janeiro 2020",
      endDate: "Novembro 2020",
      summary:
        "Desenvolvi, junto ao time, o projeto Verified SMS, que, em parceria com o Google, verifica se a empresa remetente das mensagens é, de fato, quem diz ser — proporcionando mais segurança nas conversas via SMS. Na época do desenvolvimento, a funcionalidade estava disponível apenas no aplicativo de mensagens da Google.",
    },
    {
      company: "Indigosoft",
      position: "Desenvolvedor Fullstack | Estágio",
      startDate: "Agosto 2019",
      endDate: "Janeiro 2020",
      summary: [
        "Desenvolvi bots em C#/.NET para automatizar processos, o que reduziu significativamente o tempo de execução de ações nos sistemas legados da Sky. Isso tornou mais eficiente o processo de contratação, alteração e cancelamento de planos.",
        "Desenvolvi scripts de web scraping utilizando C# para integrar ao fluxo de RPA da empresa, que era seu principal produto.",
        "Criei aplicações web utilizando Razor Syntax, Microsoft Web Server, SQL Server e C#. Essas aplicações serviam como interface para que as empresas pudessem acessar as automações de forma mais simples e ágil, otimizando a resolução de seus problemas."
      ],
    },
  ],
  projects: [
    {
      name: "Hackclub",
      summary: "Uma plataforma está sendo desenvolvida no curso.dev com a proposta de ser semelhante ao TabNews, porém com diferenças na implementação de código por parte de cada dev. O projeto está seguindo a abordagem API First.",
      linkPreview: "https://www.hackclub.com.br/status",
      linkSource: "https://github.com/coderCadu/hackclub/",
      image: "/hackclub.png",
    },
  ],
  about: {
    description: `
      Olá, sou Carlos Silva, desenvolvedor fullstack sênior com foco em aplicações web e back-end distribuído. Com sólida experiência em Node.js, Go, React e Vue.js, gosto de construir soluções eficientes, seguras e escaláveis.

      Ao longo da carreira, participei de projetos de alto impacto, como o sistema de eSIM B2B da Vivo e a solução de Verified SMS em parceria com o Google. Atuo na interseção entre código limpo, boas práticas de arquitetura e experiência do usuário, sempre com foco em performance e colaboração entre equipes.
    `,
    image: "/carlos.jpeg",
  },
};

// #5755ff
