const prompt = require("prompt-sync")()


const veiculos = [40000, 50000, 32000, 60000, 45000]
console.log(`R$ dos Veículos: ${veiculos.join(", ")}`)

const entradas = veiculos.map(veiculo => veiculo * .3)
console.log(`R$ das entradas: ${entradas.join(", ")}`)
