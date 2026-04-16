# Sanzony.Voz Elite

Landing Page de alto padrão ("Cinema Dark") desenvolvida para a marca **Sanzony.Voz**. Apresenta portfólio de locução premium com experiência de áudio imersiva e sistema de certificação digital.

## 🚀 Funcionalidades Elite

- **Multi-idioma (i18n)**: Suporte completo para Português, Inglês e Espanhol com detecção e persistência de preferência.
- **Experiência de Áudio**: Players customizados com visualização de ondas e controle de volume broadcast.
- **Certificação Digital**: Sistema de autenticidade de áudio via hash SHA-256 e QR Code.
- **Briefing Inteligente**: Formulário técnico integrado ao Supabase para captação de leads qualificados.

## 🛠️ Tecnologias

- **Framework:** Next.js 15+ (App Router)
- **Estilização:** Tailwind CSS 4.0
- **Animações:** Framer Motion 12+
- **Backend/Auth:** Supabase
- **Infra:** Vercel

## 🔗 Links Úteis

- **Produção:** [https://sanzony-voz-premium.vercel.app](https://sanzony-voz-premium.vercel.app)
- **Admin:** [/admin](https://sanzony-voz-premium.vercel.app/admin) (Acesso restrito)
- **Briefing:** [/briefing](https://sanzony-voz-premium.vercel.app/briefing)

## 🛠️ Desenvolvimento Local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente (`.env.local`):
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

## 📄 Documentação

Para mais detalhes técnicos sobre a arquitetura de tradução e estabilidade do sistema, consulte o arquivo [DOCUMENTATION.md](./DOCUMENTATION.md).

---
> [!TIP]
> **Ponto de Restauração**: A versão estável com i18n completo está marcada com a tag `stable-i18n-functional`.
