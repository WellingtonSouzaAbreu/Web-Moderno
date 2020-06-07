
function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min] //Troca inteligente de valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const array = [2,8]

console.log(rand([1,4])) // Passando valores de um array para a função
console.log(rand(array)) // Passando array para a função
/* console.log(rand()) */ // Erro: Não possui nenhum elemento para ser desestruturado

