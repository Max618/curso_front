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

//2 - algum aluno é bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
resultado = alunos.map(aluno => aluno.bolsista).reduce(algumBolsista)

console.log(resultado)