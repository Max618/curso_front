function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

const prod1 = criarProduto('PRODUTO1', 'PRECO1')
const prod2 = criarProduto('PRODUTO2', 'PRECO2')
console.log(prod1, prod2)