//Cadeia de protoípos (prototype chain)

Object.prototype.attr0 = '0' // Desuso, péssima prática, manipulaçao complicada, não faça isso em casa
const avo = {attr1: 'A'} // __proto__ referencia o objeto pai
const pai = {__proto__: avo, attr2: 'B', attr3: '3'} 
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0) // achou no 'objeto maior', acima do avô
console.log(filho.attr1) // Subiu a arvore genealógica e encontrou o valor de 'A' no avo
console.log(filho.attr3) // Busca a primeira variavel que encontrar e não procura mais

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // Super referencia o protótipo
    }
}

Object.setPrototypeOf(ferrari, carro)//(objetoFilho,objetoPai) // Atribuir o objeto pai ao filho sem usar o __proto__
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status()) //Executa o status do volvo e o status do pai 'carro'

ferrari.acelerar(300)
console.log(ferrari.status()) // Executa somente o status de carro


