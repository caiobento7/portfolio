// Todo o texto do site mora aqui. Para mudar algo no portfólio ou no currículo,
// edite os dois idiomas (pt e en) e mantenha a mesma estrutura.

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const contact = {
  name: "Caio Bento",
  email: "caiobentoodev@gmail.com",
  phone: "+55 21 98985-4536",
  phoneHref: "tel:+5521989854536",
  whatsapp: "https://wa.me/5521989854536",
  linkedin: "https://www.linkedin.com/in/caiobentoo",
  linkedinLabel: "linkedin.com/in/caiobentoo",
  github: "https://github.com/caiobento7",
  githubLabel: "github.com/caiobento7",
  site: "https://caiobento.vercel.app",
  siteLabel: "caiobento.vercel.app",
};

export type Project = {
  slug: string;
  name: string;
  context: string;
  summary: string;
  bullets: string[];
  impact: string;
  stack: string[];
  cover: "whatsapp" | "web" | "ticket" | "database" | "booking" | "pix" | "cli" | "fila" | "docs";
  /** "building": projeto em desenvolvimento. Mostra o selo e o escopo e fica fora do currículo. */
  status?: "building";
  /** Fica só no portfólio, fora do currículo (já citado na experiência, ou menor), para o PDF caber em 2 páginas. */
  foraDoCurriculo?: true;
  image?: string;
  link?: { href: string; label: string };
  /** Repositório público do projeto. */
  repo?: { href: string; label: string };
};

export type Job = {
  company: string;
  role: string;
  period: string;
  mode: string;
  current?: boolean;
  bullets: string[];
};

type Content = {
  meta: { title: string; description: string };
  nav: { about: string; projects: string; experience: string; skills: string; contact: string; cv: string };
  hero: {
    greeting: string;
    headline: string;
    now: string;
    nowRole: string;
    before: string;
    stackLabel: string;
    stack: string[];
    code: {
      file: string;
      build: string;
      preview: { url: string; module: string; title: string; progress: string; cta: string };
    };
    cta: string;
    available: string;
    role: string;
    location: string;
    ctaProjects: string;
    ctaCv: string;
  };
  stats: { value: string; label: string }[];
  sections: {
    about: string;
    projects: string;
    projectsIntro: string;
    experience: string;
    skills: string;
    education: string;
    languages: string;
    contact: string;
    contactIntro: string;
    impact: string;
    stack: string;
    current: string;
    building: string;
    scope: string;
    soon: string;
    carousel: { prev: string; next: string; hint: string; goTo: string };
    knowledge: string;
    whatsappMsg: string;
    backToTop: string;
    theme: string;
    openMenu: string;
    closeMenu: string;
    rights: string;
  };
  about: string[];
  adapt: {
    label: string;
    title: string;
    text: string;
    products: { name: string; desc: string }[];
    ai: string;
    doingTitle: string;
    doing: string[];
  };
  timelineTitle: string;
  timeline: { year: string; role: string; org: string; current?: boolean }[];
  projects: Project[];
  jobs: Job[];
  skills: { group: string; icon: string; desc: string; items: string[] }[];
  education: { course: string; school: string; period: string };
  languages: string[];
  cv: {
    title: string;
    headline: string;
    summaryTitle: string;
    summary: string;
    skillsTitle: string;
    experienceTitle: string;
    educationTitle: string;
    projectsTitle: string;
    languagesTitle: string;
    print: string;
    back: string;
    technologies: string;
    impact: string;
  };
  footer: string;
  switchTo: string;
};

