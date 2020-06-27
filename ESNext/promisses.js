// Representa um processamento assíncrono

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => { // Promessa aceita e promessa rejeitada
        setTimeout(() => {  //resolve só aceita um parâmetro
            resolve(frase) //Quando acontecer o setTimeout() ele resolve
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('!?!'))
    .then(outraFrase => console.log(outraFrase))




