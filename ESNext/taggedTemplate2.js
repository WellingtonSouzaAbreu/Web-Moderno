
function real(partes, ...valores){  // Partes corresponde a string fora das variáveis
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` // isNaN(verifica se é numero)
        resultado.push(partes[indice], valor)
    })
    return resultado.join('') // Junta o array em uma string
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)






