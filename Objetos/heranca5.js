console.log(typeof String) // Por todos serem função
console.log(typeof Array) // Pode-se atribuir funcionalidade a eles
console.log(typeof Object) // COmo o método reverse que existe apenas para array

String.prototype.reverse = function(){ // Método não existe, foi criado
    return this.split('').reverse().join('') // Separa cada letra em uma posicao do array(split), inverte o array(reverse), junta tudo de novo(join)
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function (){
    return this[0]
}
console.log([1,2,3,4].first())

String.prototype.toString = function(){ // Pode-se editar um comportamento que já existe, não aconcelhável, dificil implementação, requer muito cuidado
    return 'Lascou tudo'
}

let str = String.toString()
console.log(str)


