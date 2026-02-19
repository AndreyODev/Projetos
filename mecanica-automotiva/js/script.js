const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
	nav.classList.toggle("sombra", window.scrollY > 50);
});
