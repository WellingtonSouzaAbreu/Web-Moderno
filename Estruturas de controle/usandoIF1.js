
function boaNoticia(nota){
    if(nota <= 7){
        console.log(`APROVADO COM ${nota}`)
    }
}
boaNoticia(8)

function seForVerdadeEuFalo(valor){
    if(valor){ // Com um valor a comparação é sempre com true
        console.log(`É verdade ... ${valor}`)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo('2')
seForVerdadeEuFalo({})


// Else if é usado para ir ao else e ter condição para entrar







