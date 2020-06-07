// Parâmetros e retornos de função são opcionais

function area(largura, altura){ // Função sem praticidade, utilidade
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}`)
    }else{
        return area
    }
}

console.log(area(2,3))
console.log(area(2))
console.log(area())
console.log(area(2,3,4,5)) // Utiliza somento os dois primeiros
console.log(area(5,5)) // Valor acima do permitido
// Area é undefined pois não foi retornado nada







