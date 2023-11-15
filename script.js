/* Ejercicio 1:
Crea una función que reciba un array de números y devuelva la suma de todos ellos. */

let arrNums = [1,2,3,4,5]
let sumaNumeros = 0

const sumador = (arr) => {
    for (let i = 0; i < arr.length; i++) {
    sumaNumeros += arr[i]
} 
return sumaNumeros
}

/* Ejercicio 2:
Escribe una función que tome un array de palabras y devuelva un nuevo array con la longitud de cada una de ellas. */

let arrWords = ["Pepe","Juan","Esteban","Javier","Santiago","Leonardo"]

function ftWords (arr) {
    for (let i = 0; i < arr.length; i++)
    console.log (`El nombre ${arr[i]} tiene ${arr[i].length} palabras`)
}

/* Ejercicio 3:
Crea una función que reciba un array de números y devuelva un nuevo array con solo los números pares. */

let arrNum = [1,2,3,4,5,6,7,8,9,10]
let newArrayPrimos = []
let newArrayNotPrimos = []

function ftPrimos (arr) {

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i])%2 == 0 ) {
            newArrayPrimos.push(arr[i])
        } else {
            newArrayNotPrimos.push(arr[i])
        }
    } 
    return [newArrayPrimos, newArrayNotPrimos];
}
console.log(ftPrimos(arrNum))

/* Ejercicio 4:
Escribe una función que tome un array de números y devuelva la multiplicación de todos ellos. */

let arrMul = [1,2,3,4,5,80]
let resultadoMultiplicacion = 1


function ftMultiplicacion (arr) {
    for (let i = 0; i < arr.length; ++i) {
        resultadoMultiplicacion *= arr[i] 
    }
    return resultadoMultiplicacion
}

/* Ejercicio 5:
Implementa una función que reciba un array de números y devuelva otro array con solo los números que son múltiplos de 3. */

let arr2 = [27,2,3,4,5,6,7,8,9,10,30]
let arrMultiplos3 = []

function ftContadorPrimos (arr) {
    for (let i = 0; i < arr.length; i++){
        if (((arr[i])%3) == 0) {
            arrMultiplos3.push(arr[i]) 
        } 
    }
    return arrMultiplos3
}

console.log(ftContadorPrimos(arr2))
