const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]


// Abordagem imperativa
// Visão de código único
// Tem o detalhe de como deve ser feito mais minucioso. Enfase a 'como deve ser feito'
// Possibilita menos reuso de código
let total1 = 0
for(let i = 0; i< alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Abordagem declarativa - Viável e faz a linguagem trabalhar por você
// Visão de várias declarações
// Não se preocupa muito com os detalhes, e sim em executar o essencial. Enfase a 'O que deve ser feito'
// Possibilita um maior reuso
// SQL e HTML são linhagens declarativas
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)


//Comparações
//Neste caso, mesma quantidade de linhas


