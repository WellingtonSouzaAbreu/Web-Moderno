// Object.crete
const pai = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai) // Objeto criado tendo como pai o prototipo para pai
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


for (let key in filha2){ //metodo para saber o atributo pertencente ao objeto ou ao prototipo
    filha2.hasOwnProperty(key)/* Propriedade pertence a ela */ ? 
    console.log(key) : console.log('Por herança')
}



