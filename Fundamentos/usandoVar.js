{
    {
        {
            {
                var sera ='Será?'
            }
        }
    }
} 

console.log(sera)
//Variáveis fora de funções são públicas

function teste(){
    var local = 123 //Escopo de função não é acessado pelos outros escopos
}

teste()
console.log(local)