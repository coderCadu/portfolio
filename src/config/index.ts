import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Carlos Silva — Desenvolvedor Web Fullstack",
  author: "Carlos Silva",
  description:
    "Desenvolvedor de São Paulo (ZO). Sou especializado no desenvolvimento de aplicações web e também aplico práticas de DevOps no meu dia a dia.",
  lang: "pt-BR",
  siteLogo: "/carlos.jpeg",
  navLinks: [
    { text: "Experiência", href: "#experience" },
    { text: "Projetos", href: "#projects" },
    { text: "Sobre", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/codercadu/" },
    { text: "Github", href: "https://github.com/coderCadu/" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/portfolio.png",
  canonicalURL: "https://codercadu.dev.br/",

};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Carlos Silva",
    specialty: "Desenvolvedor Web Fullstack",
    summary:
      "Desenvolvedor de São Paulo (ZO). Sou especializado no desenvolvimento de aplicações web e também aplico práticas de DevOps no meu dia a dia.",
    email: "carlosedu.waldorf@gmail.com",
  },
  experience: [
    {
      company: "Telefonica BR (Vivo)",
      position: "Desenvolvedor Fullstack Sr",
      startDate: "Maio 2025",
      endDate: "Atual",
      summary: [
        "Mentorei outra desenvolvedora da squad que foi promovida da estágiaria para desenvolvedora pleno.",
        "Participo, junto ao tech lead, das definições das histórias e seus pontos técnicos antes de descer para a squad.",
        "Codifiquei o projeto que atualiza a interface do eSIM B2B para que a interface tenha um design mais atual com responsividade e acessibilidade",
      ],
    },
    {
      company: "Telefonica BR (Vivo)",
      position: "Desenvolvedor Fullstack Pl",
      startDate: "Outubro 2022",
      endDate: "Maio 2025",
      summary: [
        "Desenvolvi no projeto eSIM B2B para criar uma interface de gestão dos chips eSIM para os gestores e colaboradores das empresas. Teve mais de 10 mil ativações nos primeiros dias disponível.",
        "Codifiquei uma evolução do eSIM B2B na qual os gestores poderiam fazer a ativação de múltiplos chips. Necessidade de muitos gestores já que dificilmente ativará somente 1 chip.",
        "Fiz a otimização do pacote da aplicação que meu squad era responsável reduzindo os tempos de carregamento do módulo em até 30%.",
        "Particapação no SRE B2B para lidar com situações críticas e manter o sistema estável.",
        "Fiz o processo de onboarding de muitos desenvolvedores e arquitetos para que eles pudessem performar da melhor forma quando estivessem na squad que pertenciam.",
      ],
    },
    {
      company: "Telefonica BR (Vivo)",
      position: "Desenvolvedor Fullstack Jr",
      startDate: "Agosto 2021",
      endDate: "Outubro 2022",
      summary: [
        "Codifiquei o projeto gestão de linhas em que usuários de planos B2B com características específicas poderiam administrar a quantidade de dados e minutos que alocariam nos telefones corporativos por uma interface web garantindo uma melhor experiência do usuário. Esse projeto era fundamental para a alocação de dados e minutos nos aparelhos.",
        "Participação ativa nas discussões técnicas do time em que eram pensadas diversas formas de chegar nas soluções para o projeto do gestão de linhas.",
      ]
    },
    {
      company: "Pontaltech",
      position: "Desenvolvedor Backend Jr | Node",
      startDate: "Janeiro 2020",
      endDate: "Novembro 2020",
      summary:
        "Desenvolvi junto ao time o projeto Verified SMS que em parceria ao Google verifica se a empresa remetente das mensagens é ela mesma, dando maior segurança no processo de conversas via SMS. No momento do desenvolvimento funcionava somente no aplicativo de mensagens da Google.",
    },
    {
      company: "Indigosoft",
      position: "Desenvolvedor Fullstack | Estágio",
      startDate: "Agosto 2019",
      endDate: "Janeiro 2020",
      summary: [
        "Desenvolvi bots em C#/.NET para automação de processos. O que reduziu o tempo para executar as ações nos legados da Sky deixando o processo de contratação, alteração e cancelamento de planos mais eficiente.",
        "Desenvolvi scripts para web scrapping usando C# para compor o fluxo de RPA da empresa sendo esse o principal produto deles.",
        "Criei aplicações web com Razor Syntax, Microsoft Web Server, SQL Server e C#. Aplicações para servir de interface para as empresas usarem as automações de forma mais fácil e com velocidade para resolver seus problemas."
      ],
    },
  ],
  projects: [
    {
      name: "Hackclub",
      summary: "Uma plataform sendo desenvolvida no curso.dev para ser similar ao Tabnews, mas com diferenças de código de cada desenvolvedor. Plataforma sendo desenvolvida de forma API First.",
      linkPreview: "https://www.hackclub.com.br/status",
      linkSource: "https://github.com/coderCadu/hackclub/",
      image: "/hackclub.png",
    },
    // {
    //   name: "Shopp App",
    //   summary: "An e-commerce platform that replicates Shopify's key features.",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/shopify-clon.png",
    // },
    // {
    //   name: "ClonTagram",
    //   summary: "A social network that replicates the features of Instagram",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/clone-ig.png",
    // },
  ],
  about: {
    description: `
      Olá, sou Carlos Silva, Desenvolvedor Fullstack Sênior com foco em aplicações web e backend distribuído. Com experiência sólida em NodeJS, Go, React e VueJS, gosto de construir soluções eficientes, seguras e escaláveis.

      Ao longo da carreira, participei de projetos de alto impacto como o sistema de eSIM B2B da Vivo e a solução de Verified SMS em parceria com o Google. Atuo na junção entre código limpo, boas práticas de arquitetura e experiência do usuário, sempre com foco em performance e colaboração entre times.
    `,
    image: "/carlos.jpeg",
  },
};

// #5755ff
