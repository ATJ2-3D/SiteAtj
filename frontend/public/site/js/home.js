/* =========================================================
   ATJ2 Store — Lógica da Home
   ========================================================= */

function renderHighlights() {
  const grid = document.querySelector("[data-testid='highlights-grid']");
  if (!grid) return;

  const featured = window.PRODUCTS.filter(p => p.highlight).slice(0, 4);
  grid.innerHTML = featured.map((p, idx) => `
    <article class="product-card" data-reveal style="--d:${idx * 80}ms" data-testid="home-product-${p.id}">
      <a href="produto.html?id=${p.id}" class="product-card__media" aria-label="Ver ${p.name}">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="product-card__tag">${categoryLabel(p.category)}</span>
      </a>
      <div class="product-card__body">
        <h3 class="product-card__title">${p.name}</h3>
        <div class="product-card__price">${ATJ2.formatPrice(p.price)}</div>
        <div class="product-card__actions">
          <a class="btn btn--ghost" href="produto.html?id=${p.id}" data-testid="home-detail-${p.id}">
            Detalhes
          </a>
          <a class="btn btn--primary" href="${ATJ2.productWhatsAppLink(p.name)}" target="_blank" rel="noopener"
             data-testid="home-buy-${p.id}">
            <i class="fa-brands fa-whatsapp"></i> Comprar
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCategories() {
  const grid = document.querySelector("[data-testid='categories-grid']");
  if (!grid) return;
  grid.innerHTML = window.CATEGORIES.map((c, idx) => `
    <a href="loja.html?cat=${c.slug}" class="cat-card" data-reveal style="--d:${idx * 80}ms"
       data-testid="home-cat-${c.slug}">
      <span class="cat-card__icon"><i class="fa-solid ${c.icon}"></i></span>
      <span class="cat-card__label">${c.label}</span>
      <span class="cat-card__arrow"><i class="fa-solid fa-arrow-right"></i></span>
    </a>
  `).join("");
}

function categoryLabel(slug) {
  const c = window.CATEGORIES.find(x => x.slug === slug);
  return c ? c.label : slug;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHighlights();
  renderCategories();
  ATJ2.observeReveal();
});
