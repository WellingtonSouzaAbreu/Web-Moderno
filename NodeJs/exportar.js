console.log(module.exports === this)
console.log(module.exports === exports)

// This e exports apenas apontam para module.exports, ao sobrescreverem o module.exports não sofrem alteração
this.a = 1
exports.b = 2
module.exports.c = 3 //Os três referenciam a mesma ´posicao na memoria, porém são independentes

exports = null
console.log(module.exports)

exports = { // A exportação de objetos deve ser feita com module.exports
    nome: 'tete'
}

console.log(module.exports)


