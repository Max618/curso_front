const nums = [1,2,3,4,5]

//for com proposito
let resultado = nums.map(function (elemento, indice) {
    return elemento * 2
})

console.log(resultado)

const soma10 = ele => ele + 10
const triplo = ele => ele * 3
const paraString = ele => `R$ ${parseFloat(ele).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraString)
console.log(resultado)