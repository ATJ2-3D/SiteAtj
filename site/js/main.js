/* =========================================================
   ATJ2 Store — Script principal (navegação, WhatsApp, utils)
   ========================================================= */

const WHATSAPP_NUMBER = "5519984270088";
const SITE_DOMAIN     = "atj2store.com.br";

/* Monta o link do WhatsApp com mensagem pré-preenchida */
function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/* Mensagem padrão para botão "Comprar" em qualquer produto */
function productWhatsAppLink(productName) {
  const msg = `Olá, vi o produto ${productName} no site ${SITE_DOMAIN} e gostaria de comprar!`;
  return buildWhatsAppLink(msg);
}

/* Mensagem para pedido personalizado */
function customWhatsAppLink() {
  return buildWhatsAppLink("Olá, gostaria de solicitar um produto personalizado em impressão 3D");
}

/* Formatação de preço em R$ */
function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* Menu mobile toggle */
function setupMobileNav() {
  const toggle = document.querySelector("[data-testid='nav-toggle']");
  const menu   = document.querySelector("[data-testid='nav-menu']");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}

/* Marca link ativo na navegação */
function highlightActiveLink() {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav-link]").forEach(link => {
    const target = link.getAttribute("href").toLowerCase();
    if (target === current || (current === "" && target === "index.html")) {
      link.classList.add("is-active");
    }
  });
}

/* Botão flutuante do WhatsApp — aparece após rolar um pouco */
function setupFloatingWhatsApp() {
  const btn = document.querySelector("[data-testid='floating-whatsapp']");
  if (!btn) return;
  const toggle = () => {
    if (window.scrollY > 120) btn.classList.add("is-visible");
    else btn.classList.remove("is-visible");
  };
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/* Ano dinâmico no rodapé */
function setupFooterYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = new Date().getFullYear();
}

/* Reveal on scroll — anima elementos quando entram na viewport.
   Usa um único observer global acessível para elementos dinâmicos. */
let _revealObserver = null;
function ensureRevealObserver() {
  if (_revealObserver || !("IntersectionObserver" in window)) return _revealObserver;
  _revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        _revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  return _revealObserver;
}
function observeReveal(root = document) {
  const items = root.querySelectorAll("[data-reveal]:not(.is-visible)");
  const io = ensureRevealObserver();
  if (!io) { items.forEach(i => i.classList.add("is-visible")); return; }
  items.forEach(i => io.observe(i));
}
function setupReveal() { observeReveal(document); }

/* Inicialização geral */
document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  highlightActiveLink();
  setupFloatingWhatsApp();
  setupFooterYear();
  setupReveal();
});

/* Expor utilidades no escopo global */
window.ATJ2 = {
  buildWhatsAppLink,
  productWhatsAppLink,
  customWhatsAppLink,
  formatPrice,
  observeReveal,
  WHATSAPP_NUMBER,
  SITE_DOMAIN
};
