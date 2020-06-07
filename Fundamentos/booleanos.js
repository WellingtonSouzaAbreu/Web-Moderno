let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! == Não / !! == Não não

console.log('Os verdadeiros....') //Tudo é verdadeiro, 
                                    //com excessão do 0, String vazia, null, NaN, Undefined


let nome = '' // String vazia
console.log(nome || 'Desconhecido') // Se o nome estiver vazio, imprime o 2º valor

