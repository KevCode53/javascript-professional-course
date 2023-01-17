// Bolean
let muted: boolean = true
muted = false

// Números
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador/denominador

// Srting
let nombre: string = 'Kevin'
let saludo = `Hola: ${nombre}`

// Arreglos
let people: string[] = []
people = ["Isabel", "Nicol", "Raul"]
// people.push("3")

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push("Alberto")
peopleAndNumbers.push(53)

// Enum
enum Color {
  Rojo,
  Verde,
  Azul
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = "Joker"
comodin = { type: 'Wildcard'}

// Object
let someObject: object = { type: 'Wildcard'}