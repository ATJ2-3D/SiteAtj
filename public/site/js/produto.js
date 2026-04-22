/* =========================================================
   ATJ2 Store — Página de Produto (detalhe dinâmico via ?id=)
   ========================================================= */

function getProductId() {
  return new URLSearchParams(location.search).get("id");
}

function findProduct(id) {
  return window.PRODUCTS.find(p => p.id === id);
}

function categoryLabel(slug) {
  const c = window.CATEGORIES.find(x => x.slug === slug);
  return c ? c.label : slug;
}

function renderNotFound() {
  const main = document.querySelector("[data-testid='product-view']");
  if (!main) return;
  main.innerHTML = `
    <div class="empty-state" data-testid="product-not-found">
      <i class="fa-solid fa-circle-exclamation"></i>
      <h2>Produto não encontrado</h2>
      <p>O item que você tentou acessar não existe ou foi removido.</p>
      <a href="loja.html" class="btn btn--primary">Voltar para a Loja</a>
    </div>
  `;
}

function renderVariations(variations) {
  if (!variations) return "";
  return Object.entries(variations).map(([label, options]) => `
    <div class="variation">
      <span class="variation__label">${label.charAt(0).toUpperCase() + label.slice(1)}</span>
      <div class="variation__options">
        ${options.map((opt, i) => `
          <button type="button" class="chip chip--sm ${i === 0 ? "is-active" : ""}"
                  data-variation-option data-testid="variation-${label}-${i}">
            ${opt}
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function setupVariationToggles() {
  document.querySelectorAll(".variation").forEach(group => {
    const buttons = group.querySelectorAll("[data-variation-option]");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
  });
}

function renderRelated(currentId, currentCat) {
  const grid = document.querySelector("[data-testid='related-grid']");
  if (!grid) return;
  const related = window.PRODUCTS
    .filter(p => p.id !== currentId && p.category === currentCat)
    .slice(0, 3);

  if (!related.length) {
    grid.closest("section")?.setAttribute("hidden", "true");
    return;
  }

  grid.innerHTML = related.map((p, idx) => `
    <article class="product-card" data-reveal style="--d:${idx * 80}ms"
             data-testid="related-${p.id}">
      <a href="produto.html?id=${p.id}" class="product-card__media">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </a>
      <div class="product-card__body">
        <h3 class="product-card__title">${p.name}</h3>
        <div class="product-card__price">${ATJ2.formatPrice(p.price)}</div>
        <a class="btn btn--primary btn--sm" href="${ATJ2.productWhatsAppLink(p.name)}"
           target="_blank" rel="noopener" data-testid="related-buy-${p.id}">
          <i class="fa-brands fa-whatsapp"></i> Comprar
        </a>
      </div>
    </article>
  `).join("");
}

function render() {
  const id = getProductId();
  const product = id && findProduct(id);
  const main = document.querySelector("[data-testid='product-view']");
  if (!product || !main) return renderNotFound();

  document.title = `${product.name} | ATJ2 Store`;

  main.innerHTML = `
    <nav class="breadcrumb" aria-label="breadcrumb">
      <a href="index.html">Início</a>
      <i class="fa-solid fa-chevron-right"></i>
      <a href="loja.html">Loja</a>
      <i class="fa-solid fa-chevron-right"></i>
      <span>${product.name}</span>
    </nav>

    <div class="product-detail">
      <div class="product-detail__media" data-reveal>
        <span class="product-detail__badge">${categoryLabel(product.category)}</span>
        <img src="${product.image}" alt="${product.name}" />
      </div>

      <div class="product-detail__info" data-reveal style="--d:120ms">
        <h1 class="product-detail__title" data-testid="product-title">${product.name}</h1>
        <div class="product-detail__price" data-testid="product-price">${ATJ2.formatPrice(product.price)}</div>
        <p class="product-detail__desc">${product.description}</p>

        ${renderVariations(product.variations)}

        <div class="product-detail__meta">
          <span><i class="fa-solid fa-clock"></i> Prazo de produção: <strong>${product.productionDays}</strong></span>
          <span><i class="fa-solid fa-shield-halved"></i> Qualidade garantida</span>
        </div>

        <a class="btn btn--primary btn--lg btn--whatsapp"
           href="${ATJ2.productWhatsAppLink(product.name)}"
           target="_blank" rel="noopener"
           data-testid="product-buy-whatsapp">
          <i class="fa-brands fa-whatsapp"></i> Comprar via WhatsApp
        </a>

        <a class="product-detail__back" href="loja.html">
          <i class="fa-solid fa-arrow-left"></i> Voltar para a loja
        </a>
      </div>
    </div>
  `;

  setupVariationToggles();
  renderRelated(product.id, product.category);
  ATJ2.observeReveal();
}

document.addEventListener("DOMContentLoaded", render);
