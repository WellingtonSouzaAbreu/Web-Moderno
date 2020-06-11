// Caracteristicas:
// Sintaxe reduzida
// This atrelado ao contexto em que foi escrito

let dobro = function (a){ //FUnção comum
    return 2 * a
}

dobro = (a) =>{ // tira o function
    return 2 * a
}

dobro = a => 2 * a // Tira o function e return

console.log(dobro(1))


dobro = () =>{ // Funções sem parametro podem ter os '()' substituidos pelo '_'
    return 2 * a
}

