const readline = require('readline-sync')
const entrada = readline.question("Digite itens separados por virgula: ")
const itens = entrada.split(",")
function reverter(arr) {
    const novo = []
    for (let i = arr.length - 1; i >= 0; i--) {
        novo.push(arr[i])
    }
    return novo
}
console.log(reverter(itens))