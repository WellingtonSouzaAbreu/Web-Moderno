// Function declaration
// Pode-se chamar antes da declaração
function soma(x,y){
    return x + y
}

//Function expression
//Só pode ser chamada depois da declaração, a const só recebe o valor depois de declarada
const sub = function (x, y){
    return x - y
}

//Named function expression // Junção das duas primeiras
//Só pode ser chamada depois da declaração
const mult = function multi(x, y){
    return x * y
}


