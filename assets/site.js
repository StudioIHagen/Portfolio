const printButtons = document.querySelectorAll("[data-print]");

printButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.print();
  });
});
