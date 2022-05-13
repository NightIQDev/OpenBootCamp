// Metodos de strings (pt2)

let input = 'Acuario'

let db = 'acuario'

// toLowercase() -- toUpperCase()

console.log(input.toLowerCase() === db)

console.log(input.toUpperCase() == db)

// formas de concatenar cadena de caracteres

let str1 = 'Hola me llamo'

let str2 = 'Juan Ojeda Lugo'

console.log(str1.concat(' ', str2, ' ', 'el dandi de barcelona'))

console.log(str1 + ' ' + str2 + ' el dandi de barcelona')

console.log(`${str1} ${str2} el dandi de basrcelona`)

// Eliminar espacios al inicio y al final

let str3 = '     Hola soy un string con espacios al final.      '

console.log(str3.trim().length) // Elimina espacios al final y al principio

console.log(str3.trimStart().length) // Elimina espacios del principio

console.log(str3.trimEnd().length) // Elimina espacios del final

// Obtener el caracter que hay en cierta posicion

let str4 = 'Hola soy el string numero 4'

console.log(str4.charAt(0))

console.log(str4[0])

// Obtener la posicion de una palabra dentro de una cadena de caracteres

let str5 = 'Hola me llamo Juan y juego futbol Juan'

console.log(str5.indexOf('Juan')) // retorna la posicion de la primera palabras
console.log(str5.lastIndexOf('Juan')) // retorna la posicion de la ultima palabra




