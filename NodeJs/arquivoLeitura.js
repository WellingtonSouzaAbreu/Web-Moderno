const fs = require('fs') // File System é um módulo que vem previamente instalado

const caminho = __dirname + '/arquivo.json' // __dirname aponta para o diretório absoluto

// Forma sincrona... // Trava o event loop se o arquivo for muito extenso
const conteudo = fs.readFileSync(caminho, 'utf-8') //Leia arquivo de forma sincrona
                                // definidos caminho e unicode

console.log(conteudo)

// Forma assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    // const config = conteudo // Erro, o arquivo é JSON
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//SOmente para arquivos JSON
//Forma maia fácil de ler arquivo JSON - Forma sincrona
const config = require('./arquivo.json') //Retorna objeto já instanciado
console.log(config.db)


// Assincrono
fs.readdir(__dirname, (err, arquivos) =>{ // Lê tudo que há na pasta
    console.log('Conteúdo da pasta...') 
    console.log(arquivos[9])
})




