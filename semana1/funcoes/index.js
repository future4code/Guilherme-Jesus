//EXERCICIOS DE INTERPRETAÇÃO
//1
// function minhaFuncao(variavel) {
// 	return variavel * 5   
// }

//  minhaFuncao (2)
//  minhaFuncao (10)

//a) O que vai ser impresso no console? //--> MULTIPLICA 5 PELA MINHA FUNÇÃO // --> 10 ///--> 50

/*b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função
 minhaFuncao(2) e minhaFuncao(10)? ,O que apareceria no console? */ // não apresentaria nada no console, não imprime
 ///////

//2Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//Ele relaciona se o texto que o usuario coloca, tem a palavra cenoura, e imprime o booleano, todo minusculo

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    //  i.   `Eu gosto de cenoura` - true
    //  ii.  `CENOURA é bom pra vista` - true
    //  iii. `Cenouras crescem na terra` - true
///////////////////////////
//EXERCICIOS DE ESCRITA DE CODIGO

// 1. Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve 
//imprimir uma mensagem falando algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// function imprimeNome(){
//     console.log("Oi eu sou Guilherme, tenho 25 anos, moro em Uberlândia e sou estudante")
    
// }
// imprimeNome()

// /// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 

// //Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
// // Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// // - Exemplo
// //     Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
// //     `"Eu sou Laís, tenho 23 anos, moro em São Paulo e sou instrutora."`

// function imprimeDados (nome, idade, endereço, Profissao){
//     console.log(`Oi eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${Profissao}.`)
// }

// imprimeDados(`Guilherme`, `25`, `Uberlândia` , `Estudante`)

////////////
//2. Escreva as funções explicadas abaixo:

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
// faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somaNumero(num1, num2){
//     const soma = num1 + num2
//     return soma
// }

// const resultadoSoma = somaNumero(6 , 3)
// console.log(resultadoSoma)  

// // b) Faça uma função que recebe 2 números e retorne um booleano 
// // que informa se o primeiro número é **maior ou igual** ao segundo.

// function comparandoNumeros(num3 , num4){
     
//     return comparandoNumeros

// }

// console.log("O primeiro número é maior ou igual ao segundo?", 5 >= 4)


// c) Escreva uma função que receba um número e devolva um 
// booleano indicando se ele é par ou não

// function parOuImpar(num5){
     
//     return (num5 % 2 == 0)

// }

// const num5 = Number (prompt("Insira um numero aqui"))
// console.log(num5 % 2 == 0 )



// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e 
// imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function escrevaAqui(receberMensagem){
//     return receberMensagem

// }

// const receberMensagem = prompt(`Insira aqui uma mensagem`)
// console.log (receberMensagem.toUpperCase())
// console.log (receberMensagem)
// //////////////////

// 3 Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores
//  inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

// const primeiroNumero= Number (prompt("Insira um numero"))
// const segundoNumero= Number (prompt("Insira outro numero"))
// function soma (num8,num9){
//     const somaPrimeiro = num8 + num9 
//     return num8 + num9 
// }

// function subtração (num8,num9){
//     const subtraçãoPrimeiro = num8 - num9 
//     return num8 + num9 
// }

// function multiplicacao (num8,num9){
//     const multiplicacaoPrimeiro = num8 * num9 
//     return num8 + num9 
// }

// function divisao (num8,num9){
//     const divisaoPrimeiro = num8 / num9 
//     return num8 / num9 
// }

// console.log(soma)
// console.log(subtração)
// console.log(multiplicacao)
// console.log(divisao)

//// nossa muito dificil




  