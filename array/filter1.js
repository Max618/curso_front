const PRECO = 500
const produtoCaro = produto => produto.preco >= PRECO
const produtoFragio = produto => produto.fragil
const regraFilter = produto => produtoCaro(produto) && produtoFragio(produto)

const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Plástico", preco: 18.99, fragil: false}
]
//const resultado = produtos.filter(produtoCaro).filter(produtoFragio)//video
const resultado = produtos.filter(regraFilter)//meu
console.log(resultado)