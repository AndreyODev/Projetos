let campoNome = document.getElementById("campo-nome");
let btnSearch = document.getElementById("btn-search");
let btnLoad = document.getElementById("btn-load");

let containerLista = document.getElementById("list");

let listaNome = ["Jefinho", "Gabryella", "Rafaella", "Andrey"];

btnSearch.addEventListener("click", function () {
	let nome = campoNome.value.trim().toLowerCase();
	let encontrado = false;

	for (let nomeDaLista of listaNome) {
		if (nome === nomeDaLista.toLowerCase()) {
			containerLista.innerHTML = `<li class="nome" >${nome}</li>`;
			encontrado = true;
			console.log(encontrado);
		}
	}
	if (!encontrado) {
		containerLista.innerHTML = `<li class="nome">Nome não encontrado</li>`;
		console.log(encontrado);
	}
});

btnLoad.addEventListener("click", function () {
	containerLista.innerHTML = "";

	for (let contador = 0; contador < listaNome.length; contador++) {
		containerLista.innerHTML += `<li class="nome">${listaNome[contador]}</li>`;
	}
});
