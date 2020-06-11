const soma = function(x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){ // Tem espaço depois de 'function em funções anônimas
    console.log(operacao(a,b)) 
}

imprimirResultado(3,4)
imprimirResultado(3,5,soma)
imprimirResultado(3,5, function (x,y){return x-y})
imprimirResultado(3,5, (x,y) => x * y)






