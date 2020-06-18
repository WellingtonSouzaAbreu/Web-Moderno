const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'] // Pode-se manipular o dado, mas não o número de indices

pilotos.pop() //Massa quebrou o carro! // Pop Remove o último item
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no fim da lista
console.log(pilotos)

pilotos.shift() // Remove  o primeiro item do array
console.log(pilotos)

pilotos.unshift('Zezinho') // Adiciona no começo do array
console.log(pilotos)

// Adicionar com Splice
pilotos.splice(2,0, 'Botas', 'Massa') // Adiciona antes do 2
console.log(pilotos)

// Remover com Splice
pilotos.splice(3, 1) // Massa quebrou o carro novamente //Remove um valor a partir do índice 3
console.log(pilotos)

// Adicionar e remover com splice
pilotos.splice(0,1, 'Cleide') // remove o valor do indice 1 e adiciona 'Cleide' no lugar
console.log(pilotos)

// Gerando um novo array com Slice, sem manipular o array original
const algunsPilotos1 = pilotos.slice(2) // Armazenará todos a partir do dois, incluindo o indice 2
console.log(algunsPilotos1) // Slice = pedaço

const algunsPilotos2 = pilotos.slice(1, 4) // Gera novo array incluindo o primeiro(1), mas não o último(4)
console.log(algunsPilotos2)



