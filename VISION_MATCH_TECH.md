# ðŸŒŒ VISÃƒO DO PRODUTO: Match Tech â€” Plataforma de Matchmaking para Hackathons

**Documento Mestre de ReferÃªncia (VersÃ£o 1.0)**
**Data de CriaÃ§Ã£o:** 07 de Maio de 2026
**Ãšltima AtualizaÃ§Ã£o:** 07 de Maio de 2026

> **ATENÃ‡ÃƒO AGENTE DE IA:** Este Ã© o documento de referÃªncia PRIMÃRIO do projeto.
> Sempre que vocÃª sentir que estÃ¡ "alucinando" ou se perdendo na direÃ§Ã£o do cÃ³digo,
> volte aqui. Tudo o que este documento diz sobre identidade visual, arquitetura,
> e funcionalidades Ã© LEI. NÃ£o invente funcionalidades que nÃ£o estejam aqui.

---

## 1. ELEVATOR PITCH (2 frases)

**Match Tech** Ã© uma plataforma de matchmaking comunitÃ¡ria para hackathons que permite que desenvolvedores, designers e entusiastas solitÃ¡rios encontrem equipes complementares com base em suas habilidades reais, paixÃµes e vetos. Nasceu da transformaÃ§Ã£o de um app de apresentaÃ§Ã£o de equipe do Tech Floripa 2026, cujo sistema de mapeamento de perfil individual ficou tÃ£o bom que decidimos abri-lo para toda a comunidade.

---

## 2. A HISTÃ“RIA DE ORIGEM (Contexto para a IA)

### O que existia antes (App "Antigo"):
- Um **"Bunker Digital"** interno do grupo do Tony Max para o Hackathon Tech Floripa 2026.
- Tinha 4 pÃ¡ginas: Dashboard (Bunker), Onboarding, Guilda (listagem da equipe), OrÃ¡culo (IA estrategista).
- Era **fechado** â€” sÃ³ membros do time usavam. A `guildId` era hardcoded como `TECH_FLORIPA_2026`.
- Design: **Neo-Brutalismo** (bordas pretas grossas, sombras sÃ³lidas, cores neon gritantes).
- Stack: React 19 + TypeScript + Vite + Tailwind CSS v4 + Firebase (Auth + Firestore) + Express + Gemini AI.

### O que aconteceu:
- O sistema de **Onboarding** (mapeamento individual de skills, paixÃµes, vetos via tags, radar chart) ficou tÃ£o polido e divertido que o grupo percebeu: "isso deveria ser aberto para a comunidade inteira".
- A organizaÃ§Ã£o do Tech Floripa aprovou a ideia.
- Cogitamos usar a identidade visual do Tech Floripa, mas ela Ã© genÃ©rica/feita por IA e nÃ£o ficou boa. Decidimos usar **nossa prÃ³pria identidade visual** (SaaS Minimalista Premium).

### O que muda agora:
- O app deixa de ser um "painel de comando privado" e vira uma **ferramenta comunitÃ¡ria de matchmaking**.
- Qualquer pessoa inscrita no hackathon pode criar seu perfil e buscar equipes/membros complementares.
- A identidade visual muda de **Neo-Brutalismo** para **SaaS Minimalista Premium** (detalhes na seÃ§Ã£o 5).

---

## 3. O PROBLEMA QUE RESOLVEMOS

### O Participante Solo (A Dor Real):
- **~40% dos inscritos em hackathons iniciam sem equipe.**
- A falta de equipe Ã© o **maior motivo de desistÃªncia** antes do kickoff.
- Quem chega sozinho perde horas preciosas no dia 1 tentando montar time "no feeling".
- NÃ£o existe um sistema que cruze habilidades reais (nÃ£o sÃ³ "eu sei React") com afinidades humanas (paixÃµes, vetos, estilo de trabalho).

### O que o Match Tech resolve:
1. **Mapeamento honesto de perfil:** NÃ£o Ã© um currÃ­culo. Ã‰ um "Team Canvas" gamificado onde vocÃª marca o que ama, o que opera bem e o que nem f*dendo.
2. **Matchmaking inteligente:** IA cruza perfis para sugerir combinaÃ§Ãµes complementares (ex: um frontend apaixonado + um backend veterano + um designer UX que detesta cÃ³digo).
3. **Ponte social prÃ©-evento:** Conecta pessoas ANTES do kickoff, dando tempo para alinhar expectativas.

