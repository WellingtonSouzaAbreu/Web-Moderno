// Temporizador 'npm i node-schedule'

const schedule = require('node-schedule')
// Opção elegante
const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 0', function() {// Frequência/ Minutos, Horas, Dia do mês, Mes, dia da semana
                                     //Sem / executaria no segundo 5
    console.log('Executando tarefa 1', new Date().getSeconds())
}) 

setTimeout(() =>{ // Temporarizador padrão do JS
    tarefa1.cancel() // Maneira de encerrar o temporizador 
    console.log('Cancelando...')
},20000)

// Criando regra para o temporizador // Flexibilidade maior
const regra = new schedule.RecurrenceRule() //Regra de recorrência
regra.dayOfWeek = [new schedule.Range(0,5)]
regra.hour = 23
regra.second = 30


const tarefa2 = schedule.scheduleJob(regra, () =>{
    console.log('Executando a tarefa 2!', new Date().getSeconds())
})

// Outras possibilidades usando diretamente o JS
// setImediate
// setInterval

