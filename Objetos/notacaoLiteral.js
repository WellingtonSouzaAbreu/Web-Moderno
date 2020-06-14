const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // Pode ser alterada
const obj2 = {a, b, c} // Não pode ser alterada
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {
    funcao1: function(){
        // ...
    },
    funcao2(){
        // ...
    },
    funcao3: () => {},
}

console.log(obj4)