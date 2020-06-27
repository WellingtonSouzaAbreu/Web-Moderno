// ES8: Object.values(Valores) /Object.entrie(Chave/valor)

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    // nome: nome,
    nome,
    // ola: function(){}
    ola() { }
}

// Class
class Animal { }
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())



