// O this não varia quando se é usado arrow function
// Arrow function representa o escopo na qual foi definida

const pessoa = {
    saudacao: 'Bom dia',
    falar(){ // Maneira enxuta de designar uma função sem chave/valor
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // O this assumiu o contexto no qual a função foi chamada

const falar2 = pessoa.falar.bind(pessoa) // Com o 'bind' o this sempre será pessoa, independente de onde for chamado
falar2()
