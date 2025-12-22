// USANDO EVENTO DE CLICK DIRETAMENTE NO JS
// let button = document.getElementById("btn");
// let p = document.getElementById("frase");

// let listaFrase = [
// 	"Sorte é o que acontece quando a preparação encontra a oportunidade.",
// 	"A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.",
// 	"Apreciando cada passo, mas já sonhando com as próximas conquistas!",
// 	"Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
// 	"Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
// 	"Muda tuas ideias e mudarás teu mundo.",
// 	"Os problemas são oportunidades para se mostrar o que sabe.",
// 	"O único lugar que o sucesso vem antes do trabalho é no dicionário.",
// 	"Um objetivo nada mais é do que um sonho com limite de tempo.",
// 	"Tente de novo. Fracasse de novo. Mas fracasse melhor.",
// 	"É tentando o impossível que se chega à realização do possível.",
// ];
// let contador = 0;

// button.addEventListener("click", function () {
// 	contador++;
// 	if (contador <= listaFrase.length - 1) {
// 		p.innerHTML = listaFrase[contador];
// 	} else {
// 		contador = 0;
// 		p.innerHTML = listaFrase[contador];
// 	}
// });

// Evento de click no HTML
let p = document.getElementById("frase");

let listaFrase = [
	"Sorte é o que acontece quando a preparação encontra a oportunidade.",
	"A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.",
	"Apreciando cada passo, mas já sonhando com as próximas conquistas!",
	"Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
	"Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
	"Muda tuas ideias e mudarás teu mundo.",
	"Os problemas são oportunidades para se mostrar o que sabe.",
	"O único lugar que o sucesso vem antes do trabalho é no dicionário.",
	"Um objetivo nada mais é do que um sonho com limite de tempo.",
	"Tente de novo. Fracasse de novo. Mas fracasse melhor.",
	"É tentando o impossível que se chega à realização do possível.",
];

function gerarFraseMotivacional() {
	let numeroAleatorio = Math.floor(Math.random() * listaFrase.length);
	p.innerHTML = listaFrase[numeroAleatorio];
}

// function gerarFraseMotivacional() {
// 	const frases = ["frase1", "frase2", "frase3"];

// 	const numeroAleatorio = 0;
// 	const frase = frases[numeroAleatorio];
// }
