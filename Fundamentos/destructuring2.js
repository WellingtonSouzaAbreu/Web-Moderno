const [a] = [10] //

const [n1, , n3,n4] = [1,2,3,4] // Atribui a um conjunto de variáveis os dados de um array
console.log(n1,n3,n4)// É possível saltar a desestruturação deixando o espaço entre as vírgula vazio

const[,[, nota]] = [[1,2,3], [4,5,6]] //Nada prático, difícil leitura
console.log(nota)

