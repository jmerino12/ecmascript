/**
 * ReplaceAll
 */

const string =
  "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

/**
 * Hacer metodos privados dentro de la clase
 */
class Message {
  #show(val) {
    console.log(val);
  }
  get #add(val){
      console.log('agregando')
  }
}

const message = new Message();
message.show("hola");

/**
 * Promise Any
 * Toma un iterable de Promiseobjetos. 
 * Devuelve una sola promesa que se resuelve tan pronto como se cumple alguna de las promesas en el iterable, 
 * con el valor de la promesa cumplida.
 */

const promise1 = new Promise((resolve, reject) => reject('1'))
const promise2 = new Promise((resolve, reject) => resolve('2'))
const promise3 = new Promise((resolve, reject) => resolve('3'))

Promise.any([promise1,promise2,promise3]).then(response => console.log(response))

/**
 * WeakRef
 * Un objeto WeakRef le permite mantener una referencia débil a otro objeto, sin evitar que ese objeto sea recolectado como basura.
 */
class anyClass{
    constructor(element){
        this.ref = new WeakRef(element);
    }
}

/**
 * Nuevos operadores lógicos
 */

 let isTrue = true;
 let isFalse = false;
 console.log(isTrue &&= isFalse);
 
 let isTrue2 = true;
 let isFalse2 = false;
 console.log(isTrue2 ||= isFalse2);
 
 let isTrue3 = undefined;
 let isFalse3 = false;
 console.log(isTrue3 ??= isFalse3);