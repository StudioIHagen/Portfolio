const grid = document.querySelector("[data-resource-list]");
const detail = document.querySelector("[data-resource-detail]");
const resources = portfolioResources.filter(r => r.visible !== false);
const link = (href, title) => { const a = document.createElement("a"); a.href = href; a.textContent = title; return a; };
if (grid) resources.forEach(r => {
  const card = document.createElement("article");
  const a = link("resource.html?id=" + encodeURIComponent(r.id), "");
  const image = document.createElement("img"); image.src = r.cover; image.alt = r.title;
  a.append(image); card.append(a, link(a.href, r.title)); grid.append(card);
});
if (detail) {
  const r = resources.find(r => r.id === new URLSearchParams(location.search).get("id"));
  const intro = document.createElement("section"); intro.className = "project-intro";
  const h = document.createElement("h1"); h.textContent = r ? r.title : "Resource unavailable";
  intro.append(h); detail.append(intro);
  if (r) {
    document.title = r.title + " - Studioihagen";
    const p = document.createElement("p"); p.textContent = r.text || ""; intro.append(p);
    const media = document.createElement("section"); media.className = "project-media-list";
    (r.images || []).forEach(item => {
      const wrap = document.createElement("div"); wrap.className = "project-media-item";
      const img = document.createElement("img"); img.className = "project-detail-image"; img.src = item.src; img.alt = item.alt || r.title;
      const text = document.createElement("p"); text.className = "project-image-text"; text.textContent = item.text || "";
      wrap.append(img, text); media.append(wrap);
    }); detail.append(media);
    if (r.payhip) {
      const actions = document.createElement("section");
      actions.className = "purchase-panel";
      actions.setAttribute("aria-label", "Purchase");
      const price = document.createElement("p");
      price.textContent = r.payhip.priceLabel || "Price to be announced";
      const ready = r.payhip.enabled === true && /^[A-Za-z0-9]+$/.test(r.payhip.productId || "") && Boolean(r.payhip.priceLabel);
      const buy = ready ? link("https://payhip.com/buy?link=" + encodeURIComponent(r.payhip.productId), "Buy") : document.createElement("button");
      buy.className = "buy-button";
      if (!ready) { buy.type = "button"; buy.disabled = true; buy.textContent = "Buy — Coming soon"; }
      const note = document.createElement("p");
      note.className = "purchase-note";
      note.textContent = ready ? "Secure checkout and digital file delivery by Payhip." : "This resource is not available for purchase yet.";
      actions.append(price, buy, note);
      detail.append(actions);
    }
    if (!r.payhip && r.download) { const actions = document.createElement("div"); actions.className = "home-actions"; const a = link(r.download, "Download"); a.setAttribute("download", ""); actions.append(a); detail.append(actions); }
  }
}
