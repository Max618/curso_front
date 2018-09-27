let valor
console.log(valor)
//console.log(valor2) // erro

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //ma pratica
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)