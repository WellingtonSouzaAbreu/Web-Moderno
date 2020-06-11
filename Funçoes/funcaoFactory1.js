// Função factory é um padrão de projeto

/* const prod1 = {
    nome: '...',
    preco: 22
}
const prod2 = {
    nome: '...', // Funções factory evitam isso
    preco: 22
} */

// Funções factory sempre retornam um novo objeto

function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())