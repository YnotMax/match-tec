# ðŸ› ï¸ BLUEPRINT DE FRONT-END: Match Tech

**Guia TÃ©cnico de ImplementaÃ§Ã£o para Agentes de CÃ³digo e Desenvolvedores**
**VersÃ£o 1.0 â€” Maio 2026**

> **PARA O AGENTE DE IA:** Este documento Ã© o seu guia de IMPLEMENTAÃ‡ÃƒO.
> Ele detalha COMO construir cada componente, pÃ¡gina e interaÃ§Ã£o.
> Para entender O QUE e POR QUE, leia `VISION_Match Tech.md` primeiro.
> Se houver conflito entre os dois documentos, `VISION_Match Tech.md` Ã© a autoridade.

---

## 1. INVENTÃRIO DO CÃ“DIGO EXISTENTE (O que temos para reaproveitar)

O app atual Ã© um projeto funcional e robusto. NÃ£o vamos jogÃ¡-lo fora â€” vamos **metamorfoseÃ¡-lo**. Abaixo estÃ¡ o mapeamento de cada arquivo relevante e o que serÃ¡ feito com ele.

### 1.1 Arquivos que PERMANECEM (core intacto)

| Arquivo | Motivo |
|---------|--------|
| `src/lib/firebase.ts` | InicializaÃ§Ã£o do Firebase, persistÃªncia offline. **Manter.** |
| `src/lib/firebase-admin.ts` | Admin SDK para operaÃ§Ãµes server-side (roasts). **Manter.** |
| `src/lib/utils.ts` | Utility `cn()` para classes. **Manter.** |
| `src/contexts/AuthContext.tsx` | Auth state management. **Manter intacto.** |
| `src/services/likesService.ts` | Sistema de likes em posts. **Manter** (serÃ¡ usado em perfis). |
| `src/utils/timer.ts` + `timer.test.ts` | LÃ³gica de countdown. **Pode ser removido** (nÃ£o teremos countdown). |
| `server.ts` | Express + Vite middleware + API routes para Gemini. **Manter e expandir.** |
| `vite.config.ts` | Config do Vite + Tailwind + PWA. **Manter e ajustar.** |
| `firebase-applet-config.json` | Config do Firebase. **Manter.** |
| `firestore.rules` | Rules de seguranÃ§a. **SerÃ¡ reescrito para nova estrutura.** |

### 1.2 Arquivos que serÃ£o PROFUNDAMENTE MODIFICADOS

| Arquivo | O que muda |
|---------|-----------|
| `src/index.css` | **REDESIGN TOTAL.** Novos tokens de cor, nova tipografia, novas utilities. Remove neo-border, neo-shadow, paleta Neo-Brutalista inteira. |
| `src/App.tsx` | **NOVAS ROTAS.** Remove rotas antigas, adiciona `/discover`, `/profile/:id`, `/squad`. |
| `src/layouts/RootLayout.tsx` | **NOVO LAYOUT.** Nova navegaÃ§Ã£o (sidebar ou top nav estilo SaaS). Dark mode. |
| `src/components/ui/Button.tsx` | **RESKIN.** Remove variantes neo-brutalistas, implementa variantes SaaS (primary, secondary, ghost, danger). |
| `src/components/ui/Card.tsx` | **RESKIN.** Remove neo-border/neo-shadow. Implementa card dark com borda sutil. |
| `src/pages/Onboarding.tsx` | **RESKIN + AJUSTE.** Manter toda a lÃ³gica (skills, tags, radar). Trocar visual. Remover referÃªncias a "Protocolo Floripa", "MAPEAR MEMBRO_", etc. |
| `src/pages/Guilda.tsx` | **EVOLUI PARA Discover.** Manter lÃ³gica de listagem de membros do Firestore. Trocar visual. Adicionar filtros. Renomear. |
| `src/pages/Oraculo.tsx` | **EVOLUI PARA anÃ¡lise de Squad.** Manter lÃ³gica de chamada ao Gemini. Ajustar prompt e UI. |

### 1.3 Arquivos que serÃ£o REMOVIDOS

