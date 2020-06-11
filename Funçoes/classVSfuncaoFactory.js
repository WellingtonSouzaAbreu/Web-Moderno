// Class vs Factory

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome =>{ //Factory sem this não varia, é mais determinístico
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

p2 = criarPessoa('José')
p2.falar()