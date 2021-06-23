/*=====================================
  Exercícios de interpretação de código
=======================================*/
//1
//a) teste é para saber se o número é par
//b) numeros pares
//c) numero impares
/*=====================================*/
//2
//a) Pede para escolher uma fruta, escolhendo uma das frutas designadas ela apresenta o preço dela
//b)O preço da fruta , maçã,  é , R$ 2.25
//c) O preço da fruta , pera,  é , R$ 5
/*=====================================*/
//3
//a)"Digite o primeiro número."
//b)"nada", pois não tem referencia
//c)let mensagem = "Essa mensagem é secreta!!!" não tinha nenhuma referencia, se desse um valor < 0.

/*=====================================
  Exercícios de escrita de código
=======================================*/
//1
//a)//b)
// const idade = Number (prompt ("Qual a sua idade?"))
// const turno = (prompt("Qual turno você estuda? Digite M para Matutino, V para Vespertino e N para Noturno!"))
// //c)
// podeDirigir=(idade)=>{
//     if(idade >= 18){
//         console.log("Você pode dirigir!!!")
//     }else if(idade < 18){
//         console.log("Você não pode dirigir!!!")
//     }else {
//         console.log("Digite um número válido!!!")
//     }

// }
// podeDirigir(idade)

//2
// const horarioAlunos = prompt(("Qual turno você estuda? Digite, M , para Matutino, V para Vespertino e N para Noturno!"))

// turnoAluno=(turnos)=>{
//     if(turnos === "M"){
//         console.log("Bom Dia!")
//     }else if (turnos === "V"){
//         console.log("Boa Tarde!")
//     } else if(turnos === "N"){
//         console.log("Boa Noite!")
//     }else {
//         console.log("Digite a letra: M,V ou N")
//     }
    
// }
// turnoAluno(horarioAlunos)

//3
// const horarioAlunos = prompt(("Qual turno você estuda? Digite M para Matutino, V para Vespertino e N para Noturno!"))
// let turno
// switch (horarioAlunos){
//     case "M" :
//         turno = "Matutino"
//         console.log("Bom Dia!")
//         break
//     case  "V" :
//         turno = "Vespertino"
//         console.log("Bom Tarde!")
//         break
//     case "N" :
//         turno = "Noturno"
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Turno não encontrado!")
//         break

// }

//4)

// const generoFilme = (prompt("Qual o gênero do filme?"))
// const precoIngresso = Number (prompt("Qual valor do ingresso?"))

// const filmeCinema=(generoFilme,precoIngresso)=>{
    
//     if (generoFilme === "fantasia"){
//         console.log("Bom filme!")
    
//     }else if (precoIngresso <= 15){
//         console.log("Bom filme!")
    
//     }else if (generoFilme !== "fantasia"){
//     console.log("Escolha outro filme :(")
    
//     }else if (precoIngresso > 15){  
//     console.log("Escolha outro filme :(")
//     }

// }
// filmeCinema(generoFilme,precoIngresso)

/*=====================================
  Desafios de escrita de código
=======================================*/
//1)
// const generoFilme = (prompt("Qual o gênero do filme?"))
// const precoIngresso = Number (prompt("Qual valor do ingresso?"))

// const filmeCinema=(generoFilme,precoIngresso)=>{
    
//     if (generoFilme === "fantasia"){
//         console.log("Bom filme!")
    
//     }else if (precoIngresso <= 15){
//         console.log("Bom filme!")
    
//     }else if (generoFilme !== "fantasia"){
//     console.log("Escolha outro filme :(")
    
//     }else if (precoIngresso > 15){  
//     console.log("Escolha outro filme :(")
//     }

// }
// filmeCinema(generoFilme,precoIngresso)
// const lacheCinema = (prompt("Qual lanchinho você vai comprar?"))
// console.log("Aproveite o seu",lacheCinema)

///2

// const nome = (prompt("Qual seu nome completo?"))
// const tipoJogo = (prompt("Qual tipo de jogo IN ou DO ?"))
// const etapaJogo = (prompt("Qual etapa do jogo, SF, DT ou FI?"))
// const categoriaJogo = Number (prompt("Qual a categoria do jogo? 1, 2, 3 ou 4"))
// const quantidadeIngresso = Number (prompt("Qual a quantidade de ingressos que deseja comprar?"))

// const dadosDaCompra = (nome,tipoJogo,etapaJogo,categoriaJogo,quantidadeIngresso)=>{
//     if(nome){
//        console.log(nome)

//     }else if(tipoJogo == "IN"){
//        console.log("Interacional")
//     }else if(tipoJogo == "DO"){
//        console.log("Nacional")
    
//     }else if(etapaJogo === "SF"){
//         console.log("Semi-Final")
//     }else if(etapaJogo === "DT"){
//         console.log("Decisão do Terceiro-Lugar")   
//     }else if(etapaJogo === "FI"){
//         console.log("Final") 
    
//     }else if(categoriaJogo === "1"){
//         console.log("Categoria: 1")  
//     }else if(categoriaJogo === "2"){
//         console.log("Categoria: 2")  
//     } else if(categoriaJogo === "3"){
//         console.log("Categoria: 3") 
//     }  else if(categoriaJogo === "4"){
//         console.log("Categoria: 4")  
    
//     }else if(quantidadeIngresso){
//         console.log("Quantidade de Ingressos:")
//     }
//     return dadosDaCompra
// }

// dadosDaCompra(nome,tipoJogo,etapaJogo,categoriaJogo,quantidadeIngresso)


////// SÓ FALTOU O DESAFIO DE HOJE, QUE ESTÁ INCOMPLETO, TO PERDIDO NESSE ////////////////// O RESTANTE TUDO CERTO!!!!!!!!//////////


