function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 15, 4, 5, 6)
imprimirSoma()

function soma(a, b = 1){
    return a + b
}

console.log(soma(10,15))
console.log(soma(5))
console.log(soma())