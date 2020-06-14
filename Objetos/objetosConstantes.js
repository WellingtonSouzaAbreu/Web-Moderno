// Pessoa -> 123(endereço de memória) -> {...}
const pessoa = {nome: 'João'} // Const armazena o endereço de memório do objeto, esse não pode ser mudado
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} // Erro, o endereço é contante

Object.freeze(pessoa) //Congela objeto // Torna o endereço e o objeto constante
pessoa.nome = 'Maria' // Não gera erro, mas a atribuição/alteração é ignorada
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Guilherme'}) // Objeto não poderá ser alterado





