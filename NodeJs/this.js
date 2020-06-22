console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports) // This e exports são objetos que apontam para module.exports


function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // O this referencia a função e não o global7
    console.log(this === global) //True // This dentro de uma fun
// This dentro da função aponta para o global
// This fora da função aponta para o module exports

    this.perigo = '...' //Afixado no escopo global
}

this.perigo = '...' // Exportando com module exports

logThis()

