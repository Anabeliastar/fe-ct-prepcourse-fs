function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

   // Eliminar los espacios y convertir a minúsculas para manejar correctamente los palíndromos que contienen espacios o diferencias de mayúsculas/minúsculas
   var stringSinEspacios = string.toLowerCase().replace(/\s/g, '');
   // Invertir el string
   var stringInvertido = stringSinEspacios.split('').reverse().join('');
   // Comparar el string original con el string invertido
   return stringSinEspacios === stringInvertido;
 }


module.exports = esPalindromo;