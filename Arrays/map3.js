
Array.prototype.map2 = function(callback){
    let newArray = []
    for(let i = 0; i<this.length; i++){
        newArray.push([i], i, this) // This refencia o proprio array, o original
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornando array apenas com os preços

const valorTotal = carrinho.map2(e => {
    return (JSON.parse(e)).preco //Transformando o JSON em objeto
})

console.log(valorTotal)