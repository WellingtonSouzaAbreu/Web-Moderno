// Formas de chamar funções - call e apply

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4566,
    desc: 0.1,
    getPreco // Associação da função já criada é automático
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())// Retorna NaN pois não foi passado parâmetro
console.log(produto.getPreco())

const carro = {
    preco: 49999,
    desc: 0.5
}

//A diferença está na passagem de parâmetro
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // Passa contexto(carro), e parâmetros()
console.log(getPreco.apply(carro, [0.17, '$'])) // Parâmetros passados como array
console.log(getPreco.apply(global, [0.17, '$']))

