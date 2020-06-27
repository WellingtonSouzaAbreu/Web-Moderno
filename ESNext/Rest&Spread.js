/// Separar = Rest /Juntar = Spread

// Usar rest com parâmetro de função

//Usar spread com objteto

const funcionario = {nome: 'Maria', salario: 1234.2}
const clone = {ativo: true, ...funcionario} // Pegar todos os atributos de funcionario e adicionar a 'clone'
console.log(clone)

const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] //Espalha(Spread) todo o grupoA dentro de 'grupoFinal'

console.log(grupoFinal)


