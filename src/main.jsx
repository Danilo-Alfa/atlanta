import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/site.css'
import './styles/interactive.css'
import './styles/responsive.css'

// Estado de carregamento: enquanto a planilha do catálogo não chega, as
// seções montadas por ela (categorias, vitrines) mostram um skeleton em
// vez do conteúdo estático antigo. Removido em interactive.js quando o
// catálogo carrega; backstop de 6s caso algo trave.
document.documentElement.classList.add('bf-loading')
setTimeout(() => document.documentElement.classList.remove('bf-loading'), 6000)

// Evita o "pulo pro fim da página": no F5 o navegador tentava restaurar a
// rolagem antes das imagens/catálogo carregarem, caindo numa posição
// errada. Com restauração manual, o reload começa no topo.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

createRoot(document.getElementById('root')).render(<App />)
