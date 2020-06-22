// Padrão Chain Of Responsibility - Cadeia de responsabilidade

// Consiste em deixar o acoplamento entre funções
// Usa next, ao inves de chamar diretamente a proxima função

//Função middleware
const passo1 = (contexto, next) => {// O contexto é algo que é passado entre os middleware
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) =>{
    contexto.valo2 = 'mid2'
    next()
}

const passo3 = (contexto) =>{ // O terceiro passo não tem next
    contexto.valor3 = 'mid3'
}

const exec = (contexto, ...middlewares) =>{ // ...rest //Junta as várias funções e junta num array
    const execPasso = indice =>{ //Executa passo por indice
        middlewares && indice < middlewares.length && // COmparação, outra maneira de usar o if para uma linha
        middlewares[indice](contexto, () => execPasso(indice + 1)) // Middlewares[indice] retorna uma função, onde-se se recebe o parametro do contexto e do próximo passo
    }
    execPasso(0)
}

const contexto = {}

exec(contexto, passo1, passo2, passo3) // Pode-se mudar a sequencia
console.log(contexto)





