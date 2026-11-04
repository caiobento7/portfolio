# Portfólio | Caio Bento

Portfólio e currículo online em português e inglês, feito com Next.js 16 e Tailwind CSS 4.

- `/pt` e `/en`: portfólio (sobre, projetos, experiência, stack e contato)
- `/pt/cv` e `/en/cv`: currículo completo, com botão **Baixar PDF** que entrega os arquivos de `public/` (preto e branco, A4)
- Quem abre `/` vai para o idioma do navegador (`src/proxy.ts`)

## Editar o conteúdo

Todo o texto está em `src/content/index.ts`, com um bloco `pt` e outro `en`.
Ao mudar algo, altere os dois idiomas. O portfólio e o currículo leem do mesmo lugar,
então ficam sempre iguais.

## Rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

## Gerar os PDFs do currículo (refaça sempre que mudar o conteúdo)

Com o site rodando (`npm run build && npm start`), gere os arquivos pelo Chrome:

```bash
chrome --headless=new --no-pdf-header-footer --print-to-pdf=public/caio-bento-cv-pt.pdf http://localhost:3000/pt/cv
chrome --headless=new --no-pdf-header-footer --print-to-pdf=public/caio-bento-cv-en.pdf http://localhost:3000/en/cv
```

## Publicar

Suba o repositório no GitHub e importe na [Vercel](https://vercel.com/new). Não precisa de variáveis de ambiente.
