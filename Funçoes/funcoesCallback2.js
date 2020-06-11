// Agrupar todas as notas menores que 7 me um array

const notas = [4,5,6,7,8,9,10]

// Sem callback
let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
// Filter verifica cada item do array e dispara um evento(função)
notasBaixas = notas.filter(function(nota/*próprio elemento*/){ //Se true, vai para o array // Return com comparação retorna true ou false
    return nota < 7
}) //Filter gera um novo array

console.log(notasBaixas)









