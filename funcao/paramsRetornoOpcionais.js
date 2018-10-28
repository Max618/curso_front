const area = function (l,a){
    const area = a * l;
    if(area > 20){
        console.log("console funcao")
    }
    else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,4))
console.log(area(5,5))