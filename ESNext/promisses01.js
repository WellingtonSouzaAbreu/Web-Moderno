let a = 1
console.log(a)

// Promessas passam apenas 1 parametro
let p = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMin => console.log(letraMin))
