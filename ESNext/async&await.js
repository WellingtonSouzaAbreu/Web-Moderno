// ES8
// Como transformar um código assincrono em algo que parece sincrono
// Simplificar o uso de promisses
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

//Funções que retornam promisses
let obterAlunos = async() =>{ // Await só pode ser declarado se o async estiver declarado
    const ta = await getTurma('A') // Armazena e torna tudo mais sincrono
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // Retorna um objeto AsyncFunction

obterAlunos() // O then tem acesso ao que a funão retorna
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))


