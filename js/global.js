let a = 3


global.b = 123
this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)

console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel sem var e let: variavel global
abc = 3 
console.log(global.abc)