const readline = require('readline-sync')
readline.question("Calcular soma dos pares ate 50? (ENTER)")
let soma = 0
for (let i = 2; i <= 50; i += 2) {
    soma += i
}
console.log(`Soma dos pares: ${soma}`)