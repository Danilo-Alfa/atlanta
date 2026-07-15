# Atlanta Materiais para Construção — conversão React

Conversão **fiel** (visualmente idêntica) da home da loja Atlanta, originalmente
salva como página única com **SingleFile** (HTML + CSS + imagens embutidos), para
um projeto **React + Vite**.

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
