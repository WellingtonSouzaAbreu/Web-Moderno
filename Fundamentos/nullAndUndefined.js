const a = {name:'teste'} // Variável 'a' recebe apenas o endereço que aponta para onde o objeto está na memória
console.log(a)

// Atribuição por referêcia 
const b = a //Atribui ao 'b' apenas o endereço de 'a', pois é isso que o 'a' armazena
console.log(b)

b.name = 'Opa' //Mudando o 'b', o 'a' também se modifica, pois apontam para o mesmo objeto/objetos
console.log(a)


let c = 3
let d = c //Passagem por valor não armazena endereço, e sim valor por se tratar de tipos primitivos
console.log(d)
d++

console.log(c)
console.log(d)



let x
console.log(typeof(x)) // Deixar o undefined para ser definido pelo sistema

let y = null // Null é ausencia de valor // O mais indicado
console.log(y)

const produto = {}
console.log(produto.preco) // Undefined, não está definido o a
console.log(produto)   //Objeto vazio

produto.preco = undefined
console.log(produto.preco)

delete produto.preco  //Deletar atributo de objeto
console.log(produto.preco)