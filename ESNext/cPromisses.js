// Com promisse
const http = require('http')
const { promises } = require('fs')

const getTurma = (letra) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados =>{
                resultado += dados
            })
    
            res.on('end', () =>{ //Ao finalizar retorna-se arquivo JSON transformado
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

/* let nomes = []
getTurma('A').then(alunos =>{ // Callback hall // Promisses contorna isso
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B').then(alunos =>{
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
        getTurma('A').then(alunos =>{
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) //Resolve todas as promisses
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(x => console.log(x))
    .catch(e => console.log(e.message))

    


