const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid.js')
const usuarioApi = require('./api/usuario.js')
require('./api/produto.js')(app, 'com param!') // Retorna uma função


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


// middlewares
app.use(bodyParser.text()) // QUalquer texto que receba na requisição será interpretado
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) // dados do tipo url encoded vem do submit do form no frontend
app.use(saudacao('Guilherme'))

app.use((req,res, next) => {
    console.log('Será que serei chamado?')
    next()
})

// Ou post
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    /* let corpo = ''
    req.on('data', function(parte){
        corpo += parte          // Sem body-parser
    })
    req.on('end', function(){
        res.send(corpo)
    }) */
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


//Ordem das funções interfere. // Chain of responsability = 
app.get('/opa', (req, res) => {
    // res.send('<h1>Estou bem!</h1>')
    /* res.json({ // Transforma e envia resposta como json
        name: 'iPad 32gb',
        valor: 3330
    }) */
    res.json({
        data: [
            {
                name: 'iPad 32gb',
                valor: 3330
            }
        ],
        count: 30,
        skip: 1,
        status: 200
    })

})


app.listen(3000, () => console.log('Running in port 3000'))