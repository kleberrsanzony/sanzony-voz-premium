import type { LucideIcon } from 'lucide-react'
import {
  Megaphone, Radio, Volume2, Truck, Building2,
  MonitorPlay, Target, Sparkles, AudioLines,
  FileText, Compass, Mic2, Settings, Send,
  Shield, Brain, Drama, Crown,
  Mic, Headphones, Gauge, Globe,
} from 'lucide-react'

/* ━━━ Hero Demos ━━━ */
export const heroCategories = ['Comercial', 'Varejo', 'Elite', 'Institucional'] as const

export interface DemoItem {
  category: string
  title: string
  client: string
  duration: string
  audio_url?: string
}

export const heroDemos: DemoItem[] = [
  { category: 'Elite', title: 'Luxury Spot — Dior', client: 'Campanha Internacional', duration: '0:32', audio_url: '/audio/luxury-spot-dior.mp3' },
  { category: 'Comercial', title: 'Lançamento de Produto', client: 'Grupo Automotivo', duration: '0:45', audio_url: '/audio/demo-comercial-2.mp3' },
  { category: 'Varejo', title: 'Black Friday', client: 'Shopping Center', duration: '0:28', audio_url: '/audio/demo-varejo-1.mp3' },
  { category: 'Varejo', title: 'Liquidação de Verão', client: 'Rede Nacional', duration: '0:22', audio_url: '/audio/demo-varejo-2.mp3' },
  { category: 'Elite', title: 'Resort & Spa', client: 'Grupo Hoteleiro', duration: '0:38', audio_url: '/audio/demo-premium-1.mp3' },
  { category: 'Elite', title: 'Lançamento Automotivo', client: 'Marca Importada', duration: '0:45', audio_url: '/audio/demo-premium-2.mp3' },
  { category: 'Institucional', title: 'Relatório Anual', client: 'Corporação S/A', duration: '1:12', audio_url: '/audio/demo-inst-1.mp3' },
  { category: 'Institucional', title: 'Onboarding Interno', client: 'Tech Company', duration: '0:55', audio_url: '/audio/demo-inst-2.mp3' },
]

/* ━━━ Grid Demos ━━━ */
export const gridDemos: DemoItem[] = [
  { category: 'Elite', title: 'Luxury Spot — Dior', client: 'Campanha Internacional', duration: '0:32', audio_url: '/audio/luxury-spot-dior.mp3' },
  { category: 'Varejo', title: 'Mega Feirão de Ofertas', client: 'Concessionária Elite', duration: '0:25', audio_url: '/audio/grid-1.mp3' },
  { category: 'Comercial', title: 'Campanha de Natal', client: 'Rede Supermercados', duration: '0:32', audio_url: '/audio/grid-2.mp3' },
  { category: 'Elite', title: 'Hotel Boutique', client: 'Grupo Hoteleiro', duration: '0:40', audio_url: '/audio/grid-3.mp3' },
  { category: 'Institucional', title: 'Treinamento Corporativo', client: 'Multinacional', duration: '1:05', audio_url: '/audio/grid-4.mp3' },
  { category: 'Rádio', title: 'Vinheta Matinal', client: 'Rádio FM 94.5', duration: '0:12', audio_url: '/audio/grid-5.mp3' },
  { category: 'Digital', title: 'Reels Promocional', client: 'E-commerce', duration: '0:15', audio_url: '/audio/grid-6.mp3' },
]

/* ━━━ Positioning Pillars ━━━ */
export interface Pillar {
  icon: LucideIcon
  title: string
  desc: string
}

export const pillars: Pillar[] = [
  { icon: Shield, title: 'Persuasão', desc: 'Cada palavra entregue com a intenção exata de mover audiências e gerar ação.' },
  { icon: Brain, title: 'Técnica', desc: 'Captação com padrão broadcast, tratamento profissional e entrega impecável.' },
  { icon: Drama, title: 'Interpretação', desc: 'Leitura estratégica de roteiro que transforma texto em experiência auditiva.' },
  { icon: Crown, title: 'Presença de Marca', desc: 'Uma assinatura vocal que posiciona, diferencia e torna a marca memorável.' },
]

/* ━━━ Services ━━━ */
export interface Service {
  icon: LucideIcon
  title: string
  desc: string
}

