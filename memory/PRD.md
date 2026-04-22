# ATJ2 Store — PRD

## Problem Statement
Site 100% estático em HTML/CSS/JS para a ATJ2 Store — e-commerce de impressões 3D com foco em conversão via WhatsApp, pronto para publicar no GitHub Pages sob o domínio `https://atj2store.com.br`.

- Nome: **ATJ2 Store**
- WhatsApp: `+55 19 98427-0088` (link `https://wa.me/5519984270088`)
- Instagram: `@atj2store`
- Requisitos: sem backend, sem banco de dados, sem checkout tradicional.

## Architecture
- Puro HTML, CSS e JavaScript estático.
- Nenhuma dependência externa (somente Google Fonts e FontAwesome via CDN).
- Produtos carregados via JavaScript (`js/products.js`) — base editável.
- Estrutura em `/app/site/` pronta para GitHub Pages (inclui `CNAME`).

## User Persona
Cliente final brasileiro que quer comprar/pedir peças impressas em 3D (decoração, presentes, geek, sob medida) e prefere contato direto via WhatsApp.

## Core Requirements (estáticos)
- 6 páginas: Home, Loja, Produto, Personalizados, Sobre, Contato.
- Filtro por categoria na loja (Decoração, Geek, Utilidades, Personalizados).
- Página de produto dinâmica via `?id=slug`, com variações de cor/tamanho e prazo.
- Todos os botões "Comprar" redirecionam para WhatsApp com mensagem:
  `"Olá, vi o produto [NOME] no site atj2store.com.br e gostaria de comprar!"`
- Botão flutuante de WhatsApp sempre visível após scroll.
- Design responsivo (mobile-first), moderno, com identidade baseada no logo.

## Implemented (22/04/2026)
- [x] Setup estrutura `/app/site/` com `/css`, `/js`, `/images`, `/assets`
- [x] Design system completo (`css/styles.css`) — paleta azul/laranja/prata, tipografia Sora + Outfit
- [x] Home com hero wireframe, destaques, categorias, benefícios, CTA
- [x] Loja com filtros dinâmicos e 12 produtos (5 reais + 7 fictícios editáveis)
- [x] Produto dinâmico com variações simuladas, prazo, relacionados
- [x] Personalizados com passo-a-passo
- [x] Sobre com missão e diferenciais
- [x] Contato com WhatsApp / Instagram / site
- [x] Botão flutuante WhatsApp com pulso
- [x] SEO (title, description, theme-color, favicon)
- [x] Menu mobile responsivo
- [x] `README.md` com instruções de deploy no GitHub Pages
- [x] `CNAME` com domínio oficial

## Backlog (P1 / P2)
- **P1**: substituir produtos fictícios pelos reais conforme o usuário enviar fotos/descrições.
- **P1**: adicionar imagens reais de outros produtos (o usuário pode dropar na pasta `/images` e editar `products.js`).
- **P2**: lightbox/galeria na página de produto (mais de uma foto por item).
- **P2**: página de FAQ com dúvidas comuns (prazos, envio, garantia).
- **P2**: Open Graph / Twitter Card tags para compartilhamento bonito.
- **P2**: Google Analytics 4 ou Plausible para acompanhar conversão.
- **P2**: Schema.org (Product, LocalBusiness) para SEO avançado.

## Next Tasks
1. Publicar no GitHub Pages (ver `site/README.md`).
2. Apontar DNS do `atj2store.com.br` para o GitHub Pages.
3. Substituir produtos fictícios por dados reais.
