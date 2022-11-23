export function valida(input) {
  const tipoDeInput = input.dataset.tipo
  // colección de todos los datas
  if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input)
    // recibe lo de otro archivo vinculado
  }
  // Verificando input
  // console.log(input.parentElement)
  if(input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = ''
  } else {
    // Colocar clase de css
    input.parentElement.classList.add('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = mostrarErrorMensaje(tipoDeInput,input)
  }

}

const tipoDeErrores = [
  // Acceder a cada objecto
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'CustomError'
]

const errorMensaje = {
  // Definir los tipos de errores
  nombre: {
    valueMissing: 'El campo Nombre no puede estar vacío.'
  },
  email: {
    valueMissing: 'El campo Email no puede estar vacío.',
    typeMismatch: 'El correo no es valido.'
  },
  password: {
    valueMissing: 'El campo Password no puede estar vacío.',
    patternMismatch: 'Al menos 12 caracteres, máximo 19, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.'
  },
  nacimiento: {
    valueMissing: 'El campo Fecha de Nacimiento no puede estar vacío.',
    CustomError:'Debes tener al menos 18 años de edad para registrarte.'
  }
}



const validadores = {
  nacimiento: input => validarEdad(input),
}

// Mostrar el mensaje de error

function mostrarErrorMensaje (tipoDeInput, input){
  let mensaje = ''
  //  Acceder a los diferentes mensajes de los errores
  tipoDeErrores.forEach (error => {
    if(input.validity[error]) {
      console.log(error)
      console.log(input.validity[error])
      console.log(errorMensaje[tipoDeInput][error])
      mensaje = errorMensaje[tipoDeInput][error]
    }
  })
  return mensaje
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