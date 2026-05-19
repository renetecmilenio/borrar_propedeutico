// let edad = prompt("¿Cuántos años tienes?");
// let nombre = "René Alejandro";
// let esDesarrollador = true;


// if (edad >= 18) {
//   console.log("Tienes edad para tomar una cerveza");
// } else {
//   console.log("No tienes edad para tomar una cerveza");
// }

// ----------- autoinvocada -----------


// (function () {
//   console.log("Hola, soy una función autoinvocada");
// })();

// ((function () {
//   console.log("Hola, soy una función autoinvocada");
// })());

// +function () {
//   console.log("Hola, soy una función autoinvocada");
// }();

// -------------- EXPRESADA --------------
// saludar("René Alejandro");

// function saludar (nombre) {
//   console.log("Hola, mi nombre es " + nombre);
// }

// -------------- EXPRESADA--------------

// saludar("María Fernanda");
// saludar("María Fernanda");
// Función expresada
// const despedir = function (appellido = "anónimo", edad = "Desconocidos") {
//   console.log("Adiós, que tengas un buen día de parte de " + appellido + " tengo " + edad + " años");


// }

// despedir("René", 36);

// despedir();

// -------------- ARROW FUNCTION --------------

// const suma = (a, b) => {
//   return a + b
// }
// const restar = (a, b) => {
//   return a - b
// }

// const multiplicar = (a, b) => {
//   return a * b
// }

// const dividir = (a, b) => {
//   return a / b
// }

// console.log(suma(10, Number(5))) // 105
// console.log(restar(45, "100"))
// console.log(multiplicar(45, "100"))
// console.log(dividir(0, 0))

// const nombre = nombre => console.log("Hola soy ", nombre)

// nombre("Rene")

// const persona = {
//   Nombre: "René",
//   Edad: "36",
//   Genero: "Masculino",
//   Altura: 1.75,
//   Peso: 70,
//   Profesion: "Desarrollador Web",
//   tecnologias: ["Javascript", "Python", "html", "css", "react", "node.js"],
//   contacto: {
//     email: "rene@gmail.com",
//     telefono: "1234567890",
//     direccion: "Calle Falsa 123",
//     redes: ["facebook", "twitter", "instagram"]
//   },
//   saludar: function () {
//     console.log("Hola, mi nombre es " + this.Nombre + " y tengo " + this.Edad + " años.");
//   },
//   brincar: function () {
//     console.log(this.Nombre + " está brincando.");
//   }
// }

// let brincar = persona.brincar();
// console.log(brincar);







