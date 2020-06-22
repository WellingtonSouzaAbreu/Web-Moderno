// Node utiliza layers - camadas
// Organização front-end deve estar contido em poucos arquivos
// Enquanto para o back-end não se tem essa necessidade, pois nada será enviado à página

// EM NODE, UM ARQUIVO REPRESENTA UM MÓDULO /////////////////
// TUDO ESCRITO EM UM MÓDULO FICA RESTRITO AO MÓDULO, PODENDO SER ACESSADO POR OUTRO PELO MEIO DE EXPORTS E IMPORTS

// Modo dinâmico de exportar
this.ola = 'Fala Pessoal' // O this se referencia ao módelo(arquivo), podendo ser acessado por outro módulo
exports.bemVindo = 'Bem vindo ao node' // Exports permite ser exportado
module.exports.ateLogo = 'Até mais ver'

// Toda exportação gera um objeto

