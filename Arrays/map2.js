const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornando array apenas com os preços

const valorTotal = carrinho.map(e => {
    return (JSON.parse(e)).preco //Transformando o JSON em objeto
})

console.log(valorTotal)

