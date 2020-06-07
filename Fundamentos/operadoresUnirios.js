// Usar incrmentação dentro de uma comparação é uma má prática, difícil leitura
// Fazer o código o mais simples possível
let num1 = 1
let num2 = 2

--num1 // Maior nível de prescedência
num1++ // Menos nível de prescedência
console.log(num1)

console.log(++num1 === num2--) // Decremento é realizado depois da comparação, evitar essa prática