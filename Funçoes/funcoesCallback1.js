const fabricantes = ["Mercedes", "Audi", 'BMW']

// Função Callback - função que chama outra função

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach passa o nome e o indice de cada elemento
            // forEach passa nome e indice para a função imprimir







