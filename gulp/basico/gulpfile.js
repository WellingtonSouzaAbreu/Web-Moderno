const gulp = require('gulp')
const { series, parallel } = require('gulp') // Método destructuring de objeto
// const series = gulp.series  // Mesma coisa que a linha de cima

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(cb) { // callback utilizada para dizer que a tarefa terminou
    // gulp.src(['./pastaA/arquivo1.txt', './pastaA/arquivo2.txt'])
    gulp.src('./pastaA/**/*.txt') // Pega todos os arquivos txt da pasta
        .pipe(gulp.dest('./pastaB'))
        // .pipe(imagemPelaMetade()) // Realizar transformações nos arquivos de entrada definidos em src
        // .pipe(ImagemPretoEBranco())
        // .pipe(Transformacoes())
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim')
    return cb()
}

// module.exports = series(copiar) // O gulp necessita do default para exportar
module.exports.default = series( // Series é usado para ser executado em serie e não parelelo
    antes1, // Ordem de execução
    antes2,
    parallel(copiar, fim) // Pode-se misturar o series e o parallel
)