// Exercícios de interpretação de código

//1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 - negaçao antes - ele vira true

// let resultado = bool1 && bool2
// console.log("a. ", resultado) = //false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) //  false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)  false

// console.log("d. ", typeof resultado) number

//////  && - se tiver um false, tudo fica false,


//2. os numeros não são somados pois são strings e o console não reconhece como numeros 

//  let primeiroNumero = Number (prompt("Digite um numero!"))
//  let segundoNumero = Number (prompt("Digite outro numero!"))

//  const soma = primeiroNumero + segundoNumero
//  console.log(soma)

// 3. o console reconhece com uma string, se não colocar que é um number antes do prompt
//////////////////////////////////////////////////////////////////////////////////////////////////

// Exercícios de escrita de código
/// 1.
// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

// const idadeUsuario = Number (prompt ("Qual sua idade?"))
// const idadeMelhorAmigo = Number (prompt ("Qual a idade do seu melhor amigo?"))
// const idade = idadeUsuario >=  idadeMelhorAmigo 
// console.log ("Sua idade é maior do que a do seu melhor amigo?", idade)
// console.log ("Diferença de idade", idadeUsuario - idadeMelhorAmigo, "anos")

//2.
// a) Peça ao usuário que insira um número **par**

// b) Imprima na console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//a divisão ocorre, mais o resto sai sempre zero.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// ele divide porém já com numero impares ele sempre sai 1.

// let usuario = Number (prompt ("Insira um número par!"))
// let divisao = usuario / 2
// let resto = usuario % 2
// console.log (resto)
// console.log (divisao)

//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

// a) A idade do usuário em meses

// b) A idade do usuário em dias

// c) A idade do usuário em horas

// let idadeEmAnos = Number (prompt("Qual sua idade"))
// let idadeEmMeses = Number (idadeEmAnos * 12)
// let idadeEmDias = Number (idadeEmAnos * 365)
// let idadeEmHoras = Number (idadeEmAnos * 8766)

// console.log ( "Idade em Meses",idadeEmMeses)
// console.log ( "Idade em Dias",idadeEmDias)
// console.log ( "Idade em Horas",idadeEmHoras)

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:

//     O primeiro numero é maior que segundo? true
//     O primeiro numero é igual ao segundo? false
//     O primeiro numero é divisível pelo segundo? true
//     O segundo numero é divisível pelo primeiro? true

// let a = Number (prompt("Insira um número aqui"))
// let b = Number (prompt("Insira outro número aqui"))

// console.log ("O primeiro numero é maior que segundo?", a > b)
// console.log ("O primeiro numero é igual ao segundo?", a == b)
// console.log ("O primeiro numero é divisível pelo segundo?", a % b == a)
// console.log ("O segundo numero é divisivel pelo primeiro?", b % a == b)

//Só não fiz os DESAFIOS, quando chegar do trabalho irei fazer e praticar!


