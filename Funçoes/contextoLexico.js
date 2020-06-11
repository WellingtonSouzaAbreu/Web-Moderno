const valor = 'Global'

function minhaFuncao(){ // contexto léxico - global - contexto no qual foi escrita e não de onde foi chamada ou executada
    console.log(valor) // Função foi declarado em global. O valor que ela não encontrar em 'f1', procurará em global e não em outra função
}

function minhaFuncao(){
    const valor = 'Local'
    f1()
}

exec()