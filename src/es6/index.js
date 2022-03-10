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
