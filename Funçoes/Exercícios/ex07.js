function calcularBhaskara(a, b, c){
    let x1 = -b + (Math.sqrt(delta(a,b,c)) / (2 * a))
    let x2 = -b - (Math.sqrt(delta(a,b,c)) - (4 * a * c)) / (2 * a) 

    if(delta(a,b,c) < 0){
        console.log('Não é possível calcular, delta negativo')
    }else{
        console.log(`x1: ${x1}`)
        console.log(`x2: ${x2}`)
    }
}

function delta(a, b, c){
    let del = Math.pow(b,2) - (4 * a * c)
        return del
    
}

calcularBhaskara(2,3,4)