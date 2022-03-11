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
