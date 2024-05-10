function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   var suma = arrayOfNumbers.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0);
    return cb(suma);

}

module.exports = sumarArray;
