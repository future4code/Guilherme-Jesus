/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Boas vindas ao jogo de Blackjack!")

let jogo
if(confirm("Quer iniciar uma nova rodada?")) {
	
} else {
	console.log("O jogo acabou")

}

function comprarCarta = ()=>{
   let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
   let naipes = ["♦️", "♥️", "♣️", "♠️"]
}
 
const numero = cartas[Math.floor(Math.random() * 13)]
const naipe = naipes[Math.floor(Math.random() * 4)]

let valor
/////////não consegui além daqui/////