// C like são derivados do C
// RunTime é o contexo de execução: Browser ou Node, onde está sendo executado

// No console, variáveis var é levado direto ao objeto global window, criados com let e const não
// Evitar tocar o contexto global, pois podem surgir alterações

// Funções nomeadas vão para o objeto global
// Funções arrow não vão para window, ficar em um ambiente no browser

// Uma boa parte da dificuldade em aprender JS é a falta de conhecimento sobre RunTime
let a = 3 //Fica no local
global.b = 123
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.a)
console.log(global.b)
console.log(this.b) // this === module.exports

console.log(this)

abc =  3 // Criando uma variável maluca sem definição var, let ou const
            //Vai direto para global, inutilizável
console.log(global.abc)

this.g = 5
console.log(this) // O this cria um novo módulo diferente do global




