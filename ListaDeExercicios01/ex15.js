const readline = require('readline-sync')
const buscaId = Number(readline.question("Buscar ID: "))
const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Mousepad", preco: 45 },
    { id: 5, nome: "Headset", preco: 250 }
]
const produtoEncontrado = produtos.find(p => p.id === buscaId)
console.log(produtoEncontrado)
const caros = produtos.filter(p => p.preco > 100)
console.log(caros)
const nomes = produtos.map(p => p.nome)
console.log(nomes)
produtos.forEach(p => console.log(p.nome + " - R$ " + p.preco))