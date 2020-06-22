//Process é um objeto global que lê informações do mouse e teclado do usuario
// Process permite pegar parâmetros passados diretamente no terminal

const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write('Falaa Anônimo! \n')
    process.exit()
}else{
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {  // ondata é quando se digita algo e dá enter, ou seja, acabou de entrar com dados
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}


