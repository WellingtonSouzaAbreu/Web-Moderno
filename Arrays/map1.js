// Map tem um laço e serve pra fazer transformações no array
// Map tranforma um array em outro do mesmo tamanho, mas com modificações em seus dados

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) { // Retorno obrigatório, se não é undefined
    return e * 2 //Valores retornados vão para o array
})

console.log(nums, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // Interpolação de maps
console.log(resultado)





