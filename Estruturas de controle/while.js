// As estrutura de controle tem de ser administradas para usar no melhor projeto

function aleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){ // While pode ser executado nenhuma ou várias vezes
    opcao = aleatorio(-1, 10)
    console.log(`Opcao escolhida: ${opcao}`)
}
console.log(`Terminou 1 `)

console.log('-----------------------------------')

// Do While garante que pelo menos uma vez será executado o laço
do{ 
    opcao = aleatorio(-1, 10)
    console.log(`Opcao escolhida: ${opcao}`)
}while(opcao != -1) // A condiçao no fim só é executada depois de ler o bloco

console.log(`Terminou 2`)


