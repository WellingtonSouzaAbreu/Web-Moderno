// Rest é usado para responder as requisições feitas ao servidor, apresentando o estado de algo no momento
// Rest é stateless - não armazena informação em lugar algum
// Conseitos Rest (get, post, put, delete)
// Get consulta ao servidor
// Post enviar informações para o servidor
// Put atualiza informações
// Delete deleta

// CRUD 



// Esse método não dá resposta
/* app.get('/produtos', (req, res, next) => { //Pode-se suprimir o next
    console.log('Middleware 1...')
    next() // Next aponta para o próximo 'app.get'
}) */

//npm i --save-dev nodemon@1.14.11 -E  //Salva fora de dependencias, não sendo instalados com npm i
//servidor web

const porta = 3003 // A porta só pode ser usada por um único processo, mesmo que da mesma aplicação

const express = require('express') // Retorna função
const app = express()


// http://localhost:3003/produtos //Produtos do método get
app.get('/produtos', (req, res, next) => { 
    res.send({nome: 'Notebook', preco: 123.45})  //Send envia res como resposta e já converte para JSON
})

// res é a resposta dada a solicitaão do site
app.use((req, res, next) => { // Use responde a todos os tipos de requisição
    res.send('Requisição inválida')  //Send envia res como resposta e já converte para JSON
})

app.listen(porta, () =>{
    console.log('Servidor executando na porta', + porta)
}) //porta escutada

