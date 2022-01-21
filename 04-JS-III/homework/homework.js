// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var n=array.length;
  return array [n-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  var array2=[];
  for (var i=0;i<array.length; i++)
  {
    array2[i]=array[i]+1;
  }
  return array2;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}



function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var cont=0;
  for(var j=0; j<numeros.length;j++)
  {
    cont += numeros[j];
  }
  return cont;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma=0,prom=0;
  for(a=0;a< resultadosTest.length;a++)
  {
    suma += resultadosTest[a];
  }
  prom= suma/(resultadosTest.length);
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor=numeros[0];
  for(i=0; i<numeros.length; i++)
  {
    if(numeros[i]>mayor)
    {
      mayor=numeros[i];
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) 
  {
    return 0;
  }
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var cont=0;
for(var i =0; i<arreglo.length;i++)
{
  if(arreglo[i]>18)
  {
    cont++;
  }
}
return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
 
  
    if(numeroDeDia===1||numeroDeDia===7)
    {
      return"Es fin de semana";
    }else
    {
      return"Es dia Laboral";
    }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()
  if(num.charAt(0) === "9"){
    return true;
  }
  else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i=0; i< arreglo.length-1;i++)
  {
    if(arreglo[i]===arreglo[i+1])
    {
      return true;
    }else{
      return false;
    }
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses=[];
  for(i=0; i< array.length;i++)
  {
    if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre")
    {
      meses.push(array[i]);
    } 
  }
  if(meses.length==3)
    {
      return meses;
    }else{
      return "No se encontraron los meses pedidos";
    } 

}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayor = [];//nuevo array para guardar los valores
  for(i=0;i<array.length;i++)//ciclo for que recorre el array
  {
    if(array[i]>100)//ondicional para elementos mayores a 100
    {
      mayor.push(array[i]);//todo valor mayor a 100 se inserta en el nuevo array
    }
  }
  //al final de ciclo for, devuelve el nuevo array
  return mayor;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let suma=[];//array suma para los valores pedidos
  let num=numero;//acumulador num
  for(var i=0;i<10;i++)
  {
    num= (num+2);//aumenta el valor de 2 en 2
     //en caso de que num y el n° de iteraciones coincide
    //se recurre al condicional
    if(num==i)
    {
      return "Se interrumpió la ejecución";
      break;//y se interrumpe el ciclo
      //sino...
    }else{
      suma.push(num);//se agrega el nuevo valor al arreglo
    }
   
  }return suma;//aquí se devuelve el nuevo array
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let cont=numero; //acumulador cont
  let sum=[];//array sum para los valores pedidos
  for(var i=0;i<10;i++)
  {
    if(i===5)
    {
      continue;
    }else{
    cont=cont+2;//cont aumenta de 2 en 2
    sum.push(cont);//se agregan los valores al array
    }
  }
  //al final del ciclo se devuelve el array
  return sum;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
