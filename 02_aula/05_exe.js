var prompt = require('prompt-sync')()

const num = Number(prompt("Digite um numero: "))

const anterior = num - 1  
const posterior = num + 1

console.log(`Anterior: ${anterior}`)
console.log(`Posterior: ${posterior}`)
