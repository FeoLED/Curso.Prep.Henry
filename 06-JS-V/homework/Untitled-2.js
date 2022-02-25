let duke="duke";
reverse = function (duke)//creamos el método reverse
{
  //variable vesre
  var vesre="";
  
  //Hago un ciclo for a la inversa
  for(var i=duke.length;i==0;i--)
  {
    duke[i]=vesre;//Asigno a vesre el último caracter del string
    vesre=vesre+vesre;
  }
  return vesre;
}
console.log(vesre);
