# Especificação — Escola de Música Compasso (case)

## Objetivo

Mostrar a escolas e cursos livres como um site pode **ser lembrado (interação divertida), mostrar
preços com clareza e levar à aula experimental**, inclusive para pais que matriculam os filhos.

## Público do site

Pais de crianças de 3 a 14 anos, adolescentes e adultos que querem aprender ou retomar um
instrumento em Goiânia.

## Páginas

| Página            | Conteúdo principal                                                          |
| ----------------- | --------------------------------------------------------------------------- |
| Início            | Título, teclado de cursos, cursos, como começar, professores, recitais, FAQ |
| Cursos e valores  | Cada curso com idade, formato, mensalidade e o que se aprende               |
| Aula experimental | Formulário (para mim ou para meu filho), endereço, horário e mapa           |
| Privacidade       | Modelo de política (LGPD)                                                   |

## Funcionalidades

- **Teclado de piano**: seis teclas (Dó a Lá), uma por curso. Ao tocar, soa a nota (Web Audio) e
  o visitante vai para o curso. No celular, o teclado gira e as teclas viram barras empilhadas.
- **Aula experimental**: o formulário muda se a aula é para o próprio visitante ou para uma criança
  (pede nome e idade do aluno) e aceita o curso vindo da página de cursos.
- Avatares dos professores com iniciais, sem depender de foto.

## Identidade visual

**Conceito:** "o teclado é a porta de entrada". A página inicial abre num palco escuro com a frase
"Escolha uma tecla." e um teclado de piano do tamanho da tela; cada tecla tem um adesivo colorido
(como os que professores colam nas teclas de iniciantes) e leva a um curso. Depois vêm os cursos em
faixas de cor, "Como começar" num compasso 4/4 (as 4 etapas são os 4 tempos, com as notas numa
pauta), professores em cartões na cor do instrumento, recitais no palco escuro (datas como
ingressos) e um fechamento amarelo com a chamada para a aula experimental.

| Token                   | Valor                  | Uso                                                     |
| ----------------------- | ---------------------- | ------------------------------------------------------- |
| `--stage`               | `#16131f`              | Palco: abertura, recitais, cabeçalhos internos e rodapé |
| `--paper` / `--ivory`   | `#f6f1e7` / `#fbf8f1`  | Fundo / teclas brancas e cartões                        |
| `--note-1` … `--note-7` | vermelho → rosa        | Cor de cada curso (Dó, Ré, Mi, Fá, Sol, Lá, Si)         |
| `--sun`                 | `--note-3` (`#ffc233`) | Botões principais e destaques                           |

- **Tipografia:** Bricolage Grotesque 800 (títulos, com espaçamento apertado) e Figtree (texto).
- **Marca visual:** o teclado de abertura, as faixas e adesivos coloridos por nota e os espaços
  reservados de imagem com pauta musical na cor do curso.
