function formatar(valor){
    return `R$ ${(valor.toFixed(2).replace('.', ','))}`
}

console.log(formatar(0.30000000000000004))