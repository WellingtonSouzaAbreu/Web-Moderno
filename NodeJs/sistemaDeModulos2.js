

/* This e apenas exports não podem receber um objeto */
module.exports = { //Esse objeto estára disponível para fora do módulo
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}