console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('') //transforma string pra array, troca ordem e junta em string
}

console.log('String pra trocar'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())

String.prototype.toString = function () {
    return "Deu ruim"
}
console.log('String pra trocar'.reverse())