| Arquivo | Motivo |
|---------|--------|
| `src/pages/Bunker.tsx` | SubstituÃ­do pela Landing Page. |
| `src/pages/Logistica.tsx` | Era especÃ­fico do projeto do grupo. |
| `src/components/ui/PostModal.tsx` | Era para posts da timeline do Bunker. |

### 1.4 Arquivos NOVOS a serem criados

| Arquivo | PropÃ³sito |
|---------|-----------|
| `src/pages/Landing.tsx` | Landing page pÃºblica do Match Tech. |
| `src/pages/Discover.tsx` | PÃ¡gina de exploraÃ§Ã£o de perfis (evoluÃ§Ã£o da Guilda). |
| `src/pages/Profile.tsx` | VisualizaÃ§Ã£o de perfil pÃºblico individual. |
| `src/pages/Squad.tsx` | Gerenciamento de equipe formada. |
| `src/components/ui/ProfileCard.tsx` | Card de preview de perfil para o feed. |
| `src/components/ui/SkillRadar.tsx` | Componente isolado do radar chart (extraÃ­do do Onboarding). |
| `src/components/ui/TagBadge.tsx` | Badge de tag com variantes (love/comfort/veto). |
| `src/components/ui/SearchFilter.tsx` | Barra de filtros para a pÃ¡gina Discover. |
| `src/components/ui/Avatar.tsx` | Componente de avatar unificado (extraÃ­do de Guilda e Onboarding). |
| `src/components/layout/Sidebar.tsx` | Sidebar de navegaÃ§Ã£o (se optar por sidebar). |

---

## 2. NOVO DESIGN SYSTEM (CSS)

### 2.1 Arquivo `src/index.css` â€” Reescrita completa

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

@import "tailwindcss";

