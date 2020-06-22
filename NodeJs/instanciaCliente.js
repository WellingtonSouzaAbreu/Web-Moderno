// A função factory permite multi-intâncias

const contadorA = require('./instanciaUnica.js')
const contadorB = require('./instanciaUnica') // Recebe objeto

const contadorC = require('./instanciaNova')() // Recebe função factory // () = invocara função factory
const contadorD = require('./instanciaNova')() // Recebe função factory // () = invocara função factory

// valor iniciar era 1
contadorA.inc() //A e B trabalham em cache unico
contadorA.inc() 
console.log(contadorB.valor) //

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // Incrementou apenas C, pois o D está em outro cache
