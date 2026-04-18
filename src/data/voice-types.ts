export interface VoiceType {
  id: string;
  title: string;
  shortDescription: string;
  benefits: string[];
  whyInvest: string;
  objectionBreak: string;
  ctaText: string;
  ctaLink: string;
  category: string;
}

export const voiceTypes: VoiceType[] = [
  // 🌟 Institucionais e Corporativas
  {
    id: "locucao-institucional",
    category: "Institucionais e Corporativas",
    title: "Locução Institucional",
    shortDescription: "Apresentações que posicionam sua marca com autoridade, clareza e sofisticação.",
    benefits: [
      "Transmite credibilidade imediata",
      "Eleva a percepção de valor da marca",
      "Padroniza a comunicação institucional",
      "Fortalece o posicionamento"
    ],
    whyInvest: "A forma como sua empresa se apresenta define como ela será percebida.",
    objectionBreak: "Não é sobre voz bonita, é sobre posicionamento estratégico.",
    ctaText: "Solicitar orçamento",
    ctaLink: "/contato"
  },
  {
    id: "locucao-corporativa",
    category: "Institucionais e Corporativas",
    title: "Locução Corporativa",
    shortDescription: "Comunicação profissional para empresas que exigem consistência e padrão.",
    benefits: [
      "Uniformiza a comunicação interna e externa",
      "Reforça identidade da marca",
      "Melhora a clareza das mensagens",
      "Aumenta profissionalismo"
    ],
    whyInvest: "Empresas fortes têm comunicação consistente em todos os pontos de contato.",
    objectionBreak: "Mesmo comunicações simples impactam a percepção da sua marca.",
    ctaText: "Falar com especialista",
    ctaLink: "/contato"
  },
  {
    id: "treinamentos-e-learning",
    category: "Institucionais e Corporativas",
    title: "Treinamentos / E-learning",
    shortDescription: "Narrações claras e envolventes para conteúdos educacionais digitais.",
    benefits: [
      "Melhora retenção de conteúdo",
      "Torna o aprendizado mais fluido",
      "Reduz fadiga do aluno",
      "Profissionaliza cursos"
    ],
    whyInvest: "A voz influencia diretamente na absorção do conteúdo.",
    objectionBreak: "Não é só conteúdo — é experiência de aprendizado.",
    ctaText: "Solicitar narração para curso",
    ctaLink: "/contato"
  },
  {
    id: "ura-pabx-espera-telefonica",
    category: "Institucionais e Corporativas",
    title: "URA / PABX / Espera Telefônica",
    shortDescription: "Experiência sonora profissional para atendimento telefônico.",
    benefits: [
      "Organização do atendimento",
      "Melhora experiência do cliente",
      "Reduz ruído e confusão",
      "Transmite profissionalismo"
    ],
    whyInvest: "Seu atendimento começa antes de qualquer conversa humana.",
    objectionBreak: "Uma má experiência inicial pode custar um cliente.",
    ctaText: "Quero profissionalizar meu atendimento",
    ctaLink: "/contato"
  },
  {
    id: "audiodescricao",
    category: "Institucionais e Corporativas",
    title: "Audiodescrição",
    shortDescription: "Acessibilidade com qualidade e respeito à experiência do usuário.",
    benefits: [
      "Inclusão real",
      "Adequação a normas",
      "Amplia alcance do conteúdo",
      "Valor social e institucional"
    ],
    whyInvest: "Acessibilidade não é opcional — é posicionamento.",
    objectionBreak: "Não é custo, é expansão de público.",
    ctaText: "Solicitar projeto de audiodescrição",
    ctaLink: "/contato"
  },

  // 💡 Comerciais e Promocionais
  {
    id: "varejo",
    category: "Comerciais e Promocionais",
    title: "Varejo",
    shortDescription: "Locução focada em impacto e conversão rápida.",
    benefits: [
      "Estimula ação imediata",
      "Aumenta vendas",
      "Cria senso de urgência",
      "Reforça promoções"
    ],
    whyInvest: "No varejo, cada segundo conta para vender.",
    objectionBreak: "Sem uma voz forte, sua oferta perde impacto.",
    ctaText: "Quero aumentar minhas vendas",
    ctaLink: "/contato"
  },
  {
    id: "radio-indoor",
    category: "Comerciais e Promocionais",
    title: "Rádio Indoor",
    shortDescription: "Comunicação estratégica dentro de ambientes comerciais.",
    benefits: [
      "Influencia comportamento de compra",
      "Cria ambiente sonoro",
      "Reforça marca no ponto de venda",
      "Aumenta ticket médio"
    ],
    whyInvest: "A experiência no ambiente impacta diretamente na decisão.",
    objectionBreak: "Silêncio ou som genérico não vendem.",
    ctaText: "Criar experiência sonora",
    ctaLink: "/contato"
  },
  {
    id: "manifestos-de-marca",
    category: "Comerciais e Promocionais",
    title: "Manifestos de Marca",
    shortDescription: "Voz emocional para campanhas de branding.",
    benefits: [
      "Cria conexão emocional",
      "Fortalece identidade",
      "Diferencia sua marca",
      "Gera lembrança"
    ],
    whyInvest: "Marcas fortes são sentidas, não apenas vistas.",
    objectionBreak: "Sem emoção, sua mensagem não marca.",
    ctaText: "Criar manifesto de marca",
    ctaLink: "/contato"
  },
  {
    id: "assinaturas-e-frases-de-efeito",
    category: "Comerciais e Promocionais",
    title: "Assinaturas e Frases de Efeito",
    shortDescription: "Pequenos trechos que marcam presença.",
    benefits: [
      "Aumenta recall de marca",
      "Cria identidade sonora",
      "Padroniza comunicação",
      "Fortalece branding"
    ],
    whyInvest: "Frases curtas podem ter impacto duradouro.",
    objectionBreak: "Detalhes constroem grandes marcas.",
    ctaText: "Criar assinatura sonora",
    ctaLink: "/contato"
  },
  {
    id: "vinhetas-de-impacto",
    category: "Comerciais e Promocionais",
    title: "Vinhetas de Impacto",
    shortDescription: "Aberturas e transições com identidade forte.",
    benefits: [
      "Cria identidade sonora",
      "Aumenta profissionalismo",
      "Dá ritmo ao conteúdo",
      "Marca presença"
    ],
    whyInvest: "Primeiros segundos definem percepção.",
    objectionBreak: "Sem identidade, seu conteúdo se perde.",
    ctaText: "Criar vinheta profissional",
    ctaLink: "/contato"
  },

  // 🎧 Conteúdo Digital e Streaming
  {
    id: "reels-shorts-tiktok",
    category: "Conteúdo Digital e Streaming",
    title: "Voz para Reels / Shorts / TikTok",
    shortDescription: "Locução estratégica para vídeos curtos de alto impacto.",
    benefits: [
      "Aumenta retenção",
      "Melhora performance",
      "Destaca conteúdo",
      "Aumenta engajamento"
    ],
    whyInvest: "A atenção é disputada segundo a segundo.",
    objectionBreak: "Sem voz, seu conteúdo perde força.",
    ctaText: "Quero melhorar meus vídeos",
    ctaLink: "/contato"
  },
  {
    id: "videos-para-infoprodutores",
    category: "Conteúdo Digital e Streaming",
    title: "Vídeos para Infoprodutores",
    shortDescription: "Locução para conteúdos de venda e educação.",
    benefits: [
      "Aumenta conversão",
      "Profissionaliza conteúdo",
      "Melhora clareza",
      "Eleva percepção"
    ],
    whyInvest: "A voz impacta diretamente na decisão de compra.",
    objectionBreak: "Conteúdo bom precisa de apresentação forte.",
    ctaText: "Potencializar meus vídeos",
    ctaLink: "/contato"
  },
  {
    id: "paginas-e-cartas-de-vendas",
    category: "Conteúdo Digital e Streaming",
    title: "Páginas e Cartas de Vendas",
    shortDescription: "Narração persuasiva para funis e páginas.",
    benefits: [
      "Aumenta conversão",
      "Mantém atenção",
      "Guia o usuário",
      "Reforça argumento"
    ],
    whyInvest: "A voz conduz a decisão.",
    objectionBreak: "Texto sozinho nem sempre segura o usuário.",
    ctaText: "Aumentar conversão",
    ctaLink: "/contato"
  },
  {
    id: "podcasts-e-entrevistas",
    category: "Conteúdo Digital e Streaming",
    title: "Podcasts e Entrevistas",
    shortDescription: "Voz profissional para conteúdo contínuo.",
    benefits: [
      "Melhora experiência",
      "Aumenta retenção",
      "Profissionaliza conteúdo",
      "Fortalece autoridade"
    ],
    whyInvest: "Qualidade sonora impacta diretamente na permanência.",
    objectionBreak: "Conteúdo bom precisa de entrega boa.",
    ctaText: "Profissionalizar meu podcast",
    ctaLink: "/contato"
  },
  {
    id: "youtube-dublagens-alternativas",
    category: "Conteúdo Digital e Streaming",
    title: "YouTube / Dublagens Alternativas",
    shortDescription: "Locução para conteúdo audiovisual online.",
    benefits: [
      "Amplia alcance",
      "Melhora retenção",
      "Adapta conteúdo",
      "Profissionaliza vídeos"
    ],
    whyInvest: "Vídeos com voz profissional performam melhor.",
    objectionBreak: "A voz influencia mais do que você imagina.",
    ctaText: "Melhorar meus vídeos",
    ctaLink: "/contato"
  },

  // 📚 Educação, Informação e Jornalismo
  {
    id: "estilo-jornalistico",
    category: "Educação, Informação e Jornalismo",
    title: "Estilo Jornalístico",
    shortDescription: "Voz clara e objetiva para informação.",
    benefits: [
      "Transmite credibilidade",
      "Facilita compreensão",
      "Mantém ritmo",
      "Profissionaliza conteúdo"
    ],
    whyInvest: "Informação precisa ser clara e confiável.",
    objectionBreak: "Sem clareza, a mensagem se perde.",
    ctaText: "Produzir conteúdo profissional",
    ctaLink: "/contato"
  },
  {
    id: "artigos-em-audio",
    category: "Educação, Informação e Jornalismo",
    title: "Artigos em Áudio",
    shortDescription: "Transforme textos em experiência auditiva.",
    benefits: [
      "Aumenta consumo",
      "Amplia alcance",
      "Melhora acessibilidade",
      "Reaproveita conteúdo"
    ],
    whyInvest: "Nem todo mundo lê, mas muitos escutam.",
    objectionBreak: "Conteúdo pode ir além do texto.",
    ctaText: "Transformar conteúdo em áudio",
    ctaLink: "/contato"
  },
  {
    id: "audiobooks",
    category: "Educação, Informação e Jornalismo",
    title: "Audiobooks",
    shortDescription: "Experiência imersiva para livros.",
    benefits: [
      "Envolve o ouvinte",
      "Mantém ritmo",
      "Valoriza obra",
      "Amplia público"
    ],
    whyInvest: "O mercado de áudio cresce constantemente.",
    objectionBreak: "Leitura não é a única forma de consumir conteúdo.",
    ctaText: "Criar audiobook",
    ctaLink: "/contato"
  },
  {
    id: "documentarios",
    category: "Educação, Informação e Jornalismo",
    title: "Documentários",
    shortDescription: "Narração envolvente e informativa.",
    benefits: [
      "Engaja o público",
      "Dá profundidade",
      "Mantém interesse",
      "Eleva produção"
    ],
    whyInvest: "A narrativa conduz a experiência.",
    objectionBreak: "Sem narrativa forte, o conteúdo perde impacto.",
    ctaText: "Narrar meu projeto",
    ctaLink: "/contato"
  },
  {
    id: "narrativas-educacionais",
    category: "Educação, Informação e Jornalismo",
    title: "Narrativas Educacionais",
    shortDescription: "Ensino com clareza e envolvimento.",
    benefits: [
      "Facilita aprendizado",
      "Mantém atenção",
      "Reduz esforço cognitivo",
      "Profissionaliza ensino"
    ],
    whyInvest: "A voz influencia diretamente na aprendizagem.",
    objectionBreak: "Não é só conteúdo, é entrega.",
    ctaText: "Melhorar meu conteúdo educacional",
    ctaLink: "/contato"
  },

  // 🎭 Criativas e Experienciais
  {
    id: "personagens",
    category: "Criativas e Experienciais",
    title: "Personagens",
    shortDescription: "Vozes únicas para projetos criativos.",
    benefits: [
      "Cria identidade",
      "Engaja audiência",
      "Diferencia conteúdo",
      "Dá vida ao projeto"
    ],
    whyInvest: "Personagens geram conexão emocional.",
    objectionBreak: "Sem identidade, o projeto perde força.",
    ctaText: "Criar personagem",
    ctaLink: "/contato"
  },
  {
    id: "voice-over",
    category: "Criativas e Experienciais",
    title: "Voice Over",
    shortDescription: "Voz sobre imagens com fluidez.",
    benefits: [
      "Conduz narrativa",
      "Mantém ritmo",
      "Melhora entendimento",
      "Profissionaliza vídeo"
    ],
    whyInvest: "A voz guia a experiência visual.",
    objectionBreak: "Imagem sem narrativa perde força.",
    ctaText: "Adicionar voz ao projeto",
    ctaLink: "/contato"
  },
  {
    id: "eventos-e-cerimonias",
    category: "Criativas e Experienciais",
    title: "Eventos e Cerimônias",
    shortDescription: "Locução ao vivo ou gravada para eventos.",
    benefits: [
      "Organização",
      "Impacto",
      "Profissionalismo",
      "Fluidez"
    ],
    whyInvest: "Eventos precisam de condução clara.",
    objectionBreak: "Improviso pode comprometer experiência.",
    ctaText: "Profissionalizar evento",
    ctaLink: "/contato"
  },
  {
    id: "apps-e-assistentes-virtuais",
    category: "Criativas e Experienciais",
    title: "Apps e Assistentes Virtuais",
    shortDescription: "Voz funcional e humanizada para tecnologia.",
    benefits: [
      "Melhora UX",
      "Humaniza interface",
      "Facilita uso",
      "Aumenta engajamento"
    ],
    whyInvest: "A voz é parte da experiência do usuário.",
    objectionBreak: "Tecnologia sem voz humanizada afasta usuários.",
    ctaText: "Criar experiência de voz",
    ctaLink: "/contato"
  },
  {
    id: "meditacoes-espiritualidade",
    category: "Criativas e Experienciais",
    title: "Meditações / Espiritualidade",
    shortDescription: "Voz calma e guiada para relaxamento.",
    benefits: [
      "Gera conexão",
      "Aumenta imersão",
      "Melhora experiência",
      "Facilita prática"
    ],
    whyInvest: "A voz define o nível da experiência.",
    objectionBreak: "Sem condução adequada, a experiência perde efeito.",
    ctaText: "Criar conteúdo guiado",
    ctaLink: "/contato"
  },

  // 💬 Relacionamento e Engajamento
  {
    id: "mensagens-para-whatsapp",
    category: "Relacionamento e Engajamento",
    title: "Mensagens para WhatsApp",
    shortDescription: "Comunicação direta e humanizada.",
    benefits: [
      "Aumenta resposta",
      "Humaniza marca",
      "Facilita comunicação",
      "Melhora conversão"
    ],
    whyInvest: "Mensagens claras geram mais resposta.",
    objectionBreak: "Texto não substitui presença de voz.",
    ctaText: "Melhorar comunicação",
    ctaLink: "/contato"
  },
  {
    id: "atendimento-em-redes-sociais",
    category: "Relacionamento e Engajamento",
    title: "Atendimento em Redes Sociais",
    shortDescription: "Voz aplicada ao relacionamento digital.",
    benefits: [
      "Humaniza interação",
      "Aumenta conexão",
      "Diferencia marca",
      "Melhora experiência"
    ],
    whyInvest: "Relacionamento é diferencial competitivo.",
    objectionBreak: "Automação sem humanidade afasta clientes.",
    ctaText: "Humanizar atendimento",
    ctaLink: "/contato"
  },
  {
    id: "campanhas-de-impacto-social",
    category: "Relacionamento e Engajamento",
    title: "Campanhas de Impacto Social",
    shortDescription: "Voz com propósito e emoção.",
    benefits: [
      "Gera conexão",
      "Amplifica mensagem",
      "Engaja público",
      "Aumenta alcance"
    ],
    whyInvest: "Mensagens sociais precisam ser sentidas.",
    objectionBreak: "Sem emoção, a mensagem não impacta.",
    ctaText: "Criar campanha",
    ctaLink: "/contato"
  },
  {
    id: "conteudo-motivacional",
    category: "Relacionamento e Engajamento",
    title: "Conteúdo Motivacional",
    shortDescription: "Voz inspiradora e envolvente.",
    benefits: [
      "Engaja audiência",
      "Gera conexão",
      "Aumenta retenção",
      "Fortalece marca"
    ],
    whyInvest: "Conteúdo emocional gera mais engajamento.",
    objectionBreak: "Sem emoção, não há conexão.",
    ctaText: "Criar conteúdo inspirador",
    ctaLink: "/contato"
  },
  {
    id: "identidade-sonora-branding-de-voz",
    category: "Relacionamento e Engajamento",
    title: "Identidade Sonora / Branding de Voz",
    shortDescription: "A voz como ativo estratégico da marca.",
    benefits: [
      "Diferencia no mercado",
      "Cria reconhecimento",
      "Padroniza comunicação",
      "Fortalece branding"
    ],
    whyInvest: "Marcas fortes são reconhecidas pelo som.",
    objectionBreak: "Sem identidade sonora, sua marca é esquecível.",
    ctaText: "Construir identidade de voz",
    ctaLink: "/contato"
  }
];
