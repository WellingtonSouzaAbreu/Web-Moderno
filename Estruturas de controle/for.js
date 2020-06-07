// For in percore qualquer elemento, seja de array ou objeto
let notas = [1,2,3,4,5,6,7]
for(let i in notas){ //Não muito usado em array, pois existem palavras reservadas específicas para array, mais interresantes
    if(notas[i] % 2 == 0){
        console.log('Par')
    }else{
        console.log('Impar')
    }
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 65
}

for(let atributo/* ou i */ in pessoa){ // Mais usado para objetos
    console.log(`${atributo} = ${pessoa[atributo]}`)
}




