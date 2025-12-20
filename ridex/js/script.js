let buttonAnterior = document.getElementById("anterior");
let buttonProximo = document.getElementById("proximo");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".lista .item");
let indicador = document.querySelector(".indicador");
let pontosUl = indicador.querySelector("ul li");
let lista = container.querySelector(".lista");

let ativo = 0;
let primeiraPosicao = 0;
let ultimaPosicao = items.length - 1;

buttonProximo.onclick = () => {
	lista.style.setProperty("--calculo", 1);

	let itemAtivo = container.querySelector(".lista .item.ativo");
	itemAtivo.classList.remove("ativo");

	ativo = ativo + 1 > ultimaPosicao ? 0 : ativo + 1;
	items[ativo].classList.add("ativo");

	indicador.querySelector(".numero").innerHTML = "0" + (ativo + 1);
};

buttonAnterior.onclick = () => {
	lista.style.setProperty("--calculo", -1);

	let itemAtivo = container.querySelector(".lista .item.ativo");
	itemAtivo.classList.remove("ativo");

	ativo = ativo - 1 < primeiraPosicao ? ultimaPosicao : ativo - 1;
	items[ativo].classList.add("ativo");

	indicador.querySelector(".numero").innerHTML = "0" + (ativo + 1);
};
