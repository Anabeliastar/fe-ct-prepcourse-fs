function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
 
  if (numeros.length === 0) {
    return null;
  }

  // Encuentra el número mínimo y el máximo en el array
  var min = Math.min(...numeros);
  var max = Math.max(...numeros);

  // Calcula la suma esperada de la secuencia completa
  var sumaEsperada = ((max - min + 1) * (min + max)) / 2;

  // Calcula la suma real de los números en el array
  var sumaReal = numeros.reduce((acc, curr) => acc + curr, 0);

  // La diferencia entre la suma esperada y la suma real será el número faltante
  var numeroFaltante = sumaEsperada - sumaReal;

  // Si la diferencia es 0, significa que no hay números faltantes
  // En ese caso, devuelve null
  if (numeroFaltante === 0) {
    return null;
  }

  // Devuelve el número faltante
  return numeroFaltante;
}
 



module.exports = encontrarNumeroFaltante;