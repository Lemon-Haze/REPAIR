// Función para abrir el menú lateral
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

// Función para cerrar el menú lateral
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Animación del logo
window.onload = function() {
    const logo = document.querySelector('.logo');
    logo.classList.add('animate-logo');
}
