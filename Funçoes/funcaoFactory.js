// Função factory é um padrão de projeto
// Funções factory sempre retornam um novo objeto
// Função factory é uma função que cria objetos

function criarProduto(nome, preco){
    return{
        /* nome: nome,
        preco: preco, // Também funciona
        desconto: 10 */
        nome,
        preco,
        desconto: 10
    }
}
    
const prato = criarProduto('Prato', 5.5)
const panela = criarProduto('Panela', 53)

console.log(prato)
console.log(panela)







