function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTv40 = trab1 && trab2
    //const comprarTv32 = !!(trab1 ^ trab2) // XOR bit a bit
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTv40, comprarTv32, manterSaudavel }
}

console.log(compras(true,true))
console.log(compras(false,true))
console.log(compras(true,false))
console.log(compras(false,false))