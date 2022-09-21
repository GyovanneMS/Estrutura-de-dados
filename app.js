'use strict'

import { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45, 136,	181,	 54,0,	140,	 47,	120,	162,	 50,	 56,	169,	 40,	 43,	 32,	179,	  2,	122,	183,	 11
]

//MAP - Percorre o array e retorna um array do mesmo tamanho, modificado ou não
//Sintaxe - array.map(callBack)
// 1 - Elememento
// 2 - Indice
// 3 - Array

//Aplicando um desconto de 2 no array
const desconto2 = (number) => {
    let resultFinal = (number*98)/100
    let rf = number - resultFinal;
    if(rf < 1.99){
        return 1.99;
    } 
    return rf.toFixed(2);
}

const numbersDesconto = numbers.map(desconto2)

//Filter - Percorre um array aplicando um callBack que retorna um arraydo mesmo tamanho ou não
//Sintaxe - array.filter(callBack)
//Parametros do callBack
// 1 - Elemento
// 2 - Indice
// 3 - Array
//Retorno do callBaack tem que ser um boolean
// Filtrar os elementos menores que 20
const menor20 = (valor) => valor<20
const valoresMenores20 = numbers.filter(menor20)

// Reduce - Percorre o array aplicando o callback e retorna um único valor
//Sintaxe - array.reduce(callBack)
// 1 - Elememento
// 2 - Indice
// 3 - Array
//Soma todos os valores
const soma = (a,b) => a + b;
const valorTotal = numbers.reduce(soma, 0)

//Exercícios
// 1 - Aumentar 100 em cada elemento
// 2 - Somente os números pares
// 3 - Total dos valores com desconto de 4
// 4 - Array com todos os elementos ímpares acrescentando 21

// Exercício 1
const soma100 = (number) => number+100
const numbersAcrescimo = numbers.map(soma100)

//Exercício 2
const calculoPares = (valor) => valor%2 == 0
const pares = numbers.filter(calculoPares)

//Exercício 3
const desconto4 = (number) => number-4
const somaDesconto = (a, b) => a + b;
const totalDesconto4 = numbers.map(desconto4).reduce(somaDesconto, 0)

//Exercício 4
const impares = (number) => number%2!= 0;
const soma21 = (number) => number+21
const impares21 = numbers.filter(impares).map(soma21)

showArray(numbers, 'main', 'Todos os números')
showArray(numbersDesconto, 'main', 'Desconto')
showArray(valoresMenores20, 'main', 'Menores que 20')
showArray([valorTotal], 'main', 'Total')
showArray(numbersAcrescimo, 'main', 'Soma 100')
showArray(pares, 'main', 'Pares')
showArray([totalDesconto4], 'main', 'Desconto de 4')
showArray(impares21, 'main', 'Impares mais 21')