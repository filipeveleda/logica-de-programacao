var prompt = require("prompt-sync")();

let contador = 1
const modelos = []
const precos = []

do {
const modelo = prompt(`${contador}° Veículo: `).toLowerCase()
if (modelo == 'fim'){
  break
}
const preco = Number(prompt("Preço R$: "))

modelos.push(modelo)
precos.push(preco)

contador++

}while(true)

const frete = Number(prompt("Frete R$: "))
console.log("Tabela de Preços (com frete)")
console.log("-".repeat(30))
for(let i = 0; i<modelos.length;i++){
  precos[i] = precos[i] + frete
  console.log(`${modelos[i]} - R$ ${precos[i].toFixed(2)}`)
}