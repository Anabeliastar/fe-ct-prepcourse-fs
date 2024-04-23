function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
let producto=1;
  for (let i = a; i <= b; i++) {
    // Si i es 0, entonces el producto será 0
    if (i === 0) {
      return 0;
    }
    producto = producto * i
  }

  return producto;
}


module.exports = productoEntreNúmeros;