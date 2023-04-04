
var prompt = require('prompt-sync')()

const titulo = prompt ("Titulo: ")
const duracao = prompt("Duração do filme(min): ")

console.log(`O filme ${titulo} tem a duração de ${duracao} minutos.`)
