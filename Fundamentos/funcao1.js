// Função sem retorno
function imprimirSoma(a, b = 40){ /* Define valor padrão */
    console.log(a + b)
}

imprimirSoma(1,2) //Chamada correta
imprimirSoma(1) // O valor não definido recebe undefined
imprimirSoma(1,2,3,4) //Comanda somente os 2 primeiros
