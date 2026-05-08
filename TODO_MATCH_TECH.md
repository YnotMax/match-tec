# 📋 ROADMAP & TO-DO: Match Tech — Evolução para Comunidade

**Documento de Acompanhamento de Progresso**
**Versão 2.0 — Maio 2026**

> **PARA O AGENTE DE IA:** Este é o seu checklist operacional.
> Marque `[x]` conforme completar cada item.
> Sempre que iniciar uma sessão de trabalho, leia este arquivo para saber ONDE parou.
> Referência completa: `VISION_MATCH_TECH.md` e `FRONTEND_BLUEPRINT.md`.
>
> **LEMBRETE:** O visual é NEO-BRUTALISMO. Não trocar para dark mode / SaaS.

---

## FASE 0: 📚 Documentação Estratégica
- [x] Criar `VISION_MATCH_TECH.md` — Visão do produto, identidade visual, arquitetura.
- [x] Criar `FRONTEND_BLUEPRINT.md` — Blueprint técnico de implementação.
- [x] Criar `TODO_MATCH_TECH.md` — Este roadmap.
- [x] Criar `CODEBASE_MAP.md` — Mapa do código existente.
- [x] Revisar com o Tony — **corrigido**: MDs agora documentam Neo-Brutalismo real (não dark SaaS).

---

## FASE 1: 🎨 Novas Páginas + Abertura para Comunidade

> **REGRA DA FASE 1:** Nenhuma mudança visual. Usar os mesmos tokens, classes e
> componentes que já existem. O que muda é o PROPÓSITO, não o DESIGN.

### 1.1 Componentes Novos (usando design system existente)
- [ ] **`src/components/ui/Avatar.tsx`** — Criar.
  - [ ] Extrair lógica de `OnboardingAvatar` e `Avatar` da Guilda.
  - [ ] Fallback chain: Google Photo → GitHub Photo → Iniciais.
  - [ ] Props: `size` (sm/md/lg/xl), `user` object.
  - [ ] Estilo: `neo-border` no container.

- [ ] **`src/components/ui/SkillRadar.tsx`** — Criar.
  - [ ] Extrair de Onboarding/Guilda a configuração do RadarChart.
  - [ ] Props: `skills`, `size`.
  - [ ] Cores: neo-lime para stroke, lime/30 para fill.

- [ ] **`src/components/ui/TagBadge.tsx`** — Criar.
  - [ ] 3 variantes: love (lime), comfort (yellow), veto (pink).
  - [ ] Estilo: `neo-border`, `font-heading uppercase text-xs`.

- [ ] **`src/components/ui/StatusBadge.tsx`** — Criar.
  - [ ] 3 estados: `looking` (verde), `open` (amarelo), `complete` (cinza).

- [ ] **`src/components/ui/ProfileCard.tsx`** — Criar.
  - [ ] Composição: Avatar + Nome + Role + Mini Radar + Top Tags + Status Badge.
  - [ ] Usa `<Card>` existente. Hover: `neo-shadow-hover`.
  - [ ] Variante `compact` para uso em listas de Squad.

### 1.2 Páginas Novas (estilo Neo-Brutalista)
- [ ] **`src/pages/Landing.tsx`** — Criar.
  - [ ] Hero com headline gigante (font-heading) + CTA accent-lime.
  - [ ] Seção "Como Funciona" (3 Cards: lime, yellow, pink).
  - [ ] Seção "Perfis Ativos" (grid de cards mini).
  - [ ] Footer.

- [ ] **`src/pages/Discover.tsx`** — Criar (baseado na Guilda).
  - [ ] Copiar lógica de fetch do Guilda.tsx (onSnapshot, real-time).
  - [ ] Remover filtro por guildId — buscar todos os perfis.
  - [ ] Adicionar barra de filtros (nome, role, status).
  - [ ] Grid responsivo de ProfileCards.
  - [ ] Estado vazio: CTA para criar perfil.

### 1.3 Páginas Existentes (Ajustes mínimos)
- [ ] **`src/pages/Onboarding.tsx`** — Ajustar.
  - [ ] **NÃO TOCAR no visual ou lógica de state/validação.**
  - [ ] Remover `guildId: 'TECH_FLORIPA_2026'` hardcoded → usar `eventId` dinâmico.
  - [ ] Ajustar `setDoc` para collection `profiles` (em vez de `members`).

### 1.4 Layout e Navegação
- [ ] **`src/layouts/RootLayout.tsx`** — Atualizar links.
  - [ ] **MANTER** todo o estilo visual Neo-Brutalista.
  - [ ] Atualizar links: Discover, Squad, Meu Perfil.
  - [ ] Remover links para Bunker, Logística.

