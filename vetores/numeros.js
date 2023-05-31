var prompt = require("prompt-sync")();

const numeros = []


do {
  const numero = Number(prompt("Numero: "))
  if (numero == 0 ){
    break
  }

  numeros.push(numero)
}while(true)

let contador = 0 

console.log("Pares da lista:")
for(let i = 0; i < numeros.length; i++){
  if(numeros[i] % 2 == 0) {
    console.log(`${numeros[i]}`)
  }
  contador++
}
console.log(`Total: ${contador}`)