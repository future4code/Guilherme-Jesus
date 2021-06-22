
//Leia o código abaixo
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) 
// console.log(filme.elenco[filme.elenco.length - 1]) 
// console.log(filme.transmissoesHoje[2]) 

// a) O que vai ser impresso no console?
//"Matheus Nachtergaele" 
//"Virginia Cavendish"
//canal: Globo, horario: 14h

// // 3. Leia o código abaixo
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// // a) O que vai ser impresso no console?
// apenas false
// objeto e propriedade - não possuem nada dentro

// // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// apenas false
// objeto e propriedade - não possuem nada dentro
// e altura tambem não tinha especificado no objeto

//Exercicios de Escrita de código
//1) Resolva os Passos a Seguir:

// // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
// // // Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

// let pessoa = {
//     nome: `Guilherme`,
//     apelido: [`Couto,Guico e Gui`] 
// }
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}.`)

// // /*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
// // Depois, chame a função feita no item anterior passando como argumento o novo objeto*/

// let listaApelidosNovos = {...pessoa, apelido:[`Silvio Santos, Leão e Chaves.`]}
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${listaApelidosNovos.apelido}.`)

// // 2.Resolva os passos a seguir: 
// // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

// const objetoUm = {
//     nome: "Guilherme",
//     idade: 25,
//     profissao: "Estudante"
  
// }
// const objetoDois = {
//     nome: "Silva",
//     idade: 28,
//     profissao: "Pedreiro"

// }


// function imprimeInformacoes(objetoUm) {
//     const simplificandoObjetoUm= [objetoUm.nome,objetoUm.nome.length,objetoUm.idade,objetoUm.profissao,
//     objetoUm.profissao.length]
    
//     return (simplificandoObjetoUm)
// }

// console.log(imprimeInformacoes(objetoUm))

// //3.Resolva os passos a seguir:

// a) 

// const carrinho = []

// // b) 

// const melao = {
//    nome: ("Melão"),
//    disponibilidade: true
// }
// const melancia = {
//     nome: ("Melancia"),
//     disponibilidade: true
//  }
//  const uva = {
//    nome: ("Uva"),
//    disponibilidade: true
//  }
// // c) e d)
// function adicionaFruta(frutas){
//     carrinho.push(frutas)
// }
// adicionaFruta(melao)
// adicionaFruta(melancia)
// adicionaFruta(uva)
// console.log(carrinho)




