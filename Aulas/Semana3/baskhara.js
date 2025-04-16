// calculo formula de Baskhara

let a = 1;
let b = -5;
let c = 6;

let resultado1 = (-b + (Math.sqrt(b ** 2 - 4 * a * c))) / (2 * a)
let resultado2 = (-b - (Math.sqrt(b ** 2 - 4 * a * c))) / (2 * a)

console.log("x': " + resultado1)
console.log("x': " + resultado2)