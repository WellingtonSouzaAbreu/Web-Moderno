// Funções são consideradas cidadões de primeira linha
// Podem ser passadas como parâmetro, definidas dentro de outra, armazenar em variáveis, retornar uma funçao de variável.

// Função em JS é First-Class Object(ou Citizens)
// Higher-order funciton //FUnção de alta ordem

// Em JS a função é tratada como um dado, porém especial
function fun1(){ // Se não retornar nada no return a função retornará undefined

}

//Armazenas funçção em variável
const fun2 = function(){}

//Armazenas função em array
const array = [function f3(){}, function f4(){}]

// Armazenar em atriburo de objeto
const obj = {}
obj.falar = function falar(){return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun){
    fun()
}

run(function(){console.log('Executando....')})

// Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4) // Soma(2,3) retorna uma função, o '(4)' é o parâmetro da função retornada
//Pode-se armazenar 'Soma(2,3)' em uma variávem e usá-la como uma função comum

