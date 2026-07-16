// ============================================================
// CONFIGURAÇÃO DA LOJA
// ============================================================
// Link da planilha do catálogo (Google Sheets, "Publicar na web" em CSV).
//
// Como obter: na planilha, Arquivo > Compartilhar > Publicar na web,
// escolha a aba do catálogo e o formato "Valores separados por vírgula
// (.csv)", clique em Publicar e cole o link gerado aqui entre as aspas.
//
// Deixe vazio ('') para usar o catálogo embutido no site (os produtos
// atuais continuam aparecendo normalmente).
export const CATALOG_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcM837zqsyDwbQ1j9ILkaTGZCtsyt796NcxKJ_0Ed9FcqTo2HaG0gr_jj2U4xcslxm-jt7KRlxSplw/pub?gid=665645625&single=true&output=csv'

// ============================================================
// FINALIZAÇÃO DE PEDIDO (frete + registro anti-adulteração)
// ============================================================

// Link publicado (CSV) da aba "Frete" da planilha, com colunas
// ate_km,valor — mesma URL do catálogo trocando o gid pela aba Frete.
// Vazio ('') = frete sempre "a combinar".
export const FRETE_CSV_URL = ''

// Coordenadas da loja (Av. Quinze de Novembro, 1764 - Centro,
// Itapecerica da Serra - SP) para o cálculo de distância do frete.
export const LOJA_COORDS = { lat: -23.7169, lng: -46.8492 }

// Frete grátis quando o subtotal (dos itens com preço) atinge este valor.
export const FRETE_GRATIS_ACIMA = 100

// URL do Apps Script (implantado como app da web) que grava os pedidos
// na aba "Pedidos" da planilha e RECALCULA os valores no lado do
// vendedor. Vazio ('') = pedido segue só pelo WhatsApp.
// O código do script está em tools/pedidos.gs (passo a passo no README).
export const PEDIDOS_URL = ''
