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
  /app              # Rotas e Layouts (App Router)
  /components
    /sections       # Componentes de UI (Hero, Services, Demos, etc.)
    /ui             # Componentes base e utilitários visuais
  /context          # LanguageContext.tsx (Gerenciamento de Estado Global)
  /locales          # pt.json, en.json, es.json (Dicionários de tradução)
  /data             # content.ts (Configurações e dados estáticos fallback)
  /services         # demoService.ts (Integração com Supabase)
```

---

## 4. Sistemas Principais

### A. Sistema de Internacionalização (i18n)
Diferente de bibliotecas pesadas, utilizamos uma solução leve baseada em `Context API`:
- **`LanguageContext`**: Detecta o idioma do navegador ou recupera do `localStorage`.
- **Dicionários**: Arquivos JSON em `/src/locales` servem como fonte única de verdade para textos.
- **Hook `useLanguage`**: Utilizado por componentes cliente para acessar o objeto `t` (translations).

> [!IMPORTANT]
> Todos os componentes que utilizam `useLanguage` devem obrigatoriamente incluir a diretiva `"use client";` no topo do arquivo.

### B. Sistema de Áudio (Audio Player Layer)
- **Playback Exclusivo**: Garante que apenas um áudio seja reproduzido por vez.
- **Sincronização**: Interface reativa que reflete o progresso e estado do áudio em tempo real.

### C. Certificação Digital
- **Hash SHA-256**: Gerado para cada entrega de áudio, garantindo originalidade.
- **Página de Verificação**: Rota `/verificar` e `/verificar/[id]` para auditoria pública de arquivos.

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
- `npm run build`: Gera o pacote de produção.
- `git checkout stable-i18n-functional`: Restaura o site para a versão estável i18n.

---
> [!NOTE]
> Esta documentação é um documento vivo. Atualize-a sempre que houver mudanças estruturais no projeto.
