/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Differential, ProcessStep, Testimonial, PortfolioProject } from "./types";

// @ts-ignore
import proj1Img from "./assets/images/regenerated_image_1782337498418.png";
// @ts-ignore
import proj2Img from "./assets/images/regenerated_image_1782337504900.png";

export const SERVICES: Service[] = [
  {
    id: "dev-web",
    title: "Desenvolvimento Web",
    category: "dev",
    shortDesc: "Sites Premium com arquitetura de alta performance, projetados para encantar e converter.",
    longDesc: "Desenvolvemos códigos limpos e rápidos, focados em UX/UI de luxo. Proporcionamos navegação fluida em qualquer dispositivo, assegurando a melhor experiência para marcas exclusivas.",
    features: ["Landing Pages de Alta Conversão", "Sites Institucionais Responsivos", "Plataformas de E-commerce Premium", "Sistemas Web e SaaS Customizados"],
    iconName: "MonitorSmartphone"
  },
  {
    id: "trafego",
    title: "Tráfego Pago",
    category: "traffic",
    shortDesc: "Aquisição de clientes com escala previsível através de mídias de alta performance.",
    longDesc: "Anúncios cirúrgicos para atingir o público certo com poder aquisitivo compatível à sua marca. Dominamos algoritmos para maximizar seu retorno sobre investimento (ROI).",
    features: ["Google Ads (Pesquisa & Shopping)", "Meta Ads (Instagram & Facebook)", "Estratégias Avançadas de Remarketing", "Otimização Contínua de Conversão (CRO)"],
    iconName: "TrendingUp"
  },
  {
    id: "automacoes",
    title: "Automação e Integrações",
    category: "automation",
    shortDesc: "Criação de ecossistemas inteligentes para eliminar gargalos e acelerar vendas.",
    longDesc: "Conectamos suas ferramentas de CRM, canais de atendimento e bases de dados para criar fluxos autônomos que reduzem erros operacionais e economizam tempo valioso.",
    features: ["Integração de CRM e Funis de Venda", "Chatbots Inteligentes com IA", "Conexão de APIs exclusivas", "Automação de fluxos de e-mail & WhatsApp"],
    iconName: "Cpu"
  },
  {
    id: "design-branding",
    title: "Design e Branding",
    category: "design",
    shortDesc: "Construção de identidades visuais memoráveis e layouts autênticos de alto padrão.",
    longDesc: "Um design exclusivo comunica valor imediato. Criamos conceitos visuais sofisticados alinhados às grandes referências globais de tecnologia e luxo.",
    features: ["Criação de Logotipos e Branding de Luxo", "Identidade Visual Corporativa Completa", "Design de Criação de Postagens e Redes Sociais", "Criativos de Alta Performance para Anúncios"],
    iconName: "Layers"
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: "estrategia",
    title: "Estratégia",
    description: "Cada projeto é construído com foco claro em crescimento, funis inteligentes e geração de oportunidades reais.",
    metric: "100%",
    metricLabel: "Foco em Conversão"
  },
  {
    id: "tecnologia",
    title: "Tecnologia",
    description: "Ferramentas moderníssimas, código limpo, velocidade de carregamento absurda e integrações em tempo real.",
    metric: "< 1.2s",
    metricLabel: "Tempo de Carregamento"
  },
  {
    id: "performance",
    title: "Performance",
    description: "Tudo é pensado, rastreado e mensurado para gerar resultados comerciais expressivos e escaláveis.",
    metric: "3.4x",
    metricLabel: "Aumento Médio em Leads"
  },
  {
    id: "escalabilidade",
    title: "Escalabilidade",
    description: "Soluções preparadas para crescer com sua empresa, suportando picos de tráfego e múltiplos leads diários.",
    metric: "+80%",
    metricLabel: "Eficiência Operacional"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    subtitle: "Investigação & Auditoria",
    description: "Analisamos detalhadamente seus números atuais, concorrência e identificamos as maiores oportunidades de crescimento digital de sua marca."
  },
  {
    number: "02",
    title: "Planejamento",
    subtitle: "Arquitetura & Estratégia",
    description: "Desenhamos o funil completo, as copys persuasivas, os canais de mídias pagas e toda a estrutura lógica das automações necessárias."
  },
  {
    number: "03",
    title: "Desenvolvimento",
    subtitle: "Código & Design Visual",
    description: "Nossos designers e engenheiros dão vida aos layouts premium, aplicando animações fluidas, integrações seguras e otimização SEO cirúrgica."
  },
  {
    number: "04",
    title: "Implementação",
    subtitle: "Lançamento & Testes",
    description: "Conectamos os domínios, ativamos as automações de vendas, subimos as primeiras campanhas estruturadas e testamos cada detalhe com rigor."
  },
  {
    number: "05",
    title: "Otimização",
    subtitle: "Análise de Dados & Escala",
    description: "Monitoramos em tempo real as métricas de tráfego e conversão, realizando testes A/B contínuos para reduzir o Custo por Aquisição (CPA)."
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Maloca Estética Automotiva",
    category: "Landing Page",
    image: proj1Img,
    description: "Landing page premium e ultra-elegante voltada para estética automotiva de alto padrão, com agendamentos automatizados e vitrine de serviços exclusivos.",
    stats: { label: "Taxa de Conversão", value: "31.4%" },
    client: "Maloca Auto Detailing",
    tags: ["Automotivo", "Landing Page", "Luxo"]
  },
  {
    id: "proj-2",
    title: "PetDay Hospital Veterinário",
    category: "Web",
    image: proj2Img,
    description: "Website institucional interativo para hospital veterinário 24h, com prontuário integrado, agendamento de consultas e design amigável e acolhedor.",
    stats: { label: "Agendamentos Online", value: "+54.8%" },
    client: "PetDay Hospital",
    tags: ["Veterinária", "Website Institucional", "Agendamento"]
  },
  {
    id: "proj-3",
    title: "Apex Scaler Engine",
    category: "Automação",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Unificação de CRMs parceiros e chatbot de inteligência artificial com qualificadores automáticos de leads via WhatsApp.",
    stats: { label: "Atendimentos Qualificados", value: "85K/mês" },
    client: "Apex Group",
    tags: ["OpenAI API", "Make / n8n", "Salesforce"]
  },
  {
    id: "proj-4",
    title: "Chronos Watchmakers",
    category: "Identidade Visual",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Identidade visual luxuosa para boutique de relógios suíços. Conceito minimalista baseado em proporção áurea.",
    stats: { label: "Reconhecimento de Marca", value: "Alto Padrão" },
    client: "Chronos",
    tags: ["Branding", "Luxo", "Social Media Guidelines"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Allan Dias",
    role: "Cineasta & Diretor",
    company: "Allan Dias Filmes",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    text: "A YOV Studio foi excepcional. Hospedaram meu portfólio de filmes de forma ultra-veloz e estruturaram estratégias de tráfego pago altamente precisas que atraíram clientes de altíssimo valor para minhas produções. Uma verdadeira parceria."
  },
  {
    id: "test-2",
    name: "Jonathan",
    role: "Fundador",
    company: "Smart Diesel",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    text: "Implementamos uma landing page focada em alta performance e funil automatizado de WhatsApp com a YOV Studio. O resultado foi um aumento expressivo nas conversões de serviços e automação completa dos leads da Smart Diesel."
  },
  {
    id: "test-3",
    name: "Dr. Alexandre Paes",
    role: "Fundador & CEO",
    company: "Premier Odontologia Estética",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    text: "O posicionamento de luxo digital e o tráfego premium desenhado pela YOV Studio trouxeram um retorno financeiro fantástico. Atraímos o público de alto padrão ideal para as nossas consultas particulares."
  }
];

// Recharts Metrics Data
export const RECHARTS_ROI_DATA = [
  { month: "Jan", "Sem Estratégia": 1.2, "Com YOV Studio": 1.8 },
  { month: "Fev", "Sem Estratégia": 1.3, "Com YOV Studio": 2.5 },
  { month: "Mar", "Sem Estratégia": 1.1, "Com YOV Studio": 3.4 },
  { month: "Abr", "Sem Estratégia": 1.4, "Com YOV Studio": 4.2 },
  { month: "Mai", "Sem Estratégia": 1.2, "Com YOV Studio": 5.1 },
  { month: "Jun", "Sem Estratégia": 1.5, "Com YOV Studio": 6.8 }
];

export const RECHARTS_CONVERSIONS_DATA = [
  { category: "Web Institucional", "Média Mercado": 1.8, "Criação YOV Studio": 6.8 },
  { category: "Landing Pages", "Média Mercado": 2.3, "Criação YOV Studio": 12.4 },
  { category: "Tráfego Focado", "Média Mercado": 1.5, "Criação YOV Studio": 5.2 },
  { category: "Remarketing Dinâmico", "Média Mercado": 3.1, "Criação YOV Studio": 18.5 }
];
