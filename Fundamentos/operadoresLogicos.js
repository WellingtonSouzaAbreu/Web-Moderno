// Tabela verdade
// Um pipe realiza comparação bit a bit

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //Se o primeiro for verdadeiro, nem se verifica o segundo
    const comprarTv50 = trabalho1 && trabalho2 //Se o primeiro for falso, nem se verifica o segundo
    const comprarTv32 = trabalho1 = !!(trabalho2 ^ trabalho2) //OU exclusivo ou bitwise xor
   const comprarTv32v = trabalho1 != trabalho2 //Pode-se utilizar no lugar do xor
    const manterSaudavel = !comprarSorvete // Operador unáirio, se comprarSorvete for falso, se matem saudavel
   return [comprarSorvete, comprarTv50, comprarTv32, comprarTv32v, manterSaudavel]
}

   console.log(compras(true, true))












