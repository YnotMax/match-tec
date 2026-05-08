# ðŸ—ºï¸ MAPA DO CÃ“DIGO ATUAL: ReferÃªncia RÃ¡pida

**Ãšltima AtualizaÃ§Ã£o:** 07 de Maio de 2026

> **PARA O AGENTE DE IA:** Consulte este arquivo quando precisar localizar
> rapidamente um arquivo, entender uma dependÃªncia, ou saber qual cÃ³digo
> reutilizar. Este Ã© um SNAPSHOT do estado ATUAL (prÃ©-metamorfose).

---

## Estrutura de DiretÃ³rios

```
d:\estudos\Hackathon match tech\
â”œâ”€â”€ .env.example              # Template de variÃ¡veis de ambiente
â”œâ”€â”€ .gitignore
â”œâ”€â”€ firebase-applet-config.json   # Config do Firebase (chaves reais)
â”œâ”€â”€ firebase-blueprint.json       # Blueprint do projeto Firebase
â”œâ”€â”€ firestore.rules               # Regras de seguranÃ§a do Firestore
â”œâ”€â”€ hackathon_tech_floripa_2026_strategy.md  # [PESSOAL] EstratÃ©gia competitiva do Tony
â”œâ”€â”€ index.html                    # Entry point HTML (Vite)
â”œâ”€â”€ metadata.json
â”œâ”€â”€ package.json                  # Dependencies e scripts
â”œâ”€â”€ server.ts                     # Express server + API routes (Gemini)
â”œâ”€â”€ tsconfig.json
â”œâ”€â”€ vercel.json                   # Config de deploy Vercel
â”œâ”€â”€ vite.config.ts                # Vite + Tailwind v4 + PWA
â”‚
â”œâ”€â”€ Mockups/                      # Screenshots de referÃªncia visual
â”‚   â”œâ”€â”€ 01/  02/  03/  04/
â”‚
â”œâ”€â”€ public/                       # Assets estÃ¡ticos
â”‚
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ main.tsx                  # React entry point (createRoot)
â”‚   â”œâ”€â”€ App.tsx                   # Router + providers (Auth, ErrorBoundary)
â”‚   â”œâ”€â”€ index.css                 # Design System (Tailwind v4 @theme)
â”‚   â”‚
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ ErrorBoundary.tsx     # Error boundary genÃ©rico
â”‚   â”‚   â””â”€â”€ ui/
â”‚   â”‚       â”œâ”€â”€ Button.tsx        # BotÃ£o com variantes (primary, accent-*)
â”‚   â”‚       â”œâ”€â”€ Card.tsx          # Card com variantes (lime, pink, etc)
â”‚   â”‚       â””â”€â”€ PostModal.tsx     # Modal de posts da timeline [REMOVER]
â”‚   â”‚
â”‚   â”œâ”€â”€ contexts/
â”‚   â”‚   â””â”€â”€ AuthContext.tsx       # Google Auth state (onAuthStateChanged)
â”‚   â”‚
â”‚   â”œâ”€â”€ layouts/
â”‚   â”‚   â””â”€â”€ RootLayout.tsx        # Navbar + Outlet + grid pattern bg
â”‚   â”‚
â”‚   â”œâ”€â”€ lib/
â”‚   â”‚   â”œâ”€â”€ firebase.ts           # initializeApp, getAuth, getFirestore
â”‚   â”‚   â”œâ”€â”€ firebase-admin.ts     # Admin SDK (server-side Firestore)
â”‚   â”‚   â”œâ”€â”€ logger.ts             # Logger utility
â”‚   â”‚   â””â”€â”€ utils.ts              # cn() utility (clsx + tailwind-merge)
â”‚   â”‚
â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ Bunker.tsx            # Dashboard com countdown [REMOVER]
â”‚   â”‚   â”œâ”€â”€ Guilda.tsx            # Lista de membros [EVOLUIR â†’ Discover]
â”‚   â”‚   â”œâ”€â”€ Logistica.tsx         # Dashboard logÃ­stica [REMOVER]
â”‚   â”‚   â”œâ”€â”€ Onboarding.tsx        # FormulÃ¡rio de perfil [RESKINNAR]
â”‚   â”‚   â””â”€â”€ Oraculo.tsx           # IA Strategy Matcher [EVOLUIR â†’ Squad AI]
â”‚   â”‚
â”‚   â”œâ”€â”€ services/
â”‚   â”‚   â””â”€â”€ likesService.ts       # Toggle like, subscribe to likes
â”‚   â”‚
â”‚   â””â”€â”€ utils/
â”‚       â”œâ”€â”€ timer.ts              # calculateTimeLeft() [REMOVER]
â”‚       â””â”€â”€ timer.test.ts         # Vitest tests [REMOVER]
â”‚
â”œâ”€â”€ README.md                     # DocumentaÃ§Ã£o pÃºblica (setup, stack, features)
â”œâ”€â”€ VISION_Match Tech.md          # VisÃ£o do produto (Estrela Norte)
â”œâ”€â”€ FRONTEND_BLUEPRINT.md         # Blueprint tÃ©cnico de implementaÃ§Ã£o
â”œâ”€â”€ TODO_Match Tech.md            # Roadmap & checklist de progresso
â””â”€â”€ CODEBASE_MAP.md               # Este arquivo (GPS do cÃ³digo)
```

---

## DependÃªncias Chave (package.json)

