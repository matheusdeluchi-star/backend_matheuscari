const readline = require('readline-sync')
const corte = Number(readline.question("Nota minima: ") || 7)
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 7.2 },
    { nome: "Diana", nota: 5.5 },
    { nome: "Eduardo", nota: 9.0 }
]
const comSituacao = alunos.map(a => {
    let sit = "Reprovado"
    if (a.nota >= corte) {
        sit = "Aprovado"
    }
    return { nome: a.nome, nota: a.nota, situacao: sit }
})
console.log(comSituacao)
const aprovados = comSituacao.filter(a => a.situacao === "Aprovado")
console.log(`Aprovados: ${aprovados.length}`)
let somaNotas = 0
for (let i = 0; i < alunos.length; i++) {
    somaNotas = somaNotas + alunos[i].nota
}
const media = somaNotas / alunos.length
console.log(`Média: ${media.toFixed(2)}`)