/**
 * Dynamic import
 * se realiza a partir del método import() que devuelve una promesa del módulo solicitado.
 * Eso significa que podemos solicitar código en caso de que sea necesario. Lo cual mejora increíblemente el rendimiento de una aplicación.
 */
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});

/**
 * Big INT: permite trabajar con numeros mayores a 2^53
 */
const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber, anotherBigNumber);

/**
 * El Promise.allSettled()
 * método devuelve una promesa que se resuelve después de que todas las promesas dadas se hayan cumplido o rechazado,
 * con una matriz de objetos que describen el resultado de cada promesa.
 */
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

/**
 * La globalThis propiedad global contiene el this valor global, que es similar al objeto global .
 */
console.log(window);
console.log(globalThis);

/**
 * El operador coalescente nulo (??)  - Nullish coalescing operator
 * Es un operador lógico que devuelve su operando del lado derecho cuando su operando del lado izquierdo es nullo undefined,
 * y de lo contrario devuelve su operando del lado izquierdo.
 */
const foo = null ?? "defaul string";
console.log(foo);

/**
 * Optional chaining (?.) - Operador de encadenamiento opcional?. ( )
 * le permite leer el valor de una propiedad ubicada en lo profundo de una cadena de objetos conectados sin tener que verificar que cada referencia en la cadena sea válida.
 * Asi no me rompe mi aplicación
 */
const user = {};
console.log(user?.profile?.email);
if (user?.profile?.email) {
  console.log("email");
} else {
  console.log("fail");
}
