// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
     console.log(a + b)
}

imprimirSoma(10, 5)

// Armazenando função usando a função arrow
const imprimirSubtracao = (a, b) =>{
    return a - b
}

console.log(imprimirSubtracao(10, 5))


// Apenas uma sentença de código, sem chaves
const imprimirMultiplicacao = (a, b) => a * b  // Retorno implícito

console.log(imprimirMultiplicacao(10,5))