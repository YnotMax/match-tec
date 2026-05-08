# ðŸ“‹ ROADMAP & TO-DO: Match Tech â€” Metamorfose Completa

**Documento de Acompanhamento de Progresso**
**VersÃ£o 1.0 â€” Maio 2026**

> **PARA O AGENTE DE IA:** Este Ã© o seu checklist operacional.
> Marque `[x]` conforme completar cada item.
> Sempre que iniciar uma sessÃ£o de trabalho, leia este arquivo para saber ONDE parou.
> ReferÃªncia completa: `VISION_Match Tech.md` e `FRONTEND_BLUEPRINT.md`.

---

## FASE 0: ðŸ“š DocumentaÃ§Ã£o EstratÃ©gica
- [x] Criar `VISION_Match Tech.md` â€” VisÃ£o do produto, identidade visual, arquitetura.
- [x] Criar `FRONTEND_BLUEPRINT.md` â€” Blueprint tÃ©cnico de implementaÃ§Ã£o.
- [x] Criar `TODO_Match Tech.md` â€” Este roadmap.
- [ ] Revisar com o Tony e ajustar conforme feedback.

---

## FASE 1: ðŸŽ¨ Metamorfose Visual + Estrutura Base

### 1.1 Design System (CSS + Componentes Base)
- [ ] **`src/index.css`** â€” Reescrever Design System completo.
  - [ ] Substituir fontes: `Space Grotesk` / `Archivo Black` â†’ `Inter` + `JetBrains Mono`.
  - [ ] Substituir tokens de cor: paleta Neo-Brutalista â†’ paleta SaaS Dark.
  - [ ] Remover utilities: `.neo-border`, `.neo-shadow`, `.neo-shadow-hover`, slider Neo.
  - [ ] Adicionar utilities: `.card-base`, `.glow-accent`, `.glass`.
  - [ ] Ajustar body defaults (bg dark, text light).

### 1.2 Componentes UI (Reskin + Novos)
- [ ] **`src/components/ui/Button.tsx`** â€” Reskinnar.
  - [ ] Novas variantes: `primary`, `secondary`, `ghost`, `danger`.
  - [ ] Remover variantes: `accent-lime`, `accent-pink`, `accent-cyan`, `accent-yellow`.
  - [ ] Novo estilo: `rounded-lg`, sem sombra sÃ³lida, transiÃ§Ã£o suave.
  
- [ ] **`src/components/ui/Card.tsx`** â€” Reskinnar.
  - [ ] Background: `--color-bg-card`.
  - [ ] Borda: 1px `--color-border`.
  - [ ] Remover variantes de cor neon (lime, pink, yellow, cyan).
  - [ ] Adicionar variantes: `default`, `elevated`, `glass`.

- [ ] **`src/components/ui/Avatar.tsx`** â€” Criar (novo).
  - [ ] Extrair lÃ³gica de `OnboardingAvatar` e `Avatar` da Guilda.
  - [ ] Fallback chain: Google Photo â†’ GitHub Photo â†’ Iniciais.
  - [ ] Props: `size` (sm/md/lg/xl), `user` object.

- [ ] **`src/components/ui/SkillRadar.tsx`** â€” Criar (novo).
  - [ ] Extrair de Onboarding/Guilda a configuraÃ§Ã£o do RadarChart.
  - [ ] Props: `skills`, `size`, `accentColor`.
  - [ ] Cores: accent palette (violeta como padrÃ£o).

- [ ] **`src/components/ui/TagBadge.tsx`** â€” Criar (novo).
  - [ ] 4 variantes visuais: love (accent), comfort (accent-secondary), veto (danger), neutral (muted).
  - [ ] Tamanho compacto, pill shape.

- [ ] **`src/components/ui/ProfileCard.tsx`** â€” Criar (novo).
  - [ ] ComposiÃ§Ã£o: Avatar + Nome + Role + Mini Radar + Top Tags + Status Badge.
  - [ ] Variante `compact` para uso em listas de Squad.
  - [ ] Hover: scale(1.02) + border glow.

- [ ] **`src/components/ui/StatusBadge.tsx`** â€” Criar (novo).
  - [ ] 3 estados: `looking` (verde pulsante), `open` (amarelo), `complete` (cinza).