---

## 4. PÃšBLICO-ALVO

| Persona | DescriÃ§Ã£o |
|---------|-----------|
| **Solo Dev** | Inscrito no hackathon sem equipe. Quer encontrar pessoas com habilidades complementares. |
| **LÃ­der de Equipe Incompleta** | Tem 2-3 membros mas precisa de um perfil especÃ­fico (ex: "precisamos de alguÃ©m de UX"). |
| **Curioso / Networking** | Quer ver quem estÃ¡ participando, explorar perfis, avaliar o nÃ­vel da comunidade antes de se comprometer. |
| **OrganizaÃ§Ã£o do Evento** | Quer reduzir desistÃªncias e aumentar a qualidade dos projetos formados. |

---

## 5. IDENTIDADE VISUAL: SaaS MINIMALISTA PREMIUM

> **REGRA ABSOLUTA:** Este projeto NÃƒO usa mais Neo-Brutalismo.
> A nova identidade Ã© limpa, premium, moderna â€” inspirada em SaaS de alto nÃ­vel
> como Linear, Vercel, Raycast, Arc Browser.

### 5.1 Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-bg` | `#09090B` | Background principal (dark mode como padrÃ£o) |
| `--color-bg-card` | `#18181B` | Cards, superfÃ­cies elevadas |
| `--color-bg-elevated` | `#27272A` | Modais, popovers, inputs focados |
| `--color-border` | `#3F3F46` | Bordas sutis (1px) |
| `--color-border-hover` | `#52525B` | Bordas em hover |
| `--color-text-primary` | `#FAFAFA` | Texto principal |
| `--color-text-secondary` | `#A1A1AA` | Texto secundÃ¡rio, labels |
| `--color-text-muted` | `#71717A` | Texto terciÃ¡rio, hints |
| `--color-accent-primary` | `#8B5CF6` | AÃ§Ã£o primÃ¡ria (Violeta/Ãndigo) |
| `--color-accent-hover` | `#A78BFA` | Hover do accent |
| `--color-accent-secondary` | `#06B6D4` | AÃ§Ã£o secundÃ¡ria (Cyan) |
| `--color-success` | `#22C55E` | Sucesso, confirmaÃ§Ã£o, match alto |
| `--color-warning` | `#F59E0B` | Aviso, match mÃ©dio |
| `--color-danger` | `#EF4444` | Erro, veto, match baixo |

### 5.2 Tipografia

| Categoria | Font | Peso | Uso |
|-----------|------|------|-----|
| **Headlines** | `Inter` | 700-800 (Bold/ExtraBold) | TÃ­tulos de pÃ¡gina, hero sections |
| **Body** | `Inter` | 400-500 (Regular/Medium) | Texto corrido, descriÃ§Ãµes |
| **Mono/Code** | `JetBrains Mono` | 400-500 | Tags de skills, IDs, dados tÃ©cnicos |

### 5.3 Regras de Design (A "ConstituiÃ§Ã£o Visual")

1. **Dark Mode Ã© o padrÃ£o.** Light mode Ã© secundÃ¡rio e pode ser implementado depois.
2. **Bordas:** 1px sÃ³lidas, cor `--color-border`. Nunca 3-4px como no Neo-Brutalismo.
3. **Sombras:** Nenhuma sombra sÃ³lida. Usar `ring` ou `glow` sutil com a cor de accent se necessÃ¡rio.
4. **Border-radius:** `8px` (rounded-lg) Ã© o padrÃ£o. Nada de cantos vivos (Neo-Brutalismo) nem super arredondados.
5. **EspaÃ§amento:** Generoso. Breathing room em tudo. Padding mÃ­nimo de 16px em cards.
6. **AnimaÃ§Ãµes:** Suaves e curtas (150-300ms). `ease-out`. Sem bounce, sem spring exagerado.
7. **Glassmorphism:** Permitido com moderaÃ§Ã£o â€” `backdrop-blur-xl` + `bg-white/5` para cards flutuantes.
8. **Gradientes:** Apenas sutis, em backgrounds ou badges de destaque. Nunca gradientes chamativos.
9. **Ãcones:** Lucide React (jÃ¡ estÃ¡ no projeto). TraÃ§o fino (strokeWidth 1.5-2).
10. **Hover/Focus:** TransiÃ§Ã£o de borda de `--color-border` para `--color-border-hover` ou `--color-accent-primary`. Sutil.

