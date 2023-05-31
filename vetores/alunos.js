var prompt = require("prompt-sync")();

contador = 1

const alunos = []
const notas = []


do {
  const aluno = prompt(`${contador}° Aluno: `).toLowerCase()
  if( aluno == 'fim'){
    break
  }
  const nota = Number(prompt("Nota: "))

  alunos.push(aluno)
  notas.push(nota)
  
contador++  
}while(true)


console.log("Aprovados:")
for (let i = 0; i < notas.length; i++){
  if(notas[i] >= 7){
    console.log(`${alunos[i]} - ${notas[i].toFixed(1)}`)
  }
}

console.log("-".repeat(30))
console.log("Reprovados:")
for (let i = 0 ; i < notas.length; i++){
  if(notas[i] < 7){
    console.log(`${alunos[i]} - ${notas[i].toFixed(1)}`)
  }
}



