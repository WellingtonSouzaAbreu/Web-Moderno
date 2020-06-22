const porta = 3003 // A porta só pode ser usada por um único processo, mesmo que da mesma aplicação

const express = require('express') // Retorna função
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

// Toda requisição passara pelo body-parser, se for tipo urlencoder será convertido de string para objeto
app.use(bodyParser.urlencoded({extended: true})) // FUnção middleware que retorna uma função

// http://localhost:3003/produtos //Produtos do método get
app.get('/produtos', (req, res, next) => { 
    res.send(bancoDeDados.getProdutos())
})

// /produtos/:id não vai na url, o id é substituido por um numero
app.get('/produtos/:id', (req, res, next) => { // Os parametro vem da requisição
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Necessita da extensão 'npm i --save body-parser'
app.post('/produtos', (req, res, next) => { // Post envia informações ao servidor 
    const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome, //Maneira de pegar os dados enviados da aplicação ao server
    preco: req.body.preco // O body-parser transforma o body da requisição em objeto, que antes era string
    })

    res.send(produto) // COnvertido em JSON
})

//Edita e sobrepoe o valor informado (id)
app.put('/produtos/:id', (req, res, next) => { // Post envia informações ao servidor 
    const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome, //Maneira de pegar os dados enviados da aplicação ao server
    preco: req.body.preco // O body-parser transforma o body da requisição em objeto, que antes era string
    })

    res.send(produto) // COnvertido em JSON
})

app.delete('/produtos/:id', (req, res, next) => { // Post envia informações ao servidor 
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // COnvertido em JSON
})

app.listen(porta, () =>{
    console.log('Servidor executando na porta', + porta)
}) //porta escutada

