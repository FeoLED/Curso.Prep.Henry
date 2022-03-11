// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz=[,],array=[];
  for (let item in objeto){
    matriz=[item,objeto[item]];
    array.push(matriz);
  }return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'],obj={};
  for(let i=0;i<abc.length;i++){ //ciclo externo con el abc
    var cont=0;//contador de caracteres, por default es cero
    for(let char in string){//ciclo interno para el string    
        if(abc[i]==string[char]){//ciclo que compara letras y caracteres
          cont=cont+1;//si el char y la letra coinciden, el contador crece 1 valor
        }
      //por cada letra del abc, agrega esa letra y su cantidad como un par clave:valor en el objeto
      obj[abc[i]]=cont;//asignamos el valor
    }
  }
  //segundo ciclo que filtra los valores '0'
  for(let i=0;i<abc.length;i++){//vuelve a recorrer el abc
      if(obj[abc[i]]==0){//si una prop es cero
         delete(obj[abc[i]]);//la elimina del objeto
      }
  }
  return obj;
};


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let palabra="",mayus=[], minus=[], resultado=[];
  for(let i=0;i<s.length;i++){
      if(s[i]==s[i].toUpperCase()){
          mayus.push(s[i]);
      }else{
          minus.push(s[i]);
      }
  }
  resultado=mayus.concat(minus);
  for(let char in resultado){
      palabra+= resultado[char];
  }
  return palabra;
};


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  let array=[],separado=[],copa=[],ñoqui=[],palabra="",espacio=" ";
  for(let item in str){
      array.push(str[item]);
  }
  
  for(let i=0; i<array.length;i++){
       palabra+=array[i];
       if(array[i]==" "){
           palabra=palabra.slice(0,palabra.length-1);
           separado.push(palabra);
           separado.push(espacio);
           palabra="";
       }else if(i==array.length-1){
            separado.push(palabra);
           palabra="";
       }
  }
  //ahora que tengo las palabras separadas, creo un array de arrays mediante una función
  for(var i=0;i<separado.length;i++){
     separado[i]= separado[i].split("");
     separado[i]=separado[i].reverse();
     separado[i]=separado[i].join("");
  } 
  //consegui mi array de arrays, con las palabras invertidas
  //queda construir la frase
  let sefra="";
  for(let chars in separado){
      sefra+=separado[chars];
  }
  return sefra;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let arrow=[], copia=[],capi=[],word='',msje="";
  word=''+numero+'';
  arrow=word.split("");
  let first=arrow.join();
  copia=arrow.slice(0,arrow.length);
  capi=copia.reverse();
  let second=capi.join();
  if(first===second){
    msje="Es capicua";
  }
  else{
    msje="No es capicua";
  }
  return msje;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let dump=[],remnant=[],subject=[],copia=[], resto="";
subject=cadena.split("");
copia= subject.slice(0,subject.length);
for(i=0;i<subject.length;i++){
    if((subject[i]==="a")||(subject[i]==="b")){
        dump.push(subject[i]);
    }else if(subject[i]==="c"){
        dump.push(subject[i]);
    }else{
        remnant.push(subject[i]);
    }
}
for(j=0;j<remnant.length;j++){
    resto+=remnant[j];
}
return resto;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
arr.sort(function(a,b){
    return a.length-b.length;
});
return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let trilla=[];
for(let item in arreglo1){
    for(let i=0;i<arreglo2.length;i++){
        if(arreglo1[item]===arreglo2[i]){
            trilla.push(arreglo2[i]);
        }
    }
}
return trilla;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

