const prompt = require("prompt-sync")()

const quantidades = [4, 12, 20, 30, 15, 18]
console.log(`Quantidade: ${quantidades.join(", ")}`)

let soma = 0

quantidades.forEach((item)=>{
  soma = soma + item
})

let media = soma / quantidades.length

console.log(`Média: ${media}`)
console.log(`Soma: ${soma}`)