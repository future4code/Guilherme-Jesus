// const dividePar = (numero,imprimir) =>{
//     if(numero %2 === 0) {
//         const resultado = numero/2
//         imprimir(resultado)

//     }
//    console.log("O número é impar")
// }

// const imprimeMensagem = (valor) =>{
//     console.log("O valor da sua conta é:",valor)
// // }

// // dividePar(20,imprimeMensagem)
// /////////////////////////////////////////


// const numeroImPar = (numero,imprimir) =>{
//     if(numero %2 !== 0) {
//       imprimir(numero)
//     }
// }

// const imprimeMensagem = (valor) =>{
//     console.log("Seu número é ímpar:",valor)
// }

// numeroImPar(41,imprimeMensagem)



// const numeroImPar2 = (numero,imprimir) =>{
//     if(numero %2 !== 0) {
//       imprimir()
//     }
// }

// const imprimeMensagem2 = () =>{
//     console.log("Sim é impar")
// }

// numeroImPar2(43,imprimeMensagem2)

/*========================================
Exercícios de interpretação de código
==========================================*/

//1 - 

// 0 nome: "Amanda Rangel", apelido: "Mandi"
// 1 nome: "Laís Petra", apelido: "Laura"
// 2 nome: "Letícia Chijo", apelido: "Chijo"

//const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//2
// 0 nome: "Amanda Rangel"
// 1 nome: "Laís Petra"
// 2 nome: "Letícia Chijo"

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//3
// 0  nome: "Amanda Rangel", apelido: "Mandi"
// 1  nome: "Laís Petra", apelido: "Laura"

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

/*========================================
Exercícios de escrita de código
==========================================*/

//1 
/*Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos
// // const soNomeDog = pets.map((item,index,array)=>{
//   return item.nome
// })
// console.log(soNomeDog)

// // b) Crie um novo array apenas com os cachorros salsicha
//   const dogSalsicha = pets.filter((petsSalsicha) =>{
//     return petsSalsicha.raca == "Salsicha"
//   })
//   console.log(dogSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"//

// const soPoodle = pets.filter((cupomPoodle)=>{
//     return cupomPoodle.raca === "Poodle"
// })
// console.log("Você ganhou um cupom de desconto de 10% para tosar",(soPoodle))

//2
/*Dado o seguinte array de produtos, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// a) Crie um novo array que contenha apenas o nome de cada item

// const nomeDosItens = produtos.map((itens)=>{
//  return itens.nome
// })
// console.log(nomeDosItens)


// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
// const descontoEmProd = produtos.map((produtosComDesc)=>{
//     return {nome:produtosComDesc.nome, preco:(produtosComDesc.preco*0.95)}
//  })
//    console.log(descontoEmProd)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const soBebida = produtos.filter((categoreBebidas)=>{
//     return categoreBebidas.categoria === "Bebidas";
// })
// console.log(soBebida)


// // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//  const produtosYpe = produtos.filter((soYpe)=>{
//      return soYpe.nome.includes("Ypê")
//  })
//  console.log(produtosYpe)
 
// //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// //Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const compreYpe = produtosYpe.map((soYpe)=>{
//     return `Compre ${soYpe.nome} por ${soYpe.preco}`
// })
// console.log(compreYpe)

/*========================================
   DESAFIOS
// ==========================================*/


// //1
// //Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

//  //a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
// //  const ordemAlfa = pokemons.map((pokeOrdem)=>{
// //      return pokeOrdem.nome
// //  })
// //  console.log(ordemAlfa.sort())
 
//  //b)
//  const soOsTipos = pokemons.map((pokeTipos)=>{
//     return pokeTipos.tipo
//  })
// console.log(soOsTipos)

// const listaCerta  = soOsTipos.filter((tipo, index, array)=>{
//     return array.indexOf(tipo) === index
// })
// console.log(listaCerta)
