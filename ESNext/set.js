//Estrutura não indexada, um conjunto que não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Flamengo').add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // Diferencia o case
console.log(times.has('Vasco')) // Diferencia o case
times.delete('Flamengo')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia']
const nomeSet = new Set(nomes) // Converte o array dentro do set
console.log(nomeSet)