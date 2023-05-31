var prompt = require("prompt-sync")();

const produtos = []
const precos = []


console.log("Informe o nome do produto ou 'Fim' para sair")

do {
  const x = prompt("Nome do produto: ").toLowerCase()
  if(x == "fim"){
    break
  }
  
  const y = Number(prompt("Preço R$: "))
  
  produtos.push(x)
  precos.push(y)
  
}while(true)

console.log("-".repeat(30))
console.log("Nota fiscal das compras")
console.log("-".repeat(30))

let soma = 0

for(let i = 0; i < produtos.length; i++){
  console.log(`${produtos[i].padEnd(15)} - R$ ${precos[i].toFixed(2).padStart(10)}`)
  soma = soma + precos[i]
}

console.log("-".repeat(30))
console.log(`Total R$: ${soma.toFixed(2)}`)
console.log("-".repeat(30))



