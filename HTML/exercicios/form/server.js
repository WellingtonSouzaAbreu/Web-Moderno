const express = require('express')
const app = express()
const bodyParser = require('body-parser')// Cria um corpo para os dados recebidos pela requisição e os transforma em objeto

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns! Usuário incluido! </h1>')
})

app.post('/usuarios/:id', (req, res) =>{ 
    console.log(req.params.id)
    console.log(req.params.aa)
    console.log(req.body)
    // console.log(req.query) // Dados recebidos pelo método GET, pela url
    res.send('<h1>Parabéns! Usuário Alterado!</h1>')
})

app.listen(3003, () => {
    console.log('Listening on port 3003...')
})