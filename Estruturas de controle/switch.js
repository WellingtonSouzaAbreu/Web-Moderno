// Switch não permite comprarações maiores menores, apenas valores exatos
// Não esquecer do break

let a = 8
const imprimir = (nota) =>{
    switch(Math.floor(nota)){
        case 10:
            console.log('Quadro de Honra 10')
            break
        case 9:
            console.log('Quadro de Honra 09')
            break
        case a:
            console.log('Quadro de Honra 08')
            break
        default: //Break no default é opcional
            console.log('Valor incoreto...') 
    }
}


imprimir(8)