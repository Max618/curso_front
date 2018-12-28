Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i],i,this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//1 - tds os alunos sao bolsistas?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
let resultado = alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas)

console.log(resultado)