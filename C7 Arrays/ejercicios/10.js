function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
var long="";
for(var i=1;i<=array.length;i++)
{
  if(array[i].length>5)
  {
    long=array[i];
  }
}return long;




  }

module.exports = obtenerPrimerStringLargo;
