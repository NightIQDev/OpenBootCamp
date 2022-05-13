// Operadores .valueOf() - obtener valores numericos a partir de literales

let a = 2 

let b = new Number(3)

console.log(a)

console.log(b)

console.log(a + b)

console.log(b.valueOf())


// NaN (Not a Number) Infinity

let n = Number('adios')

console.log(n)

console.log(isNaN(n)) // nos valida si es un numero o no

let numerador = 19

let divisor = 0

let divisor2 = null

console.log(numerador/divisor)

console.log(numerador/divisor2) // esto es = Infinity/infinito ya que entre mas pequeno sea el divisor mas grande se hace el numero

// Numeros Hexadecimales (base 16)

let numHex = '0x5d2f'

console.log(parseInt(numHex, 16))

// Como convertir los string a valores numericos Number, parseInt, parseFloat

let numeroL = '4.5'
let numeroL2 = 0.5

console.log(typeof numeroL)

console.log(numeroL + numeroL2) // error de sintaxis

// Pasar de string a numero con Number

console.log(Number(numeroL) + numeroL2)

// Pasar de string a numero con parseInt parseFloat

console.log(parseFloat(numeroL))

let num3 = '4'

console.log(parseInt(num3))

// Obtener los valores maximo y minimo

let minPre = Number.EPSILON

let minValJs = Number.MIN_VALUE

let maxValJs = Number.MAX_VALUE

console.log(minPre)

console.log(minValJs)

console.log(maxValJs)

console.log(2 ** 1023) // elevar un numero **

