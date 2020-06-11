/* class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
} */

const criarPessoa = (nome) =>{ //Factory  
    return{
        falar: () =>  console.log(`Meu nome é ${nome}`)
    }
}

function criarPessoaContruindo(nome){ // Função construtora
    this.nome = nome,
    this.falar = () => {console.log(`Meu nome é ${nome}`)}
}

const p1 = criarPessoa(`Maria`)
p1.falar()

const p2 = new criarPessoaContruindo('Josefina') //Função costrutora
p2.falar()
