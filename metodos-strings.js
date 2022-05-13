// Metodos mas utilizados en con cadena de caracteres


//Obtener longitud de un string

let str = 'Hola soy un string'

console.log(str.length)

// Obtener partes de cadenas de caracteres

// slice() substring() substr()

let slice =str.slice(5, 10)

console.log(slice)

let substring = str.substring(5, 10)

console.log(substring)

let substr = str.substr(5,10)

console.log(substr)


// Reemplazar parte del contenido de una cadena de texto

let cadena = 'Hola mi nombre es juan'

console.log(cadena.replace('juan', 'El pepe')) 

let textLargo =  'Hola mi nombre es juanHola mi nombre es juanHola mi nombre es juanHola mi nombre es juanHola mi nombre es juan'

console.log(textLargo.replace(/Hola/g, 'Vete a la mierda')) // /Hola/g esto nos sirve para buscar todos los holas del string para poder remplazarlos