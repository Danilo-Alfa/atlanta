# BateForte Materiais para Construção — React

Conversão **fiel** (visualmente idêntica) da home da loja, originalmente
salva como página única com **SingleFile** (HTML + CSS + imagens embutidos), para
um projeto **React + Vite** — com rebranding para a identidade **BateForte /
Jota Atacadista** (azul `#1d4e9c` / laranja `#ef7622`) e uma camada de
interatividade por cima do markup capturado.

## Catálogo pela planilha do Google (adicionar produtos sem código)

O arquivo `catalogo-bateforte.csv` (raiz do projeto) é o modelo do catálogo,
já preenchido com os produtos atuais. Fluxo de configuração (uma vez só):

1. Em [sheets.google.com](https://sheets.google.com), crie uma planilha em
   branco e use **Arquivo → Importar → Fazer upload** com o
   `catalogo-bateforte.csv` (opção "Substituir planilha")
2. **Arquivo → Compartilhar → Publicar na web** → na 1ª caixa escolha a aba,
   na 2ª escolha **Valores separados por vírgula (.csv)** → **Publicar**
3. Copie o link gerado e cole em `src/config.js` (`CATALOG_URL`)

A partir daí, **cada linha da planilha é um produto do site** — vitrines,
categorias, busca, página de produto e carrinho passam a vir dela (mudanças
aparecem em alguns minutos, cache do Google). Colunas:

| coluna | uso |
|---|---|
| `ativo` | `sim` mostra; `não` esconde o produto |
| `nome` | nome do produto (obrigatório) |
| `categoria` | **livre**: cada valor único vira um departamento no site (navbar, menu mobile, mega-menu e footer), na ordem em que aparece nas linhas; acentos são aceitos (ex.: `Elétrica`); os 7 nomes clássicos mantêm seus ícones, os novos usam um ícone genérico |
| `vitrine` | seção da home: `Destaques`, `Promoção`, `Telhas`, `Cimento`, `Novidades`, `Recomendados para você` |
| `imagem` | link da foto (aceita link de compartilhamento do Google Drive) |
| `referencia` | código interno (aparece na página e no pedido) |
| `tag` | selo opcional: `Destaque`, `Novidade`, `Promoção` |
| `preco` | opcional (`39,90`); vazio = "Preço sob consulta"; com preço, o carrinho soma o total |

Se a planilha estiver fora do ar (ou `CATALOG_URL` vazio), o site usa o
catálogo embutido (produtos capturados) — nunca quebra.

## Camada de interatividade

O markup capturado é estático; a interatividade é ligada em runtime por
`src/lib/interactive.js` + `src/lib/cart.js` (montados por
`components/Interactive.jsx`), com os estados dinâmicos — que a captura não
continha — definidos em `src/styles/interactive.css`:

- **Vitrines de produtos**: carrosséis Swiper reais (setas, arrastar,
  2 por tela no mobile / 4 no desktop, conforme o `slider_parameters` original)
- **Marcas**: esteira contínua em loop (pausa no hover)
- **Menu mobile**: hambúrguer abre o drawer; submenus repovoados em runtime
  clonando o mega-menu do header (a captura havia esvaziado o conteúdo oculto);
  header mobile recriado (o original foi removido pela captura)
- **Cookie banner**: OK fecha e persiste em `localStorage`
- **Carrinho**: botão "Adicionar ao carrinho" em cada produto, drawer lateral
  (mecanismo CSS original + estados novos), quantidades, persistência em
  `localStorage` e checkout via WhatsApp com a lista de itens (os produtos da
  loja são "sob consulta", sem preço no markup)
- Overlay e `ESC` fecham menu/carrinho
- **Página de produto interna** (`lib/productPage.js`): os cards apontavam para
  o site antigo; agora cada clique abre `#/produto/<id>` dentro do site —
  breadcrumb, foto, referência, quantidade, adicionar ao carrinho, comprar pelo
  WhatsApp e produtos relacionados (mesma vitrine). Montada em runtime com os
  dados do próprio card; botão voltar do navegador funciona (rota por hash)
- **Navbar com os departamentos reais da loja** (fachada: Cimento, Areia,
  Ferro, Elétrica, Hidráulica + Telhas, Tintas), com ícones próprios
  em SVG no azul da marca — no desktop e no menu mobile. Cada departamento abre
  uma **página de categoria interna** (`#/categoria/<slug>`) listando os
  produtos capturados que casam com o padrão do departamento (deduplicados,
  com a foto real extraída do background congelado do SingleFile); categorias
  sem produto no catálogo capturado mostram CTA de consulta pelo WhatsApp
- **Busca funcional** (`#/busca/<termo>`): o form do header (endpoint morto da
  plataforma antiga) e um campo novo no menu mobile buscam nos produtos
  capturados — sem acentos, todos os termos precisam casar; sem resultado,
  CTA de consulta pelo WhatsApp
- **Vídeo institucional removido**: era o vídeo da loja antiga (player do
  YouTube capturado inteiro pelo SingleFile) — fora a marca errada, custava
  276KB de bundle (JS: 640KB → 408KB, gzip 199KB → 94KB)
- **Nenhum link para o site antigo**: todos os ~280 hyperlinks que apontavam
  para atlantanet.com.br são reapontados em runtime (`rewriteOldSiteLinks`)
  — produto → `#/produto/<id>`, página que casa com um departamento →
  `#/categoria/<slug>`, o resto → home; logo e selos estáticos apontam para
  `/`, e as redes sociais para os perfis @bateforte
- Removido o `body{min-width:360px}` original (cortava conteúdo em telas ≤360px)
- `overflow-x:hidden` global: os dropdowns ocultos do mega-menu (800px fixos)
  estendiam a rolagem em larguras intermediárias; o mega-menu também é limitado
  à viewport
- **Banner principal**: arte mobile dedicada 1:1 (`<picture>` + proporção
  ajustada) — a arte desktop 1920×620 ficava ilegível no celular
- **Categorias (buy-sizes)**: slides congelados em 190px viram carrossel Swiper
  responsivo (2/3/4/6 por tela)
- **Header em telas médias** (769–1199px): mini-ícones do menu ocultos, logo
  compacto e atendimento/conta só com ícones — a linha não cabia e o carrinho
  saía da tela
- **Footer no mobile**: as listas eram um acordeão sem estado aberto na
  captura; toggle ligado em `interactive.js`
- Vídeo institucional fluido (era 560×315 fixo)

Verificação: comparação pixel a pixel entre o HTML original e o app React resultou
em **0,0% de diferença** tanto em desktop (1440px) quanto em mobile (390px).

## Rodar

```bash
npm install
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # build de produção -> dist/
npm run preview  # serve o build
```

## Estrutura

```
index.html                     # <html lang=pt-br class=page-home>, meta, favicon, #root
src/
  main.jsx                     # monta <App/> e importa styles/site.css
  App.jsx                      # ordem exata dos filhos do <body>
  styles/site.css              # TODOS os 16 blocos <style> originais, na ordem do documento
  lib/rawStyle.js              # aplica style inline via cssText (preserva !important)
  data/
    videoSrcDoc.js             # srcdoc do iframe do YouTube (página capturada)
    fastShoppingTemplateHtml.js# conteúdo do <template> Vue (inerte)
  components/                  # Header, Footer, MenuMobile, MessageTop, Cart, CookieBanner...
    main/                      # cada seção da home (BannerHome, BuySizes, Showcase*, ...)
public/
  assets/                      # 79 imagens (webp/svg/gif) extraídas dos data: URIs
  favicon.ico
tools/convert.py               # script determinístico usado na conversão (reprodutível)
```

Os componentes espelham 1:1 as seções do HTML original — nenhuma estrutura foi
reorganizada, simplificada ou recriada.

## Adaptações obrigatórias por causa do React/JSX

Só foi alterado o estritamente necessário para o JSX compilar; nada de design,
espaçamento, cor, fonte, animação ou posicionamento foi modificado.

1. **`class` → `className`, `for` → `htmlFor`, `tabindex` → `tabIndex`**, `viewBox`,
   `xlink:href` → `xlinkHref`, `frameborder` → `frameBorder`, `allowfullscreen`
   → `allowFullScreen`, `marginwidth/height`, etc. (mapeamento HTML→JSX).
2. **Estilos inline** (`style="..."`) são aplicados via `ref={rawStyle("...")}`
   (`el.style.cssText`). Isso preserva **exatamente** o CSS original — inclusive
   `!important` (que objetos `style` do React descartam) e os `transform` de
   carrossel capturados pelo SingleFile.
3. **Texto** é emitido como expressão `{"..."}` para evitar que o JSX altere o
   whitespace (diferença clássica HTML↔JSX). Os nós de texto ficam idênticos.
4. **Imagens base64** (`data:` URIs) foram extraídas para `public/assets/` e as
   referências reapontadas para `/assets/...` (mesmos bytes, só a referência muda).
   As imagens usadas em `background-image:var(--sf-img-N)` continuam embutidas no CSS.
5. **`<iframe srcdoc>`** do vídeo → `srcDoc={videoSrcDoc}` (string em módulo à parte).
6. **`<template id="fast-shopping-template">`** contém sintaxe Vue (`v-bind:`,
   `@click`), inválida em JSX. Como é inerte, é injetado via
   `dangerouslySetInnerHTML` mantendo o HTML original intacto.
7. **Atributos sem valor**: booleanos (`allowfullscreen`) viram presença;
   não-booleanos (`value`, `data-category`) viram string vazia. Em `<input>`,
   `value`/`checked` viram `defaultValue`/`defaultChecked` (campo editável, igual
   ao HTML estático). Um `;` solto (markup malformado no original, que navegadores
   ignoram) foi descartado.
8. A meta **CSP** adicionada pelo SingleFile **não** foi reproduzida (bloquearia o app).

## CSS preservado como está

`styles/site.css` é cópia literal dos blocos `<style>` originais (fontes em base64,
variáveis `--sf-img-*`, media queries). O build do Vite emite alguns *warnings* de
CSS (`@keyframes {0{...}}` sem `%`, `media(...)` sem `@`) — são quirks do **CSS
original**, preservados fielmente; os navegadores os ignoram.