- [ ] **`src/components/ui/SearchFilter.tsx`** â€” Criar (novo).
  - [ ] Input de busca + dropdowns de filtro + chips de tags.

### 1.3 Layout e NavegaÃ§Ã£o
- [ ] **`src/layouts/RootLayout.tsx`** â€” Redesign completo.
  - [ ] Navbar dark mode (glass ou solid bg).
  - [ ] Logo "Match Tech" em texto (sem Ã­cone por agora).
  - [ ] Links: Discover, Squad.
  - [ ] Avatar com dropdown menu (Meu Perfil, ConfiguraÃ§Ãµes, Sair).
  - [ ] Mobile: hamburger â†’ drawer.
  - [ ] Remover referÃªncias a "CMD_BUNKER", Ã­cone Terminal, estilo Neo-Brutalista.

### 1.4 PÃ¡ginas Novas
- [ ] **`src/pages/Landing.tsx`** â€” Criar.
  - [ ] Hero com headline + CTA.
  - [ ] SeÃ§Ã£o "Como Funciona" (3 steps).
  - [ ] SeÃ§Ã£o "Perfis Ativos" (marquee ou grid).
  - [ ] SeÃ§Ã£o Stats (counters).
  - [ ] Footer.

- [ ] **`src/pages/Discover.tsx`** â€” Criar (baseado na Guilda).
  - [ ] Reutilizar lÃ³gica de fetch de membros do Firestore.
  - [ ] Grid responsivo de ProfileCards.
  - [ ] Barra de filtros no topo.
  - [ ] Estado vazio: CTA para criar perfil.

### 1.5 PÃ¡ginas Existentes (Reskin)
- [ ] **`src/pages/Onboarding.tsx`** â€” Re-skin completo.
  - [ ] **PRESERVAR:** Toda lÃ³gica de estado, validaÃ§Ã£o, Firestore, radar chart.
  - [ ] **TROCAR:** Toda a camada visual (classes CSS, textos, layout).
  - [ ] Substituir textos militaristas por linguagem amigÃ¡vel.
  - [ ] Ajustar schema do Firestore (`members` â†’ `profiles`, campos renomeados).

### 1.6 Roteamento
- [ ] **`src/App.tsx`** â€” Atualizar rotas.
  - [ ] `/` â†’ Landing.tsx
  - [ ] `/onboarding` â†’ Onboarding.tsx (reskinado)
  - [ ] `/discover` â†’ Discover.tsx
  - [ ] `/profile/:id` â†’ Profile.tsx (Fase 2)
  - [ ] `/squad` â†’ Squad.tsx (Fase 2)
  - [ ] Remover: `/guilda`, `/oraculo`, `/logistica`

### 1.7 Limpeza
- [ ] Remover `src/pages/Bunker.tsx`
- [ ] Remover `src/pages/Logistica.tsx`
- [ ] Remover `src/components/ui/PostModal.tsx`
- [ ] Remover `src/utils/timer.ts` e `src/utils/timer.test.ts` (se nÃ£o forem usados)
- [ ] Atualizar `package.json` â€” nome do projeto ("Match Tech").

---

## FASE 2: ðŸ”— Matchmaking + Social

### 2.1 Perfil PÃºblico
- [ ] **`src/pages/Profile.tsx`** â€” Criar.
  - [ ] Fetch de perfil por ID do Firestore.
  - [ ] Header: avatar, nome, role, links sociais.
  - [ ] Radar Chart grande.
  - [ ] Tags detalhadas (3 colunas: loves/comfort/veto).
  - [ ] BotÃ£o "Analisar Compatibilidade" (chama IA).
  - [ ] BotÃ£o "Convidar para Equipe".

### 2.2 Filtros na Discover
- [ ] Implementar filtro por nome (search input).
- [ ] Implementar filtro por role (dropdown).
- [ ] Implementar filtro por status (looking/open/all).
- [ ] Implementar filtro por tag especÃ­fica.
- [ ] Implementar ordenaÃ§Ã£o (por match score, por data de criaÃ§Ã£o).

