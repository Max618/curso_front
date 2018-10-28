let dobro = function (a) {
    return a+a
}

dobro = (a) => {
    return a+a
}

dobro = a => a+a //return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola' // o _ é um parametro
console.log(ola())