### 5.4 Componentes UI (Regras)

- **Buttons:**
  - Primary: `bg-accent-primary`, texto branco, hover escurece levemente.
  - Secondary: `bg-transparent`, borda `--color-border`, hover borda accent.
  - Ghost: Sem borda, sem background, hover com background sutil.
  - Todos: `rounded-lg`, `px-4 py-2`, `font-medium`, `text-sm`.
  - **NÃƒO** usar sombras sÃ³lidas deslocadas (isso Ã© Neo-Brutalismo).

- **Cards:**
  - Background: `--color-bg-card`.
  - Borda: 1px `--color-border`.
  - Hover: borda muda para `--color-border-hover`.
  - Padding: `p-6` mÃ­nimo.
  - **NÃƒO** usar `neo-border` ou `neo-shadow`.

- **Inputs:**
  - Background: `--color-bg-elevated` ou `transparent`.
  - Borda: 1px `--color-border`.
  - Focus: ring de 2px com `--color-accent-primary` + opacity 50%.
  - Placeholder: `--color-text-muted`.

---

## 6. ARQUITETURA DE PÃGINAS (Mapa do App Novo)

### 6.1 Landing Page `/` (PÃºblica)
**PropÃ³sito:** Primeira impressÃ£o. Converter visitante em usuÃ¡rio cadastrado.

- **Hero:** Headline forte ("Encontre sua equipe ideal. Antes do kickoff.") + CTA "Criar Perfil".
- **SeÃ§Ã£o "Como Funciona":** 3 steps visuais (Mapeie â†’ Descubra â†’ Conecte).
- **SeÃ§Ã£o "Perfis Ativos":** Preview animado de cards de perfil (dados reais anonimizados ou exemplos).
- **SeÃ§Ã£o "Stats":** Contador ao vivo de perfis criados, matches sugeridos, etc.
- **Footer:** Links da comunidade, crÃ©ditos.

### 6.2 Onboarding / Criar Perfil `/onboarding` (Requer Auth)
**PropÃ³sito:** O coraÃ§Ã£o do app. Mapear o perfil completo do participante.

> **REAPROVEITAR:** 90% da lÃ³gica do Onboarding atual pode ser reutilizada.
> O que muda Ã© a skin visual (de Neo-Brutalista para SaaS Minimalista) e
> a remoÃ§Ã£o de referÃªncias internas ao "grupo" ou "guilda privada".

**SeÃ§Ãµes do formulÃ¡rio:**
1. **Identidade:** Nome/Codinome, foto (via Google Auth), GitHub, LinkedIn, Bio curta.
2. **Classe Principal/SecundÃ¡ria:** Seletor de roles (Frontend, Backend, AI/ML, Design, Hardware, etc.).
3. **Skills Radar:** Sliders de 1-10 para as 6 categorias. Gera radar chart em tempo real.
4. **Arsenal de Tags (O Tinder de Skills):** Pool de tags organizadas por categoria.
   - Cada tag tem 3 estados: â¤ï¸ AMO / âœ… OPERO BEM / ðŸš« NEM FUDENDO.
   - MÃ­nimo de 10 tags marcadas para liberar o perfil.
5. **Preview do Perfil:** Card de prÃ©via ao lado (desktop) ou abaixo (mobile).

### 6.3 Descoberta / Explorar `/discover` (Requer Auth)
**PropÃ³sito:** Navegar pelos perfis da comunidade e encontrar matches.

- **Feed de Cards:** Grid de perfis (estilo Bento Box ou lista vertical).
- **Filtros:** Por role, por skill dominante, por tag especÃ­fica (ex: "quem ama Python"), por status (buscando equipe / equipe completa).
- **Card Preview:** Mostra nome, foto, role principal, radar chart mini, top 3 tags "loves", badges de destaque.
- **AÃ§Ã£o:** Clicar no card abre o perfil completo em modal ou pÃ¡gina dedicada.

