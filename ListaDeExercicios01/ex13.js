const readline = require('readline-sync')
const de = Number(readline.question("Inicio: "))
const ate = Number(readline.question("Fim: "))
function range(inicio, fim) {
    const res = []
    for (let i = inicio; i <= fim; i++) {
        res.push(i)
    }
    return res
}
function soma(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    return total
}
console.log(soma(range(de, ate)))