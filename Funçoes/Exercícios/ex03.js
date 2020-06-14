const expoente = (base, expo) => {
    let result = 1
    for(let i = 1; i <= expo; i++){
        result *= base 
    }
    return result
}

console.log(expoente(4,3))