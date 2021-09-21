
// // EXERCICIO 1//

// // const minhaString : string = 9

// // a) O tipo string não é o correto para definir um número .

// let meuNumero : string | number = 9
// meuNumero = "Guilherme"
// console.log(meuNumero)

// // b) È necessario colocar o Pipe ('ou'), para que possa aceitar uma string e numero na variavel.
// // Se manter como const ele não aceita, devemos colocar let na variável

// // c)
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const fernando: pessoa  = {
//     nome: "Fernando",
//     idade: 33,
//     corFavorita: "Amarelo"
// }

// const guilherme: pessoa = {
//     nome: "Guilherme",
//     idade: 45,
//     corFavorita: "Verde"
// }

// const lucas: pessoa = {
//     nome: "Lucas",
//     idade: 25,
//     corFavorita: "Azul"
// }
// const luiz: pessoa = {
//     nome: "Luiz",
//     idade: 45,
//     corFavorita: "Vermelho"
// }

//Exercicio2




function obterEstatisticas (numeros: numeros[], estatistica[] ) {

    const numerosOrdenados = numeros.sort(
        (a , b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
type numeros={
    a: number,
    b: number,
}
type estatistica ={
    maior:number,
    menor:number,
    media:number,
}
