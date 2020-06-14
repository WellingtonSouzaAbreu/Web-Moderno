//Colução dinâminca de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira' //Criação dinâminca de atributo
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 8999,
    proprietario:{
        nome: 'Raul',
        idade: 22,
        endereco: {
            logradouro: 'Rua abc',
            numero: 222
        }
    },
    condutores: [{ // Vetor de condutores
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 32
    }],

    calcularValorSeguro: function(){
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro.condutores)
delete carro.condutores
console.log(carro.condutores) // Condutores == undefined
// Não se pode acessar um atributo que não existe