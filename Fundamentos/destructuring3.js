//Destructing em funções

function rand({min = 0, max = 1000}){ //Função com desestructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max:50, min:20}
console.log(rand(obj)) //Envia o objeto a funçaõ e ela já desestrutura

console.log(randsss({max:50, min:20})) // 
console.log(rand({min:20})) // Assume valores padrões
console.log(rand({})) // Assume valores padrões
