let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
	navbar.classList.toggle("sticky", window.scrollY > 0);
});
