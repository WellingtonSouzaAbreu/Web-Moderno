
class Calculator{
    constructor(valor1 = 0, valor2 = 0){
        this.valor1 = valor1
        this.valor2 = valor2
    }

    somar(){
        console.log(this.valor1 + this.valor2) 
    }
    subtrair(){
        console.log(this.valor1 - this.valor2) 
    }
    multiplicar(){
        console.log(this.valor1 * this.valor2) 
    }
    dividir(){
        console.log(this.valor1 / this.valor2) 
    }
}

let calculo = new Calculator(10,5)

calculo.somar()
calculo.subtrair()
calculo.multiplicar()
calculo.dividir()










