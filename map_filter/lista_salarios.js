const prompt = require("prompt-sync")()

const salarios = [2300, 3000, 1900, 4500, 2550, 2800]
console.log(`Salário: ${salarios.join(", ")}`)

const num = prompt("Valor mínimo: ")
const valoresMaiores = salarios.filter(salario => salario >= num)

if (valoresMaiores.length == 0){
  console.log("Nenhum valor encontrado")
}else{
  console.log(`Maiores ou iguais: ${valoresMaiores.join(", ")}`)
}

