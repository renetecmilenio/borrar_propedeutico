/*  Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

Procesamiento Single thread y Multi thread.
Operaciones de CPU y Operaciones de I / O.
Operaciones Concurrentes y Paralelas.
Operaciones Bloqueantes y No Bloqueantes.
Operaciones Síncronas y Asíncronas.

Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).
*/


// console.log("Hola soy una funcion síncrona 1");
// console.log("Hola soy una funcion síncrona 2");
// alert("Hola soy una función bloqueante");
// console.log("Hola soy una funcion síncrona 3");
// console.log("Hola soy una funcion síncrona 4");
// console.log("Hola soy una funcion síncrona 5");

// SET TIMEOUT

// setTimeout(() => {
//   alert("Hola soy una función asíncrona");
// }, 2000);
// setInterval(() => {
//   console.log("Hola soy una función asíncrona");
// }, 2000);


// console.log("Hola soy una función síncrona 1");
// console.log("Hola soy una función síncrona 2");
// console.log("Hola soy una función síncrona 3");
// console.log("Hola soy una función síncrona 4");
// console.log("Hola soy una función síncrona 5");


// CALLBACKS

function cuadradoCallback (value, cb) {
  setTimeout(() => {
    cb(value, value * value);
  }, 100);
}


cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);

  if (typeof value != "number") {
    console.log("El valor debe ser un número")
  }

  if (value < 0) {
    console.log("El valor debe ser positivo")
  }

  cuadradoCallback(1, (value, result) => {
    if (typeof value != "number") {
      console.log("El valor debe ser un número")
    }

    if (value < 0) {
      console.log("El valor debe ser positivo")
    }

    console.log(`Callback: ${value}, ${result}`);

    cuadradoCallback(2, (value, result) => {

      if (typeof value != "number") {
        console.log("El valor debe ser un número")
      }

      if (value < 0) {
        console.log("El valor debe ser positivo")
      }
      console.log(`Callback: ${value}, ${result}`);

      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);

        cuadradoCallback("cuatro", (value, result) => {
          if (typeof value != "number") {
            console.log("El valor debe ser un número")
          }

          console.log(`Callback: ${value}, ${result}`);

          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin del callback hell")
          })

        })

      })

    })

  })



});



// function cuadradoPromise (value) {

//   if (typeof value != "number") {
//     return Promise.reject(`Error, el valor de ${value} ingresado debe ser un numero`)
//   }

//   // if (!value) {
//   //   return Promise.reject(`Debes  ingresar un numero`)
//   // }

//   if (value < 0) {
//     return Promise.reject(`Error, el valor de ${value} ingresado debe ser un numero positivo`)

//     // console.log(`El valor ${value} es negativo, el resultado puede no ser el esperado`)
//   }

//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value
//       });
//     }, 0 | Math.random() * 1000)

//   });
// }


// cuadradoPromise(0)
//   .then(obj => {
//     console.log("Inicia la promoesa");
//     console.log(`Promesa: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(1);
//   })
//   .then(obj => {
//     console.log(`Promesa: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(2);
//   })
//   .then(obj => {
//     console.log(`Promesa: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(-2);
//   })
//   .then(obj => {
//     console.log(`Promesa: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(4);
//   })
//   .then(obj => {
//     console.log(`Promesa: ${obj.value}, ${obj.result}`)
//     console.log("Fin de la promesas")
//   })
//   .catch(err => console.error(err))


// ASYNC AWAIT


function cuadradoPromise (num) {

  if (typeof num != "number") {
    return Promise.reject(`Error, el valor de ${num} ingresado debe ser un numero`)
  }

  return new Promise((resuelve, rechaza) => {
    setTimeout(() => {
      resuelve({
        num,
        resultado: num * num
      })
    }, 0 | Math.random() * 1000)

  })

}

let cadenatexto = "Hola soy una función asíncrona"

async function funcionAsync () {
  try {

    console.log("Inicio de async await")

    let obj = await cuadradoPromise(9)
    console.log(`Async function: ${2 + 3} -------`)

    obj = await cuadradoPromise(1)
    console.log(`Async function: ${obj.num}, ${obj.resultado}`)

    obj = await cuadradoPromise("2")
    console.log(`Async function: ${obj.num}, ${obj.resultado}`)

    obj = await cuadradoPromise(3)
    console.log(`Async function: ${obj.num}, ${obj.resultado}`)

    obj = await cuadradoPromise(4)
    console.log(`Async function: ${obj.num}, ${obj.resultado}`)

    obj = await cuadradoPromise(5)
    console.log(`Async function: ${obj.num}, ${obj.resultado}`)



  } catch (error) {
    console.error(error)
  }
}

funcionAsync()