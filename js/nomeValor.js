const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'HUEHUE' // contexto lexico 2
    return saudacao
}

const cliente = {
    nome: 'Gabriel',
    idade: 19,
    endereco: {
        rua: 'Rua',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)