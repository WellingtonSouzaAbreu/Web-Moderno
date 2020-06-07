//JS é uma linguagem dinâmica, ou seja, de tipagem fraca.
//Tipagem fraca torna a linguagem mais flexível, mas torna árdua a detectação de erros.
//Linguagens fortemente tipada são linguagens estáticas.     

let qualquer = 'Legal!'

console.log(qualquer)

qualquer = 2
console.log(typeof(qualquer))

qualquer = 2.2
console.log(typeof(qualquer))

//Evite nomes genéricos e siglas
//Ex:
let valor = ''
let numero = 1
let pqp = false //Produto Químico Perigoso... kkk