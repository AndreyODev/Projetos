function calcular() {
	let precoAlcool = document.getElementById("alcool").value;
	let precoGasolina = document.getElementById("gasolina").value;
	let campoResultado = document.querySelector(".resultado");
	// Validar campo
	if (precoAlcool !== "") {
		if (precoGasolina !== "") {
			let resultado = precoAlcool / precoGasolina;

			if (resultado > 0.7) {
				campoResultado.innerHTML = "É melhor usar gasolina";
			} else {
				campoResultado.innerHTML = "É melhor usar álcool";
			}
		} else {
			alert("Preencha o campo da gasolina");
		}
	} else {
		alert("Preencha o campo do alccol");
	}
}

// let inputAlcool = document.getElementById("alcool");
// let inputGasolina = document.getElementById("gasolina");
// let resultado = document.querySelector(".resultado");

// function calcular() {
// 	let alcool = Number(inputAlcool.value);
// 	let gasolina = Number(inputGasolina.value);

// 	if (alcool == 0 || gasolina == 0) {
// 		resultado.innerHTML = "Preencha o campo";
// 	} else if (alcool >= gasolina) {
// 		resultado.innerHTML = "É melhor colocar gasolina";
// 	} else {
// 		resultado.innerHTML = "É melhor colocar álcool";
// 	}
// }