export const services: Service[] = [
  { icon: Megaphone, title: 'Spots Comerciais', desc: 'Peças publicitárias com impacto e clareza para TV, rádio e digital.' },
  { icon: Radio, title: 'Vinhetas', desc: 'Assinaturas sonoras que fixam a identidade da marca no ouvido do público.' },
  { icon: Volume2, title: 'Chamadas para Rádio', desc: 'Locução dinâmica e envolvente que captura a atenção em segundos.' },
  { icon: Truck, title: 'Carro de Som', desc: 'Voz potente e direta para ações promocionais em via pública.' },
  { icon: Building2, title: 'Institucional', desc: 'Narração sofisticada para vídeos corporativos e apresentações.' },
  { icon: MonitorPlay, title: 'Conteúdo Digital', desc: 'Locução adaptada para Reels, TikTok, YouTube e stories.' },
  { icon: Target, title: 'Campanhas', desc: 'Direção vocal completa para campanhas integradas de grande alcance.' },
  { icon: Sparkles, title: 'Branding Vocal', desc: 'Criação de identidade sonora consistente para a sua marca.' },
]

/* ━━━ Process Steps ━━━ */
export interface Step {
  icon: LucideIcon
  num: string
  title: string
  desc: string
}

export const steps: Step[] = [
  { icon: FileText, num: '01', title: 'Briefing', desc: 'Alinhamento de tom, público, formato e objetivos do projeto.' },
  { icon: Compass, num: '02', title: 'Direção', desc: 'Definição do approach vocal ideal para a peça e a marca.' },
  { icon: Mic2, num: '03', title: 'Gravação', desc: 'Captação em estúdio profissional com qualidade broadcast.' },
  { icon: Settings, num: '04', title: 'Tratamento', desc: 'Edição, mixagem e ajustes finos para entrega impecável.' },
  { icon: Send, num: '05', title: 'Entrega', desc: 'Arquivos finais nos formatos solicitados, prontos para uso.' },
]

/* ━━━ Studio Capabilities ━━━ */
export interface Capability {
  icon: LucideIcon
  title: string
  desc: string
}

export const capabilities: Capability[] = [
  { icon: Mic, title: 'Captação Elite', desc: 'Microfone profissional com tratamento acústico de estúdio dedicado.' },
  { icon: Headphones, title: 'Mixagem Studio', desc: 'Tratamento de áudio com ferramentas de nível broadcast internacional.' },
  { icon: Gauge, title: 'Entrega Express', desc: 'Projetos simples em até 24h. Campanhas maiores com cronograma personalizado.' },
  { icon: Globe, title: 'Cobertura Nacional', desc: 'Atendimento remoto para agências, produtoras e marcas de todo o Brasil.' },
]

/* ━━━ Testimonials ━━━ */
export interface Testimonial {
  text: string
  name: string
  role: string
  stars: number
}

export const testimonials: Testimonial[] = [
  {
    text: 'A voz do Sanzony deu uma dimensão completamente nova à nossa campanha. O resultado superou todas as expectativas da equipe criativa.',
    name: 'Rodrigo Mendes',
    role: 'Diretor Criativo — Agência Pulsar',
    stars: 5,
  },
  {
    text: 'Profissionalismo absoluto. Desde o briefing até a entrega, tudo foi impecável. Nosso cliente ficou extremamente satisfeito com o spot.',
    name: 'Carolina Figueiredo',
    role: 'Produtora Executiva — Studio Onda',
    stars: 5,
  },
  {
    text: 'Trabalhamos com vários locutores, mas a qualidade e a versatilidade do Sanzony colocam ele em outro patamar. Virou nosso parceiro fixo.',
    name: 'André Lopes',
    role: 'Head de Marketing — Grupo Vitória',
    stars: 5,
  },
]

/* ━━━ Nav Links ━━━ */
export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Demos', href: '#demos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Estúdio', href: '#estudio' },
  { label: 'Fazer Briefing', href: '/briefing' },
]

/* ━━━ Footer Links ━━━ */
export const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Demos', href: '#demos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Estúdio', href: '#estudio' },
  { label: 'Fazer Briefing', href: '/briefing' },
]

export const playerSettings = {
  showProgressBar: true,
  defaultVolume: 0.8
}

export { AudioLines }
