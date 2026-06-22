const readline = require('readline-sync')
const numero = Number(readline.question("Digite um numero: "))
console.log(`O número ${numero} é ${numero % 2 === 0 ? "par" : "impar"}`)