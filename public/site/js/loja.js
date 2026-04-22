/* =========================================================
   ATJ2 Store — Lógica da Loja (grid + filtros)
   ========================================================= */

let activeCategory = "todos";

function getInitialCategory() {
  const p = new URLSearchParams(location.search);
  const c = p.get("cat");
  if (!c) return "todos";
  const valid = window.CATEGORIES.some(x => x.slug === c);
  return valid ? c : "todos";
}

function renderFilters() {
  const wrap = document.querySelector("[data-testid='filters']");
  if (!wrap) return;
  const items = [{ slug: "todos", label: "Todos", icon: "fa-grip" }, ...window.CATEGORIES];
  wrap.innerHTML = items.map(c => `
    <button class="chip ${c.slug === activeCategory ? "is-active" : ""}"
            data-filter="${c.slug}"
            data-testid="filter-${c.slug}">
      <i class="fa-solid ${c.icon}"></i> ${c.label}
    </button>
  `).join("");
  wrap.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.filter;
      // atualiza URL sem recarregar
      const u = new URL(location.href);
      if (activeCategory === "todos") u.searchParams.delete("cat");
      else u.searchParams.set("cat", activeCategory);
      history.replaceState(null, "", u.toString());
      renderFilters();
      renderGrid();
    });
  });
}

function renderGrid() {
  const grid = document.querySelector("[data-testid='shop-grid']");
  const empty = document.querySelector("[data-testid='shop-empty']");
  if (!grid) return;

  const list = activeCategory === "todos"
    ? window.PRODUCTS
    : window.PRODUCTS.filter(p => p.category === activeCategory);

  if (!list.length) {
    grid.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  grid.innerHTML = list.map((p, idx) => `
    <article class="product-card" data-reveal style="--d:${idx * 60}ms"
             data-testid="shop-product-${p.id}">
      <a href="produto.html?id=${p.id}" class="product-card__media" aria-label="Ver ${p.name}">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="product-card__tag">${categoryLabel(p.category)}</span>
      </a>
      <div class="product-card__body">
        <h3 class="product-card__title">${p.name}</h3>
        <div class="product-card__price">${ATJ2.formatPrice(p.price)}</div>
        <div class="product-card__actions">
          <a class="btn btn--ghost" href="produto.html?id=${p.id}"
             data-testid="shop-detail-${p.id}">Detalhes</a>
          <a class="btn btn--primary" href="${ATJ2.productWhatsAppLink(p.name)}"
             target="_blank" rel="noopener"
             data-testid="shop-buy-${p.id}">
            <i class="fa-brands fa-whatsapp"></i> Comprar
          </a>
        </div>
      </div>
    </article>
  `).join("");

  // observa os novos elementos [data-reveal]
  ATJ2.observeReveal(grid);
}

function categoryLabel(slug) {
  const c = window.CATEGORIES.find(x => x.slug === slug);
  return c ? c.label : slug;
}

document.addEventListener("DOMContentLoaded", () => {
  activeCategory = getInitialCategory();
  renderFilters();
  renderGrid();
});
