const sequencia = {
    _valor: 1, // Convenão // Indica que ela deve ser alterada somente privado, 
    get valor() { return this._valor++ }, // Permite contorle de acesso
    set valor(valor) {
        console.log('Foi acessado o set')
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor) // Identifica automaticamente o get
sequencia.valor = 1000 // Identifica automaticamenteo o set
console.log(sequencia.valor)


