var value1 = 20
//Impure Function
function add(value){
    const result = value + value1
    return result
}

console.log(add(55))
//Pure Function
function add1(val1, val2){
    const result = val1 + val2
    return result
}

console.log(add1(5,4))