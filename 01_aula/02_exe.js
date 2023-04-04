var prompt = require('prompt-sync')()

const nome = prompt("Nome: ")
const numero = prompt("Numero da camisa: ")

console.log(`${nome}, você é o camisa ${numero} do time.`)