const pt: Content = {
  meta: {
    title: "Caio Bento | Desenvolvedor Full Stack",
    description:
      "Portfólio e currículo de Caio Bento, desenvolvedor full stack com foco em React, Next.js, TypeScript e Node.js.",
  },
  nav: {
    about: "Sobre",
    projects: "Projetos",
    experience: "Experiência",
    skills: "Stack",
    contact: "Fale comigo",
    cv: "Currículo",
  },
  hero: {
    greeting: "Olá, eu sou",
    headline:
      "Desenvolvo aplicações web de ponta a ponta com React, Next.js, TypeScript e Node.js. Na minha experiência mais recente, na Adapt Edtech, construí plataformas de educação usadas por instituições de ensino e empresas.",
    now: "Experiência mais recente",
    nowRole: "Full Stack na Adapt Edtech",
    before: "Antes: Nexly Group, Pixtrade.IO e freelance na Upwork",
    stackLabel: "Stack principal",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Python"],
    code: {
      file: "app/cursos/[id]/page.tsx",
      build: "Compilado com sucesso",
      preview: {
        url: "localhost:3000/cursos/js",
        module: "Módulo 2 · Aula 3",
        title: "Estruturas de repetição na prática",
        progress: "68% concluído",
        cta: "Continuar aula",
      },
    },
    cta: "Fale comigo",
    available: "Aberto a novas oportunidades",
    role: "Desenvolvedor Full Stack",
    location: "Nova Friburgo, RJ · Remoto",
    ctaProjects: "Ver projetos",
    ctaCv: "Abrir currículo",
  },
  stats: [
    { value: "100%", label: "das interfaces frontend da Nexly Group sob minha responsabilidade" },
    { value: "20 → 5 min", label: "no tempo médio de atendimento com o sistema de triagem que desenvolvi na Pixtrade" },
    { value: "100 mil+", label: "registros migrados para o Supabase sem nenhuma intervenção manual" },
  ],
  sections: {
    about: "Sobre mim",
    projects: "Projetos",
    projectsIntro: "Sistemas em produção que resolveram um problema de verdade e projetos próprios com código aberto.",
    experience: "Experiência",
    skills: "Stack",
    education: "Formação",
    languages: "Idiomas",
    contact: "Fale comigo!",
    contactIntro:
      "Estou aberto a vagas de desenvolvimento full stack e frontend. Me chama por e-mail, LinkedIn ou WhatsApp.",
    impact: "Impacto",
    stack: "Tecnologias",
    current: "Atual",
    building: "Em construção",
    scope: "Escopo",
    soon: "Repositório e demo em breve",
    carousel: { prev: "Projeto anterior", next: "Próximo projeto", hint: "Arraste para o lado para ver mais", goTo: "Ir para o projeto" },
    knowledge: "Conhecimentos",
    whatsappMsg: "Olá, Caio! Vim do seu portfólio e gostaria de conversar.",
    backToTop: "Voltar ao topo",
    theme: "Mudar tema",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    rights: "Todos os direitos reservados.",
  },
  about: [
    "Sou desenvolvedor full stack e estudo Engenharia da Computação na UERJ. Trabalho de ponta a ponta, da interface em React e Next.js até a API, o banco de dados e o deploy, sempre em sistemas que estão em produção e são usados todos os dias.",
    "Antes da Adapt, fui responsável por todas as interfaces frontend da Nexly Group, construindo aplicações web para produtos B2B, e desenvolvi na Pixtrade.IO um sistema de triagem que reduziu o tempo médio de atendimento de 20 para menos de 5 minutos.",
  ],
  adapt: {
    label: "Experiência mais recente · Jul – Nov 2026",
    title: "Full Stack Developer na Adapt Edtech",
    text: "Desenvolvi o Adapt Liviu, ecossistema de tecnologia educacional usado por instituições de ensino e áreas de T&D corporativo para criar, gerenciar e analisar conteúdo, e o Liviu Hub, a plataforma de educação corporativa da empresa.",
    products: [
      { name: "Liviu Flow", desc: "Gestão dos fluxos de produção de conteúdo" },
      { name: "Liviu Content", desc: "Criação colaborativa com exportação SCORM" },
      { name: "Liviu Analytics", desc: "Jornada e desempenho dos usuários" },
      { name: "Liviu Hub", desc: "Plataforma de educação corporativa" },
    ],
    ai: "A plataforma também tem recursos de IA para revisar textos e gerar imagens.",
    doingTitle: "O que eu fazia",
    doing: [
      "Interfaces em React, Next.js e TypeScript",
      "Integração do frontend com APIs e serviços backend",
      "Novas funcionalidades e melhorias em produção",
      "Scrum, Git e versionamento colaborativo com o time",
    ],
  },
  timelineTitle: "Trajetória",
  timeline: [
    { year: "2026", role: "Full Stack Developer", org: "Adapt Edtech" },
    { year: "2025", role: "Full Stack Developer & Automation", org: "Nexly Group Solutions" },
    { year: "2024", role: "Software Developer Trainee", org: "Pixtrade.IO" },
    { year: "2023", role: "Desenvolvedor Full Stack Freelance", org: "Upwork" },
    { year: "2023", role: "Engenharia da Computação", org: "UERJ" },
  ],
  projects: [
    {
      slug: "agenda",
      cover: "booking",
      name: "Agenda: SaaS de agendamento com Pix",
      context: "Projeto pessoal · Full stack",
      summary:
        "Plataforma em que barbearias, estúdios e personal trainers criam a própria página de agendamento: o cliente escolhe o serviço e o horário, paga o sinal via Pix e recebe confirmação e lembrete por e-mail.",
      bullets: [
        "Horário nunca duplicado: constraint de exclusão no PostgreSQL, mesmo com várias reservas ao mesmo tempo",
        "Vários negócios no mesmo banco, isolados por Row Level Security",
        "Sinal via Pix (Mercado Pago) com webhook assinado e idempotente, e lembretes por e-mail",
        "Agenda com fuso horário, expediente em turnos, folga entre atendimentos e bloqueios",
      ],
      impact: "60 testes em Vitest, rodando em PGlite e em PostgreSQL de verdade no CI, e testes de ponta a ponta com Playwright no computador e no celular.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Mercado Pago", "Vitest", "Playwright"],
      repo: { href: "https://github.com/caiobento7/agenda", label: "Ver código" },
    },
    {
      slug: "assistente-documentos",
      cover: "docs",
      name: "Assistente de documentos com IA e citações",
      context: "Projeto pessoal · Python, IA e busca híbrida",
      summary:
        "Pergunte em português sobre os documentos da empresa (manual, políticas, FAQ) e receba a resposta do Claude com a página e a frase exata de onde ela saiu. Sem trecho encontrado, a IA nem é chamada e o sistema diz que não sabe.",
      bullets: [
        "Busca híbrida: texto em português (tsvector) e significado (pgvector), unidas por Reciprocal Rank Fusion",
        "Citações nativas da API do Claude: cada trecho vai como search_result e a fonte mostrada é sempre um trecho que de fato foi enviado",
        "Avaliação automática no CI com 26 perguntas de gabarito, que falha se a qualidade da busca cair",
        "Upload de PDF, Markdown e texto, com documento repetido detectado por SHA-256 e modo demonstração sem chave de API",
      ],
      impact: "Busca híbrida com 100% de recall@3 nas perguntas de gabarito e 47 testes em pytest, rodando em memória e em PostgreSQL com pgvector no CI.",
      stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "API do Claude", "Voyage AI", "pytest", "Docker"],
      repo: { href: "https://github.com/caiobento7/assistente-documentos", label: "Ver código" },
    },
    {
      slug: "hub-integracoes",
      cover: "fila",
      name: "Hub de integrações com fila e reprocessamento",
      context: "Projeto pessoal · Java, Spring Boot e RabbitMQ",
      summary:
        "Serviço que liga uma loja virtual a um ERP: recebe pedidos por webhook assinado, coloca numa fila do RabbitMQ, transforma para o formato do ERP e entrega, sem perder nem duplicar pedido quando o ERP cai.",
      bullets: [
        "Retentativas com espera crescente (5s, 30s, 2min) usando filas com TTL e dead letter exchange",
        "Fila de mensagens mortas para erros permanentes, com reprocessamento pelo painel",
        "Webhook assinado com HMAC, idempotência por evento e publicação na fila só depois do commit",
        "Painel com linha do tempo de cada tentativa e simulação de ERP instável ou fora do ar",
      ],
      impact: "26 testes, incluindo o fluxo completo com RabbitMQ e PostgreSQL de verdade via Testcontainers no CI.",
      stack: ["Java 21", "Spring Boot", "RabbitMQ", "PostgreSQL", "Testcontainers", "Docker"],
      repo: { href: "https://github.com/caiobento7/hub-integracoes", label: "Ver código" },
    },
    {
      slug: "pix-cobrancas",
      cover: "pix",
      name: "Cobranças Pix com webhook idempotente",
      context: "Projeto pessoal · Java e Spring Boot",
      summary:
        "API que cria cobranças Pix e dá baixa quando o pagamento cai, sem nunca contar o mesmo Pix duas vezes, mesmo com o webhook do banco chegando repetido, fora de ordem ou se perdendo.",
      bullets: [
        "Idempotência garantida pelo banco: chave primária no endToEndId e trava otimista na cobrança",
        "Conciliação agendada que consulta o PSP, acha o pagamento cujo webhook se perdeu e expira cobranças vencidas",
        "Devoluções parciais seguras para repetir, valores em BigDecimal e erros no padrão Problem Details",
        "Migrações com Flyway, Docker Compose e CI que roda os testes em H2 e em PostgreSQL de verdade",
      ],
      impact: "41 testes em JUnit 5, incluindo 8 webhooks simultâneos do mesmo Pix que resultam em uma única baixa.",
      stack: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "JUnit 5", "Docker", "GitHub Actions"],
      repo: { href: "https://github.com/caiobento7/pix-cobrancas", label: "Ver código" },
    },
    {
      slug: "silvinha",
      foraDoCurriculo: true,
      cover: "whatsapp",
      name: "Silvinha: IA de vendas no WhatsApp",
      context: "Silva Nutrition · Nexly Group",
      summary:
        "Agente de IA que vende, rastreia pedidos e tira dúvidas direto no WhatsApp. Foi a primeira IA de vendas e suporte da empresa.",
      bullets: [
        "Cria pedidos em tempo real no WooCommerce via API REST e Webhooks",
        "Consulta dados do cliente e status de entrega sem passar por um atendente",
        "Tira do cliente a necessidade de navegar pelo site para comprar",
      ],
      impact: "Primeiro canal de vendas automatizado da empresa, com mais conversões e menos atrito na compra.",
      stack: ["n8n", "WhatsApp Business API", "WooCommerce API", "Webhooks", "Supabase", "PostgreSQL"],
    },
    {
      slug: "cursolab",
      foraDoCurriculo: true,
      cover: "web",
      image: "/projects/cursolab.png",
      name: "CursoLab: plataforma de cursos online",
      context: "Projeto acadêmico · Engenharia de Software",
      summary:
        "Plataforma completa de cursos: alunos compram, assistem às aulas, fazem quizzes e emitem certificado; administradores montam o conteúdo e acompanham indicadores.",
      bullets: [
        "API REST em Express com controle de acesso no servidor; o frontend nunca toca no banco",
        "Player com progressão por módulo, quizzes corrigidos no servidor e certificado em PDF",
        "Backoffice com indicadores, editor de módulos salvo numa transação e upload para o Storage",
      ],
      impact: "No ar na Vercel, com frontend estático e API serverless no mesmo domínio.",
      stack: ["React 19", "Vite", "Node.js", "Express 5", "Supabase", "PostgreSQL", "jsPDF"],
      link: { href: "https://plataforma-cursos-omega.vercel.app", label: "Ver site no ar" },
      repo: { href: "https://github.com/caiobento7/plataforma_cursos", label: "Ver código" },
    },
    {
      slug: "migracao",
      foraDoCurriculo: true,
      cover: "database",
      name: "Migração de 100 mil registros",
      context: "Nexly Group",
      summary:
        "Migração de mais de 100.000 registros do WooCommerce para o Supabase por um único fluxo otimizado no n8n, garantindo integridade e consistência.",
      bullets: [
        "Um só fluxo automatizado, do início ao fim",
        "Validação de integridade durante todo o processo",
        "Alertas para detectar desconexões de ferramentas antes que corrompessem o banco",
      ],
      impact: "100% dos dados migrados com zero intervenção manual.",
      stack: ["n8n", "WooCommerce API", "Supabase", "PostgreSQL", "REST APIs"],
    },
    {
      slug: "suporte",
      foraDoCurriculo: true,
      cover: "ticket",
      name: "Central de suporte com Slack e Jira",
      context: "Nexly Group",
      summary:
        "Aplicação web de ponta a ponta para centralizar chamados técnicos: o cliente abre o pedido pela interface e o resto acontece sozinho.",
      bullets: [
        "Notificação em tempo real no Slack a cada chamado aberto",
        "Criação automática de tickets no Jira, sem triagem manual",
        "Histórico salvo em banco para rastrear cada atendimento",
      ],
      impact: "Triagem automatizada de ponta a ponta e fim das solicitações espalhadas por vários canais.",
      stack: ["Next.js", "Node.js", "Slack API", "Jira API", "REST APIs"],
    },
    {
      slug: "caminho-critico",
      foraDoCurriculo: true,
      cover: "cli",
      name: "Caminho crítico: prazo mínimo de um projeto",
      context: "Projeto pessoal · TypeScript e linha de comando",
      summary:
        "Ferramenta de linha de comando que lê uma lista de tarefas com dependências e mostra a duração mínima do projeto e quais tarefas não podem atrasar, pelo método do caminho crítico (CPM).",
      bullets: [
        "Ordenação topológica (algoritmo de Kahn) com cálculo de início, fim e folga de cada tarefa",
        "Lê JSON ou a planilha exportada do Excel em português, com ponto e vírgula e vírgula decimal",
        "Recusa ciclos, ids repetidos e dependências inexistentes com mensagens que dizem o que corrigir",
      ],
      impact: "23 testes em Vitest e CI no GitHub Actions, rodando TypeScript direto no Node 24, sem etapa de build.",
      stack: ["TypeScript", "Node.js", "Vitest", "GitHub Actions"],
      repo: { href: "https://github.com/caiobento7/caminho-critico", label: "Ver código" },
    },
  ],
  jobs: [
    {
      company: "Adapt Edtech",
      role: "Full Stack Developer",
      period: "Jul 2026 – Nov 2026",
      mode: "Remoto",
      bullets: [
        "Desenvolvimento do Adapt Liviu, ecossistema de tecnologia educacional para criação, gestão e análise de conteúdo, usado por instituições de ensino e áreas de T&D corporativo, e do Liviu Hub, plataforma de educação corporativa da empresa",
        "Plataforma com gestão de fluxos de produção de conteúdo (Liviu Flow), criação colaborativa com exportação SCORM (Liviu Content), análise de jornada e desempenho (Liviu Analytics) e recursos de IA para revisão de textos e geração de imagens",
        "Interfaces web com React, Next.js e TypeScript, integradas a APIs e serviços backend",
        "Implementação de funcionalidades e melhorias em sistemas em produção, em time ágil com Scrum, Git e versionamento colaborativo",
      ],
    },
    {
      company: "Nexly Group Solutions",
      role: "Full Stack Developer & Automation",
      period: "Jul 2025 – Ago 2026",
      mode: "Remoto",
      bullets: [
        "Responsável por todas as interfaces frontend da empresa, com aplicações web em React, Next.js e TypeScript para produtos B2B em produção",
        "Idealizou e desenvolveu a Silvinha, agente de IA da Silva Nutrition e primeira IA de vendas e suporte da empresa, operando via WhatsApp com integrações WooCommerce via API REST e Webhooks",
        "Projetou e implementou mais de 10 automações críticas com n8n, incluindo a migração de mais de 100.000 registros do WooCommerce para o Supabase num único fluxo otimizado",
        "Criou um sistema de alertas para monitorar desconexões de ferramentas, prevenindo falhas que comprometeriam a integridade do banco em produção",
        "Dashboards e funcionalidades para aplicações web internas, integrando frontend a APIs e serviços backend",
        "Time ágil com Scrum em sprints semanais, com Git e versionamento colaborativo",
      ],
    },
    {
      company: "Pixtrade.IO",
      role: "Software Developer Trainee",
      period: "Mai 2024 – Jun 2025",
      mode: "Remoto",
      bullets: [
        "Bot de atendimento para triagem e qualificação de clientes antes do suporte humano, reduzindo o tempo médio de atendimento de 20 para menos de 5 minutos",
        "Scripts e automações em Python e SQL para otimizar processos internos",
        "Criação e manutenção de integrações entre sistemas e APIs para processamento de dados",
        "Colaboração em soluções de análise e manipulação de dados da plataforma",
        "Suporte remoto a usuários via AnyDesk e TeamViewer",
      ],
    },
    {
      company: "Upwork",
      role: "Desenvolvedor Full Stack (Freelance)",
      period: "Dez 2023 – Abr 2024",
      mode: "Remoto",
      bullets: [
        "Desenvolvimento de pequenas aplicações web para clientes, de ponta a ponta: levantamento de requisitos, definição de escopo, desenvolvimento e entrega final",
        "Responsável pelas decisões técnicas e pela comunicação direta com o cliente ao longo de todo o projeto",
      ],
    },
  ],
  skills: [
    { group: "Frontend", icon: "code", desc: "Interfaces responsivas e rápidas para produtos B2B em produção, do layout ao estado da aplicação.", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Angular", "TailwindCSS"] },
    { group: "Backend & APIs", icon: "server", desc: "APIs REST, webhooks e bancos relacionais, com regra de negócio e controle de acesso no servidor.", items: ["Node.js", "Python", "FastAPI", "REST APIs", "Webhooks", "Supabase", "PostgreSQL", "SQL"] },
    { group: "Dados", icon: "database", desc: "Migrações em larga escala e ETL com validação de integridade do começo ao fim.", items: ["Migração em larga escala", "ETL com n8n", "PostgreSQL", "Apache Beam", "WooCommerce API"] },
    { group: "Ferramentas & Processo", icon: "git", desc: "Versionamento colaborativo, containers, deploy contínuo e sprints com Scrum no dia a dia do time.", items: ["Git", "GitHub", "Docker", "Vercel", "Google Cloud (GCP)", "Scrum", "Metodologias ágeis"] },
    { group: "Automação & IA", icon: "bot", desc: "Fluxos em n8n e agentes de IA que vendem, atendem e conectam sistemas sem trabalho manual.", items: ["n8n", "Agentes de IA conversacionais", "LLMs em fluxos de negócio", "RAG com pgvector", "API do Claude", "WhatsApp Business API"] },
    { group: "Automação web", icon: "globe", desc: "Scripts que navegam, extraem e preenchem páginas web de forma confiável.", items: ["Python", "Selenium", "Playwright", "requests"] },
    { group: "Infra & Suporte", icon: "support", desc: "Suporte remoto a usuários e configuração de máquinas e ambientes.", items: ["AnyDesk", "TeamViewer", "Máquinas virtuais", "Active Directory (noções)"] },
  ],
  education: {
    course: "Bacharelado em Engenharia da Computação (cursando)",
    school: "Universidade do Estado do Rio de Janeiro (UERJ)",
    period: "2023 – 2027",
  },
  languages: ["Português: nativo", "Inglês: intermediário (leitura técnica fluente)"],
  cv: {
    title: "Currículo | Caio Bento",
    headline: "Desenvolvedor Full Stack | React, Next.js, TypeScript, Node.js, PostgreSQL",
    summaryTitle: "Resumo de qualificações",
    summary:
      "Desenvolvedor Full Stack com experiência em aplicações web de ponta a ponta com React, Next.js, TypeScript e Node.js, sempre em sistemas em produção. Na Adapt Edtech, desenvolveu interfaces e funcionalidades do Adapt Liviu e do Liviu Hub, plataformas de educação usadas por instituições de ensino e áreas de T&D corporativo. Na Nexly Group, foi responsável por todas as interfaces frontend da empresa em produtos B2B, além de integrações via APIs REST e webhooks, como a primeira IA de vendas e suporte da Silva Nutrition e a migração de mais de 100 mil registros para o Supabase. Experiência com integração de frontend a APIs, bancos relacionais (PostgreSQL e Supabase), dashboards e versionamento colaborativo com Git.",
    skillsTitle: "Competências técnicas",
    experienceTitle: "Experiência profissional",
    educationTitle: "Formação acadêmica",
    projectsTitle: "Projetos relevantes",
    languagesTitle: "Idiomas",
    print: "Baixar PDF",
    back: "Voltar ao portfólio",
    technologies: "Tecnologias",
    impact: "Impacto",
  },
  footer: "Feito com Next.js e Tailwind CSS.",
  switchTo: "English",
};

