class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{ // extends atribui a mesma ideia de herança, protótipo
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // Super aponta para o constructor Avo
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva') // Acessa o construtor de Pai
    }
}

const filho = new Filho
console.log(filho)