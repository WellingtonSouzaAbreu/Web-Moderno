// === Estritamente igual verifica também a tipagem

console.log('01)', '1' == 1) //Comparações direto no console
console.log('02)', '1' === 1) // Não é estritamente igual
console.log('03)', '3' != 3) 
console.log('04)', '3' !== 3) 

console.log('05)', '3' <= 4) // Não existe estritamente igual em JS


const d1 = new Date(0) // Zero é referência no JS, 01 janeiro de 1970
const d2 = new Date(0)

console.log('06)', d1 === d2) //Em datas se realiza a comparação do endereço de memória
console.log('07)', d1 == d2) 
console.log('08)', d1.getTime() === d1.getTime())

console.log('Teste de data: ', d1.getTime())//Valor em milisegundos

console.log('09)', undefined == null)
console.log('10)', undefined === null)





