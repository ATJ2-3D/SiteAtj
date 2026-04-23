/* =========================================================
   ATJ2 Store — Base de Produtos (100% estática)
   =========================================================
   Como editar:
   1. Cada produto é um objeto dentro do array PRODUCTS abaixo.
   2. Campos obrigatórios: id, name, price, category, image, description.
   3. Categorias aceitas: "decoracao", "geek", "utilidades", "personalizados".
   4. Use imagens colocadas em /images ou URLs externas.
   5. "variations" é opcional — exibido como opções simuladas (cor/tamanho).
   6. "productionDays" define o prazo mostrado na página de produto.
   7. O campo "highlight" = true faz o produto aparecer nos Mais Vendidos da Home.
   ========================================================= */

const PRODUCTS = [
  {
    id: "kit-religioso",
    name: "Kit Decorativo Cristo Vive",
    price: 149.90,
    category: "decoracao",
    image: "images/prod-religioso.png",
    description:
      "Conjunto decorativo em impressão 3D inspirado na fé: crucifixo detalhado, pedra do sepulcro com mensagem “Ele Vive”, vela ornamental e placa “Cristo vive em mim”. Acompanha bandeja orgânica branca. Peça artesanal, pintada e montada à mão.",
    variations: {
      cor: ["Cinza clássico", "Branco puro", "Dourado envelhecido"],
      tamanho: ["Padrão"]
    },
    productionDays: "5 a 7 dias úteis",
    highlight: true
  },
  {
    id: "trimiliks-colecao",
    name: "Trimiliks — Monstrinhos Articulados",
    price: 29.90,
    category: "infantil",
    image: "images/prod-trimiliks.png",
    description:
      "Coleção exclusiva ATJ2 Store de bichinhos fofinhos articulados e colecionáveis, impressos em 3D com alta definição. Perfeitos para presente, decoração de mesa ou para crianças a partir de 2 anos.",
    variations: {
      cor: ["Rosa", "Azul", "Amarelo", "Surpresa"],
      tamanho: ["Mini 6cm", "Médio 10cm"]
    },
    productionDays: "3 a 5 dias úteis",
    highlight: true
  },
  {
    id: "bichinhos-parque",
    name: "Mini Bichos do Parque (5 peças)",
    price: 89.90,
    category: "geek",
    image: "images/prod-bichinhos.png",
    description:
      "Kit com 5 mini bichinhos coloridos impressos em 3D: gatinho, tigre, cachorrinho, raposa e jacaré. Acabamento vibrante e detalhes fofos. Ótimos para brincar, colecionar ou decorar o quarto infantil.",
    variations: {
      cor: ["Cores originais", "Paleta pastel", "Personalizada"],
      tamanho: ["Padrão (~5cm cada)"]
    },
    productionDays: "4 a 6 dias úteis",
    highlight: true
  },
  {
    id: "guaxinim-articulado",
    name: "Guaxinim Articulado 3D",
    price: 69.90,
    category: "geek",
    image: "images/prod-guaxinim.png",
    description:
      "Guaxinim impresso em 3D com articulações móveis. Design expressivo, acabamento em tons realistas e corpo flexível que permite várias poses. Um colecionável diferente e super divertido.",
    variations: {
      cor: ["Cinza natural", "Preto & branco", "Customizado"],
      tamanho: ["Pequeno 8cm", "Grande 14cm"]
    },
    productionDays: "3 a 5 dias úteis",
    highlight: false
  },
  {
    id: "suricato-totem",
    name: "Suricato Totem Olhudo",
    price: 39.90,
    category: "decoracao",
    image: "images/prod-suricato.png",
    description:
      "Um suricato impresso em 3D cheio de personalidade, com olhos grandes e postura vigilante. Ideal para mesa de escritório, prateleira ou como mascote da sua bancada geek.",
    variations: {
      cor: ["Marrom realista", "Preto fosco", "Branco minimal"],
      tamanho: ["10cm"]
    },
    productionDays: "2 a 4 dias úteis",
    highlight: true
  },

  /* ===== PRODUTOS FICTÍCIOS — EDITE OU REMOVA À VONTADE ===== */
  {
    id: "suporte-celular",
    name: "Suporte de Celular Geométrico",
    price: 34.90,
    category: "utilidades",
    image: "images/placeholder.svg",
    description:
      "Suporte de celular com design geométrico moderno, estável e com recorte para cabo de carregador. Compatível com qualquer smartphone.",
    variations: {
      cor: ["Preto fosco", "Branco", "Azul ATJ2", "Laranja"],
      tamanho: ["Universal"]
    },
    productionDays: "2 a 3 dias úteis",
    highlight: false
  },
  {
    id: "organizador-mesa",
    name: "Organizador Modular de Mesa",
    price: 79.90,
    category: "utilidades",
    image: "images/placeholder.svg",
    description:
      "Sistema modular de organização para sua mesa: porta-canetas, bandeja de clips e suporte de cartões. Encaixe inteligente, monte como preferir.",
    variations: {
      cor: ["Grafite", "Branco", "Madeira texturizada"],
      tamanho: ["3 módulos", "5 módulos"]
    },
    productionDays: "4 a 6 dias úteis",
    highlight: false
  },
  {
    id: "vaso-wireframe",
    name: "Vaso Decorativo Wireframe",
    price: 59.90,
    category: "decoracao",
    image: "images/placeholder.svg",
    description:
      "Vaso decorativo com padrão wireframe inspirado em modelagem 3D. Leve, resistente e ideal para plantas artificiais ou suculentas.",
    variations: {
      cor: ["Preto", "Branco perolado", "Cobre"],
      tamanho: ["Pequeno", "Médio", "Grande"]
    },
    productionDays: "3 a 5 dias úteis",
    highlight: false
  },
  {
    id: "chaveiro-personalizado",
    name: "Chaveiro Personalizado com Nome",
    price: 19.90,
    category: "personalizados",
    image: "images/placeholder.svg",
    description:
      "Chaveiro em 3D com seu nome, logo ou frase. Envie o texto no WhatsApp e escolha a cor. Produção rápida e acabamento profissional.",
    variations: {
      cor: ["Preto", "Branco", "Azul", "Laranja", "Rosa", "Verde"],
      tamanho: ["Padrão"]
    },
    productionDays: "2 dias úteis",
    highlight: true
  },
  {
    id: "miniatura-logo",
    name: "Miniatura de Logo Empresarial",
    price: 129.90,
    category: "personalizados",
    image: "images/placeholder.svg",
    description:
      "Transformamos o logo da sua empresa em uma peça 3D sofisticada — perfeita para troféus internos, brindes corporativos e decoração de recepção.",
    variations: {
      cor: ["Conforme arte enviada"],
      tamanho: ["10cm", "15cm", "20cm"]
    },
    productionDays: "7 a 10 dias úteis",
    highlight: false
  },
  {
    id: "dragon-ball",
    name: "Esferas do Dragão (Coleção Geek)",
    price: 119.90,
    category: "geek",
    image: "images/placeholder.svg",
    description:
      "Réplica das 7 esferas do dragão em tamanho colecionador. Pintura fiel, acabamento brilhante e base opcional para exposição.",
    variations: {
      cor: ["Laranja clássico"],
      tamanho: ["Mini (4cm)", "Oficial (7cm)"]
    },
    productionDays: "5 a 7 dias úteis",
    highlight: false
  },
  {
    id: "porta-controle",
    name: "Porta Controle Gamer",
    price: 49.90,
    category: "utilidades",
    image: "images/placeholder.svg",
    description:
      "Base exclusiva para até 2 controles de videogame. Design gamer com detalhes em linhas tecnológicas. Estável e elegante.",
    variations: {
      cor: ["Preto com detalhes azul", "Preto com detalhes laranja", "Branco"],
      tamanho: ["Duplo"]
    },
    productionDays: "3 a 5 dias úteis",
    highlight: false
  }
];

/* Categorias usadas em filtros e na home */
const CATEGORIES = [
  { slug: "decoracao",     label: "Decoração",     icon: "fa-house-chimney" },
  { slug: "geek",          label: "Geek",          icon: "fa-gamepad"       },
  { slug: "utilidades",    label: "Utilidades",    icon: "fa-screwdriver-wrench" },
  { slug: "personalizados",label: "Personalizados",icon: "fa-wand-magic-sparkles" }
];

/* Expor no escopo global */
window.PRODUCTS   = PRODUCTS;
window.CATEGORIES = CATEGORIES;
