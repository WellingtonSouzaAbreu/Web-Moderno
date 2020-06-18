// Formas de percorer o array
// forEach percorre, mas sem ser muito objetivo

const aprovados = ['Agata', 'Aldo', 'Daniel']
                                                            // Pode-se suprimir quandos parametros desejar
aprovados.forEach(function(nome/* nome */, indice/* indice */, array/* array completo */){ // Chama callback para cada elemento
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
}) 

aprovados.forEach( nome => console.log(nome)) //Resgata apenas o nome, pois o indice não foi indicado

const exibirAprovados = (aprovado) => console.log(aprovado)
aprovados.forEach(exibirAprovados)