var prompt = require('prompt-sync')()

const valor = prompt("Valor do veículo R$: ")

const metade = valor * (50/100)

const parcela = metade/12

console.log(`Entrada de R$ ${metade.toFixed(2)} mais 12x de R$ ${parcela.toFixed(2)}`)