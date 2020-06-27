// For in opera em cima de indice
//For of opera em cima de valores

for(let letra of 'Cod3r'){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse'] 

for (let i in assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma){
    console.log(assunto)
}

// É possível percorrer também o Map

const obj = ['a','b','c']

for (let valor of obj.values()){
    console.log(valor, `Valor`)
}

for (let chave of obj.keys()){
    console.log(chave, `Chave`)
}

for (let [chave, valor] of obj.entries()){
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c']) // Percorendo set
for (let letra of s){
    console.log(letra)
}

