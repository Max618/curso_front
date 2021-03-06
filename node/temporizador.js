const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 7', function () {
    console.log("Executando tarefa 1!!", new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log("Cancelando Tarefa1!")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,7)]
regra.hour = 21
regra.second = 15

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log("Executando tarefa 2!!", new Date().getSeconds())
})