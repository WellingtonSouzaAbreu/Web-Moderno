// console.log(global)

global.MinhaApp = Object.freeze({ //Não permite a manipulação do objeto global
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'José'
})