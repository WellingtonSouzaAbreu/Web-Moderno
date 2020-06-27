// Permite usar funções como chave em objetos

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log((tecnologias))

console.log(tecnologias.react) //Erro
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function (){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// Map = A chave nao aceita repetição
console.log(chavesVariadas.has(123)) // Possui a chave 123
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))




