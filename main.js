//Desplazamiento suave
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

//Ajuste al tamaño del h1 segun pantalla
const h1Element = document.querySelector('h1');
function adjustHeadingSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1024) {
        h1Element.style.fontSize = '2.5rem';
    } else if (windowWidth > 768) {
        h1Element.style.fontSize = '1.5rem';
    } else {
        h1Element.style.fontSize = '0.5rem';
    }
}
window.addEventListener('load', adjustHeadingSize);
window.addEventListener('resize', adjustHeadingSize);

