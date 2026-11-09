# AGENTS.md — Guia obrigatório para agentes de IA

> Vale para Cline, Antigravity, Claude, Gemini, DeepSeek e qualquer outro agente.
> **Leia este arquivo inteiro antes de alterar o código.** Detalhes em `docs/`.

---

## 1. O que é o projeto

1. Site **demonstrativo (case de portfólio)** de **Escola de Música Compasso**, escola de música **fictício(a)**.
2. Desenvolvido pela **Runa Web**. O crédito "Desenvolvido por Runa Web" (com link para https://runaweb.com.br, em `DEV_CREDIT` de `src/content/site.ts`) fica no rodapé e **não deve ser removido**.
3. Não há banco de dados, login nem pagamento. O agendamento da aula experimental monta uma mensagem e abre o WhatsApp do visitante.
4. Nomes, telefones, e-mails, endereços, preços e depoimentos são **placeholders**.

**Páginas:** Início (`/`), Cursos e valores (`/cursos`), Aula experimental e contato (`/aula-experimental`), Política de privacidade (`/privacidade`).

---

## 2. Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | **TanStack Start** (React 19 + TanStack Router, SSR) |
| Build | **Vite 8** |
| Hospedagem | **Cloudflare Workers** (deploy com `wrangler`) |
| Estilo | **Tailwind v4** + CSS de componentes em `src/styles/` |
| Testes | **Vitest** · Qualidade: ESLint + Prettier |

---

## 3. Comandos

```bash
npm install            # instalar dependências (uma vez)
npm run images:baixar  # baixar as fotos placeholder do Unsplash (uma vez)
npm run images:prompts # regenerar public/images/PROMPTS-IA.md após mudar images.json
npm run dev            # site local em http://localhost:3000
npm run check          # typecheck + lint + testes  ← RODE SEMPRE ANTES DE TERMINAR
npm run build          # build de produção
npm run deploy         # build + publicar no Cloudflare
```

---

## 4. Mapa de pastas

```
src/
├── routes/                 PÁGINAS (cada arquivo = uma URL)
│   ├── __root.tsx          layout geral (cabeçalho, rodapé, fontes)
│   ├── index.tsx             /  conteúdo em components/pages/HomePage.tsx
│   ├── cursos.tsx            /cursos
│   ├── aula-experimental.tsx /aula-experimental  aceita ?curso=
│   ├── privacidade.tsx       /privacidade
├── components/             peças reutilizáveis (Header, Footer, Photo, Faq, PianoKeys (teclado de abertura, com som), TrialForm…)
├── content/                TEXTOS E DADOS (site.ts (dados, cursos, professores, etapas, depoimentos, FAQ, textos da home), legal.ts, images.json)
├── lib/                    regras puras (whatsapp.ts)
├── styles/ + styles.css    estilos (cores em styles/base.css → :root)
├── server.ts               entrada do Worker (cabeçalhos de segurança e CSP)
└── test/                   testes automáticos
scripts/                    baixar-imagens.mjs · gerar-prompts.mjs
public/                     imagens, favicon, robots.txt
docs/                       especificação e deploy
```

---

## 5. Regras de ouro

| # | Regra | Por quê |
| --- | --- | --- |
| 1 | **Não remova o crédito "Desenvolvido por Runa Web"** nem o aviso de site demonstrativo. | É um case de portfólio. |
| 2 | **Textos e dados ficam em `src/content/`**, não espalhados nas páginas. | Trocar o cliente = editar só essa pasta. |
| 3 | **Imagens: lista única em `src/content/images.json`.** Use `<Photo k="nome" />`. | O script e os prompts leem o mesmo arquivo. |
| 4 | **Cores e fontes só pelas variáveis CSS** de `src/styles/base.css`. | Mudar a identidade em um lugar só. |
| 5 | **Novo domínio externo** (script, iframe, API) → inclua na CSP em `src/server.ts`. | Senão o navegador bloqueia. |
| 6 | **Nunca `dangerouslySetInnerHTML`.** | Evita XSS. |
| 7 | **Rode `npm run check` antes de concluir.** | É a rede de segurança do projeto. |

---

## 6. Convenções

- Textos de interface em **português do Brasil**; variáveis, funções e arquivos em **inglês**.
- A marca visual é o teclado de piano que **abre** a página inicial: cada tecla é um curso (campo `note` em COURSES define a frequência da nota, gerada com Web Audio, sem arquivos de som). O som só toca por ação do visitante. No celular o teclado gira e as teclas viram barras.
- Cada curso tem uma cor, pela posição na escala (Dó vermelho, Ré laranja, Mi amarelo, Fá verde, Sol azul, Lá roxo, Si rosa). Use `className={`tone-${i}`}` (ou `toneOf(slug)`) e a variável `--tone` no CSS; as cores ficam em `--note-1` a `--note-7` em `src/styles/base.css`.
- Commits pequenos, em português, dizendo o que mudou e por quê.

---

## 7. Receitas rápidas

- **Adicionar um curso:** inclua em `COURSES` com `note` e `noteName` (próxima nota da escala: Si = 493.88 Hz, cor `--note-7`). Adicione a imagem em `images.json`. Com 7 cursos, ajuste `repeat(6, 1fr)` de `.piano-keys`, `.footer-strip` e `.form-ruler`.
- **Trocar professores:** `TEACHERS` em `src/content/site.ts` (as iniciais viram o cartão automaticamente; `course` define a cor).
- **Mudar mensalidades:** campo `price` de cada curso.
- **Trocar uma foto:** salve o arquivo novo em `public/` com o mesmo nome (veja `public/images/LEIA-ME.md`).
- **Mudar cores:** variáveis do `:root` em `src/styles/base.css`.
