const $dropdown = document.getElementById("dropdown");
const $menuBoton = document.getElementById("menuBoton");
const $botonNoticias = document.getElementById("noticias");


$menuBoton.addEventListener("click", () => {
   $dropdown.classList.toggle("esconder");
   $menuBoton.ariaExpanded = $menuBoton.ariaExpanded === "false" ? "true" : "false";
});

$botonNoticias.addEventListener("click", () => {
    window.open("https://www.eldiario.es/", "_blank");
});