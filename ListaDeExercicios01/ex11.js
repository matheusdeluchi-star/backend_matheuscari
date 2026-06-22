const readline = require('readline-sync')
const idade = Number(readline.question("Sua idade: "))
const podeVotar = i => i >= 16
console.log(podeVotar(idade) ? "Pode votar!" : "Não pode votar.")