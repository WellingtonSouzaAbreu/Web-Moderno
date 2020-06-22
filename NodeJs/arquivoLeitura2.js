const fs = require('fs')
const caminho = __dirname + '/aTexto.txt'

fs.readFile(caminho, 'utf-8', (err, conteudo) => { // Callback executada qunaod o arquivos estiver carregado
    console.log(conteudo.substring(0,5))
})