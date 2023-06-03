const prompt = require("prompt-sync")()

const idades = [18, 24, 16, 25, 32, 30]
const idadesMaisUm = idades.map(idade => idade + 1)

console.log(`Idades em 2023: ${idades.join(", ")}`)
console.log(`Idades em 2024: ${idadesMaisUm.join(", ")}`)