const en: Content = {
  meta: {
    title: "Caio Bento | Full Stack Developer",
    description:
      "Portfolio and résumé of Caio Bento, a full stack developer focused on React, Next.js, TypeScript and Node.js.",
  },
  nav: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    skills: "Stack",
    contact: "Contact",
    cv: "Résumé",
  },
  hero: {
    greeting: "Hi, I'm",
    headline:
      "I build web applications end to end with React, Next.js, TypeScript and Node.js. Most recently, at Adapt Edtech, I built education platforms used by schools and companies.",
    now: "Most recent role",
    nowRole: "Full Stack at Adapt Edtech",
    before: "Before: Nexly Group, Pixtrade.IO and freelancing on Upwork",
    stackLabel: "Main stack",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Python"],
    code: {
      file: "app/courses/[id]/page.tsx",
      build: "Compiled successfully",
      preview: {
        url: "localhost:3000/courses/js",
        module: "Module 2 · Lesson 3",
        title: "Loops in practice",
        progress: "68% complete",
        cta: "Continue lesson",
      },
    },
    cta: "Get in touch",
    available: "Open to new opportunities",
    role: "Full Stack Developer",
    location: "Nova Friburgo, Brazil · Remote",
    ctaProjects: "See projects",
    ctaCv: "Open résumé",
  },
  stats: [
    { value: "100%", label: "of Nexly Group's frontend interfaces under my ownership" },
    { value: "20 → 5 min", label: "average support time after the triage system I built at Pixtrade" },
    { value: "100k+", label: "records migrated to Supabase with zero manual intervention" },
  ],
  sections: {
    about: "About me",
    projects: "Projects",
    projectsIntro: "Production systems that solved a real problem, plus personal projects with open source code.",
    experience: "Experience",
    skills: "Stack",
    education: "Education",
    languages: "Languages",
    contact: "Get in touch!",
    contactIntro:
      "I'm open to full stack and frontend roles. Reach me by email, LinkedIn or WhatsApp.",
    impact: "Impact",
    stack: "Tech",
    current: "Current",
    building: "In progress",
    scope: "Scope",
    soon: "Repository and demo coming soon",
    carousel: { prev: "Previous project", next: "Next project", hint: "Swipe sideways to see more", goTo: "Go to project" },
    knowledge: "Skills",
    whatsappMsg: "Hi Caio! I found your portfolio and would like to talk.",
    backToTop: "Back to top",
    theme: "Toggle theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    rights: "All rights reserved.",
  },
  about: [
    "I'm a full stack developer studying Computer Engineering at UERJ (Rio de Janeiro State University). I work end to end, from the React and Next.js interface to the API, the database and the deploy, always on systems that are in production and used every day.",
    "Before Adapt, I owned every frontend interface at Nexly Group, building web apps for B2B products, and at Pixtrade.IO I built a triage system that cut average support time from 20 to under 5 minutes.",
  ],
  adapt: {
    label: "Most recent role · Jul – Nov 2026",
    title: "Full Stack Developer at Adapt Edtech",
    text: "I built Adapt Liviu, an education technology ecosystem that schools and corporate L&D teams use to create, manage and analyze content, and Liviu Hub, the company's corporate learning platform.",
    products: [
      { name: "Liviu Flow", desc: "Content production workflow management" },
      { name: "Liviu Content", desc: "Collaborative authoring with SCORM export" },
      { name: "Liviu Analytics", desc: "Learner journey and performance" },
      { name: "Liviu Hub", desc: "Corporate learning platform" },
    ],
    ai: "The platform also ships AI features for text review and image generation.",
    doingTitle: "What I did",
    doing: [
      "Interfaces with React, Next.js and TypeScript",
      "Wiring the frontend to APIs and backend services",
      "New features and improvements in production",
      "Scrum, Git and a collaborative workflow with the team",
    ],
  },
  timelineTitle: "Journey",
  timeline: [
    { year: "2026", role: "Full Stack Developer", org: "Adapt Edtech" },
    { year: "2025", role: "Full Stack Developer & Automation", org: "Nexly Group Solutions" },
    { year: "2024", role: "Software Developer Trainee", org: "Pixtrade.IO" },
    { year: "2023", role: "Freelance Full Stack Developer", org: "Upwork" },
    { year: "2023", role: "Computer Engineering", org: "UERJ" },
  ],
  projects: [
    {
      slug: "agenda",
      cover: "booking",
      name: "Agenda: booking SaaS with Pix payments",
      context: "Personal project · Full stack",
      summary:
        "A platform where barbershops, studios and personal trainers get their own booking page: customers pick a service and a time slot, pay a deposit via Pix and get an email confirmation and reminder.",
      bullets: [
        "No double bookings: a PostgreSQL exclusion constraint, even with simultaneous requests",
        "Multi-tenant, with each business's data isolated by Row Level Security",
        "Pix deposits (Mercado Pago) confirmed by a signed, idempotent webhook, plus email reminders",
        "Time zone aware scheduling with split business hours, buffers between appointments and blocked periods",
      ],
      impact: "60 Vitest tests, run on PGlite and on a real PostgreSQL in CI, plus Playwright end-to-end tests on desktop and mobile.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Mercado Pago", "Vitest", "Playwright"],
      repo: { href: "https://github.com/caiobento7/agenda", label: "View code" },
    },
    {
      slug: "assistente-documentos",
      cover: "docs",
      name: "AI document assistant with citations",
      context: "Personal project · Python, AI and hybrid search",
      summary:
        "Ask questions about company documents (handbook, policies, FAQ) and get Claude's answer with the exact page and sentence it came from. When nothing relevant is found, the model is not even called and the app says it doesn't know.",
      bullets: [
        "Hybrid search: Portuguese full-text (tsvector) plus semantic search (pgvector), merged with Reciprocal Rank Fusion",
        "Native Claude API citations: every chunk is sent as a search_result, so each source shown is a chunk that was actually sent",
        "Automated evaluation in CI with 26 gold questions that fails the build if search quality drops",
        "PDF, Markdown and text uploads, duplicate detection by SHA-256 and a demo mode that runs with no API key",
      ],
      impact: "Hybrid search reaches 100% recall@3 on the gold questions, with 47 pytest tests running in memory and on PostgreSQL with pgvector in CI.",
      stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Claude API", "Voyage AI", "pytest", "Docker"],
      repo: { href: "https://github.com/caiobento7/assistente-documentos", label: "View code" },
    },
    {
      slug: "hub-integracoes",
      cover: "fila",
      name: "Integration hub with a queue and replay",
      context: "Personal project · Java, Spring Boot and RabbitMQ",
      summary:
        "A service that connects an online store to an ERP: it receives orders through a signed webhook, queues them in RabbitMQ, maps them to the ERP format and delivers them, without losing or duplicating orders when the ERP goes down.",
      bullets: [
        "Retries with growing delays (5s, 30s, 2min) using TTL queues and a dead letter exchange",
        "Dead letter queue for permanent errors, with replay from the dashboard",
        "HMAC-signed webhook, per-event idempotency and publishing to the queue only after commit",
        "Dashboard with a timeline of every attempt and a flaky or offline ERP simulator",
      ],
      impact: "26 tests, including the full flow against real RabbitMQ and PostgreSQL via Testcontainers in CI.",
      stack: ["Java 21", "Spring Boot", "RabbitMQ", "PostgreSQL", "Testcontainers", "Docker"],
      repo: { href: "https://github.com/caiobento7/hub-integracoes", label: "View code" },
    },
    {
      slug: "pix-cobrancas",
      cover: "pix",
      name: "Pix charges with an idempotent webhook",
      context: "Personal project · Java and Spring Boot",
      summary:
        "An API that creates Pix charges (Brazil's instant payments) and settles them when the money arrives, never counting the same payment twice, even when the bank's webhook is repeated, out of order or lost.",
      bullets: [
        "Idempotency enforced by the database: endToEndId as primary key and optimistic locking on the charge",
        "Scheduled reconciliation that queries the provider, finds payments whose webhook was lost and expires overdue charges",
        "Partial refunds that are safe to retry, money as BigDecimal and Problem Details errors",
        "Flyway migrations, Docker Compose and CI that runs the tests on H2 and on a real PostgreSQL",
      ],
      impact: "41 JUnit 5 tests, including 8 simultaneous webhooks for the same payment that settle the charge only once.",
      stack: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "JUnit 5", "Docker", "GitHub Actions"],
      repo: { href: "https://github.com/caiobento7/pix-cobrancas", label: "View code" },
    },
    {
      slug: "silvinha",
      foraDoCurriculo: true,
      cover: "whatsapp",
      name: "Silvinha: WhatsApp sales AI",
      context: "Silva Nutrition · Nexly Group",
      summary:
        "An AI agent that sells, tracks orders and answers questions right inside WhatsApp. It was the company's first sales and support AI.",
      bullets: [
        "Creates WooCommerce orders in real time through REST APIs and webhooks",
        "Looks up customer data and delivery status without a human agent",
        "Lets customers buy without ever opening the website",
      ],
      impact: "The company's first automated sales channel, with higher conversion and less friction at checkout.",
      stack: ["n8n", "WhatsApp Business API", "WooCommerce API", "Webhooks", "Supabase", "PostgreSQL"],
    },
    {
      slug: "cursolab",
      foraDoCurriculo: true,
      cover: "web",
      image: "/projects/cursolab.png",
      name: "CursoLab: online course platform",
      context: "Academic project · Software Engineering",
      summary:
        "A complete course platform: students buy courses, watch lessons, take quizzes and earn certificates; admins build content and track metrics.",
      bullets: [
        "Express REST API with server-side access control; the frontend never touches the database",
        "Player with module-by-module progression, server-graded quizzes and PDF certificates",
        "Admin backoffice with metrics, a transactional module editor and uploads to Storage",
      ],
      impact: "Live on Vercel, with a static frontend and a serverless API on the same domain.",
      stack: ["React 19", "Vite", "Node.js", "Express 5", "Supabase", "PostgreSQL", "jsPDF"],
      link: { href: "https://plataforma-cursos-omega.vercel.app", label: "Visit live site" },
      repo: { href: "https://github.com/caiobento7/plataforma_cursos", label: "View code" },
    },
    {
      slug: "migracao",
      foraDoCurriculo: true,
      cover: "database",
      name: "100k-record data migration",
      context: "Nexly Group",
      summary:
        "Migrated 100,000+ records from WooCommerce to Supabase through a single optimized n8n workflow, keeping the data consistent end to end.",
      bullets: [
        "One automated workflow from start to finish",
        "Integrity checks throughout the whole process",
        "Alerts that catch tool disconnections before they corrupt the database",
      ],
      impact: "100% of the data migrated with zero manual intervention.",
      stack: ["n8n", "WooCommerce API", "Supabase", "PostgreSQL", "REST APIs"],
    },
    {
      slug: "suporte",
      foraDoCurriculo: true,
      cover: "ticket",
      name: "Support hub with Slack and Jira",
      context: "Nexly Group",
      summary:
        "An end-to-end web app that centralizes support requests: the customer opens a ticket in the UI and everything else happens automatically.",
      bullets: [
        "Real-time Slack notification for every new request",
        "Jira tickets created automatically, with no manual triage",
        "History stored in the database so every request is traceable",
      ],
      impact: "Fully automated triage and no more requests scattered across channels.",
      stack: ["Next.js", "Node.js", "Slack API", "Jira API", "REST APIs"],
    },
    {
      slug: "caminho-critico",
      foraDoCurriculo: true,
      cover: "cli",
      name: "Critical path: a project's shortest schedule",
      context: "Personal project · TypeScript CLI",
      summary:
        "A command-line tool that reads a list of tasks with dependencies and shows the project's minimum duration and which tasks cannot slip, using the critical path method (CPM).",
      bullets: [
        "Topological sort (Kahn's algorithm) with start, finish and slack for every task",
        "Reads JSON or a spreadsheet exported from Excel, including Brazilian CSV with semicolons and decimal commas",
        "Rejects cycles, duplicate ids and missing dependencies with messages that say what to fix",
      ],
      impact: "23 Vitest tests and CI on GitHub Actions, running TypeScript directly on Node 24 with no build step.",
      stack: ["TypeScript", "Node.js", "Vitest", "GitHub Actions"],
      repo: { href: "https://github.com/caiobento7/caminho-critico", label: "View code" },
    },
  ],
  jobs: [
    {
      company: "Adapt Edtech",
      role: "Full Stack Developer",
      period: "Jul 2026 – Nov 2026",
      mode: "Remote",
      bullets: [
        "Built Adapt Liviu, an education technology ecosystem for creating, managing and analyzing content, used by schools and corporate L&D teams, and Liviu Hub, the company's corporate learning platform",
        "The platform covers content production workflows (Liviu Flow), collaborative authoring with SCORM export (Liviu Content), learner journey and performance analytics (Liviu Analytics) and AI features for text review and image generation",
        "Web interfaces with React, Next.js and TypeScript, integrated with APIs and backend services",
        "Shipped features and improvements to production systems in an agile Scrum team, using Git and a collaborative workflow",
      ],
    },
    {
      company: "Nexly Group Solutions",
      role: "Full Stack Developer & Automation",
      period: "Jul 2025 – Aug 2026",
      mode: "Remote",
      bullets: [
        "Owned every frontend interface in the company, building React, Next.js and TypeScript web apps for B2B products in production",
        "Designed and built Silvinha, Silva Nutrition's AI agent and the company's first sales and support AI, running on WhatsApp with WooCommerce integrations through REST APIs and webhooks",
        "Designed and shipped 10+ critical n8n automations, including the migration of 100,000+ records from WooCommerce to Supabase in a single optimized workflow",
        "Built an alerting system that monitors tool disconnections, preventing failures that would compromise the production database",
        "Dashboards and features for internal web apps, wiring the frontend to APIs and backend services",
        "Agile Scrum team with weekly sprints, Git and a collaborative workflow",
      ],
    },
    {
      company: "Pixtrade.IO",
      role: "Software Developer Trainee",
      period: "May 2024 – Jun 2025",
      mode: "Remote",
      bullets: [
        "Built a support bot that triages and qualifies customers before human support, cutting average handling time from 20 to under 5 minutes",
        "Python and SQL scripts and automations to streamline internal processes",
        "Built and maintained integrations between systems and APIs for data processing",
        "Collaborated on data analysis and data handling solutions for the platform",
        "Remote user support via AnyDesk and TeamViewer",
      ],
    },
    {
      company: "Upwork",
      role: "Full Stack Developer (Freelance)",
      period: "Dec 2023 – Apr 2024",
      mode: "Remote",
      bullets: [
        "Built small web applications for clients end to end: requirements gathering, scoping, development and final delivery",
        "Owned the technical decisions and the direct communication with the client throughout each project",
      ],
    },
  ],
  skills: [
    { group: "Frontend", icon: "code", desc: "Fast, responsive interfaces for B2B products in production, from layout to application state.", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Angular", "TailwindCSS"] },
    { group: "Backend & APIs", icon: "server", desc: "REST APIs, webhooks and relational databases, with business rules and access control on the server.", items: ["Node.js", "Python", "FastAPI", "REST APIs", "Webhooks", "Supabase", "PostgreSQL", "SQL"] },
    { group: "Data", icon: "database", desc: "Large-scale migrations and ETL with integrity checks from start to finish.", items: ["Large-scale migration", "ETL with n8n", "PostgreSQL", "Apache Beam", "WooCommerce API"] },
    { group: "Tooling & Process", icon: "git", desc: "Collaborative version control, containers, continuous deployment and Scrum sprints in the team's daily work.", items: ["Git", "GitHub", "Docker", "Vercel", "Google Cloud (GCP)", "Scrum", "Agile"] },
    { group: "Automation & AI", icon: "bot", desc: "n8n workflows and AI agents that sell, support customers and connect systems with no manual work.", items: ["n8n", "Conversational AI agents", "LLMs in business workflows", "RAG with pgvector", "Claude API", "WhatsApp Business API"] },
    { group: "Web automation", icon: "globe", desc: "Scripts that browse, extract and fill in web pages reliably.", items: ["Python", "Selenium", "Playwright", "requests"] },
    { group: "Infra & Support", icon: "support", desc: "Remote user support and setup of machines and environments.", items: ["AnyDesk", "TeamViewer", "Virtual machines", "Active Directory (basics)"] },
  ],
  education: {
    course: "B.Sc. in Computer Engineering (in progress)",
    school: "Rio de Janeiro State University (UERJ)",
    period: "2023 – 2027",
  },
  languages: ["Portuguese: native", "English: intermediate (fluent technical reading)"],
  cv: {
    title: "Résumé | Caio Bento",
    headline: "Full Stack Developer | React, Next.js, TypeScript, Node.js, PostgreSQL",
    summaryTitle: "Summary",
    summary:
      "Full Stack Developer experienced in building web applications end to end with React, Next.js, TypeScript and Node.js, always on systems running in production. At Adapt Edtech, built interfaces and features for Adapt Liviu and Liviu Hub, education platforms used by schools and corporate L&D teams. At Nexly Group, owned every frontend interface in the company's B2B products and built integrations through REST APIs and webhooks, such as Silva Nutrition's first sales and support AI and the migration of 100k+ records to Supabase. Experienced in wiring frontends to APIs, relational databases (PostgreSQL and Supabase), dashboards and collaborative Git workflows.",
    skillsTitle: "Technical skills",
    experienceTitle: "Professional experience",
    educationTitle: "Education",
    projectsTitle: "Selected projects",
    languagesTitle: "Languages",
    print: "Download PDF",
    back: "Back to portfolio",
    technologies: "Tech",
    impact: "Impact",
  },
  footer: "Built with Next.js and Tailwind CSS.",
  switchTo: "Português",
};

const content: Record<Locale, Content> = { pt, en };

export const getContent = (locale: Locale) => content[locale];
