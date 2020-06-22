// Arquivo gerado diretamente no terminal com o comando : npm init ou npm init -y(responde sim a tudo)

// npm i --save axios 
// Instala dependências, versão, programa, etc...

//O package-lock.json mantém a versão do programa estável, para que não ocorra erros por divergência de versão
// Ao reinstalar os pacotes em outra máquina, se mantém as versões e configs

// v1(Midle).2(Minor).33(Fixed)

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios') //Cliente-HTTP - O axios faz requisições para obter informações de algo que está remoto

axios.get(url).then(response =>{ // Response é o que retornou do servidor
    const funcionarios = response.data
    
    let mulherChinesaPobre = funcionarios
        .filter(chineses)    // Método declarativo
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(mulherChinesaPobre)
})

let chineses = f => f.pais === 'China' // è filtrado tudo que for falso
let mulheres = f => f.genero === 'F'
let menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}







