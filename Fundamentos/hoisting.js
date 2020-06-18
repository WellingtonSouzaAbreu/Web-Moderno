// Hoisting - içamento, jogar para cima
// Iççamento também ocorre dentro de funções
// Não trás benefício algum
console.log('a = ', a)
var a = 2   //Var a foi declarada antes de tudo, porém não foi atribuido valor
console.log('a = ', a)

//Comentar o código de cima para funcionar
//É o mesmo que:
/* var a
console.log('a = ', a)
a = 2   //Var a foi declarada antes de tudo, porém não foi atribuido valor
console.log('a = ', a) */


console.log('b = ', b)
var a = 2   //Let não efetiva hoisting
console.log('b = ', b)