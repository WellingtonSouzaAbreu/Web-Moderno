// JS é uma linguagem multiparadigma(Procedural, POO, Funcional)
// JSON é uma notação de objeto textual, feito para conectar sistemas

const prod1 = {} // Criação de objetos

prod1.nome = 'Celular Ultra Mega' // Criando objeto dinamicamente
prod1['Desconto Legal'] = 0.40 //Evitar atributo com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    descricao: { // Pode-se colocar objetos em objetos //Ao adicionar atributos esse atributo se torna um objeto
        cor: 'Amarela', 
        tamanho: 'G'
    }
}

console.log(typeof(prod2.preco))

console.log(prod2)