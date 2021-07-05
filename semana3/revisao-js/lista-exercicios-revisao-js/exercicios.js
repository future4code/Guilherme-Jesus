// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  for (let i = array.length - 1;i >= 0;i--) {
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let numerosParesElevados = []
for (let i = 0; i < array.length; i++){
  }
    if (array [i] %2 === 0){
      numerosParesElevados.push(math.pow(array[i],2))
  }
  return numerosParesElevados
}


// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numerosPares = [] 
  for (let i = 0; i < array.length; i++){
    if (array [i] %2 === 0){
      numerosPares.push(array[i]);
    }
   }
    return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  const tamanhoArray = array.length

  for(let i = 0; i < tamanhoArray; i++){
      const numeroAtual = array[i]
      if(numeroAtual > maiorNumero){
          maiorNumero = numeroAtual
      }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  return [false, false, true, true, true]
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a !== b && b !== c) {
    return 'Escaleno'
  } else if (a === b && b === c) {
    return 'Equilátero'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
 const comparacaoDeNumeros =  num1 == num2
 const 
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })
  return novoArray
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menorDezoito = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  })
  return menorDezoito
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((num) => {
    if (num % 2 === 0) {
      return `${num} é par`
    } else {
      return `${num} é ímpar`
    }
  })

  return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
//////////consegui fazer apenas esses sem a resolução/////