# ATJ2 Store — Site Estático

Site 100% estático em HTML, CSS e JavaScript puro. Pronto para publicar no GitHub Pages ou qualquer hospedagem estática.

**Domínio oficial:** https://atj2store.com.br
**WhatsApp:** +55 19 98427-0088
**Instagram:** [@atj2store](https://www.instagram.com/atj2store/)

---

## 📁 Estrutura

```
site/
├── index.html              # Home (hero, destaques, categorias, benefícios)
├── loja.html               # Catálogo com filtro por categoria
├── produto.html            # Detalhe do produto (usa ?id=slug)
├── personalizados.html     # Serviço sob medida
├── sobre.html              # Sobre a ATJ2 Store
├── contato.html            # WhatsApp, Instagram, site
├── css/
│   └── styles.css          # Design system completo
├── js/
│   ├── products.js         # Base editável dos produtos
│   ├── main.js             # Navegação, WhatsApp, utilidades
│   ├── home.js             # Lógica da Home (destaques + categorias)
│   ├── loja.js             # Grid + filtros
│   └── produto.js          # Detalhe do produto + relacionados
├── images/
│   ├── logo.png            # Logo ATJ2 Store
│   ├── prod-*.png          # Imagens dos produtos
│   └── placeholder.svg     # Placeholder 3D para produtos sem foto
└── assets/
```

---

## ✏️ Como editar produtos

Abra **`js/products.js`** e edite o array `PRODUCTS`. Cada produto tem:

```js
{
  id: "slug-unico",                 // usado na URL
  name: "Nome do produto",
  price: 99.90,
  category: "decoracao",            // decoracao | geek | utilidades | personalizados
  image: "images/foto.png",
  description: "Descrição detalhada...",
  variations: {
    cor: ["Preto", "Branco"],
    tamanho: ["P", "M", "G"]
  },
  productionDays: "3 a 5 dias úteis",
  highlight: true                   // true = aparece nos destaques da home
}
```

Para adicionar imagens, coloque o arquivo em `images/` e aponte no campo `image`.

---

## 🚀 Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `atj2store`).
2. Envie o conteúdo da pasta `site/` para a raiz do repositório.
3. Vá em **Settings → Pages**, selecione a branch `main` (pasta `/root`) e salve.
4. Aponte seu domínio `atj2store.com.br` no **Custom domain** do GitHub Pages.
5. Configure o DNS do seu domínio apontando para os IPs do GitHub Pages (A records) ou como CNAME para `seu-usuario.github.io`.

Pronto! Site no ar.

---

## 🛒 Funcionalidade de compra

Todos os botões "Comprar" abrem o WhatsApp com mensagem pré-preenchida:

> "Olá, vi o produto **[NOME]** no site atj2store.com.br e gostaria de comprar!"

O botão flutuante aparece após rolagem. O botão de personalizados envia:

> "Olá, gostaria de solicitar um produto personalizado em impressão 3D"

Para trocar o número do WhatsApp: edite a constante `WHATSAPP_NUMBER` em `js/main.js`.

---

## 🎨 Design

- **Tipografia**: Sora (títulos) + Outfit (corpo)
- **Paleta**: Azul marinho `#0A1A3C`, laranja `#F5A623`, prata `#C0C7D1`
- **Estilo**: moderno, tecnológico, com grade wireframe sutil nos heros

Todas as variáveis de cor estão em `css/styles.css` no seletor `:root`.

---

## 📞 Suporte

Dúvidas sobre o site? Me chame: [WhatsApp](https://wa.me/5519984270088)
