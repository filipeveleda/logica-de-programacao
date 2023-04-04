var prompt = require('prompt-sync')()

const nota1 = Number(prompt("1° nota: "))
const nota2 = Number(prompt("2° nota: "))

const media = (nota1 + nota2)/2

console.log(`A média das notas é ${media.toFixed(2)}`)

