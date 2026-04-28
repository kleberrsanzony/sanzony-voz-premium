# Documentação Técnica: Sanzony.Voz Elite

Bem-vindo à documentação oficial do projeto **Sanzony.Voz Elite**. Este documento detalha a arquitetura de internacionalização (i18n), as funcionalidades principais e os guias de manutenção do sistema.

---

## 1. Visão Geral
O projeto é uma Landing Page de alto padrão ("Cinema Dark") desenvolvida para a marca **Sanzony.Voz**. O objetivo é apresentar o portfólio de locução premium com uma experiência de áudio imersiva e interativa, agora com suporte global.

- **URL de Produção:** [https://sanzony-voz-premium.vercel.app](https://sanzony-voz-premium.vercel.app)
- **GitHub:** [kleberrsanzony/sanzony-voz-premium](https://github.com/kleberrsanzony/sanzony-voz-premium)
- **Branch de Estabilização:** `SEO`

---

## 2. Stack Tecnológica
- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Internacionalização:** React Context API + LocalStorage
- **Animações:** [Framer Motion 12+](https://www.framer.com/motion/)
- **Backend:** [Supabase](https://supabase.com/)

---

## 3. Estrutura do Projeto

```text
/src
  /app              # Rotas e Layouts (PT: /tipos-de-locucao | EN: /en/voice-over-types)
  /components
    /sections       # Componentes de UI (Hero, TiposDeLocucaoHub, etc.)
    /ui             # Componentes base e utilitários (LanguageSwitcher, etc.)
    /i18n           # SetLanguage.tsx (Helper de sincronização de rota)
  /context          # LanguageContext.tsx (Gerenciamento de Estado Global)
  /locales          # pt.json, en.json, es.json (Dicionários de tradução)
  /data             # voice-types.ts (Catálogo de 30 tipos de locução)
```

---

## 4. Sistemas Principais

### A. Sistema de Internacionalização (i18n) e SEO
Utilizamos uma arquitetura híbrida para máxima performance de SEO:
- **Rotas Localizadas**: URLs amigáveis para cada idioma (ex: `/en/voice-over-types`), garantindo indexação independente.
- **`LanguageContext`**: Gerencia o estado de tradução no lado do cliente.
- **`SetLanguage`**: Componente helper que sincroniza o contexto global com a rota visitada.
- **`LanguageSwitcher`**: Seletor de idiomas inteligente que redireciona o usuário para a rota localizada correspondente.
- **Metadata Dinâmica**: Tags de SEO (title, description, hreflang, canonical) são geradas individualmente por rota e idioma.

> [!IMPORTANT]
> Para novas rotas localizadas, utilize o componente `<SetLanguage lang="..." />` para garantir que o contexto de tradução acompanhe a URL.

### B. Sistema de Áudio (Audio Player Layer)
- **Playback Exclusivo**: Garante que apenas um áudio seja reproduzido por vez.
- **Sincronização**: Interface reativa que reflete o progresso e estado do áudio em tempo real.

### C. Certificação Digital
- **Hash SHA-256**: Gerado para cada entrega de áudio, garantindo originalidade.
- **Página de Verificação**: Rota `/verificar` e `/verificar/[id]` para auditoria pública de arquivos.

### D. Blindagem de Segurança (Hardening)
O projeto utiliza um sistema de blindagem multinível baseado no padrão OWASP Top 10:
- **Middleware de Segurança**: Gerencia CSP dinâmica com Nonce, Rate Limiting (login), proteção CSRF e bloqueio de arquivos sensíveis.
- **Supabase SSR**: Migração total para cookies `HttpOnly; Secure; SameSite=Strict` para gestão de sessão, eliminando vulnerabilidades de `localStorage`.
- **Headers HSTS Preload**: Configuração de 2 anos de validade para inclusão na lista nativa dos navegadores.
- **Headers de Infraestrutura**: Bloqueio de Clickjacking (`X-Frame-Options: DENY`) e MIME-sniffing.
- **Anti-Enumeração**: Mensagens de erro de autenticação unificadas.

> [!NOTE]
> Para detalhes completos das implementações, consulte o [SECURITY_REPORT.md](./SECURITY_REPORT.md).

---

## 5. Guia de Manutenção e Edição

### Como adicionar/editar Traduções:
1.  Abra o arquivo correspondente em `src/locales/` (ex: `es.json` para Espanhol).
2.  Localize a chave que deseja alterar e salve o arquivo.
3.  O Hot Reload do Next.js atualizará o site imediatamente.

### Como adicionar novos Áudios/Demos:
1.  Os áudios são gerenciados preferencialmente via **Dashboard Admin**.
2.  Para fallback estático, edite `src/data/content.ts` e adicione o novo objeto na lista correspondente.

---

## 6. Performance e Estabilidade
- **Gerenciamento de Cache**: Em ambientes de desenvolvimento/build, se o espaço em disco for um problema, o comando `rm -rf .next` pode ser usado para limpar o cache de build.
- **Versão Estável**: Utilize a tag `stable-i18n-functional` para retornar ao ponto onde a internacionalização e estabilidade foram consolidadas.

---

## 7. Comandos Úteis
- `npm run dev`: Inicia o ambiente de desenvolvimento.
- `npm run build`: Gera o pacote de produção para validação.
- `vercel --prod`: Faz o deploy definitivo para a produção.

---
> [!NOTE]
> Esta documentação é um documento vivo. Atualize-a sempre que houver mudanças estruturais no projeto.
