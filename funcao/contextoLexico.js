const valor = "Global"

function funcao(){
    console.log(valor)
}

funcao()

function exec() {
    const valor = "Local"
    funcao()
}

exec()