// Closure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexlo léxico em ação!

const x = 'Global'

function  fora(){
    const x = 'local'
    function dentro(){ // Função dentro foi definida dentro de 'fora()' por isso carrega consigo o valor 'local'
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())






