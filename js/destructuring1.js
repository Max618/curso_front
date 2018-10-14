// novo ES2015

const Pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome,idade } = Pessoa
console.log(nome, idade)

const { nome: n, idade: i} = Pessoa
console.log(n, i)

const { sobrenome, huehue = true } = Pessoa
console.log(sobrenome, huehue)

const { endereco: { logradouro, numero, cep } } = Pessoa
console.log(logradouro,numero,cep)

//const { conta: { ag, num } } = Pessoa // ERRO
//console.log(ag,num)