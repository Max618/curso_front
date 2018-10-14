function tratarErro(erro) {
    //throw new Error('Erro HUEHUE')
    //throw 10
    //throw true
    throw "Mensagem"
    /*throw {
        nome: erro.name,
        msg: erro.message,
    }*/
}
const imprimir = obj => {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErro(e)
    }
    finally {
        console.log('final')
    }
}

const obj = {nome: 'Gabriel'}
imprimir(obj)