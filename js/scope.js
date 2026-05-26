// window.Nombre = "Alejandro"
// window.Edad = 40


// let persona = {
//   Nombre: "Rene",
//   Edad: 36,
//   saludar () {
//     console.log(`Hola me llamo ${this.Nombre} y tengo ${this.Edad} años`)
//   }
// }

// persona.saludar()


// alert("Alerta desde alert")

// console.log("consola desde console")
// let resultado = "resultado global"

// function sumar (a, b) {
//   var resultado = a + b
//   return resultado
// }

// var total = sumar(2, 3)

// console.log(resultado)

var x = "Global"
// var y = "Si existe la variable"


function scopeExampleY () {
  var y = "Local desde Y 1"
  console.log(x)
  console.log(y)

}

function scopeExample2 () {
  var y = "Local Y 2"
  console.log(y)

}

scopeExampleY()
scopeExample2()


if (window.y) {
  console.log(y)
} else {
  console.log("no existe Y")
}

// console.log(y)



console.log(x)
console.log(x)
console.log(x)
console.log(x)
console.log(x)