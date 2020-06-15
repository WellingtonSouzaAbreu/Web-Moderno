// Js é flexível, mas as vezes deve-se limitar ou evitar algumas modificações

//Object.preventExtensions // Evita estender a quantidade de atributos, podendo apenas removê-los
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})


// Object.seal // Não permite adicioar nem remover atributos, somente manipular os valores
const pessoa = {nome: 'Juliana', idada: 23}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

// Object.freeze = selado + valores constantes // Não permite qualquer alteração no objeto, é constante






