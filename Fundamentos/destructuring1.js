// Destructing é tirar algo da estrutura //Es2015 ES¨

const pessoa = {
    nome: 'Ana',
    idade: 3,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //Desestruturar objetos
console.log(nome,idade)

const{nome:n, idade:i} = pessoa // Renomeia as váriáveis extraídas do objeto
console.log(n,i)

const{sobrenome = 'Silva'} = pessoa //Atribui valor padrão que assume se der undefined
console.log(sobrenome)

const{endereco} = pessoa // Extrai tudo dentro de endereço
console.log(endereco)

const{endereco:{logradouro, numero, bairro = null}} = pessoa //Acessa objetos dentro de objetos
console.log(logradouro, numero, bairro)

/* const{conta: {num, agencia}} = pessoa */ //Erro, o objeto conta não existe ou é undefined ou null, não se pode realizar nenhuma operação
