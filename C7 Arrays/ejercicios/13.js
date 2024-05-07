function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var nuevoArray=array.filter(element=>element%2===0);
  return nuevoArray;
}

module.exports = filtrarNumerosPares;
