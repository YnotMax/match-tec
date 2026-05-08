# Match Tech â€” Encontre sua equipe ideal para hackathons

Uma plataforma de matchmaking comunitÃ¡ria que conecta desenvolvedores, designers e entusiastas solitÃ¡rios a equipes complementares â€” baseado em habilidades reais, paixÃµes e vetos, nÃ£o em currÃ­culos genÃ©ricos.

Nasceu da transformaÃ§Ã£o de um app de gestÃ£o de equipe do [Hackathon Tech Floripa 2026](https://techfloripa.com.br), cujo sistema de mapeamento de perfil individual ficou tÃ£o bom que decidimos abri-lo para toda a comunidade.

---

## âœ¨ Funcionalidades

### Mapeamento de Perfil Gamificado
- **Classes:** Selecione sua role principal e secundÃ¡rias (Frontend, Backend, AI/ML, Design, Hardware, etc.)
- **Skills Radar:** Sliders de 1-10 em 6 categorias, gerando um spider chart em tempo real.
- **Arsenal de Tags:** Marque tecnologias como â¤ï¸ AMO, âœ… OPERO BEM ou ðŸš« NEM FUDENDO â€” mÃ­nimo de 10 para calibrar o algoritmo.

### Descoberta de Perfis
- Explore perfis da comunidade com filtros por role, skill dominante e tags.
- Cards compactos com preview de radar chart e status de equipe.

### AnÃ¡lise por IA
- AnÃ¡lise individual de perfil via Google Gemini (tom brutal ou suave).
- Compatibilidade entre perfis (cruza skills + tags + vetos).
- AnÃ¡lise de composiÃ§Ã£o de equipe com sugestÃµes de forÃ§as e gaps.

### Sistema de Squads
- Crie equipes, envie convites e visualize radares sobrepostos de todos os membros.

---

## ðŸ’» Stack TecnolÃ³gica

| Camada | Tecnologias |
|--------|------------|
| **Frontend** | React 19, TypeScript, Vite |
| **Estilo** | Tailwind CSS v4 (Dark Mode, SaaS Minimalista) |
| **AnimaÃ§Ãµes** | `motion/react` |
| **GrÃ¡ficos** | Recharts (Radar / Spider Charts) |
| **Ãcones** | Lucide React |
| **Auth** | Firebase Authentication (Google OAuth) |
| **Banco de Dados** | Firebase Firestore (NoSQL, Offline-First) |
| **IA** | Google Gemini SDK (`@google/genai`) |
| **Server** | Express + Vite Middleware |
| **Deploy** | Vercel |

---

## ðŸ”§ Como Rodar Localmente

### 1. Clone o repositÃ³rio

```bash
git clone https://github.com/YnotMax/Hackathon-Inicio.git
cd Hackathon-Inicio
```

### 2. Instale as dependÃªncias

```bash
npm install
```

### 3. Configure as variÃ¡veis de ambiente

Copie o arquivo de exemplo e adicione sua chave da API do Gemini:

```bash
cp .env.example .env
```

Edite o `.env`:

```env
GEMINI_API_KEY="SUA-CHAVE-AQUI"
```

### 4. Configure o Firebase (opcional)

**OpÃ§Ã£o A â€” Usar config existente:**
O projeto jÃ¡ inclui `firebase-applet-config.json` com um projeto Firebase hospedado. Nenhuma configuraÃ§Ã£o extra necessÃ¡ria.

**OpÃ§Ã£o B â€” Usar seu prÃ³prio Firebase:**

1. Crie um projeto em [console.firebase.google.com](https://console.firebase.google.com).
2. Em Firestore Database, **crie um banco de dados**.
3. Em Authentication, habilite o provider **Google**.
4. Crie um app Web nas configuraÃ§Ãµes do projeto.
5. Copie as chaves para `firebase-applet-config.json`:

```json
{
  "apiKey": "SUA_API_KEY",
  "authDomain": "seu-app.firebaseapp.com",
  "projectId": "seu-app",
  "storageBucket": "seu-app.appspot.com",
  "messagingSenderId": "0000000000",
  "appId": "1:000000000:web:01234abcd",
  "firestoreDatabaseId": "(default)"
}
```

6. Aplique as regras de seguranÃ§a do arquivo `firestore.rules` no console do Firestore.

### 5. Inicie o servidor dev

```bash
npm run dev
```

O app estarÃ¡ rodando em `http://localhost:3000`.

---

## ðŸ“ DocumentaÃ§Ã£o do Projeto

| Documento | PropÃ³sito |
|-----------|-----------|
| `VISION_Match Tech.md` | VisÃ£o do produto, identidade visual, arquitetura, modelo de dados |
| `FRONTEND_BLUEPRINT.md` | Blueprint tÃ©cnico de implementaÃ§Ã£o (o que manter, modificar, criar) |
| `TODO_Match Tech.md` | Roadmap com checklist de progresso |
| `CODEBASE_MAP.md` | Mapa rÃ¡pido de toda a codebase (arquivos, dependÃªncias, funÃ§Ãµes-chave) |

---

## ðŸ”’ SeguranÃ§a

O Firestore utiliza regras de seguranÃ§a com validaÃ§Ã£o de schema (`isValidMember`), verificaÃ§Ã£o de `request.auth.uid` e controle de campos alterÃ¡veis. Veja `firestore.rules` para detalhes.

---

## ðŸ“œ LicenÃ§a

Projeto open-source criado para a comunidade do Hackathon Tech Floripa 2026.

Feito com â˜• por **Tony Max & Squad**.

