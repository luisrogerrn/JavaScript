' use strict '

var number = 0;
do {
   number = parseInt(prompt('Enter the number', 1));
} while ((number <= 0) || (isNaN(number)));

if (number%2 == 0 ) {
  document.write("<h1>El numero: " + number + " es par</h1>");
} else {
  document.write("<h1>El numero: " + number + " es impar</h1>");
}
