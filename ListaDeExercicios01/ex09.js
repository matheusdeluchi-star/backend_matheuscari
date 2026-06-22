const readline = require('readline-sync')
const n1 = Number(readline.question("Numero 1: "))
const n2 = Number(readline.question("Numero 2: "))
function minTradicional(a, b) {
    return a < b ? a : b
}
const minArrow = (a, b) => a < b ? a : b
console.log(minTradicional(n1, n2))
console.log(minArrow(n1, n2))