### 1.5 Roteamento
- [ ] **`src/App.tsx`** — Atualizar rotas.
  - [ ] `/` → Landing.tsx
  - [ ] `/onboarding` → Onboarding.tsx (ajustado)
  - [ ] `/discover` → Discover.tsx
  - [ ] `/profile/:id` → Profile.tsx (Fase 2)
  - [ ] `/squad` → Squad.tsx (Fase 2)
  - [ ] Remover: `/guilda`, `/oraculo`, `/logistica`

### 1.6 Limpeza
- [ ] Remover `src/pages/Bunker.tsx`
- [ ] Remover `src/pages/Logistica.tsx`
- [ ] Remover `src/components/ui/PostModal.tsx`
- [ ] Remover `src/utils/timer.ts` e `src/utils/timer.test.ts`

---

## FASE 2: 🔗 Matchmaking + Social

### 2.1 Perfil Público
- [ ] **`src/pages/Profile.tsx`** — Criar.
  - [ ] Fetch de perfil por ID do Firestore.
  - [ ] Header: avatar, nome, role, links sociais.
  - [ ] Radar Chart grande.
  - [ ] Tags detalhadas (3 Cards coloridos: lime/yellow/pink).
  - [ ] Botão "LER MINHA SINA" (chama IA).
  - [ ] Botão "ANALISAR COMPATIBILIDADE".

### 2.2 Filtros na Discover
- [ ] Filtro por nome (search input neo-border).
- [ ] Filtro por role (dropdown neo-border).
- [ ] Filtro por status (looking/open/all).
- [ ] Filtro por tag específica.
- [ ] Ordenação (por data de criação).

### 2.3 Sistema de Squads
- [ ] **`src/pages/Squad.tsx`** — Criar.
- [ ] Collection `squads` no Firestore.
- [ ] Criar equipe (nome, líder).
- [ ] Enviar convites.
- [ ] Aceitar/recusar convite.
- [ ] Visualização: grid de membros, radar sobreposto.
- [ ] IA: Oráculo analisa composição (3 caminhos).

### 2.4 IA de Compatibilidade
- [ ] Nova rota `POST /api/compatibility` no server.ts.
- [ ] Prompt: recebe 2 perfis, retorna score + análise.
- [ ] UI: Modal Neo-Brutalista com resultado.

### 2.5 Firestore Schema Migration
- [ ] Renomear collection `members` → `profiles`.
- [ ] Remover `guildId` hardcoded → usar `eventId` dinâmico.
- [ ] Adicionar campos: `bio`, `status`, `squadId`, `eventId`.
- [ ] Atualizar `firestore.rules` para novo schema.

---

## FASE 3: ✨ Polish + Deploy

### 3.1 Responsividade
- [ ] Testar todas as páginas em mobile (375px).
- [ ] Testar em tablet (768px).

### 3.2 SEO e Meta Tags
- [ ] `<title>` dinâmico por página.
- [ ] `<meta description>` por página.
- [ ] Open Graph tags.
- [ ] Favicon e manifest atualizados.

### 3.3 PWA
- [ ] Atualizar manifest com branding Match Tech.
- [ ] Gerar ícones (192x192, 512x512).

### 3.4 Deploy
- [ ] Configurar Vercel.
- [ ] Variáveis de ambiente.
- [ ] Testar em produção.

---

## DECISÕES PENDENTES

| # | Decisão | Opções | Status |
|---|---------|--------|--------|
| 1 | Nome final | Match Tech? Outro? | **Match Tech (provisório)** |
| 2 | Navegação | Manter top nav atual | **Confirmado** |
| 3 | Multi-evento | Só Tech Floripa 2026 ou genérico? | **Começar com um** |
| 4 | Firebase config | Manter o projeto atual | **Confirmado** |
| 5 | Deploy | Vercel? Firebase Hosting? | **Pendente** |

---

## LOG DE SESSÕES

| Data | O que foi feito | Próximo passo |
|------|----------------|---------------|
| 07/05/2026 | Clonado repo, criados MDs de referência (v1 — ERRADA, dark SaaS). | Corrigir MDs. |
| 07/05/2026 | Outro chat tentou Fase 1 com visual dark. Tony reverteu. | Reescrever MDs. |
| 07/05/2026 | MDs reescritos (v2) — agora documentam Neo-Brutalismo real. Revert comitado. | Iniciar Fase 1 real. |

---

*Atualize este documento a cada sessão de trabalho. Ele é o seu "diário de bordo".*
