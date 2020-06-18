// Percorrendo array com um propósito
//No filter acontece a filtragem, geralmente retorna um array menor ou de mesmo tamanho

const produto = [{nome: 'Notebook', preco: 2000, fragil: true},
    {nome: 'iPad pro', preco: 4005, fragil: true},
    {nome: 'Copo', preco: 4.99, fragil: true},
    {nome: 'Copo de Plastico', preco: 4.99, fragil: false}
]

console.log(produto.filter(function(p) {
    return                   // Se o resultado for true, permanece. Se for false, é removido
}))

const fragil = (produto) => {
    return produto.fragil == true
}
const caro = (produto)  => produto.preco >= 500

console.log(produto.filter(fragil).filter(caro))



