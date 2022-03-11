/*
Array.flat = un nuevo método que nos permite aplanar arreglos.
*/

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
//flat recibe como parametro la profundidad por la cual quiero trabajar dicha matriz
console.log(array.flat(2));

/*
Array.flatMap() = Lo mismo que flat, con la diferencia que primero podemos manipular la data, para luego aplanar
*/
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));

/**
 * String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
 */
let hello = "    hello  world";
console.log(hello);
console.log(hello.trimStart());

let hello2 = "hello  world     ";
console.log(hello2);
console.log(hello2.trimEnd());

/**
 * Optonal cacth build
 * ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
 */

try {
} catch {
  error;
}

/**
 * Object.fromEntries() lo inverso a Object.entries(),
 * es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(),
 * y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
 */

let entries = [
  ["name", "Jonathan"],
  ["age", 23],
];

console.log(Object.fromEntries(entries));

/**
 * Symbol.prototype.description
 * permite regresar el descripcion opcional del Symbol
 */
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
