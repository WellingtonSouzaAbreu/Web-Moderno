// Objeto é a instância de uma função
console.log(typeof Object) // Função
console.log(typeof new Object) // Objeto

const cliente = function(){} // Função
console.log(typeof cliente) // Objeto
console.log(typeof new cliente)

class Produto{} //ES 2015 (ES6)
console.log(typeof Produto) // Função
console.log(typeof new Produto) // Objeto
