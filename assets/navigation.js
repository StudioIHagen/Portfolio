const menuButton = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".site-navigation");
function closeMenu() {
  menu?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}
menuButton?.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menu?.classList.contains("is-open")) {
    closeMenu(); menuButton.focus();
  }
});
document.addEventListener("click", event => {
  if (menu && !menu.contains(event.target)) closeMenu();
});
