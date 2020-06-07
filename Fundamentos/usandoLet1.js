// FUJIR DO ESCOPO GLOBAL
let numero = 1 //Let se limita ao escopo referente
{
    let numero = 2 // O let procura no escopo menor, somente utiliza o escopo maior se necessário
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

//Var abrange escopo de função e escopo global
 //Let abrange escopor de função, global e escopo de bloco
 