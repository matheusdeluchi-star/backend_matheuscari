const readline = require('readline-sync')
readline.question("aperta enter")
let linha = ""
for (let i = 1; i <= 7; i++) {
    linha += "#"
    console.log(linha)
}