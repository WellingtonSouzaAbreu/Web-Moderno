
class Calculator{
    constructor(valor1 = 0, valor2 = 0){
        this.valor1 = valor1
        this.valor2 = valor2
    }

    somar(valor1, valor2){
        console.log(valor1 + valor2) 
    }
    subtrair(valor1, valor2){
        console.log(valor1- valor2) 
    }
    multiplicar(valor1, valor2){
        console.log(valor1 * valor2) 
    }
    dividir(valor1, valor2){
        console.log(valor1 / valor2) 
    }
}

let calculadora = new Calculator()

calculadora.somar(10,5)
calculadora.subtrair(10,5)
calculadora.multiplicar(10,5)
calculadora.dividir(10, 5)








