/*programa que recibe dos numeros y tiene que indicar cual es el mayor, el menor y si son iguales*/
'use strict'
 /*var numero1;
 var numero2;*/

var numero1 = parseInt(prompt('Enter the first number',0));
var numero2 = parseInt(prompt('Enter the second number',0));

 function mayor(value1, value2){
   if (value1 > value2) {
     alert('The mayor number is: ' + value1 + '. The ' + value1 + ' is mayor than ' + value2);
   } else {
     alert('The mayor number is: '+ value2  + '. The ' + value2 + ' is mayor than ' + value1);
   }
 }

 function menor(value1, value2){
   if (value1 < value2) {
     alert('The menor number is: ' + value1 + '. The ' + value1 + ' is menor than ' + value2);
   } else {
     alert('The menor number is: ' + value2 + '. The ' + value2 + ' is menor than ' + value1);
   }
 }

 function igual(value1, value2){
   if (value1 == value2) {
     alert('The numbers are igual: ' + value1 + ' and ' + value2);
   }
 }

while ((numero1 <= 0) || (numero2 <=0 ) || (isNaN(numero1)) ||(isNaN(numero2))) {
   alert('Enter the numbers correctly');
  numero1 = parseInt(prompt('Enter the first number',0));
  numero2 = parseInt(prompt('Enter the second number',0));
}

if (numero1 != numero2) {
  mayor(numero1,numero2);
  menor(numero1,numero2);
} else {
  igual(numero1,numero2);
}