| Pacote | VersÃ£o | Uso | Status |
|--------|--------|-----|--------|
| `react` | ^19 | UI Framework | âœ… Manter |
| `react-dom` | ^19 | React DOM renderer | âœ… Manter |
| `react-router-dom` | ^7 | SPA routing | âœ… Manter |
| `firebase` | ^12 | Auth + Firestore client | âœ… Manter |
| `firebase-admin` | ^13 | Server-side Firestore | âœ… Manter |
| `@google/genai` | ^1 | Gemini AI SDK | âœ… Manter |
| `express` | ^4 | API server | âœ… Manter |
| `vite` | ^6 | Build system | âœ… Manter |
| `tailwindcss` | ^4 | CSS framework | âœ… Manter |
| `@tailwindcss/vite` | ^4 | Tailwind Vite plugin | âœ… Manter |
| `motion` | ^12 | Animations (motion/react) | âœ… Manter |
| `recharts` | ^3 | Charts (RadarChart) | âœ… Manter |
| `lucide-react` | Latest | Icons | âœ… Manter |
| `clsx` | ^2 | Class name utility | âœ… Manter |
| `tailwind-merge` | ^3 | Tailwind class merging | âœ… Manter |
| `dotenv` | ^17 | Env vars | âœ… Manter |
| `tsx` | ^4 | TypeScript execution | âœ… Manter |

---

## Firestore Collections (Estado Atual)

### `members` (serÃ¡ renomeada para `profiles`)
- **Document ID:** Firebase Auth UID
- **Fields:**
  - `userId` (string) â€” Auth UID
  - `guildId` (string) â€” Hardcoded "TECH_FLORIPA_2026" [SERÃ REMOVIDO]
  - `name` (string)
  - `photoURL` (string | null)
  - `github` (string)
  - `linkedin` (string)
  - `primaryRole` (string)
  - `secondaryRoles` (string[])
  - `skills` (map): `{ frontend, backend, ux_ui, dados, hardware_android, vibe_coding }`
  - `canvas` (map): `{ loves: string[], comfort: string[], veto: string[] }`
  - `roast` (string | null) â€” IA analysis (legacy)
  - `roastBrutal` (string | null) â€” Brutal analysis
  - `roastMild` (string | null) â€” Mild analysis
  - `createdAt` (Timestamp)
  - `updatedAt` (Timestamp)

### `posts` (sistema de likes da timeline)
- **Document ID:** post ID
- **Fields:** `postId`, `likesCount`, `updatedAt`
- **Subcollection:** `likes/{userId}` â†’ `{ userId, createdAt }`

---

## API Routes (server.ts)

| Method | Path | Input | Output | Status |
|--------|------|-------|--------|--------|
| GET | `/api/health` | â€” | `{ status: "ok" }` | âœ… Ativo |
| POST | `/api/roast` | `{ memberId, memberData, persona }` | `{ roast: string }` | âœ… Renomear â†’ `/api/analyze-profile` |
| POST | `/api/oraculo/match` | `{ challengeDesc, members }` | `{ seguro, inovacao, surpresa }` | âœ… Renomear â†’ `/api/analyze-squad` |

---

## LÃ³gica ReutilizÃ¡vel (FunÃ§Ãµes-Chave)

### De `Onboarding.tsx`:
- `TAG_CATEGORIES` â€” Array de categorias de tags com cores (linhas 58-95).
- `ROLES_LIST` â€” Array de roles disponÃ­veis (linhas 97-101).
- `setTagSentiment(tag, sentiment)` â€” LÃ³gica de exclusÃ£o mÃºtua (linhas 210-224).
- `toggleRole(role)` â€” LÃ³gica de primary/secondary role (linhas 196-208).
- `handleSubmit()` â€” Save para Firestore com normalizaÃ§Ã£o de links (linhas 234-288).
- `OnboardingAvatar` â€” Componente com fallback chain de fotos (linhas 12-56).

### De `Guilda.tsx`:
- `Avatar` component â€” Fallback chain similar ao Onboarding (linhas 11-48).
- `getRadarData(skills)` â€” Transforma skills map em array pro Recharts (linhas 90-100).
- `getGithubUrl(val)` / `getLinkedinUrl(val)` â€” Normaliza URLs sociais (linhas 102-118).
- `executeRoast(member, persona)` â€” Chama API de IA com loading states (linhas 120-183).
- Firestore query com `onSnapshot` para real-time updates (linhas 60-78).

### De `Oraculo.tsx`:
- `handleAnalyze()` â€” Chama API do Gemini para matchmaking estratÃ©gico (linhas 29-64).
- UI de resultados com 3 cards de estratÃ©gia (linhas 116-196).

---

## Setup RÃ¡pido (ReferÃªncia)

```bash
# 1. Clonar
git clone https://github.com/YnotMax/Hackathon-Inicio.git
cd Hackathon-Inicio

# 2. Instalar
npm install

# 3. Configurar .env
cp .env.example .env
# Editar .env e adicionar GEMINI_API_KEY

# 4. Rodar
npm run dev
# â†’ http://localhost:3000
```

**Firebase:** Config jÃ¡ incluÃ­da em `firebase-applet-config.json`. Para projeto prÃ³prio, veja instruÃ§Ãµes detalhadas no `README.md`.

---

*Este mapa Ã© o GPS do cÃ³digo. Use-o para nÃ£o se perder.*

