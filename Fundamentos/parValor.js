//Par nome/valor
//Existem vários contextos
const saudacao = 'Opa' //Contexto léxico(palavra) 1 = Local físico no código

function exec() {
    const saudacao = 'falaaaa' //Cotexto léxico 2 // É procurado primeiraente no contexto léxico funçaõ, se encontrar retorna, se não buscará em um contexto léxico mais abrangente
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,  //COntexto do objeto cliente
    endereço: {
        logradouro: 'Rua muito legal', //COntexto do objeto endereço
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

