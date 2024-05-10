function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var letraA=[];
   for(var i=0;i<=arrayOfStrings;i++)
      {
         if(arrayOfStrings[0]==="a")
            {
               letraA.push(arrayOfStrings);
            }
      }return letraA;
}

module.exports = filter;
