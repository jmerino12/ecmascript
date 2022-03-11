//OBJET ENTRIES
//Devuelve los valores de una matriz.
const data = {
  frontend: "Jonathan",
  backend: "Valentina",
  desing: "Oscar",
};
//Tranformar este objeto en una matriz.
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//OBJECT VALUE
// Devuelve los valores de un objeto a un arreglo

const data2 = {
  frontend: "Jonathan",
  backend: "Valentina",
  desing: "Oscar",
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "-----"));

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data3 = {
  front: "Jonathan", // Puede existir
  back: "Eduardo",
};

// ASYN & AWAIT

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello word"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();

//FORMA PROPUESTA
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