### 2.3 Sistema de Squads
- [ ] **`src/pages/Squad.tsx`** â€” Criar.
- [ ] Collection `squads` no Firestore.
- [ ] Criar equipe (nome, lÃ­der).
- [ ] Enviar convites (subcollection `invites` ou field array).
- [ ] Aceitar/recusar convite.
- [ ] VisualizaÃ§Ã£o: lista de membros, radar sobreposto.
- [ ] IA: AnÃ¡lise de composiÃ§Ã£o da equipe.

### 2.4 IA de Compatibilidade
- [ ] Nova rota `POST /api/compatibility` no server.ts.
- [ ] Prompt: recebe 2 perfis, retorna score + anÃ¡lise.
- [ ] UI: Modal de resultado com score, forÃ§as, gaps.

### 2.5 Firestore Schema Migration
- [ ] Renomear collection `members` â†’ `profiles`.
- [ ] Renomear campos (`dados` â†’ `data`, `hardware_android` â†’ `hardware_iot`, `vibe_coding` â†’ `ai_ml`).
- [ ] Remover `guildId` hardcoded â†’ usar `eventId` dinÃ¢mico.
- [ ] Adicionar campos: `bio`, `status`, `squadId`, `eventId`.
- [ ] Atualizar `firestore.rules` para novo schema.

---

## FASE 3: âœ¨ Polish + Deploy

### 3.1 Responsividade
- [ ] Testar todas as pÃ¡ginas em mobile (375px).
- [ ] Testar em tablet (768px).
- [ ] Ajustar breakpoints conforme necessÃ¡rio.

### 3.2 SEO e Meta Tags
- [ ] `<title>` dinÃ¢mico por pÃ¡gina.
- [ ] `<meta description>` por pÃ¡gina.
- [ ] Open Graph tags (para compartilhamento em redes sociais).
- [ ] Favicon e manifest atualizados com branding Match Tech.

### 3.3 PWA
- [ ] Atualizar `vite-plugin-pwa` manifest com novo nome e cores.
- [ ] Gerar Ã­cones (192x192, 512x512).
- [ ] Testar instalaÃ§Ã£o como PWA.

### 3.4 Performance
- [ ] Lazy loading de pÃ¡ginas (React.lazy + Suspense).
- [ ] Otimizar bundle size (check unused dependencies).
- [ ] Skeleton loading states para todas as pÃ¡ginas com data fetch.

### 3.5 Deploy
- [ ] Configurar Vercel (ou plataforma de deploy).
- [ ] VariÃ¡veis de ambiente (GEMINI_API_KEY, Firebase config).
- [ ] Testar em produÃ§Ã£o.
- [ ] DomÃ­nio customizado (se houver).

### 3.6 Testes
- [ ] Testes unitÃ¡rios para lÃ³gica de matchmaking.
- [ ] Testes de componentes (ProfileCard, SkillRadar).
- [ ] Teste E2E do fluxo: Landing â†’ Onboarding â†’ Discover â†’ Profile.

---

## DECISÃ•ES PENDENTES (Para discutir com o Tony)

| # | DecisÃ£o | OpÃ§Ãµes | Status |
|---|---------|--------|--------|
| 1 | Nome final do produto | Match Tech? Outro? | **Match Tech (provisÃ³rio)** |
| 2 | NavegaÃ§Ã£o | Top nav (como SaaS) ou sidebar (como dashboard)? | **Top nav (preferido)** |
| 3 | Matchmaking automÃ¡tico vs manual | IA sugere matches automaticamente ou usuÃ¡rio busca? | **Manual + IA opcional** |
| 4 | Multi-evento | O app serve sÃ³ para Tech Floripa 2026 ou Ã© genÃ©rico? | **ComeÃ§ar com um, generalizar depois** |
| 5 | Firebase config | Manter o projeto Firebase atual ou criar um novo? | **Manter (por agora)** |
| 6 | Deploy | Vercel? Firebase Hosting? Outro? | **Pendente** |

---

## LOG DE SESSÃ•ES

| Data | O que foi feito | PrÃ³ximo passo |
|------|----------------|---------------|
| 07/05/2026 | Clonado repositÃ³rio, analisado cÃ³digo completo, criados os 3 MDs de referÃªncia. | Revisar docs com Tony. Iniciar Fase 1.1 (CSS). |

---

*Atualize este documento a cada sessÃ£o de trabalho. Ele Ã© o seu "diÃ¡rio de bordo".*

