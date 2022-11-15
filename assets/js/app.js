import { valida } from "./variaciones.js";

// agrega el evento cada vez que el evento salga del input

// seleccionamos todos los inputs
const inputs = document.querySelectorAll('input')

//  regresa un arreglo
inputs.forEach( input => {
  input.addEventListener('blur', (input) => {
    valida(input.target)
  })
})