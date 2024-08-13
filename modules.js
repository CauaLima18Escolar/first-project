import somaNum from "./modulesExport/export.js"; // Default import
import { perimetroQuadrado, areaQuadrado } from "./modulesExport/export.js"; // Name import (Lista)

let arrNum = [1, 2, 3, 4, 5]

console.log(somaNum(...arrNum))
console.log(perimetroQuadrado(4))
console.log(areaQuadrado(2))