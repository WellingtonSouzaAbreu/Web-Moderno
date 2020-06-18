function tratarErroELancar(erro){ // Sugere-se enviar o rach ou mensagens genéricas ao usuário para não confundi-lo
    throw new Error('...') // Substitui a mensagem de erro por um text pré definido
    //throw 10 // Pode-se lanca qualquer valor
    /* throw{
        nome: 'erro.name',
        msg: erro.message
    } */
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!') // Erro: o UpperCase não funciona em variável undefined
    }catch(e){
        //console.log(e) // Imprime várias informações sobre o erro
        tratarErroELancar(e)
    }finally{ // Executa independente se der erro ou não
        console.log('G')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)