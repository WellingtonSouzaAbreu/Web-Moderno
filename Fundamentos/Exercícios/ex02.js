function tipoTriangulo(l1, l2, l3){
    if(l1 != 0 && l2 != 0 && l3 != 0){
        if(l1 == l2 && l2 == l3){
            console.log('Triângulo Equilátero')
        }else{
            if(l1 == l2 && l2 != l3 || l1 == l3 && l3 != l2 || l2 == l3 && l2 != l1){
                console.log('Triângulo isóceles')
            }else{
                console.log('Triângulo escaleno')
            }
        }
    }else{
        console.log('Os dados informados não corespondem a um triângulo!')
    }
}

/* const triangulo = {
    l1: 2,
    l2: 2,
    l3: 2
} */

tipoTriangulo(2,2,2)
tipoTriangulo(1,2,2)
tipoTriangulo(1,2,3)
tipoTriangulo(0,2,2)