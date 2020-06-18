// Reduce transforma o array em um único elemento, array, variável ou objeto
// Utiliza o acumulador
// Sempre o primeiro elemento é o acumulador e o segundo é o valor atual

// Utiliza valor anterior, avalor atual, indice e array completo

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedor', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//resultado recebe o valor contido no acumulador, reduce == reduzir
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){ // Acumulador armazena o valor retornado na operação anterior
    console.log(acumulador, atual)
    return acumulador + atual
}, 10/* Settar valor inicial do acumulador */)

console.log(resultado, )