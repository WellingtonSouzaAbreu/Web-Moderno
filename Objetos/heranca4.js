function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ == obj2.__proto__) // Possuem o mesmo protótipo
console.log(MeuObjeto.prototype === obj1.__proto__) //Objetos instanciados de uma função recebem o mesmo protótipo

MeuObjeto.prototype.nome = 'Anônimo' // Todo objeto instanciado que não for definido receberá anônimo
MeuObjeto.prototype.falar = function(){ console.log(`Meu nome é: ${this.nome}`)}

obj2.nome = 'Ana'
obj1.falar()
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Atribuir manualmente o prototipo de MeuObjeto ao objeto instânciado
obj3.nome = ' Obj3'
obj3.falar()

//Prototype -> Propriedade que pega a posicao do objeto na herança
//__proto__ -> Propriedade que indica o protótipo superior do objeto

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log((MeuObjeto).__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)





