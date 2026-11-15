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
    if (r.download) { const actions = document.createElement("div"); actions.className = "home-actions"; const a = link(r.download, "Download"); a.setAttribute("download", ""); actions.append(a); detail.append(actions); }
  }
}
