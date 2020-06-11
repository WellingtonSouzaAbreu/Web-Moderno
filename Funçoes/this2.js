function Pessoa(){
    this.idade = 0
    const self = this // Travar o this numa variável para não alterar
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 1000) // O bind(this) referencia 'Pessoa'
}

new Pessoa
