document.addEventListener("DOMContentLoaded", () => {
  const semestres = document.querySelectorAll(".semestre h3");

  semestres.forEach((titulo) => {
    titulo.style.cursor = "pointer";

    titulo.addEventListener("click", () => {
      const lista = titulo.nextElementSibling;
      if (lista.style.display === "none") {
        lista.style.display = "block";
      } else {
        lista.style.display = "none";
      }
    });

    // Oculta todos los semestres al cargar
    const lista = titulo.nextElementSibling;
    if (lista.tagName === "UL") {
      lista.style.display = "none";
    }
  });
});
