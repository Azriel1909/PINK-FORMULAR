export function valida(input) {
  const tipoDeInput = input.dataset.tipo
  // colección de todos los datas
  if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input)
    // recibe lo de otro archivo vinculado
  }
}

const validadores = {
  nacimiento: input => validarEdad(input),
}

// const inputNacimiento = document.querySelector('#birth')

// inputNacimiento.addEventListener('blur', (evento) => {
//   validarEdad(evento.target)
// })

function validarEdad (input) {
  const fechaCliente = new Date(input.value)
  let mensaje = ''
  if(!mayorDeEdad(fechaCliente)) {
    mensaje = 'Debes tener al menos 18 años de edad para registrarte.'
  }
  // función que recibe un mensaje
  input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha) {
  // crear instancia
  const fechaActual = new Date()
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(), 
    fecha.getUTCDate()
    )
  return (diferenciaFechas <= fechaActual)
}