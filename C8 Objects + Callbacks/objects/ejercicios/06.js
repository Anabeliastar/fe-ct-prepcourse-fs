const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var contadorPropiedad=0;
  for(const p in objeto)
    {
      if(objeto.hasOwnProperty(p))
        {
          ++contadorPropiedad;
        }
    }return contadorPropiedad;
};

module.exports = contarPropiedades;
