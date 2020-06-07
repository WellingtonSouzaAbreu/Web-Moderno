const valores = [7.7, 12, 2.3, 3.2]
console.log(valores[2])

console.log(valores.length) 

valores.push({id: 30}, false, null, 'teste')
console.log(valores)

valores.pop() //retira o último valor do array
console.log(valores)

delete valores[0] //Deleta o valor do índice referente
console.log(valores) 