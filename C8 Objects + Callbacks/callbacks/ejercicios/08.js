const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Utiliza la función de callback para evaluar si el elemento actual cumple con cierta condición
    if (callback(array[i])) {
      // Si el elemento cumple con la condición, lo devuelve
      return array[i];
    }
  }
  // Si ningún elemento cumple con la condición, devuelve el mensaje indicando que no se encontró el elemento
  return "No se encontró el elemento";
};
  

   

module.exports = buscarElemento;
