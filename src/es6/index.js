//Como se trabajaba antes de ES6
function newFunction(name, age, country) {
  var name = name || "Jonathan";
  var age = age || 23;
  var country = country || "CO";
  console.log(name, age, country);
}
//Ahora en ES6
function newFunction2(name = "Jonathan", age = 23, country = "CO") {
  console.log(name, age, country);
}

new newFunction2(); //Tomara los Default Params
newFunction2("Valentina", "22", "CO"); // Tomara los parametros enviados

//Template literals, nos permiten separar, o unir varios elementos.

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//ANTES DE ES6
let lorem =
  "Quie consequtar. Commodi. Ipsum vel dius yet minima \n" +
  "Otra frase epica que necesitamos";

//ES6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//DESTRUCTURACION DE ELEMENTOS
/* 
Es una expresión que nos permite desempaquetar valores de arrays u objetos en grupos de variables, 
permitiéndonos simplificar y crear código más legible.
*/
let persona = {
  name: "Jonathan",
  age: 23,
  country: "CO",
};

console.log(persona.name);

let { name, age, country } = persona;

console.log(name, age, country);

// OPERADOR DE PROPAGACION

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yessica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));

{
  var globalVar = "Global";
}
{
  let globalLet = "Global Let";
  console.log(globalLet);
}
console.log(globalVar);

const a = "b"; //No se puede reagsinar por const

//PROPIEDAD DE OBJETOS MEJORADRA

//ES5
let name2 = "Jonathan";
let age2 = 23;

obj = { name: name2, age: age2 };

console.log(obj);

//ES6
obj2 = { name2, age2 };
console.log(obj2);

//ARROW FUNCTIONS

const names = [
  {
    name: "Jonathan",
    age: 23,
  },
  {
    name: "Valentina",
    age: 22,
  },
];
//ES5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//ES6
let listOfNames2 = names.map((item) => console.log(item.name));
//Otras formas de arrow functions
const listOfNames3 = (name, age, country) => {
  console.log(name, age, country);
};

const listOfNames4 = (name) => {
  console.log(name);
};

const square = (num) => num * num;

listOfNames3("J", 23, "CO");

//PROMESAS
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!, todo bien");
    } else {
      reject("Ups!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
