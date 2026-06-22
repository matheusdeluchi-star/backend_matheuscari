const readline = require('readline-sync')
const tam = Number(readline.question("Tamanho: ") || 8)
let tab = ""
for (let l = 0; l < tam; l++) {
    for (let c = 0; c < tam; c++) {
        tab += (l + c) % 2 === 0 ? " " : "#"
    }
    tab += "\n"
}
console.log(tab)