### 6.4 Perfil PÃºblico `/profile/:id` (Requer Auth)
**PropÃ³sito:** Ver perfil completo de alguÃ©m.

- **Header:** Foto, nome, role, links sociais.
- **Radar Chart Grande:** VisualizaÃ§Ã£o completa das 6 skills.
- **Tags detalhadas:** Loves / Comfort / Veto separados visualmente.
- **AÃ§Ã£o:** BotÃ£o "Convidar para Equipe" ou "Enviar Mensagem" (futuro).
- **AnÃ¡lise de IA:** BotÃ£o para gerar anÃ¡lise de compatibilidade entre SEU perfil e ESTE perfil.

### 6.5 Minha Equipe / Squad `/squad` (Requer Auth)
**PropÃ³sito:** Gerenciar a equipe formada.

- **Status da Equipe:** Membros atuais (cards), vagas abertas.
- **Radar da Equipe:** SobreposiÃ§Ã£o dos radares de todos os membros (visualizar gaps).
- **AnÃ¡lise Coletiva (OrÃ¡culo Lite):** IA analisa a composiÃ§Ã£o do time e sugere forÃ§as/fraquezas.
- **Convites:** Enviar/aceitar convites de membros.

### 6.6 ConfiguraÃ§Ãµes `/settings` (Requer Auth)
- Editar perfil (redireciona ao onboarding em modo ediÃ§Ã£o).
- Logout.
- Gerenciar visibilidade (perfil pÃºblico vs privado).

---

## 7. STACK TECNOLÃ“GICA (O que muda e o que fica)

### âœ… O QUE PERMANECE (nÃ£o mexer sem necessidade):
| Tecnologia | VersÃ£o | Uso |
|------------|--------|-----|
| React | 19 | UI Framework |
| TypeScript | ~5.8 | Tipagem |
| Vite | ^6.2 | Build System |
| Tailwind CSS | v4 | EstilizaÃ§Ã£o |
| Firebase Auth | ^12 | AutenticaÃ§Ã£o (Google OAuth) |
| Firebase Firestore | ^12 | Banco de dados NoSQL |
| Express | ^4 | Server-side API routes |
| Gemini AI | @google/genai | AnÃ¡lises de IA |
| react-router-dom | ^7 | Roteamento SPA |
| motion/react | ^12 | AnimaÃ§Ãµes |
| Recharts | ^3 | GrÃ¡ficos (Radar Chart) |
| Lucide React | Latest | Ãcones |

### ðŸ”„ O QUE MUDA:
| Item | Antes | Depois |
|------|-------|--------|
| Design System | Neo-Brutalismo (neo-border, neo-shadow, cores gritantes) | SaaS Minimalista Premium (dark mode, bordas sutis, accent violeta) |
| Scope | Equipe privada (guildId hardcoded) | Comunidade aberta (qualquer inscrito) |
| Landing Page | Bunker com countdown | Landing page de produto com CTA |
| NavegaÃ§Ã£o | O Bunker / Onboarding / Guilda / OrÃ¡culo | Home / Onboarding / Discover / Profile / Squad |
| Firestore Schema | Collection `members` com `guildId: TECH_FLORIPA_2026` | Collection `profiles` sem guildId fixo (ou com eventId dinÃ¢mico) |

### âŒ O QUE SERÃ REMOVIDO:
- PÃ¡gina do Bunker (countdown, timeline, partÃ­culas canvas) â†’ substituÃ­da pela Landing Page.
- PÃ¡gina de LogÃ­stica (era especÃ­fica do projeto do grupo).
- ReferÃªncias hardcoded a `TECH_FLORIPA_2026`.
- Estilo Neo-Brutalista inteiro (classes `neo-border`, `neo-shadow`, paleta de cores antiga).

---

## 8. MODELO DE DADOS (Firestore)

### Collection: `profiles` (antes era `members`)

