function Aula(nome, videoID){ // Função construtora
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)


//SImulando o new
function novo(f, ...params/* Conjunto de parametros, concatenando em uma array */){
        const obj = {} // Cria novo objeto
        obj.__proto__ = f.prototype // Adiciona a função construtora como objeto pai
        f.apply(obj, params) // Concatena todos os parâmetros informados ao objeto recém criado
        return obj //Retorna o objeto
}

const aula3 = novo(Aula, 'Bem vindo',123) // Novo funciona como o new
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)



