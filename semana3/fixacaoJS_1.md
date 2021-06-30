function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let carrosVendas = qtdeCarrosVendidos * 100
let vendasComissao = valorTotalVendas * 0.05
let resultado = carrosVendas + vendasComissao + 2000
return resultado
}
