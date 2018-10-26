const imprimirResultado = function(notas) {
    if(nota >= 7)
        console.log('Aprovado!')
    else
        console.log("Reprovado!")
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado("string")