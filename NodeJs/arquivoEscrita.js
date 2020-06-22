const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 2349.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoEscrito.json', JSON.stringify(produto), err =>{ // callback retorna apenas erro
    console.log(err || 'Arquivo Salvo!') // Se err for null, então é falso, executasse o outro
}) //JSON.stringify(produto) // Transforma produto para o formato JSON 