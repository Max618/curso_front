const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //listada
    writable: false, //escrever
    value: '01/01/2019'
})
console.log(pessoa)
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa)
console.log(Object.keys(pessoa))

//ECMAScript 2015
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)