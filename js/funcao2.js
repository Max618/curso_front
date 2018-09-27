const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Funcao Arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

//Funcao Arrow -> retorno implicito
const sub = (a, b) => a - b
console.log(sub(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("huehue")