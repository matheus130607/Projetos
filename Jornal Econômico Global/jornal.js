document.addEventListener("DOMContentLoaded", () => {
  const itens = document.querySelectorAll("[data-target]");

  itens.forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-target");
      const destino = document.getElementById(id);

      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
