// npm = node packeger manager - baixa bibliotecas

// npm i lodash - intala o nome_modules e o package-lock

// Com esse require é procurado o arquivo index.js em node_moduloes // COnteudo de index.js  (module.exports = require('./lodash');
const _ = require('lodash')// _ referencia o lodash(biblioteca)

setInterval(() => console.log(_.random(1,100)), 2000) //Biblioteca lodash(_)

// npm i -g nodemon // -g intala em global
// Executando o nodemon no terminal o arquivo é atualizado enquanto código é manipulado
// rs dá restart
// cntl + c encerra
