//pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {}

//congelando objeto pessoa -> nao consigo mexer no objeto
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.idade = 20
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

