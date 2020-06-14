// Possibilita o reuso do código, evita crl + c e crl + v
// Priorizar composicao do que herana
// Herança baseada em prototype - procura nos protótipos pais, avo... Cadeia de protótipos

const ferrari = {
    modelo: 'F40',
    velMax: 333
}
const volvo = {
    modelo: 'V40',
    velMax: 180
}

//Apontando para o prototipo pai --- Prototype é apenas um atributo de função e não de objeto
console.log(ferrari.__proto__) // Comando permite acessar o objeto pai(prototipo)
console.log(ferrari.__proto__ === Object.prototype) // Object.prototype representa o mais alto nível na cadeia, depois dele não há mais nada
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)





