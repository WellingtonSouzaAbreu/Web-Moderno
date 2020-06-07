//Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 // Se o valor passado for falso, assume-se o valor definido depois do pipe
    b = b || 1
    c = c || 1 //Extremamente usado

    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(3, 3))
console.log(soma1(3, 3, 3))
console.log(soma1(0, 0, 0))

// Estratégia 2, 3, e 4 para gerar valor padrão
function soma2(a, b, c) { // Com operador ternário
    a = a !== undefined ? a : 1 // Null e undefined são iguais, mas não estritamente
    b = 1/*indice*/ in arguments ? a : 1 // 'Dentro de arguments existe o valor '1', se sim pegue-o, se não pegue o valor 1
    c = isNaN(c) ? 1 : c // Mais seguro para cálculos
}

soma2()

// Estratégia do ES6 ES2015
function soma3(a = 1, b = 1, c = 1) { // Mais adequado para valores numéricos //Verifica Nan
    return a + b + c
}

soma3('1','2')










