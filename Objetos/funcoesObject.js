const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa)) // Retorna um array com o nome dos atributos
console.log(Object.values(pessoa)) // Retorna um array com o valor dos atributos
console.log(Object.entries(pessoa)) // Retorna arrays contendo par chave/valor

Object.entries(pessoa).forEach(e => {
    console.log(e) //Cada elemento do array entries
})
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) //Cada elemento do array entries
})

Object.defineProperty(pessoa, 'dataNascimento', { //Define propriedade configurável
    enumerable: true,
    writable: false, // Bloqueia sobrescrição da variável
    value: '01/01/2019'
})

pessoa.dataNascimento = 'não nasceu'
console.log(pessoa.dataNascimento)


// Object.assign (ES 2015)
const destino = { a: 1 }
const ob2 = { b: 2 }
const ob3 = { c: 2 }
const obj = Object.assign(destino, ob2, ob3) // Agrupa todos os atributos dos objetos informados no primeiro objeto informado(destino)
console.log(obj)











