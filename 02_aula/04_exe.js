var prompt = require('prompt-sync')()

const nome = prompt("Nome: ")
const idade = Number(prompt("Idade: "))

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

const dataNascimento =  anoAtual - idade

console.log(`Oi ${nome}, você nasceu em ${dataNascimento}`)