// OO

function Carro(velocidadeMax = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0 // let define atributo privado

    // Método público
    this.acelerar = function(){ //Usar o this para tornar um método público
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    //Método público
    this.getVelocidadeAtual = function(){ // Método que se relaciona com o atributo interno
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // Função construtora
console.log(typeof ferrari) // Objeto instanciado da função