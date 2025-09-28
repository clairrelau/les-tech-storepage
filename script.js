async function loadProducts() {
  const res = await fetch("products.json");
  const products = await res.json();
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      ${p.discount ? `<div class="badge-discount">${p.discount}</div>` : ""}
      <div class="product-title">${p.name}</div>
      <div class="product-price">$${p.price}${p.old_price ? `<span class="product-old-price">$${p.old_price}</span>` : ""}</div>
      <div class="stars">${"★".repeat(p.rating)}${"☆".repeat(5-p.rating)} (${p.reviews})</div>
      <div class="buy-buttons">
        <a href="${p.stripe_url}" target="_blank">Buy Now</a>
        <a href="${p.whatsapp_url}" target="_blank">Order via WhatsApp</a>
      </div>
    `;
    grid.appendChild(card);
  });
}
loadProducts();