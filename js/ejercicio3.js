'use strict'
var numero1 = parseInt(prompt('Enter the first number',0));
var numero2 = parseInt(prompt('Enter the second number',0));

while ((numero1 <= 0) || (numero2 <=0 ) || (isNaN(numero1)) ||(isNaN(numero2))) {
   alert('Enter the numbers correctly');
  numero1 = parseInt(prompt('Enter the first number',0));
  numero2 = parseInt(prompt('Enter the second number',0));
}

document.write("<h1>Entre el numero: " + numero1 + " y " + numero2 + " estan los siguientes numeros</h1>");
if (numero1 > numero2) {
  for (var i = numero1; i > numero2 + 1; i--) {
    document.write((i-1) + "<br>");
  }
} else {
  for (var i = numero1; i < numero2 - 1; i++) {
    document.write((i+1) + "<br>");

  }
}

document.write("<h1>Los numeros impares entre: " + numero1 + " y " + numero2 + " son los siguientes</h1>");
for (var i = numero1; i < numero2; i++) {
  if ((i%2) != 0) {
    document.write((i) + "<br>");
  }
}
