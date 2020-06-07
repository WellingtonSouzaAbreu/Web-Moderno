console.log(Math.ceil(6.1)) // Ceil para cima, flow para baixo

const obj1 = {
    cor: 'rosa'
}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola 2'
console.log(obj1, '1')

function Obj(nome){ 
    this.nome = nome
}

const obj2 = new Obj('Giz') // Criando objeto a partir de função
const obj3 = new Obj('Cadeira')
console.log(obj2, '2')
console.log(obj3, '3')

