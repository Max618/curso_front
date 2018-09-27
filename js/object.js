const prod1 = {}
prod1.nome = "NOME LEGAL"
prod1.preco = 4998.90
prod1["desconto legal"] = 0.40//evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Nome Legal 2',
    preco: 79.90,
    obj: {
        hue: 1,
        obj: {
            hue: 2
        }
    }
}

console.log(prod2)