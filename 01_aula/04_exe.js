var prompt = require('prompt-sync')()

const cidade1 = prompt("1° Cidade: ")
const cidade2 = prompt("2° Cidade: ")
const distancia = prompt("Distância(km): ")

console.log(`A distância entre ${cidade1} e ${cidade2} é de ${distancia} km.`)