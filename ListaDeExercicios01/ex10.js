const readline = require('readline-sync')
const texto = readline.question("Digite o texto: ")
const letra = readline.question("Digite a letra: ")
function contarLetra(txt, lt) {
    let cont = 0
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === lt) cont += 1
    }
    return cont
}
console.log(contarLetra(texto, letra))