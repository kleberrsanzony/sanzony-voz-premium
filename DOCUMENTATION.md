# Documentação Técnica: Sanzony.Voz Premium

Bem-vindo à documentação oficial do projeto **Sanzony.Voz Premium**. Este documento detalha a arquitetura, as funcionalidades principais e os guias de manutenção do site.

---

## 1. Visão Geral
O projeto é uma Landing Page de alto padrão ("Cinema Dark") desenvolvida para a marca **Sanzony.Voz**. O objetivo é apresentar o portfólio de locução premium com uma experiência de áudio imersiva e interativa.

- **URL de Produção:** [https://sanzony-voz-premium-clean.vercel.app](https://sanzony-voz-premium-clean.vercel.app)
- **GitHub:** [kleberrsanzony/sanzony-voz-premium](https://github.com/kleberrsanzony/sanzony-voz-premium)

---

## 2. Stack Tecnológica
- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS 4.0](https://tailwindcss.com/) (CSS-first configuration)
- **Animações:** [Framer Motion 12+](https://www.framer.com/motion/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Ícones:** [Lucide React](https://lucide.dev/)

---

## 3. Estrutura do Projeto

```text
/src
  /app              # Rotas, Layout Global e CSS
    - globals.css   # Variáveis de cor, gradientes e utilitários customizados
    - layout.tsx    # Estrutura base (PWA ready, Fonts)
    - page.tsx      # Orquestração de todas as seções da Landing Page
  /components
    /sections       # Componentes principais de cada seção (Hero, Demos, etc.)
    /ui             # Componentes de interface genéricos (Botões, Reveladores)
  /data
    - content.ts    # SINGLE SOURCE OF TRUTH (Textos, Links, Configurações)
  /lib
    - utils.ts      # Helpers de Tailwind-merge e Clsx
/public
  /audio            # Arquivos .mp3 das demonstrações
  - icons.svg       # Sprite de ícones customizados (se houver)
```

---

## 4. Sistemas Principais

### A. Sistema de Áudio (Audio Player Layer)
O site possui dois tipos de players que compartilham lógica de estado:
1.  **Hero Player (`DemoPlayer.tsx`)**: Focado em categorias específicas no topo do site.
2.  **Grid Player (`DemoSection.tsx`)**: Uma grade de demos navegável.

**Ficha Técnica do Áudio:**
- Usa o elemento nativo HTML5 `<audio>` via `useRef`.
- Suporta **Seekbar** (barra de progresso) e **Controle de Volume**.
- **Playback Exclusivo**: Ao dar play em uma faixa, qualquer outra que esteja tocando é pausada automaticamente.

### B. Sistema de Animação
Utilizamos três helpers principais para manter a consistência visual:
- **`Reveal`**: Faz o conteúdo "surgir" com fade e desfoque ao entrar no scroll.
- **`StaggerGroup` / `StaggerItem`**: Cria o efeito de cascata (um item após o outro) em listas e grids.
- **Micro-interações**: Hover effects nos cards usam transições suaves de 500ms para bordas e opacidade.

---

## 5. Guia de Manutenção e Edição

### Como adicionar novos Áudios/Demos:
1.  Suba o arquivo `.mp3` (sem espaços no nome) para `/public/audio/`.
2.  Abra [`src/data/content.ts`](file:///Users/ks/Documents/Dev/siteNovo/src/data/content.ts).
3.  Adicione um objeto às listas `heroDemos` ou `gridDemos`.

```typescript
{ 
  category: 'Comercial', 
  title: 'Meu Novo Spot', 
  client: 'Cliente X', 
  duration: '0:30', 
  audioUrl: '/audio/meu-novo-spot.mp3' 
}
```

### Como configurar os Players:
No final de `content.ts`, você pode controlar o comportamento global:
- `showProgressBar`: Define se as barrinhas de progresso aparecem ou não.
- `defaultVolume`: Volume inicial para todos os usuários.

### Como alterar o Design (Cores/Divisorias):
- **Cores**: Defina novas variáveis no `@theme` dentro de [`globals.css`](file:///Users/ks/Documents/Dev/siteNovo/src/app/globals.css).
- **Divisórias**: O utilitário `.section-divider` cria as linhas douradas degradê entre as seções.

---

## 6. Performance e SEO
- **Imagens**: Usamos o componente `next/image` para otimização automática.
- **Lighthouse**: O projeto foi estruturado para atingir scores próximos a 100 em acessibilidade e performance.
- **SEO**: Meta tags dinâmicas e estrutura de Headings (h1, h2, h3) otimizada para buscadores.

---

## 7. Comandos Úteis
- `npm run dev`: Inicia o ambiente de desenvolvimento.
- `npm run build`: Gera o pacote de produção para deployment.
- `vercel --prod`: Faz o deploy manual para a Vercel (Production channel).

---
> [!NOTE]
> Esta documentação é um documento vivo. Atualize-a sempre que houver mudanças estruturais no projeto.
