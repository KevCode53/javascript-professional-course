import { rejects } from "assert";

enum Color {
  Rojo = "Rojo",
  Verde = "Verde"
}

// Interfaces
interface Reectangulo {
  ancho: number,
  alto: number,
  color?: Color
}

let rect: Reectangulo = {
  ancho: 6,
  alto: 7
}

function area(r: Reectangulo) {
  return r.alto * r.ancho
}

const areaRect = area(rect);
console.log(areaRect)

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())