let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param) // O this do Arrow vai para o módulo do node do documento aberto

comparaComThisArrow(global)
comparaComThisArrow(module.exports) // Module export é o this do módulo em que a função arrow foi criada


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // False // A arrow function é mais forte que o bind




