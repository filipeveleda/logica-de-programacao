var prompt = require("prompt-sync")();

const clubes = []

for (let i = 0; i < 10; i++){
  let clube = prompt(`${i+1}° Clube: `)
  clubes.push(clube)
}

for(let i = 0; i < clubes.length; i = i + 2 ){
  console.log(`${clubes[i]} x ${clubes[i+1]}`)
}