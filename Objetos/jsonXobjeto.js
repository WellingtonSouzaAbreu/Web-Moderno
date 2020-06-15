// Java Script Object Notation - JSON
// JSON trabalha com dados, não funções
// JSON oferece a interconexão entre tecnologias pois é interpretado e convertido com facilidade por ser textual

const obj = {a: 1, b: 2,c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj)) //Converte objeto para o formato JSON, função foi excluida, JSON trabalha apenas com dados

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //JSON exige variáveis e strings entre aspas duplas 
console.log(JSON.parse('{"a": 2, "b": "Texto", "c": true, "d": {}}'))

//Atribuindo JSON a um objeto
let obj2 = JSON.parse('{"a": 2, "b": "Texto", "c": true, "d": {}}')
console.log(obj2)







