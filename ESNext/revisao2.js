//Arrow function es6
const soma = (a, b) => a + b
console.log(soma(1, 2))

//Arrow function (this) O this não varia. Nem com bind()
const lexico1 =  () => console.log(this === exports)
lexico1()

//Parametro Default
function log(text = 'Node'){
    console.log(text)
}
log()
log('Bababaruba!')

// Operador Rest
function total(...numeros){ // Usado quando se vai receber vários parametros esporádicos
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,23,4,5))



