const prompt = require("prompt-sync")()

const listaNomes = ["Silvana","Juliano", "Ricardo", "Patrícia", "Bianca"]
console.log(`Lista: ${listaNomes.join(", ")}`)
const pesquisa = prompt("Pesquisar: ")

const resultado =  listaNomes.indexOf(pesquisa)


if (resultado == -1){
  console.log(`${pesquisa} não encontrado`)
}else{
  console.log(`Consta na ${resultado + 1}° posição`)
}