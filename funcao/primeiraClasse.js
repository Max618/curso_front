//forma literal
function func1(){

}

//armazenar em variavel
const func2 = function () {

}

//armazenar em um array
const array = [
    function (a,b) {
        return a + b
    },
    func1,
    func2
]
console.log(array[0](10,11))

//armazenar em atributos de objetos
const obj = {}
obj.falar = function () {
    console.log("EOQ")
}
obj.falar()

//passar funcao como parametro
function run (fun){
    fun()
}
run(function () {console.log('Executando...')})

//funcao pode retornar/conter uma outra funcao
function soma (a,b) {
    return function (c){
        console.log(a+b+c)
    }
}
soma(10,15)(20)
const somaMais = soma(10,15)
somaMais(15)