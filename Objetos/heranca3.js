// Object.crete
const pai = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai) // Objeto criado tendo como pai o prototipo para pai
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: 'Bia', writable: false, enumerable: true}
)

console.log(filha2.nome)






