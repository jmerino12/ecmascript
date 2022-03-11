//OPERADOR DE REPOSO
/* 
    Extrea las propiedades de un objeto que aun no se ha construido
*/
const obj = {
  name: "Jonathan",
  age: 23,
  country: "CO",
};

let { name, ...all } = obj;

console.log(name, all);

// Si solo necesitaria mi nombre y edad, y el resto, no seria lo siguiente:
let { country, ...data } = obj;
console.log(data);

// PROPIEDAD DE PROPAGACION
/*
    Unir, n elementos de objetos, a otro objeto
*/

const obj1 = {
  name: "Jonathan",
  age: 23,
};

const obj2 = {
  country: "CO",
};

const objResult = {
  ...obj1,
  ...obj2,
};

/*const obj2 = {
    country: "CO",
    ...obj1
  };*/

console.log(objResult);

//PROMISE FINALLY
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

/**
 * Regex
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];
console.log("Date -> ", year, month, day);
