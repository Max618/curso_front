//nao adiciona novos atributos
const produto = Object.preventExtensions({
    nome: "qualquer", preco: 1.99, tag: "promocao"
})
console.log("Extensivel: ", Object.isExtensible(produto))

console.log(produto)
produto.nome = "Borracha"
produto.descricao = "Borracha branca"
delete produto.tag
console.log(produto)

//nao consegue adicionar nem excluir atributos do obj
const pessoa = {
    nome: "Juliana",
    idade: 35
}
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

console.log(pessoa)
pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 27
console.log(pessoa)

//nao pode adicionar, deletar nem modificar atributos
//Object.freeze