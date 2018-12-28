const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//remove final
pilotos.pop()
console.log(pilotos)

//insere final
pilotos.push('Verstappen')
console.log(pilotos)

//remove inicio
pilotos.shift()
console.log(pilotos)

//insere inicio
pilotos.unshift('Hamilton')
console.log(pilotos)

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)