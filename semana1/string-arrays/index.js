// //Exercícios de interpretação de código
// let array
// console.log('a. ', array) 
// // não tem nada na variavel

// array = null
// console.log('b. ', array)
// // null esta na variavel

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) 
// // conta quantos elementos no array =11

// let i = 0
// console.log('d. ', array[i]) 
// // imprime no console o primeiro do array

// array[i+1] = 19
// console.log('e. ', array) 
// // o 4 é substituido pelo 19 que ser torna o numero 1

// const valor = array[i+6] 
// console.log('f. ', valor)
//mostra qual array esta na posição 6, quer seria o 9
///////////////////////////////////////////
//2.Leia o código abaixo com atenção 

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
/*A frase sera impressa em caixa ALTA e as palavras com A serão
trocadas por I, e depois com o length irá contar os elementos e os 
espacos*/

/* Qual será o valor impresso no console se a entrada do usuário for:
  "Subi num ônibus em Marrocos"?*/
/*irá ficar em caixa alta, e trocar a letra A por I*/

/////////////////////////////////////////////
/*Exercícios de escrita de código*/
//1
//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.
// Em seguida, imprima na tela a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. 
//Seja bem-vinda(o), `nomeDoUsuario`

//RESPOSTA
// const nome = (prompt(`Qual seu nome?`))
// const email = (prompt (`Qual seu email?`))
// const frase1 = (` O email ` + email + ` foi cadastrado com sucesso. ` + `Seja bem-vindo! ` + nome)
// console.log(frase1)


/*2. Faça um programa que contenha um array com 5 das suas 
comidas preferidas, armazenado em uma variável. 
Em seguida, siga os passos:*/

/*a) Imprima na tela o array completo*/

/*b) Imprima na tela a mensagem 
"Essas são as minhas comidas preferidas: ",
seguida por cada uma das comidas, **uma embaixo da outra**.*/

/*c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
Troque a segunda comida da sua lista pela inserida pelo usuário.
Imprima na tela a nova lista*/

// const nome = (prompt(`Qual seu nome?`))
// const email = (prompt (`Qual seu email?`))
// const frase1 = (` O email ` + email + ` foi cadastrado com sucesso. ` + `Seja bem-vindo! ` + nome)
// console.log(frase1)

// const comidasPrefer = ['Macarrao', 'Strogonoff', 'Lasanha', 'Pizza', 'Sushi']
// console.log('Essas são minhas comidas preferidas:')
// console.log (comidasPrefer [0])
// console.log (comidasPrefer [1])
// console.log (comidasPrefer [2])
// console.log (comidasPrefer [3])
// console.log (comidasPrefer [4])

// const rangoUsuario = (prompt('Qual a sua comida preferida?'))
// comidasPrefer [1] = (rangoUsuario)
// console.log (comidasPrefer)
//////////////////////////
// //3)Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array na tela

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array na tela//

// const listaVazia= []
// const listaDeTarefas0 = (prompt ('Diga 3 tarefas que você precisa realizar no dia'))
// const listaDeTarefas1 = (prompt ('Diga 3 tarefas que você precisa realizar no dia'))
// const listaDeTarefas2 = (prompt ('Diga 3 tarefas que você precisa realizar no dia'))
// listaVazia.push(listaDeTarefas0)
// listaVazia.push(listaDeTarefas1)
// listaVazia.push(listaDeTarefas2)
// const tarefaRealizada= (prompt('Digite 0, 1 ou 2 para a tarefa já realizada:'))
// listaVazia.splice(tarefaRealizada, [1])
// console.log(listaVazia)

//////////////

// const frase = prompt("Subi no onibus em Marrocos")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NO ONIBUS EM MIRROCOS  E VAI CONTAR OS ELEMENTOS DA FRASE COM OS ESPAÇOS

//DESAFIO
//Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
//Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"],
//faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array








