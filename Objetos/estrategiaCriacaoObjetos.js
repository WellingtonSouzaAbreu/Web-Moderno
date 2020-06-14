// Usando a notação literal != JSON
const obj1 = {}
    console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

// FUnções construtoras
function Produto(nome, preco){
    this.nome = nome, //This deixa o atributo público
    preco = preco
    this.getPreco = () => preco
    this.setPreco = (newPrice) => {
        preco = newPrice
    }
}
const leite = new Produto('leite', 100)
console.log(leite)
leite.preco = 122 // Preo está sem o this, ou seja, não está publico
leite.setPreco(1022)
console.log(leite.getPreco())


// Função Factory
function criarFuncionario(nome, salario){
    return{
        nome,
        salario
    }
}
const f1 = criarFuncionario('José', 3000)
console.log(f1)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') // Json converte texto em objetos
console.log(fromJSON.info)


