const aprovados = [
    'Aghata',
    'Aldo',
    'Daniel',
    'Raquel'
]

aprovados.forEach(function (elemento, indice, array) {
    console.log(`${indice+1} -> ${elemento}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirArpovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirArpovados)