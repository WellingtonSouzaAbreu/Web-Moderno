const escola = `coder`

console.log(escola.charAt(4)) //Retorna a letra na posição 4
console.log(escola.charCodeAt(4)) //Retorna código ASC da letra na posição 4
console.log(escola.indexOf('r')) //Retorna o índice da letra 'R'

console.log(escola.substring(1)) //Retorna string a partir da posição 1
console.log(escola.substring(1,3)) //Retorna string da posição 1 a 3, sem incluir o 3

console.log('Escola '.concat(escola).concat('!')) // Concatena  
console.log(escola.replace('e', '3')) // Sustitui o e pelo 3

console.log('Ana, Maria, Pedro'.split(',')) // Transforma String em array, usando a ',' como digito separador


let subS  = null
for (let i = 0; i < escola.length; i++){
    if(i == 0)
        subS = ((escola).charAt(i))
    else{
        subS += ((escola).charAt(i))
    }
}

console.log(`->>` + subS.charAt(5)) //A String resultante tem a última posição vazia