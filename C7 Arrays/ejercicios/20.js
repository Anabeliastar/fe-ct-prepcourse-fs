function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0) {
    return true; // Si el arreglo está vacío, se considera que todos son iguales
  }
  
  // Guardamos el primer elemento para comparar con el resto
  var primerElemento = array[0];
  
  // Iteramos sobre el arreglo y comparamos con el primer elemento
  for (var i = 1; i < array.length; i++) {
    if (array[i] === primerElemento) {
      return true; // Si encontramos un elemento diferente, devolvemos false
    }return false;
  }

} 

module.exports = todosIguales;
