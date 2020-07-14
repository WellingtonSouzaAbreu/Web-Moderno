const bodyParser = require('body-parser')
const express = require('express')
const app = express()
/* Middleware é uma função executada quando uma requisição chega */

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extender: true }))
app.use(bodyParser.json())

const multer = require('multer') // Interpretar o arquivo que vem do uploar
const storage = multer.diskStorage({ // Objeto para configurar a pasta de salvamento e o nome 
    destination: function (req, file, callback) {
        callback(null, './upload') // Pasta de destino
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo') // Nome do input(name) que vem como requisição

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um Erro')
        }

        res.end('Concluido com sucesso') // End diz que finalizou o upload
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, //Tudo que veio na requisição é devolvido no objeto
        id:1
    })
})

app.get('/parOuImpar', (req, res) => {
    // Maneiras de pegar a requisição
    // req.body = trata como objeto
    // req.query = Usado com interrogação e var || /parOuImpar/?numero=2
    // req.params = /parOuImpar/:numero, interpretado diretamento pelo node || /parOuImpar/2
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
app.listen(8000, () => console.log('Executando na porta 8000...'))