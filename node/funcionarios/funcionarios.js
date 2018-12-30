const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const procuraChina = pessoa => pessoa.pais === "China"
const procuraMulher = pessoa => pessoa.genero === "F"
const menorSalario = (pessoa, pessoaAtual) => {
    return (pessoa.salario < pessoaAtual.salario) ? pessoa : pessoaAtual
}

axios.get(url).then(responde => {
    const funcionarios = responde.data
   
    const resultado = funcionarios
        .filter(procuraChina)
        .filter(procuraMulher)
        .reduce(menorSalario)
    console.log(resultado)
})