function soma(a,b){
    let soma = 0
    for(let i in arguments){ // Arguments corresponde aos valores passados na chamada da função mas que não fora recebidos no escopo da função
        soma += arguments[i] //Arguments é um array interno que armazena todos os parâmetros de uma função
    }
    return soma
}

console.log(soma(5,5,5,5))
console.log(soma(' Oi', ' tudo', ' bem', '?')) // Somou o '0' pois foi feito concatenação

function somax(a,b){
    let soma = 0
    console.log(arguments[0], arguments[1])
    /* for(let i in arguments){ // Arguments corresponde aos valores passados na chamada da função mas que não fora recebidos no escopo da função
        soma += arguments[i] //Arguments é um array interno que armazena todos os parâmetros de uma função
    } */
    return soma
}

/* console.log(soma(5,5,5,5))
console.log(soma('Oi', ' tudo', ' bem', '?')) */ // Somou o '0' pois foi feito concatenação

somax(4,6) // Esses parâmetros ficam no array 'arguments' dentro da função












