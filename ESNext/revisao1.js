// let e const

// let tem escopo de bloco
// Var não tem scopo de bloco
{
    var a = 2
    let b = 3
}
console.log(a)
// console.log(b) // O b está restrito ao bloco

// Template String
const produto = 'ipad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ... tras] = "cod3er" //Desestruturando string
console.log(l, e, tras) 

const {idade, nome} = {nome: 'Ana', idade: 12}
console.log( nome, idade)



