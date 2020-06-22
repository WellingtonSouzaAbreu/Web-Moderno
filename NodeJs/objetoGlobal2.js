require('./global') // O require do global é feito sem atribuição
// Basta fazer isso uma única vez

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita'
console.log(MinhaApp.nome)