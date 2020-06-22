// Importar um módulo com nome errado gera erro
// Pode-se acessar o módulo também por caminha absoluto(desde C:/...)
const moduloA = require('../../sistemaDeModulos.js') // O case não dá problemas em Windows e em Mac, mas no Linux sim
console.log(moduloA.ola)

// Node_modules armazena tudo que foi instalado

const saudacao = require('saudacao') // dentro do módulo saudacao vai-se procurar o arquivo index.js
console.log(saudacao.ola) // Dentro de index pode-se importar muitos arquivos de uma só vez

// HTTP é um módulo do node, faz parte dos módulos core
const http = require('http')
http.createServer((req, res) => { // Requisição e resposta
    res.write('Bom dia')
    res.end()
}).listen(8080)