@theme {
  /* Typography */
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Backgrounds */
  --color-bg: #09090B;
  --color-bg-card: #18181B;
  --color-bg-elevated: #27272A;
  
  /* Borders */
  --color-border: #3F3F46;
  --color-border-hover: #52525B;
  
  /* Text */
  --color-text-primary: #FAFAFA;
  --color-text-secondary: #A1A1AA;
  --color-text-muted: #71717A;
  
  /* Accents */
  --color-accent: #8B5CF6;
  --color-accent-hover: #A78BFA;
  --color-accent-secondary: #06B6D4;
  
  /* Semantic */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;
}
```

### 2.2 Classes UtilitÃ¡rias Novas

```css
@layer utilities {
  /* Card com borda sutil */
  .card-base {
    background-color: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    transition: border-color 0.2s ease;
  }
  .card-base:hover {
    border-color: var(--color-border-hover);
  }

  /* Glow sutil para elementos de destaque */
  .glow-accent {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
  }
  .glow-success {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.15);
  }

  /* Glass effect */
  .glass {
    background: rgba(24, 24, 27, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}
```

---

## 3. ESPECIFICAÃ‡Ã•ES POR PÃGINA

### 3.1 Landing Page (`/`)

**Layout:** Full-width, scroll vertical longo.

**SeÃ§Ã£o Hero:**
- Fundo: `--color-bg` com gradiente radial sutil de `--color-accent` no centro (opacity 5-10%).
- Headline: `text-5xl md:text-7xl font-extrabold text-text-primary`.
  - Texto: "Encontre sua equipe ideal."
  - Subline com gradient text: "Antes do kickoff." (gradiente de accent â†’ accent-secondary).
- CTA: BotÃ£o primary grande "Criar Meu Perfil â†’".
- Abaixo do CTA: Texto muted "JÃ¡ tem conta? Entrar" com link.
- DecoraÃ§Ã£o: Orbs flutuantes com blur (esferas de accent e accent-secondary com opacity 10%, animaÃ§Ã£o lenta de flutuaÃ§Ã£o).

**SeÃ§Ã£o "Como Funciona" (3 Steps):**
- Layout: 3 colunas (md:grid-cols-3, em mobile empilhado).
- Cada step Ã© um card-base com Ã­cone, nÃºmero ordinal, tÃ­tulo e descriÃ§Ã£o curta.
  1. `UserPlus` â†’ "Mapeie" â†’ "Registre suas skills, paixÃµes e vetos."
  2. `Search` â†’ "Descubra" â†’ "Explore perfis complementares ao seu."
  3. `Users` â†’ "Conecte" â†’ "Forme sua equipe ideal antes do evento."

**SeÃ§Ã£o "Perfis Ativos" (Social Proof):**
- Marquee horizontal infinito (usando CSS animation ou motion/react).
- Cards mini de perfis (foto, nome, role principal, 3 tags loves).
- Se nÃ£o houver perfis reais, usar placeholders estÃ¡ticos.

**SeÃ§Ã£o Stats:**
- 3 nÃºmeros grandes: "Perfis Criados", "Skills Mapeadas", "Matches Gerados".
- Counter animado (increment on scroll).

**Footer:**
- Minimalista. Logo Match Tech, links (GitHub, comunidade), crÃ©ditos.
- "Feito com â˜• por Tony Max & Squad â€¢ Hackathon Tech Floripa 2026".

---

### 3.2 Onboarding (`/onboarding`) â€” Re-skin

**O que manter da lÃ³gica existente:**
- `TAG_CATEGORIES` array com todas as tags categorizadas.
- `ROLES_LIST` array com roles disponÃ­veis.
- Estado `skills` com as 6 categorias.
- Estado `form` com name, github, linkedin, loves, comfort, veto, primaryRole, secondaryRoles.
- FunÃ§Ã£o `setTagSentiment()` (lÃ³gica de exclusÃ£o mÃºtua entre states).
- FunÃ§Ã£o `toggleRole()`.
- FunÃ§Ã£o `handleSubmit()` com `setDoc` para Firestore.
- Componente `OnboardingAvatar` (fallback chain de fotos).
- Radar Chart (Recharts `RadarChart`).
- ValidaÃ§Ã£o de mÃ­nimo 10 tags.
- `fetchMemberData()` para carregar dados existentes.

**O que mudar no visual:**
- Remover TODOS os textos militaristas: "MAPEAR MEMBRO_", "Protocolo Floripa", "ACESSO_RESTRITO", "Arsenal", "Calibragem", "Operador", "Codinome / Nome de Guerra".
- Substituir por linguagem amigÃ¡vel: "Criar Perfil", "Como te chamam?", "Suas Skills", "Qual Ã© a sua vibe?".
- Remover classes `neo-border`, `neo-shadow`, cores `neo-lime`, `neo-pink`, `neo-cyan`, `neo-yellow`.
- Aplicar classes `card-base`, `bg-bg-card`, `border-border`, `text-text-primary`.
- Sliders: Skinnar com aparÃªncia minimalista (track fino, thumb arredondado, cor accent).
- Tags: Cada tag Ã© um pill com 3 Ã­cones inline (heart, check, ban). Estado ativo muda o background/borda da pill.
- Radar Chart: Ajustar cores para accent palette (stroke: accent-primary, fill: accent-primary/30).
- Preview do Perfil: Card dark com glow sutil quando completo.

**Textos substitutos (PT-BR):**
| Antes (Neo-Brutalismo) | Depois (SaaS) |
|------------------------|---------------|
| MAPEAR MEMBRO_ | CRIAR PERFIL |
| Protocolo Floripa 2026 | Match Tech â€” Hackathon Tech Floripa |
| ACESSO_RESTRITO | Entrar |
| Codinome / Nome de Guerra | Como te conhecem? |
| CALIBRAGEM DO ARSENAL | Mapeie seu Stack |
| NÃVEL_DE_SINC | NÃ­vel de ExperiÃªncia |
| PASAPORTE_GUILDA | Preview do Perfil |
| REGISTRAR OPERADOR | Salvar Perfil |
| BLOQUEADO | Complete seu perfil |

---

### 3.3 Discover (`/discover`) â€” EvoluÃ§Ã£o da Guilda

**Layout:**
- Top: Barra de filtros horizontal (SearchFilter component).
- Abaixo: Grid responsivo de ProfileCards (cols-1 sm:cols-2 lg:cols-3).

**Filtros (SearchFilter):**
- Input de busca por nome.
- Dropdown de Role (Frontend, Backend, etc.).
- Toggle de Status (Buscando Equipe / Todos).
- Dropdown de Skill dominante.
- Tags populares (chips clicÃ¡veis).

**ProfileCard:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  [Avatar]  Nome Completo        â”‚
â”‚            @github              â”‚
â”‚            Frontend Developer   â”‚
â”‚                                 â”‚
â”‚  [Mini Radar Chart]             â”‚
â”‚                                 â”‚
â”‚  â¤ï¸ React  â¤ï¸ TypeScript  â¤ï¸ UX â”‚
â”‚                                 â”‚
â”‚  â— Buscando Equipe              â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

- Background: `card-base`.
- Hover: borda accent, scale(1.02), glow sutil.
- Click: abre modal de perfil completo ou navega para `/profile/:id`.

---

### 3.4 Perfil PÃºblico (`/profile/:id`)

**Layout:** PÃ¡gina dedicada OU modal grande.

**SeÃ§Ãµes:**
1. **Header:** Avatar grande + Nome + Role + Links sociais (Ã­cones GitHub, LinkedIn).
2. **Bio:** Texto curto (se houver).
3. **Radar Chart:** Full-size com labels visÃ­veis.
4. **Tags Detalhadas:** 3 colunas (Loves / Comfort / Veto) com badges coloridas.
5. **AÃ§Ãµes:**
   - "Analisar Compatibilidade" â†’ Chama a IA para comparar SEU perfil com ESTE perfil.
   - "Convidar para Equipe" â†’ Cria convite no Firestore (Fase 2).

---

### 3.5 Squad (`/squad`)

**Layout:** Dashboard simples.

- **Se nÃ£o tem squad:** CTA "Criar Equipe" + campo de nome.
- **Se tem squad:**
  - Nome da equipe editÃ¡vel.
  - Lista de membros (ProfileCards compactos).
  - Radar sobreposto (todos os membros no mesmo chart).
  - BotÃ£o "AnÃ¡lise do OrÃ¡culo" â†’ chama Gemini para analisar composiÃ§Ã£o.
  - SeÃ§Ã£o de convites pendentes.

---

## 4. NAVEGAÃ‡ÃƒO (RootLayout)

### OpÃ§Ã£o Preferida: Top Nav Dark

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  [Logo] Match Tech     Discover  Squad  [Avatar] [â‰¡]   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

- Background: `--color-bg` ou glass.
- Logo: Texto "Match Tech" em `font-sans font-bold text-xl`.
- Links: `text-text-secondary hover:text-text-primary` com underline accent on active.
- Avatar: Circular, borda 1px, dropdown com "Meu Perfil", "ConfiguraÃ§Ãµes", "Sair".
- Mobile: Hamburger menu que abre drawer lateral.

### Links de NavegaÃ§Ã£o:
| Label | Path | CondiÃ§Ã£o |
|-------|------|----------|
| Discover | `/discover` | Logado |
| Squad | `/squad` | Logado |
| (Avatar) | Menu dropdown | Logado |
| Criar Perfil | `/onboarding` | NÃ£o logado |

---

## 5. COMPONENTES REUTILIZÃVEIS (Component Library)

### 5.1 `<ProfileCard />`
- Props: `profile: UserProfile`, `onClick: () => void`, `compact?: boolean`.
- Variante `compact` para uso dentro do Squad.

### 5.2 `<SkillRadar />`
- Props: `skills: SkillsMap`, `size?: 'sm' | 'md' | 'lg'`, `accentColor?: string`.
- ExtraÃ­do da lÃ³gica duplicada em Onboarding e Guilda.
- Usa Recharts `RadarChart`.

### 5.3 `<TagBadge />`
- Props: `tag: string`, `sentiment: 'love' | 'comfort' | 'veto' | 'neutral'`.
- Cores: love=accent, comfort=accent-secondary, veto=danger, neutral=border.

### 5.4 `<Avatar />`
- Props: `user: { photoURL, github, name }`, `size?: 'sm' | 'md' | 'lg' | 'xl'`.
- Unifica `OnboardingAvatar` e `Avatar` da Guilda (mesma lÃ³gica de fallback chain).

### 5.5 `<StatusBadge />`
- Props: `status: 'looking' | 'open' | 'complete'`.
- looking: Dot pulsante verde + "Buscando Equipe".
- open: Dot amarelo + "Aberto a Propostas".
- complete: Dot cinza + "Equipe Formada".

---

## 6. ANIMAÃ‡Ã•ES E TRANSIÃ‡Ã•ES

| Elemento | AnimaÃ§Ã£o | DuraÃ§Ã£o | Easing |
|----------|----------|---------|--------|
| Page transitions | Fade in + slide up (y: 10px) | 200ms | ease-out |
| Card hover | Scale 1.02 + border glow | 200ms | ease-out |
| Modal open | Scale 0.95â†’1 + fade | 250ms | spring(1, 80, 10) |
| Tag selection | Background fade + scale 1.05 | 150ms | ease-out |
| Radar chart data change | Smooth morph (Recharts native) | 300ms | ease-in-out |
| Button press | Scale 0.97 | 100ms | ease-out |
| Skeleton loading | Shimmer gradient animation | 1.5s loop | linear |

**REGRA:** Nenhuma animaÃ§Ã£o deve durar mais de 400ms. Nada de bounce ou spring exagerado. Suavidade e velocidade.

---

## 7. API ROUTES (server.ts)

### Rotas existentes a manter:
- `POST /api/roast` â†’ Gera anÃ¡lise IA de um perfil. **Renomear** para `POST /api/analyze-profile`.
- `POST /api/oraculo/match` â†’ Gera estratÃ©gias para equipe. **Renomear** para `POST /api/analyze-squad`.

### Rotas novas:
- `POST /api/compatibility` â†’ Recebe 2 profile IDs, retorna anÃ¡lise de compatibilidade via Gemini.
  - Input: `{ profileA: UserProfile, profileB: UserProfile }`
  - Output: `{ score: number, strengths: string[], gaps: string[], verdict: string }`

### Ajuste de Prompts:
- Remover linguagem militar/brutalista dos prompts do Gemini.
- Manter a opÃ§Ã£o de tom "brutal" vs "suave" na anÃ¡lise individual.
- Adicionar tom "profissional" como padrÃ£o para anÃ¡lise de compatibilidade.

---

## 8. ORDEM DE EXECUÃ‡ÃƒO (Para o Agente de IA)

Quando receber a ordem "comeÃ§ar a metamorfose", execute nesta sequÃªncia:

1. **`src/index.css`** â†’ Reescrever tokens e utilities (remove neo-*, adiciona novo design system).
2. **`src/components/ui/Button.tsx`** â†’ Reskinnar.
3. **`src/components/ui/Card.tsx`** â†’ Reskinnar.
4. **`src/components/ui/Avatar.tsx`** â†’ Criar (extrair lÃ³gica repetida).
5. **`src/components/ui/SkillRadar.tsx`** â†’ Criar (extrair de Onboarding).
6. **`src/components/ui/TagBadge.tsx`** â†’ Criar.
7. **`src/components/ui/ProfileCard.tsx`** â†’ Criar.
8. **`src/layouts/RootLayout.tsx`** â†’ Redesign completo.
9. **`src/pages/Landing.tsx`** â†’ Criar.
10. **`src/pages/Onboarding.tsx`** â†’ Re-skin (PRESERVAR toda lÃ³gica).
11. **`src/pages/Discover.tsx`** â†’ Criar (baseado na Guilda).
12. **`src/App.tsx`** â†’ Atualizar rotas.
13. **Limpar:** Remover Bunker.tsx, Logistica.tsx, PostModal.tsx.

---

*Este documento Ã© o manual de engenharia. Siga-o passo a passo e o resultado serÃ¡ um app premium e funcional.*

