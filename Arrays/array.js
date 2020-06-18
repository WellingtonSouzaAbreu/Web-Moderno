// Array é um objeto especial que usa índices para organizar ao invés de chaves
// Array é uma estrutura heterogênea
// É aconcelhável usar dados homogênios, manual de boas práticas

console.log(typeof(new Array))
console.log(typeof([0,1,2,3]))

let aprovados = new Array('Bia', 'Carlo', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //Destrói e aprova uma nova instância
console.log(aprovados[4]) // Undefined, não existe posição 4

aprovados[2] = 'Pepe'
console.log(aprovados)

aprovados.push('Zezé') // Add
console.log(aprovados.length) // Tamanho do array

aprovados[9] = 'Rafael' // Todos as posições entre 4 e 9 recebem undefined
console.log(aprovados)
console.log(aprovados[8] === undefined)

aprovados.sort() // Ordenando os itens faz com que o undefined vá para o fim do array
console.log(aprovados)

delete aprovados[0]
console.log(aprovados)

aprovados.sort() // Ordenando os itens faz com que o undefined vá para o fim do array
console.log(aprovados)

//Splice é utilizado para adicionar, remover e adicionar e remover ao mesmo tempo
aprovados.splice(1, 1) // indice, quantidade a ser excluido
console.log(aprovados)

aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // Exclui e adiciona elementos // Setar quantidade a ser excluida como 0 para não excuir nenhum
console.log(aprovados)


