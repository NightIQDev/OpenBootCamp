// Metodos de cadenas de textos parte 3

let textoLargo = 'Tito no es un mono cuualquiera, A tito no le gusta trepasr por los arboles y odia comer platanos, El prefiere pasear por el bosque, oler las flores y recoger las nueces'

console.log(textoLargo.match(/a/g)) // nos muestra por un array todas las a que hay en el texto

console.log(textoLargo.includes('tito')) // nos dice si hay o no hay el texto que le introduscamos dentro

// Saber si un texto empieza con una palabra
	
console.log(textoLargo.startsWith('Tito no es un mono')) // nos dice si empieza o no empieza con lo que le coloquemos dentro

// Saber si el texto termina con una palabra

console.log(textoLargo.endsWith('nueces')) // nos dice si termina o no termina con lo que le coloquemos dentro