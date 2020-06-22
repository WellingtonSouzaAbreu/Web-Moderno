const escola = [{
    nome: 'Turma m1', 
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
},
    {
    nome: 'Turma m2', 
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

let notas1 = escola.map(getNotaTurma)
console.log(notas1)
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ] )) // Tira o array do array

Array.prototype.flatMap = function(callback){ // Implementando método flatMap
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)

// Flat - achatar - transformar matrizes em array lineares