```typescript
interface UserProfile {
  // Identidade
  uid: string;              // Firebase Auth UID (document ID)
  displayName: string;
  photoURL: string | null;
  github: string;           // username limpo
  linkedin: string;         // profile path limpo
  bio: string;              // max 280 chars
  
  // ClassificaÃ§Ã£o
  primaryRole: string;      // ex: "Frontend Developer"
  secondaryRoles: string[]; // max 2
  
  // Skills (1-10)
  skills: {
    frontend: number;
    backend: number;
    ux_ui: number;
    data: number;           // renomeado de "dados"
    hardware_iot: number;   // renomeado de "hardware_android"
    ai_ml: number;          // renomeado de "vibe_coding"
  };
  
  // Team Canvas (Tags)
  canvas: {
    loves: string[];        // tags que ama (max 50)
    comfort: string[];      // tags que opera bem (max 50)
    veto: string[];         // tags que veta (max 50)
  };
  
  // Matchmaking
  status: "looking" | "open" | "complete";  // buscando equipe / aberto a propostas / equipe formada
  squadId: string | null;   // referÃªncia ao squad se tiver
  eventId: string;          // ex: "tech_floripa_2026"
  
  // AI Generated
  aiAnalysis: string | null;      // anÃ¡lise brutal
  aiAnalysisMild: string | null;  // anÃ¡lise suave
  
  // Meta
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Collection: `squads` (nova)

```typescript
interface Squad {
  id: string;               // auto-generated
  name: string;             // nome da equipe
  leaderId: string;         // uid do lÃ­der
  memberIds: string[];      // uids dos membros (max 5-6)
  eventId: string;
  status: "forming" | "complete" | "competing";
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

---

## 9. FLUXO DO USUÃRIO (User Journey)

```
[1] Visitante acessa a Landing Page
    â†“
[2] Clica "Criar Perfil" â†’ Redireciona para /onboarding
    â†“
[3] Login via Google (Firebase Auth)
    â†“
[4] Preenche o Onboarding completo (identidade, classes, skills, tags)
    â†“
[5] Perfil Ã© salvo no Firestore â†’ Redireciona para /discover
    â†“
[6] Navega pelos perfis da comunidade, filtra por skills/roles
    â†“
[7] Encontra alguÃ©m complementar â†’ Abre perfil completo
    â†“
[8] Convida para equipe (ou Ã© convidado)
    â†“
[9] Equipe formada â†’ PÃ¡gina /squad com visÃ£o geral do time
    â†“
[10] IA analisa composiÃ§Ã£o da equipe â†’ Pronto para o hackathon!
```

---

## 10. PRIORIDADES DE IMPLEMENTAÃ‡ÃƒO (Fases)

### FASE 1: Metamorfose Visual + Estrutura (AGORA)
- [ ] Substituir Design System completo (CSS tokens, componentes Button/Card).
- [ ] Criar Landing Page nova (`/`).
- [ ] Re-skinnar Onboarding (manter lÃ³gica, trocar visual).
- [ ] Criar pÃ¡gina Discover (`/discover`) com grid de perfis.
- [ ] Ajustar schema do Firestore (profiles, remover guildId hardcoded).
- [ ] Atualizar navegaÃ§Ã£o (RootLayout).

### FASE 2: Matchmaking + Social
- [ ] Implementar filtros na pÃ¡gina Discover.
- [ ] Criar pÃ¡gina de Perfil PÃºblico (`/profile/:id`).
- [ ] Implementar sistema de convites (squad formation).
- [ ] Criar pÃ¡gina Squad (`/squad`).
- [ ] IA de compatibilidade (comparar 2 perfis).

### FASE 3: Polish + Deploy
- [ ] Responsividade mobile completa.
- [ ] SEO e meta tags.
- [ ] PWA atualizado com novo branding.
- [ ] Deploy em Vercel.
- [ ] Testes E2E.

---

## 11. O QUE ESTE DOCUMENTO NÃƒO COBRE

- Detalhes de implementaÃ§Ã£o de cÃ³digo (veja `FRONTEND_BLUEPRINT.md`).
- Roadmap detalhado com checklist (veja `TODO_Match Tech.md`).
- Regras de Firestore atualizadas (veja `firestore.rules` â€” serÃ¡ atualizado na Fase 1).

---

*Este documento Ã© a "Estrela Norte" do projeto. Toda decisÃ£o de design, cÃ³digo ou funcionalidade deve ser validada contra o que estÃ¡ escrito aqui. Se algo contradiz este documento, este documento vence.*

