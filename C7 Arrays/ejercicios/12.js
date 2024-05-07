function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Verifica si el elemento actual es un string.
    if (typeof array[i] === 'string') {
      // Convierte el string a mayúsculas.
      array[i] = array[i].toUpperCase();
    }
  }
  // Retorna el arreglo resultante con todos los strings en mayúsculas.
  return array;
}


module.exports = convertirStringAMayusculas;
