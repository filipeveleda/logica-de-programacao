
var prompt = require('prompt-sync')()

const fruta = prompt("Fruta: ")
const quantidade = Number(prompt("Quantidade: "))

console.log(`Foram colhidos ${quantidade} unidades de ${fruta}`)