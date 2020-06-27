 // Processar template string dentro de uma função

 function tag(partes, ...valores){
     console.log(partes) // Partes corresponde a string fora das variáveis
    //  console.log(valores)
     return 'Outra String'
 }

 const aluno = 'Gui'
 const situacao = 'Aprovado'
 console.log(tag `${aluno} está ${situacao}.`)