var prompt = require('prompt-sync')()

const valor = Number(prompt("Valor R$: "))

const taxa = valor * (10/100) 

const total = valor + taxa

console.log(`Taxa do garçom R$: ${taxa.toFixed(2)} `)
console.log(`Valor total R$: ${total.toFixed(2)}`)