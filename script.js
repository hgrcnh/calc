var numeroNaMemoria = null
var numeroNaTela = null
var operacaoMatematica = null	

var executaFuncao = {
	'+': (tela, memoria) => parseFloat(memoria) + parseFloat(tela),	
	'-': (tela, memoria) => parseFloat(memoria) - parseFloat(tela),	
	'*': (tela, memoria) => parseFloat(memoria) * parseFloat(tela),	
	'/': (tela, memoria) => parseFloat(memoria) / parseFloat(tela),	
	'%': (tela, memoria) => parseFloat(memoria) * (parseFloat(tela)/100),	
	'²': (tela, memoria = null) => Math.pow(numeroNaTela, 2),
	'+-': (tela) => tela * -1 
	} 

function zeraDisplayMemoria() {
	numeroNaMemoria = null
	numeroNaTela = 0
	display.innerHTML = '0'
}

zeraDisplayMemoria()

function atualizaDisplay(numero) {
	if ( numero % 1 !== 0 ) {
		numero = parseFloat(numero).toFixed(2);
	}

	numeroNaTela = numero
	document.getElementById("display").innerHTML = numero	
}

function processaTecla(tecla) {
	const teclaNumerica = ! Number.isNaN(parseFloat(tecla))
	const teclaDeFuncao = ['+', '-', '*', '/', '%', '²', '+-'].includes(tecla)	

	if(! teclaNumerica) {
		if (teclaDeFuncao) {
			operacaoMatematica = tecla
			numeroNaMemoria = numeroNaTela
			tecla = (tecla === '²' || tecla === '+-') ? '=' : tecla
		}

		numeroNaTela = (tecla === '=')
			? executaFuncao[operacaoMatematica](numeroNaTela, numeroNaMemoria)
			: 0

		return atualizaDisplay(numeroNaTela)
	}

	numeroNaTela = (parseFloat(numeroNaTela) * 10) + parseFloat(tecla)	
	atualizaDisplay(numeroNaTela)
}
