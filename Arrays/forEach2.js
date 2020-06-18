const aprovados = ['Agata', 'Aldo', 'Daniel']

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
                                                            // Pode-se suprimir quandos parametros desejar
aprovados.forEach2(function(nome/* nome */, indice/* indice */, array/* array completo */){ // Chama callback para cada elemento
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
}) 