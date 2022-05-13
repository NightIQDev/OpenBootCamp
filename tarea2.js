let listaCompra = ['Lechuga', 'Gaseosa', 'Pan', 'Mantequilla', 'Tomate']

listaCompra.push('Aceite de girasol')

listaCompra.pop('Aceite de girasol')


// Peliculas

let peliculas = [
{
	titulo:'Avengers',
	director:'Bill gates',
	fecha:  2010

},
{
	titulo:'Mr bean',
	director:'Bender',
	fecha: 1990

},
{
	titulo:'El chavo Movie',
	director:'Chespirito',
	fecha: 1985

}
]

const dos10 = peliculas.filter(e =>{
	return e.fecha == 2010
})

console.log(dos10)

const direc = peliculas.map(e => {
	return e.director

})

console.log(direc)

const title = peliculas.map(e => {
	return e.titulo

})

console.log(title)

const titlDi = peliculas.map(e => {
	return e.titulo.concat(' Director es: ' + e.director)

})

console.log(titlDi)

const newList = peliculas.map(e => {
	return {
		...e,
		tituloDirect: e.titulo.concat(' Director es: ' + e.director)
	}
		
})

console.log(newList)

