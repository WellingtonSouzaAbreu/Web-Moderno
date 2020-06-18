

function jogo(tabela, lista, pontuacao){
    tabela[0]
    for(let i = 0; i <= tabela.lenght; i++){
        if(tabela[i] < pontuacao){
            lista.push(`Jogo ${i}`)
        }
    }
    console.log(tabela, lista)
}

let tabela = []
let lista = []

jogo(tabela, lista, 3)
jogo(tabela, lista, 4)



